// ── hooks/useQuestionnaire.js ─────────────────────────────────────────────

import { useState } from "react";
import {
  QUESTIONS,
  MIN_SCORE,
  DIFF_SCORE,
  RESULTS,
} from "../data/questionnaire";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";

export const SCREEN = {
  INTRO: "intro",
  QUESTION: "question",
  RESULT: "result",
};

function evaluateResult(scores) {
  const { acoso, disc } = scores;
  const top = Math.max(acoso, disc);
  const diff = Math.abs(acoso - disc);
  if (top < MIN_SCORE || diff < DIFF_SCORE) return "Caso ambiguo";
  return acoso > disc ? "Acoso" : "Discriminación";
}

export function useQuestionnaire() {
  const [screen, setScreen] = useState(SCREEN.INTRO);
  const [stepIdx, setStepIdx] = useState(0);
  const [scores, setScores] = useState({ acoso: 0, disc: 0 });
  const [resultado, setResultado] = useState(null);

  const currentQuestion = QUESTIONS[stepIdx];
  const totalSteps = QUESTIONS.length;
  const progress = Math.round((stepIdx / totalSteps) * 100);

  async function saveEvent(tipo) {
    try {
      await addDoc(collection(db, "eventos"), {
        tipoDetectado: tipo,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error guardando evento:", err);
    }
  }

  async function handleAnswer(option) {
    const newScores = {
      acoso: scores.acoso + (option.scores?.acoso ?? 0),
      disc: scores.disc + (option.scores?.disc ?? 0),
    };
    setScores(newScores);

    const isLast = stepIdx === QUESTIONS.length - 1;

    if (!isLast) {
      setStepIdx((i) => i + 1);
      return;
    }

    const res = evaluateResult(newScores);
    await saveEvent(res);
    setResultado({ key: res, scores: newScores, data: RESULTS[res] });
    setScreen(SCREEN.RESULT);
  }

  function reset() {
    setScreen(SCREEN.INTRO);
    setStepIdx(0);
    setScores({ acoso: 0, disc: 0 });
    setResultado(null);
  }

  function startQuestionnaire() {
    setScreen(SCREEN.QUESTION);
  }

  return {
    screen,
    currentQuestion,
    progress,
    stepIdx,
    totalSteps,
    resultado,
    handleAnswer,
    reset,
    startQuestionnaire,
  };
}
