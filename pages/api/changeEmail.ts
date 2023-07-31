// //pages/api/changeEmail.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import jwt, { JwtPayload } from 'jsonwebtoken';
// import { PrismaClient } from '@prisma/client';
// import { parseCookies } from 'nookies'

// const prisma = new PrismaClient();

// export default async function changeEmail(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method not allowed' });
//     }


    

//     //const { newEmail } = req.body;
//     //console.log(newEmail);  // Debugging line
//     const token = req.cookies.auth;
//     console.log(token)

//     const { newEmail, csrfToken } = req.body;
//     const { csrfToken: sessionCsrfToken } = parseCookies({ req });
  
//     if (csrfToken !== sessionCsrfToken) {
//         return res.status(403).json({ error: 'Invalid CSRF token' });
//       }

//     let decodedToken: JwtPayload | string | null = null;
//     try {
//         decodedToken = jwt.verify(token, 'abc') as JwtPayload;
//         console.log("decoded token: ", decodedToken)
//     } catch (err) {
//         return res.status(401).json({ error: 'Token invalid' });
//     }

//     if (!decodedToken || typeof decodedToken === 'string' || !decodedToken.id) {
//         return res.status(401).json({ error: 'Token invalid' });
//     }

//     const user = await prisma.user.findUnique({ where: { id: Number(decodedToken.id) }});
//     console.log('user: ', user)

//     if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//     }

//     try {
//       await prisma.user.update({
//           where: { id: Number(decodedToken.id) },
//           data: { email: newEmail },
//       });
//     } catch (error) {
//       console.error('Error while updating user email: ', error);
//       return res.status(500).json({ error: 'Failed to update email' });
//     }

//     res.status(200).json({ message: 'Email updated successfully' });
// }

// // pages/api/changeEmail.ts
// import { PrismaClient } from '@prisma/client';
// import { csrf } from '../../lib/csrf'; 

// const prisma = new PrismaClient();

// const handler = async (req, res) => {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { newEmail } = req.body;

//   const user = await prisma.user.update({ 
//     where: { id: req.body.id },
//     data: { email: newEmail },
//   });

//   res.status(200).json({ message: 'Email updated.' })
// }

// export default csrf(handler);
import { NextApiRequest, NextApiResponse } from 'next';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function changeEmail(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { newEmail } = req.body;
    const token = req.cookies.auth;

    let decodedToken: JwtPayload | string | null = null;
    try {
        decodedToken = jwt.verify(token, 'abc') as JwtPayload;
    } catch (err) {
        return res.status(401).json({ error: 'Token invalid' });
    }

    if (!decodedToken || typeof decodedToken === 'string' || !decodedToken.id) {
        return res.status(401).json({ error: 'Token invalid' });
    }

    const user = await prisma.user.findUnique({ where: { id: Number(decodedToken.id) }});

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    await prisma.user.update({
        where: { id: Number(decodedToken.id) },
        data: { email: newEmail },
    });

    res.status(200).json({ message: 'Email updated successfully' });
}
