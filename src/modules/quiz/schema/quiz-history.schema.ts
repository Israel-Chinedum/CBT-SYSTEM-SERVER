import mongoose from "mongoose";

const quizHistorySchema = new mongoose.Schema({
  email: String,
  unit_scores: {
    english: String,
    mathematics: String,
    chemistry: String,
    physics: String,
  },
  average: Number,
  total_score: Number,

  unit_errors: {
    english: Boolean,
    mathematics: Boolean,
    chemistry: String,
    physics: String,
  },
  total_unit_errors: Number,
});

export const quizHistoryModel = mongoose.model(
  "QuizHistory",
  quizHistorySchema,
  "quizHistory",
);
