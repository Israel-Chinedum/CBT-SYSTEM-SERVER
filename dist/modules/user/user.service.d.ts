import type { Response } from "express";
import type { CreateUserDTO } from "./user-dto/create-user.dto.js";
declare class UserService {
    createUser({ payload, res, }: {
        payload: CreateUserDTO;
        res: Response;
    }): Promise<void>;
}
export declare const userService: UserService;
export {};
//# sourceMappingURL=user.service.d.ts.map