import type { CBT_ANSWERS } from "../../types/answer.js";
import type { SUBJECT } from "../../types/subject.js";
import { getQuizData } from "./quiz-utils/get-quiz-data.js";
import { getScore } from "./quiz-utils/get-score.js";

class QuizService {
  // ====== GET QUESTIONS AND ASNWERS ======
  async getQuestions(subject: SUBJECT, limit: number) {
    return await getQuizData(subject, limit);
  }

  //   ====== SCORE USER ON CBT-EXAM ======
  async scoreUser(answers: CBT_ANSWERS) {
    return await getScore(answers);
  }
}

export const quizService = new QuizService();
