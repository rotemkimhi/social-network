import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = []
//   {
//     name: 'Alice',
//     email: 'alice@prisma.io',
//     posts: {
//       create: [
//         {
//           title: 'Join the Prisma Slack',
//           content: 'https://slack.prisma.io',
//           published: true,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Nilu',
//     email: 'nilu@prisma.io',
//     posts: {
//       create: [
//         {
//           title: 'Follow Prisma on Twitter',
//           content: 'https://www.twitter.com/prisma',
//           published: true,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Mahmoud',
//     email: 'mahmoud@prisma.io',
//     posts: {
//       create: [
//         {
//           title: 'Ask a question about Prisma on GitHub',
//           content: 'https://www.github.com/prisma/prisma/discussions',
//           published: true,
//         },
//         {
//           title: 'Prisma on YouTube',
//           content: 'https://pris.ly/youtube',
//         },
//       ],
//     },
//   },
//   {
//     name: 'New',
//     email: 'new@prisma.io',
//     posts: {
//       create: [
//         {
//           title: 'added manualy',
//           content: 'https://www.github.com/prisma/prisma/discussions',
//           published: true,
//         },
//         {
//           title: 'Prisma on YouTube',
//           content: 'https://pris.ly/youtube',
//         },
//       ],
//     },
//   },
// ]

// function generateUserObject(index:number) {
//   return {
//     name: `User ${index}`,
//     email: `user${index}@prisma.io`,
//     posts: {
//       create: [
//         {
//           title: `Sample post title for user ${index}`,
//           content: `https://example.com/user${index}`,
//           published: true,
//         },
//       ],
//     },
//   };
// }

// const userData: {
//   name: string; email: string; posts: {
//     create: {
//       title: string; content: string; published:
//         // const userData: Prisma.UserCreateInput[] = [
//         //   {
//         //     name: 'Alice',
//         //     email: 'alice@prisma.io',
//         //     posts: {
//         //       create: [
//         //         {
//         //           title: 'Join the Prisma Slack',
//         //           content: 'https://slack.prisma.io',
//         //           published: true,
//         //         },
//         //       ],
//         //     },
//         //   },
//         //   {
//         //     name: 'Nilu',
//         //     email: 'nilu@prisma.io',
//         //     posts: {
//         //       create: [
//         //         {
//         //           title: 'Follow Prisma on Twitter',
//         //           content: 'https://www.twitter.com/prisma',
//         //           published: true,
//         //         },
//         //       ],
//         //     },
//         //   },
//         //   {
//         //     name: 'Mahmoud',
//         //     email: 'mahmoud@prisma.io',
//         //     posts: {
//         //       create: [
//         //         {
//         //           title: 'Ask a question about Prisma on GitHub',
//         //           content: 'https://www.github.com/prisma/prisma/discussions',
//         //           published: true,
//         //         },
//         //         {
//         //           title: 'Prisma on YouTube',
//         //           content: 'https://pris.ly/youtube',
//         //         },
//         //       ],
//         //     },
//         //   },
//         //   {
//         //     name: 'New',
//         //     email: 'new@prisma.io',
//         //     posts: {
//         //       create: [
//         //         {
//         //           title: 'added manualy',
//         //           content: 'https://www.github.com/prisma/prisma/discussions',
//         //           published: true,
//         //         },
//         //         {
//         //           title: 'Prisma on YouTube',
//         //           content: 'https://pris.ly/youtube',
//         //         },
//         //       ],
//         //     },
//         //   },
//         // ]
//         boolean;
//     }[];
//   };
// }[] = [];

// // Generate a million user objects
// for (let i = 0; i < 12; i++) {
//   userData.push(generateUserObject(i));
// }

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
