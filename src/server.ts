import "reflect-metadata";
import express from "express";
import { connectToDB } from "./database/db.config.js";
import { userController } from "./modules/user/user.controller.js";
import { authController } from "./modules/auth/auth.controller.js";
import cors from "cors";
import { quizController } from "./modules/quiz/quiz.controller.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  process.loadEnvFile();
}

connectToDB();

const port = process.env.PORT;

authController(app);
userController(app);
quizController(app);

app.listen(port, () =>
  console.log(`cbt-system-server is now active on port ${port}!`),
);
