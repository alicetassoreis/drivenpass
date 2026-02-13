import { Request, Response } from "express";
import * as service from "../services/authService";

export async function signUp(req: Request, res: Response) {
  await service.signUp(req.body);
  res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const token = await service.signIn(req.body);
  res.status(200).send({ token });
}
