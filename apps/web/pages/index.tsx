import Image from "next/image";
import styles from "../app/styles/page.module.css";
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    console.log('Form submitted with username:', username);

    try {
      console.log('Sending login request...');
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (response.ok) {
        console.log('Login successful, role:', data.role);
        if (data.role === 'ADMIN') {
          console.log('Redirecting to admin dashboard...');
          await router.push('/admin_dashboard');
        } else if (data.role === 'EMPLOYEE') {
          console.log('Redirecting to employee dashboard...');
          await router.push('/employee_dashboard');
        }
      } else {
        console.log('Login failed:', data.message);
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login');
    }
  };

  return (
    <div className={`${styles.page} min-h-screen w-full m-0 p-0 flex items-center justify-center`}>
      <div className={styles.loginBox}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo/msi_facturas_300x254.gif"
            alt="Company Logo"
            width={75}
            height={75}
            priority
          />
        </div>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          {error && <div className={styles.error}>{error}</div>}
          
          <div className={styles.loginInputUsername}>
            <label htmlFor="username" className={styles.loginLabel}>
              Username
            </label>
            <input
              type="text"
              id="username"
              className={styles.loginInput}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className={styles.loginInputPassword}>
            <label htmlFor="password" className={styles.loginLabel}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={styles.loginInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.buttonGroup}>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.loginButton}>
                Sign In
              </button>
            </div>
            
            <a href="#" className={styles.forgotPassword}>
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}