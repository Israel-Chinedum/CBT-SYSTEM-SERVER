import type { jwtPayload } from "../../../types/jwt-payload.js";
import { quizHistoryModel } from "../schema/quiz-history.schema.js";

export const getQuizHistory = async (user: jwtPayload) => {
  try {
    const quizHistory = await quizHistoryModel.find({ email: user.email });
    return quizHistory;
  } catch (error) {
    console.log(error);
    return { error: "Unable to get quiz history!" };
  }
};
