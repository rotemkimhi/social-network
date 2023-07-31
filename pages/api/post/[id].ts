//api/post/[id]].ts
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


// DELETE /api/post/:id
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
  console.log('from [id]', user);
  const session = user

  if (req.method === "DELETE") {
    if (session) {
      const post = await prisma.post.delete({
        where: { id: Number(postId) },
      });
      res.json(post);
    } else {
      res.status(401).send({ message: 'Unauthorized' })
    }
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
