import type { Response } from "express";
import type { CreateUserDTO } from "../user-dto/create-user.dto.js";
export declare const createUser: ({ payload, res, }: {
    payload: CreateUserDTO;
    res: Response;
}) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=create-user.util.d.ts.map