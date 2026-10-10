import { userModel } from "../modules/user/user.schema.ts";

declare global {
  namespace Express {
    interface Request {
      user?: userModel;
    }
  }
}

export {};
