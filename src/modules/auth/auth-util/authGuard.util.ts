import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authGuard = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ error: "Token not found!" });

  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET!);
    req.user = user;
  } catch {
    return res.status(401).json({ error: "Invalid or expired token!" });
  }

  next();
};
