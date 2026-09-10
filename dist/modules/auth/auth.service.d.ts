import type { Response } from "express";
import type { SigninDTO } from "./auth-dto/sign-in-dto.js";
declare class AuthService {
    signin({ payload, res }: {
        payload: SigninDTO;
        res: Response;
    }): Promise<Response<any, Record<string, any>>>;
}
export declare const authService: AuthService;
export {};
//# sourceMappingURL=auth.service.d.ts.map