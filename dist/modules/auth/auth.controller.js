import { valReq } from "../../utilities/dto.util.js";
import { SigninDTO } from "./auth-dto/sign-in-dto.js";
import { authService } from "./auth.service.js";
export const authController = (app) => {
    app.post("/auth/signin", valReq(SigninDTO), async (req, res) => {
        await authService.signin({ payload: req.body, res });
    });
};
//# sourceMappingURL=auth.controller.js.map