import type { Express } from "express";
import { authService } from "../auth/auth.service.js";
import { quizService } from "./quiz.service.js";
import type { SUBJECT } from "../../types/subject.js";

export const quizController = async (app: Express) => {
  const guard = authService.authGuard;
  app.get("/quiz/questions", authService.authGuard, (req, res) => {
    try {
      if (!req.query.subject) {
        return res.status(400).json("Subject is missing!");
      }

      const subject = req.query.subject as SUBJECT;

      if (
        !["chemistry", "physics", "english", "mathematics"].includes(
          subject.toLocaleLowerCase(),
        )
      ) {
        return res.status(400).json("Invalid subject!");
      }

      if (!["mathematics", "english"].includes(subject.toLocaleLowerCase())) {
        return res.json(`${subject} is not yet available!`);
      }

      res.json(
        quizService.getQuestions(subject.toLocaleLowerCase() as SUBJECT),
      );
    } catch (error) {
      console.log(error);
      res.status(500).json("An error occured!");
    }
  });
};
