const { PrismaClient, Role } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('Admin@123', 10);

  await prisma.user.upsert({
    where: { email: 'admin@codivalab.com' },
    update: {},
    create: {
      name: 'CodivaLab Admin',
      email: 'admin@codivalab.com',
      password,
      role: Role.ADMIN
    }
  });

  await prisma.service.createMany({
    data: [
      { title: 'Web Development', slug: 'web-development', summary: 'Scalable web applications', description: 'We build secure, cloud-native and high-performance web platforms.', icon: 'Globe', order: 1 },
      { title: 'Mobile Apps', slug: 'mobile-apps', summary: 'iOS and Android solutions', description: 'Native and cross-platform apps with robust architecture.', icon: 'Smartphone', order: 2 },
      { title: 'Cloud & DevOps', slug: 'cloud-devops', summary: 'Reliable cloud operations', description: 'Automation, CI/CD, observability, and infrastructure optimization.', icon: 'Cloud', order: 3 }
    ],
    skipDuplicates: true
  });
}

main().finally(async () => prisma.$disconnect());
