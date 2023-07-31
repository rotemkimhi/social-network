//api/publish/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma'


import jwt from 'jsonwebtoken';
import cookie from 'cookie';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
}

interface UserPayload extends jwt.JwtPayload {
  email: string;
  id: number;
  username: string;
}
// PUT /api/publish/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id;
  

  const parsedCookies = cookie.parse(req.headers.cookie || '');
  const token = parsedCookies.auth;
  let user: UserPayload | undefined;;

  try {
    user = jwt.verify(token, 'abc') as UserPayload; 
  } catch (error) {
    res.statusCode = 403;
    res.status(401).send({ message: 'Unauthorized' })
  }

  const session = user

  if (session) {
    const post = await prisma.post.update({
      where: { id: Number(postId) },
      data: { published: true },
    });
    res.json(post);
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}
