import type { NextFunction, Request, Response } from "express";
import { userModel } from "../user/user.schema.js";
import bcrypt from "bcrypt";
import type { SigninDTO } from "./auth-dto/sign-in.dto.js";
import { generateToken } from "./auth-util/generate-token.util.js";
import { authGuard } from "./auth-util/authGuard.util.js";

class AuthService {
  // ====== USER SIGNIN ======
  async signin({ payload, res }: { payload: SigninDTO; res: Response }) {
    const user = await userModel.findOne({ email: payload.email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password!" });
    }

    const correctPassword = await bcrypt.compare(
      payload.password,
      user.password!,
    );

    if (!correctPassword) {
      return res.status(400).json({ error: "Invalid email or password!" });
    }

    const token = generateToken({
      email: user.email!,
      userId: user._id.toString(),
    });

    const { fullname, username, email, phone } = user;

    return res.json({ fullname, username, email, phone, token });
  }

  // ====== AUTHENTICATION GUARD ======
  async authGuard(req: Request, res: Response, next: NextFunction) {
    authGuard(req, res, next);
  }
}

export const authService = new AuthService();
