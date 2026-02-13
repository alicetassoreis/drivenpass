import { Request, Response, NextFunction } from "express";


export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
if (err.type === "conflict") return res.status(409).send(err.message);
if (err.type === "not_found") return res.status(404).send(err.message);
if (err.type === "unauthorized") return res.status(401).send(err.message);


console.error(err);
res.sendStatus(500);
}