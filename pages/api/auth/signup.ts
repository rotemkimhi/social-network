// import type { NextApiRequest, NextApiResponse } from 'next'
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
// import { User } from "@prisma/client"


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { name, email, username, password } = req.body

//   const saltRounds = 10
//   const passwordHash = await bcrypt.hash(password, saltRounds)

//   const user = new User({
//     username,
//     name,
//     email,
//     passwordHash,
//   })

//   const savedUser = await user.save()

//   res.status(201).json(savedUser)
// }

import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password, email, name } = req.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const newUser = await prisma.user.create({
    data: {
      username,
      name,
      email,
      password: passwordHash,
    },
  })

  res.status(200).json(newUser)
}

