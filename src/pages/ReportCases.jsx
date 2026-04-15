// ── hooks/useQuestionnaire.js ─────────────────────────────────────────────

// ── components/ReportesSection.jsx ───────────────────────────────────────

import { useState } from "react";
import { useQuestionnaire } from "../hooks/useQuestionnaire";
import apoyo1 from "../assets/img/Apoyo1.png";
import apoyo2 from "../assets/img/Apoyo2.png";
import apoyo3 from "../assets/img/Apoyo3.png";
import apoyo4 from "../assets/img/Apoyo4.png";

// ── Sub-componentes ───────────────────────────────────────────────────────

function ProgressBar({ progress, step, total }) {
  return (
    <div className="space-y-1">
      <div className="w-full h-2 bg-[#D9D9D9] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#BACF00] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm opacity-70 text-center">
        Paso {step} de {total}
      </p>
    </div>
  );
}

function QuestionCard({ question, progress, stepIdx, totalSteps, onAnswer }) {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-[#152C47] text-white rounded-3xl p-6 md:p-8 shadow-xl text-center space-y-6 w-full max-w-xl">
        <h2 className="text-xl md:text-2xl font-bold">{question.text}</h2>

        <div className="flex flex-col gap-4">
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => onAnswer(opt)}
              className="bg-[#15BDE6] hover:opacity-90 py-3 rounded-full font-semibold transition"
            >
              {opt.label}
            </button>
          ))}
        </div>

        {stepIdx >= 0 && (
          <ProgressBar
            progress={progress}
            step={stepIdx + 1}
            total={totalSteps}
          />
        )}
      </div>
    </div>
  );
}

function ResultCard({ resultado, onReset }) {
  const isAmbiguo = resultado === "Caso ambiguo";

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-[#152C47] rounded-3xl p-8 text-white shadow-xl text-center space-y-4 max-w-md w-full">
        <h2 className="text-2xl font-bold">{resultado}</h2>
        <p className="text-sm opacity-70">
          {isAmbiguo
            ? "No se pudo determinar con claridad. Un especialista puede orientarte mejor."
            : "Hemos identificado la situación. A continuación te indicaremos los pasos a seguir."}
        </p>
        <button
          onClick={onReset}
          className="underline text-sm opacity-70 hover:opacity-100 transition"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}

function HowItWorksModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white text-black rounded-2xl p-6 md:p-8 max-w-lg w-full mx-4 shadow-2xl space-y-6 z-10">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          ¿Cómo funciona?
        </h2>
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <strong>📝 Responde:</strong>
            <p>Contesta preguntas simples según tu experiencia reciente.</p>
          </div>
          <div>
            <strong>🔍 Analizamos:</strong>
            <p>Evaluamos tus respuestas para identificar la situación.</p>
          </div>
          <div>
            <strong>🧭 Te orientamos:</strong>
            <p>Te indicamos el canal adecuado para actuar.</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-[#152C47] text-white py-2 rounded-full"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

// ── Componente principal ──────────────────────────────────────────────────

function ReportesSection() {
  const [showModal, setShowModal] = useState(false);

  const {
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
  } = useQuestionnaire();

  return (
    <div className="min-h-screen bg-[#152C47] flex items-center justify-center md:justify-start">
      <div className="w-full px-4 md:pl-16">
        {/* INTRO */}
        {screen === SCREEN.INTRO && (
          <div className="min-h-screen text-white flex flex-col justify-center py-16">
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 space-y-6 text-left z-10">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  ¿Algo no está bien? Hablemos.
                </h1>
                <p className="text-sm text-white space-y-2 pt-2">
                  <span className="block">
                    No tienes que cargar esto solo/a.
                  </span>
                  <span className="block">
                    Esta herramienta te guía paso a paso
                  </span>
                  <span className="block">
                    para identificar qué tipo de situación estás viviendo y cómo
                    reportarla de forma segura.
                  </span>
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="border border-white text-white px-6 py-3 rounded-full w-fit hover:bg-white hover:text-[#152C47] transition"
                >
                  ¿Cómo funciona?
                </button>
                <button
                  onClick={startQuestionnaire}
                  className="bg-[#BACF00] text-black font-semibold px-6 py-3 rounded-full w-fit block"
                >
                  Iniciar cuestionario guiado
                </button>
              </div>

              {/* Imágenes decorativas */}
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px]">
                <div
                  className="absolute w-32 h-32 top-10 left-1/3 -translate-x-1/2 md:w-60 md:h-60 md:top-5 md:left-3/5 rounded-full bg-cover bg-center overflow-hidden shadow-2xl border border-white/20"
                  style={{ backgroundImage: `url(${apoyo1})` }}
                />
                <div
                  className="absolute w-40 h-40 top-32 left-1/2 -translate-x-1/2 md:w-[300px] md:h-[300px] md:top-50 md:left-1/4 rounded-full bg-cover bg-center overflow-hidden shadow-2xl border border-white/20"
                  style={{ backgroundImage: `url(${apoyo2})` }}
                />
                <div
                  className="absolute w-24 h-24 top-56 left-1/2 -translate-x-1/2 md:w-40 md:h-40 md:top-80 md:left-[70%] rounded-full bg-cover bg-center overflow-hidden shadow-2xl border border-white/20"
                  style={{ backgroundImage: `url(${apoyo3})` }}
                />
                <div
                  className="absolute w-24 h-24 top-56 left-1/2 -translate-x-1/2 md:w-40 md:h-40 md:top-5 md:left-[5%] rounded-full bg-cover bg-center overflow-hidden shadow-2xl border border-white/20"
                  style={{ backgroundImage: `url(${apoyo4})` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* PREGUNTAS */}
        {screen === SCREEN.QUESTION && currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            progress={progress}
            stepIdx={stepIdx}
            totalSteps={totalSteps}
            onAnswer={handleAnswer}
          />
        )}

        {/* RESULTADO */}
        {screen === SCREEN.RESULT && (
          <ResultCard resultado={resultado} onReset={reset} />
        )}
      </div>

      {showModal && <HowItWorksModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default ReportesSection;
