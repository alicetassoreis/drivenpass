import { prisma } from "../config/database";
import { Prisma } from "@prisma/client";

export async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email }
  });
}

export async function create(data: Prisma.UserCreateInput) {
  return prisma.user.create({
    data
  });
}
