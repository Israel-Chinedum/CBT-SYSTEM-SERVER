import type { Express, Request, Response } from "express";
import { valReq } from "../../utilities/dto.util.js";
import { userService } from "./user.service.js";
import { CreateUserDTO } from "./user-dto/create-user.dto.js";

export const userController = (app: Express) => {
  // ====== CREATE USER CONTROLLER ======
  app.post(
    "/user/create-user",
    valReq(CreateUserDTO),
    async (req: Request, res: Response) => {
      await userService.createUser({ payload: req.body, res });
    },
  );
};
