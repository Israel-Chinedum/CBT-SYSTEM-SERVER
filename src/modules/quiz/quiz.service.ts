import type { CBT_ANSWERS } from "../../types/answer.js";
import type { jwtPayload } from "../../types/jwt-payload.js";
import type { SUBJECT } from "../../types/subject.js";
import { getQuizData } from "./quiz-utils/get-quiz-data.js";
import { getQuizHistory } from "./quiz-utils/get-quiz-history.util.js";
import { getScore } from "./quiz-utils/get-score.js";

class QuizService {
  // ====== GET QUESTIONS AND ASNWERS ======
  async getQuestions(subject: SUBJECT, limit: number) {
    return await getQuizData(subject, limit);
  }

  //   ====== SCORE USER ON CBT-EXAM ======
  async scoreUser(answers: CBT_ANSWERS, user: jwtPayload) {
    return await getScore(answers, user);
  }

  // ====== GET QUIZ HISTORY ======
  async quizHistory(user: jwtPayload) {
    return await getQuizHistory(user);
  }
}

export const quizService = new QuizService();
