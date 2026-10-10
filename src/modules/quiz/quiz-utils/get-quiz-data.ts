import fs from "node:fs";
import type { SUBJECT } from "../../../types/subject.js";

export const getQuizData = (subject: SUBJECT) => {
  let url = "./src/data/english_grammar_questions_answers.json";

  if (subject === "mathematics") {
    url = "./src/data/math_questions_answers.json";
  }

  const data = fs.readFileSync(url, "utf8");
  const questionBank = JSON.parse(data).questions;

  const quizQuestions = [];

  for (let i = 0; i < questionBank.length; i++) {
    quizQuestions.push(questionBank[i]);
    if (i === 39) break;
  }

  return quizQuestions;
};
