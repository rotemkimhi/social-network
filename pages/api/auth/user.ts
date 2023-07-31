//api/auth/user.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import cookie from 'cookie';

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  //const token = getTokenFrom(req)
  //console.log('req.headrs:', req.headers)
  //console.log(token, 'from user 14')
  const cookies = cookie.parse(req.headers.cookie || '')

  const token = cookies.auth

  let decodedToken: JwtPayload | string | null = null;

  try {
    decodedToken = jwt.verify(token, 'abc') as JwtPayload

  } catch (err) {
    return res.status(401).json({ error: 'token invalid' })
  }

  if (!decodedToken || typeof decodedToken === 'string' || !decodedToken.id) {
    return res.status(401).json({ error: 'token invalid' })
  }

  const user = await prisma.user.findUnique({ where: { id: Number(decodedToken.id) }})
  //console.log('user from user 36', user)

  if (!user) {
    return res.status(404).json({ error: 'user not found' })
  }

  res.status(200).json(user)
}

const getTokenFrom = (request:any) => {
  const cookies = cookie.parse(request.headers.cookie || '')
  const token = cookies.token
  if (token && token.toLowerCase().startsWith('bearer ')) {
    return token.substring(7)
  }
  return null
}
