import type { Response } from "express";
import type { CreateUserDTO } from "./user-dto/create-user.dto.js";
import { createUser } from "./user-utils/create-user.util.js";

class UserService {
  // ====== CREATE USER SERVICE ======
  async createUser({
    payload,
    res,
  }: {
    payload: CreateUserDTO;
    res: Response;
  }) {
    await createUser({ payload, res });
  }
}

export const userService = new UserService();
