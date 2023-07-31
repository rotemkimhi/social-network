//api/post/index.ts

import type { NextApiRequest, NextApiResponse } from 'next'
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


// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, content, email} = req.body;

  const parsedCookies = cookie.parse(req.headers.cookie || '');
  const token = parsedCookies.auth;
  let user: UserPayload | undefined;;

  try {
    user = jwt.verify(token, 'abc') as UserPayload; 
  } catch (error) {
    res.statusCode = 403;
    res.status(401).send({ message: 'Unauthorized' })
  }

  if (user) {
    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: email } },
      },
    });
    res.json({ ...result, postId: result.id });
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}
