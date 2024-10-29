import { categories, ingredients, products } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User test',
        email: 'user@mail.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin test',
        email: 'admin@mail.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.product.createMany({
    data: products,
  });

  await prisma.ingridient.createMany({
    data: ingredients,
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log(e);
  }
}

main().then(async () => {
  await prisma.$disconnect;
});
