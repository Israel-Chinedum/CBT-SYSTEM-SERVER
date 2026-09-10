import jwt from "jsonwebtoken";
export const generateToken = (payload) => {
    const token = jwt.sign(payload, process.env.TOKEN_SECRET);
    return token;
};
//# sourceMappingURL=generate-token.util.js.map