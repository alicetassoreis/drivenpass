import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/jwt";


export interface AuthRequest extends Request {
userId?: number;
}


export default function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
const authHeader = req.headers.authorization;


if (!authHeader) return res.sendStatus(401);


const token = authHeader.replace("Bearer ", "");

try {
const payload = jwt.verify(token, jwtConfig.secret) as any;
req.userId = Number(payload.userId);
next();
} catch {
return res.sendStatus(401);
}
}