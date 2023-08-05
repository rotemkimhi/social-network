// //api/auth/login.ts
//========VULNERABLE_VERSION=========
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

  const { username, password } = req.body

  const user = await prisma.user.findFirst({ where: { username: username }})

  const passwordCorrect = user?.password 
    ? await bcrypt.compare(password, user.password)
    : false;

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'invalid username or password',
    })
  }

  const userForToken = {
    username: user.username,
    id: user.id,
    email: user.email
  }

  const token = jwt.sign(userForToken, 'abc')

  res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 3600,  
    path: '/',
  }));


  //console.log('from login 36 sign in token', token)
  console.log('logged in! Hi:', username)
  res.status(200).json({
    token,
    username: user.username,
    name: user.name
  })
}

// //========PROTECTED_VERSION=========
// pages/api/auth/login.ts
// import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import cookie from 'cookie';
// import { setup } from '../../../lib/csrf'; 

// const prisma = new PrismaClient();

// const handler = async (req, res) => {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { username, password } = req.body;

//   const user = await prisma.user.findFirst({ where: { username: username }})
//   const passwordCorrect = user?.password 
//     ? await bcrypt.compare(password, user.password)
//     : false;

//   if (!(user && passwordCorrect)) {
//     return res.status(401).json({ error: 'invalid username or password' });
//   }

//   const userForToken = { username: user.username, id: user.id, email: user.email }
//   const token = jwt.sign(userForToken, 'abc');

//   res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
//     httpOnly: true,
//     sameSite: 'strict',
//     maxAge: 3600,
//     path: '/',
//   }));

//   res.status(200).json({
//     token,
//     username: user.username,
//     name: user.name
//   })
// }

// export default setup(handler);

