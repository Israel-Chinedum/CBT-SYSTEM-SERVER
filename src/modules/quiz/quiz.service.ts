import type { SUBJECT } from "../../types/subject.js";
import { getQuizData } from "./quiz-utils/get-quiz-data.js";

class QuizService {
  getQuestions(subject: SUBJECT, limit: number) {
    return getQuizData(subject, limit);
  }
}

export const quizService = new QuizService();
