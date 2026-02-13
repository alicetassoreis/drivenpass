import { cryptr } from "../config/cryptr";
import * as repo from "../repositories/credentialsRepository";
import { conflictError, notFoundError } from "../utils/errors";

export async function create(userId: number, data: any) {
  const exists = await repo.findByTitle(userId, data.title);
  if (exists) throw conflictError("Title already exists");

  const encrypted = cryptr.encrypt(data.password);

  await repo.create({ ...data, password: encrypted, userId });
}

export async function getAll(userId: number) {
  const credentials = await repo.findAll(userId);

  return credentials.map(c => ({
    ...c,
    password: cryptr.decrypt(c.password)
  }));
}

export async function getById(userId: number, id: number) {
  const credential = await repo.findById(userId, id);
  if (!credential) throw notFoundError("Credential not found");

  return {
    ...credential,
    password: cryptr.decrypt(credential.password)
  };
}

export async function update(userId: number, id: number, data: any) {
  const credential = await repo.findById(userId, id);
  if (!credential) throw notFoundError("Credential not found");

  const encrypted = cryptr.encrypt(data.password);

  await repo.update(id, { ...data, password: encrypted });
}

export async function remove(userId: number, id: number) {
  const credential = await repo.findById(userId, id);
  if (!credential) throw notFoundError("Credential not found");

  await repo.remove(id);
}