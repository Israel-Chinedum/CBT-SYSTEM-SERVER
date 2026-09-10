import type { Response } from "express";
import { userModel } from "../user/user.schema.js";
import bcrypt from "bcrypt";
import type { SigninDTO } from "./auth-dto/sign-in-dto.js";
import { generateToken } from "./auth-util/generate-token.util.js";

class AuthService {
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

    return res.json({ token });
  }
}

export const authService = new AuthService();
