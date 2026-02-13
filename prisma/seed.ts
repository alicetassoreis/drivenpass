import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("demo123", 10);

  await prisma.user.upsert({
    where: { email: "demo@driven.com.br" },
    update: {},
    create: {
      name: "Demo",
      email: "demo@driven.com.br",
      password: passwordHash
    }
  });

  console.log("Seed executed");
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });
