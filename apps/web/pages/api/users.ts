import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  } else if (req.method === "POST") {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    return res.status(201).json(newUser);
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
