import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import { prisma } from '../../../lib/prisma';
import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;
    console.log('Login attempt for username:', username); // Log 1

    // Get user
    const user = await prisma.user.findUnique({
      where: { username }
    });
    console.log('User found:', user ? 'yes' : 'no'); // Log 2

    if (!user) {
      console.log('No user found with username:', username); // Log 3
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    const isValid = await compare(password, user.password);
    console.log('Password valid:', isValid); // Log 4

    if (!isValid) {
      console.log('Invalid password for user:', username); // Log 5
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    console.log('User role:', user.role); // Log 6
    console.log('Creating token for user:', username); // Log 7

    // Create JWT token
    const token = sign(
      { 
        userId: user.id, 
        username: user.username, 
        role: user.role 
      },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '8h' }
    );

    // Create response with cookie
    const response = NextResponse.json({
      success: true,
      role: user.role
    });

    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 8 * 60 * 60 // 8 hours
    });

    console.log('Login successful, sending response with role:', user.role); // Log 8

    return response;
  } catch (error) {
    console.error('Login error:', error); // Log 9
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
} 