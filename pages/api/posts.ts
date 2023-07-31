//pages\api\posts.ts
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const start = req.query.start ? parseInt(req.query.start as string) : 0;
    const end = req.query.end ? parseInt(req.query.end as string) : 3;

    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
      skip: start,
      take: end - start,
    });

    res.status(200).json({ posts });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
