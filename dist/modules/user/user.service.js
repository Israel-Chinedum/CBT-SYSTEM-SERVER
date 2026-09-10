import { createUser } from "./user-utils/create-user.util.js";
class UserService {
    // ====== CREATE USER SERVICE ======
    async createUser({ payload, res, }) {
        await createUser({ payload, res });
    }
}
export const userService = new UserService();
//# sourceMappingURL=user.service.js.map