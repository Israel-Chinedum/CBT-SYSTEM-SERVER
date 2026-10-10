import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { jwtPayload } from "../../../types/jwt-payload.js";

export const authGuard = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ error: "Token not found!" });

  const user = jwt.verify(token, process.env.TOKEN_SECRET!);

  if (!user) {
    return res.status(403).json({ error: "Invalid or expired token!" });
  }

  req.user = user;

  next();
};
