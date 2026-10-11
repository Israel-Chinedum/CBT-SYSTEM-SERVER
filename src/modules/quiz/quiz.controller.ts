import type { Express } from "express";
import { authService } from "../auth/auth.service.js";
import { quizService } from "./quiz.service.js";
import type { SUBJECT } from "../../types/subject.js";
import { valReq } from "../../utilities/dto.util.js";
import { QuizAnswersDTO } from "./quiz-dto/quiz-answers.dto.js";

export const quizController = async (app: Express) => {
  const guard = authService.authGuard;

  //   ====== GET QUESTIONS ======
  app.get("/quiz/questions", authService.authGuard, async (req, res) => {
    try {
      if (!req.query.subject) {
        return res.status(400).json("Subject is missing!");
      }

      const subject = req.query.subject as SUBJECT;
      let limit!: number;

      if (req.query.limit) {
        if (!Number.isNaN(Number(req.query.limit))) {
          limit = Number(req.query.limit);
        } else {
          return res.status(400).json("Invalid limit!");
        }
      }

      if (
        !["chemistry", "physics", "english", "mathematics"].includes(
          subject.toLocaleLowerCase(),
        )
      ) {
        return res.status(400).json(`${subject} is not available!`);
      }

      const data = await quizService.getQuestions(
        subject.toLocaleLowerCase() as SUBJECT,
        limit,
      );

      if (Object.keys(data).includes("error")) {
        res.status(500).json(data);
      } else {
        res.json(data);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("An error occured!");
    }
  });

  //   ====== CALCULATE AND SEND QUIZ ANSWERS SCORE ======
  app.post(
    "/quiz/answers",
    authService.authGuard,
    valReq(QuizAnswersDTO),
    async (req, res) => {
      const data = await quizService.scoreUser(req.body.answers);
      if (Object.keys(data).includes("error")) {
        res.status(500).json(data);
      } else {
        res.json(data);
      }
    },
  );
};
