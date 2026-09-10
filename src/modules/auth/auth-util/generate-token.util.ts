import type { jwtPayload } from "../../../types/jwt-payload.js";
import jwt from "jsonwebtoken";

export const generateToken = (payload: jwtPayload) => {
  const token = jwt.sign(payload, process.env.TOKEN_SECRET!);
  return token;
};
