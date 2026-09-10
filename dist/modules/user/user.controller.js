import { valReq } from "../../utilities/dto.util.js";
import { userService } from "./user.service.js";
import { CreateUserDTO } from "./user-dto/create-user.dto.js";
export const userController = (app) => {
    // ====== CREATE USER CONTROLLER ======
    app.post("/user/create-user", valReq(CreateUserDTO), async (req, res) => {
        await userService.createUser({ payload: req.body, res });
    });
};
//# sourceMappingURL=user.controller.js.map