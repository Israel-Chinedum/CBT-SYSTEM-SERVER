import type { SUBJECT } from "../../types/subject.js";
import { getQuizData } from "./quiz-utils/get-quiz-data.js";

class QuizService {
  getQuestions(subject: SUBJECT) {
    return getQuizData(subject);
  }
}

export const quizService = new QuizService();
