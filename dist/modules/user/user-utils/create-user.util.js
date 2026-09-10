import { userModel } from "../user.schema.js";
import bcrypt from "bcrypt";
export const createUser = async ({ payload, res, }) => {
    try {
        const emailExists = await userModel.findOne({ email: payload.email });
        if (emailExists) {
            return res.status(400).json({ error: "This email already exists!" });
        }
        const hashedPassword = await bcrypt.hash(payload.password, 10);
        await new userModel({ ...payload, password: hashedPassword }).save();
        return res.json({ message: "Registration successfull ✔" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Unable to save user!" });
    }
};
//# sourceMappingURL=create-user.util.js.map