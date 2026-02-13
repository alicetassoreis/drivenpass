import { prisma } from "../config/database";
import { Credential } from "@prisma/client";

export type CreateCredentialData = Omit<Credential, "id">;
export type UpdateCredentialData = Omit<Credential, "id" | "userId">;

export function findByTitle(
  userId: number,
  title: string
): Promise<Credential | null> {
  return prisma.credential.findFirst({
    where: { userId, title }
  });
}

export function create(data: CreateCredentialData): Promise<Credential> {
  return prisma.credential.create({ data });
}

export function findAll(userId: number): Promise<Credential[]> {
  return prisma.credential.findMany({
    where: { userId }
  });
}

export function findById(
  userId: number,
  id: number
): Promise<Credential | null> {
  return prisma.credential.findFirst({
    where: { id, userId }
  });
}

export function update(
  id: number,
  data: UpdateCredentialData
): Promise<Credential> {
  return prisma.credential.update({
    where: { id },
    data
  });
}

export function remove(id: number): Promise<Credential> {
  return prisma.credential.delete({
    where: { id }
  });
}
