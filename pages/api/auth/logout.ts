//api/auth/login.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import cookie from 'cookie'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, email, id } = req.body



  const userForToken = {
    username: username,
    id: id,
    email:email
  }

  const token = jwt.sign(userForToken, 'abc')

  res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
    httpOnly: false,
    sameSite: 'strict',
    maxAge: 1,  
    path: '/',
  }));

  //console.log('from login 36 sign in token', token)
  console.log('logged out:', username)
  res.status(200).json({
    token,
    username: username,
  })
}
