import fs from "node:fs";
import type { SUBJECT } from "../../../types/subject.js";

export const getQuizData = async (subject: SUBJECT, limit: number = 40) => {
  let url;

  switch (subject) {
    case "chemistry":
      url =
        "https://raw.githubusercontent.com/Israel-Chinedum/CBT-SYSTEM-DATA/refs/heads/main/chemistry_questions_answers.json";
      break;
    case "mathematics":
      url =
        "https://raw.githubusercontent.com/Israel-Chinedum/CBT-SYSTEM-DATA/refs/heads/main/math_questions_answers.json";
      break;
    case "physics":
      url =
        "https://raw.githubusercontent.com/Israel-Chinedum/CBT-SYSTEM-DATA/refs/heads/main/physics_questions_answers.json";
      break;
    case "english":
      url =
        "https://raw.githubusercontent.com/Israel-Chinedum/CBT-SYSTEM-DATA/refs/heads/main/english_questions_answers.json";
      break;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return { error: `Unable to get ${subject} questions and answers!` };
    }

    const questionBank = await response.json();

    const quizQuestions = [];

    for (let i = 0; i < questionBank.questions.length; i++) {
      quizQuestions.push(questionBank.questions[i]);
      if (i === limit - 1) break;
    }

    return quizQuestions;
  } catch (error) {
    console.log(error);
    return { error: "An error occured!" };
  }
};
