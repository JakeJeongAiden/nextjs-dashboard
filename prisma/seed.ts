import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const events = [
  {
    id: 1,
    email: 'DJ Practice Session',
    name: 'DJ Practice Session',
  },
  {
    id: Math.floor(Math.random() * 10000000),
    email: 'DJ Practice Test',
  },
];

async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
