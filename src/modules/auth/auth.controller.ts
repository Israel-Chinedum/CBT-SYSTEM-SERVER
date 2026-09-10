import type { Express, Request, Response } from "express";
import { valReq } from "../../utilities/dto.util.js";
import { SigninDTO } from "./auth-dto/sign-in-dto.js";
import { authService } from "./auth.service.js";

export const authController = (app: Express) => {
  app.post(
    "/auth/signin",
    valReq(SigninDTO),
    async (req: Request, res: Response) => {
      await authService.signin({ payload: req.body, res });
    },
  );
};
