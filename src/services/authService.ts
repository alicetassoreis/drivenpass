import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as repo from "../repositories/authRepository";
import { conflictError, notFoundError, unauthorizedError } from "../utils/errors";
import { env } from "../config/env"; 


interface SignUpData {
  name: string;
  email: string;
  password: string;
}

interface SignInData {
  email: string;
  password: string;
}


interface TokenPayload {
  userId: number;
}


export function generateToken(userId: number): string {
  const payload: TokenPayload = { userId };


  const token = jwt.sign(payload, env.JWT_SECRET, { expiresIn: "1d" });

  return token;
}


export async function signUp(data: SignUpData): Promise<void> {
  const user = await repo.findByEmail(data.email);
  if (user) throw conflictError("Email already registered");

  const hash = await bcrypt.hash(data.password, 10);
  await repo.create({ ...data, password: hash });
}

export async function signIn(data: SignInData): Promise<string> {
  const user = await repo.findByEmail(data.email);
  if (!user) throw notFoundError("User not found");

  const valid = await bcrypt.compare(data.password, user.password);
  if (!valid) throw unauthorizedError("Invalid credentials");


  return generateToken(user.id);
}
