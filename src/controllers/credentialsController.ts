import { Response } from "express";
import { AuthRequest } from "../middlewares/authMiddleware";
import * as service from "../services/credentialsService";

export async function create(req: AuthRequest, res: Response) {
  const userId = req.userId!;
  await service.create(userId, req.body);
  res.sendStatus(201);
}

export async function getAll(req: AuthRequest, res: Response) {
  const userId = req.userId!;
  const data = await service.getAll(userId);
  res.status(200).send(data);
}

export async function getById(req: AuthRequest, res: Response) {
  const userId = req.userId!;
  const id = Number(req.params.id);

  const data = await service.getById(userId, id);
  res.status(200).send(data);
}

export async function update(req: AuthRequest, res: Response) {
  const userId = req.userId!;
  const id = Number(req.params.id);

  await service.update(userId, id, req.body);
  res.sendStatus(204);
}

export async function remove(req: AuthRequest, res: Response) {
  const userId = req.userId!;
  const id = Number(req.params.id);

  await service.remove(userId, id);
  res.sendStatus(204);
}
