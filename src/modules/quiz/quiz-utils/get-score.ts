import type { CBT_ANSWERS } from "../../../types/answer.js";

export const getScore = async (answers: CBT_ANSWERS) => {
  try {
    const math = [];
    const eng = [];
    const chem = [];
    const phy = [];

    let math_score = { score: 0, error: false };
    let eng_score = { score: 0, error: false };
    let chem_score = { score: 0, error: false };
    let phy_score = { score: 0, error: false };

    const equalMark = 1;
    let subjectURL!: string;
    let errCount = 0;

    for (let ans of answers) {
      if (ans.subject === "mathematics") {
        math.push(ans);
      }
      if (ans.subject === "english") {
        eng.push(ans);
      }
      if (ans.subject === "chemistry") {
        chem.push(ans);
      }
      if (ans.subject === "physics") {
        phy.push(ans);
      }
    }

    // ====== CALCULATE SUBJECT SCORE ======
    const calcScore = async (url: string, subAns: CBT_ANSWERS) => {
      let score = 0;
      const response = await fetch(url);

      if (!response.ok) {
        errCount += 1;
        return "error";
      }

      const questionBank = await response.json();

      for (let userAns of subAns) {
        for (let ans of questionBank.questions) {
          if (ans.id === userAns.id) {
            if (userAns.answer.trim() === ans.answer.trim()) {
              score += equalMark;
            }
          }
        }
      }

      return score;
    };

    // ====== MATH_SCORE ======
    if (math.length !== 0) {
      subjectURL =
        "https://raw.githubusercontent.com/Israel-Chinedum/CBT-SYSTEM-DATA/refs/heads/main/math_questions_answers.json";
      const score = await calcScore(subjectURL, math);
      if (score === "error") {
        math_score.error = true;
      } else {
        math_score.score = score;
      }
    }

    // ====== ENG_SCORE ======
    if (eng.length !== 0) {
      subjectURL =
        "https://raw.githubusercontent.com/Israel-Chinedum/CBT-SYSTEM-DATA/refs/heads/main/english_questions_answers.json";
      const score = await calcScore(subjectURL, eng);
      if (score === "error") {
        eng_score.error = true;
      } else {
        eng_score.score = score;
      }
    }

    // ====== CHEM_SCORE ======
    if (chem.length !== 0) {
      subjectURL =
        "https://raw.githubusercontent.com/Israel-Chinedum/CBT-SYSTEM-DATA/refs/heads/main/chemistry_questions_answers.json";
      const score = await calcScore(subjectURL, chem);
      if (score === "error") {
        chem_score.error = true;
      } else {
        chem_score.score = score;
      }
    }

    // ====== PHY_SCORE ======
    if (phy.length !== 0) {
      subjectURL =
        "https://raw.githubusercontent.com/Israel-Chinedum/CBT-SYSTEM-DATA/refs/heads/main/physics_questions_answers.json";
      const score = await calcScore(subjectURL, phy);
      if (score === "error") {
        phy_score.error = true;
      } else {
        phy_score.score = score;
      }
    }

    const responseData = {
      unit_scores: {
        english: eng_score.score,
        mathematics: math_score.score,
        chemistry: chem_score.score,
        physics: phy_score.score,
      },
      average:
        (eng_score.score +
          math_score.score +
          chem_score.score +
          phy_score.score) /
        4,
      total_score:
        eng_score.score + math_score.score + chem_score.score + phy_score.score,
      errors: {
        english: eng_score.error,
        mathematics: math_score.error,
        chemistry: chem_score.error,
        physics: phy_score.error,
      },
      total_errors: errCount,
    };

    return responseData;
  } catch (error) {
    console.log(error);
    return { error: "An error occured!" };
  }
};
