import { useState } from "react";
import { INITIAL_QUESTION, FLOWS } from "../data/questionnaire";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";

const SCREEN = {
  INTRO: "intro",
  QUESTION: "question",
  RESULT: "result",
};

export function useQuestionnaire() {
  const [screen, setScreen] = useState(SCREEN.INTRO);
  const [flowKey, setFlowKey] = useState(null); // "acoso" | "discriminacion"
  const [stepIdx, setStepIdx] = useState(-1); // -1 = pregunta inicial
  const [answers, setAnswers] = useState([]); // array de { id, value, score }
  const [resultado, setResultado] = useState(null);

  const currentQuestion =
    stepIdx === -1 ? INITIAL_QUESTION : FLOWS[flowKey]?.questions[stepIdx];

  const totalSteps = flowKey ? FLOWS[flowKey].questions.length : 1;
  const progress = stepIdx === -1 ? 0 : ((stepIdx + 1) / totalSteps) * 100;

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

  function evaluateFlow(allAnswers, key) {
    const flow = FLOWS[key];
    const total = allAnswers.reduce((sum, a) => sum + (a.score ?? 0), 0);
    return total >= flow.minScore ? flow.label : "Caso ambiguo";
  }

  async function handleAnswer(option) {
    // ── Pregunta inicial ──────────────────────────────────────────────────
    if (stepIdx === -1) {
      if (option.value === "ambiguo") {
        await saveEvent("Caso ambiguo");
        setResultado("Caso ambiguo");
        setScreen(SCREEN.RESULT);
        return;
      }
      setFlowKey(option.value);
      setStepIdx(0);
      setScreen(SCREEN.QUESTION);
      return;
    }

    // ── Flujo de preguntas ────────────────────────────────────────────────
    const newAnswers = [...answers, { id: currentQuestion.id, ...option }];
    setAnswers(newAnswers);

    const isLast = stepIdx === FLOWS[flowKey].questions.length - 1;

    if (!isLast) {
      setStepIdx((i) => i + 1);
      return;
    }

    // Última pregunta → evaluar
    const res = evaluateFlow(newAnswers, flowKey);
    await saveEvent(res);
    setResultado(res);
    setScreen(SCREEN.RESULT);
  }

  function reset() {
    setScreen(SCREEN.INTRO);
    setFlowKey(null);
    setStepIdx(-1);
    setAnswers([]);
    setResultado(null);
  }

  function startQuestionnaire() {
    setStepIdx(-1);
    setScreen(SCREEN.QUESTION);
  }

  return {
    screen,
    SCREEN,
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
