import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuestionnaire, SCREEN } from "../hooks/useQuestionnaire";
import apoyo1 from "../assets/img/Apoyo1.png";
import apoyo2 from "../assets/img/Apoyo2.png";
import apoyo3 from "../assets/img/Apoyo3.png";
import apoyo4 from "../assets/img/Apoyo4.png";

function ProgressBar({ progress, step, total }) {
  return (
    <div className="space-y-1.5">
      <div
        className="w-full rounded-full overflow-hidden"
        style={{ height: "3px", background: "rgba(217,217,217,0.15)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: "#BACF00" }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      <div className="flex justify-between items-center">
        <p
          className="text-[11px] tracking-widest uppercase font-medium"
          style={{ color: "rgba(217,217,217,0.45)" }}
        >
          Paso {step} de {total}
        </p>
        <p
          className="text-[11px] tracking-widest uppercase font-medium"
          style={{ color: "#BACF00" }}
        >
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}

function QuestionCard({ question, progress, stepIdx, totalSteps, onAnswer }) {
  const [showInfo, setShowInfo] = useState(false);

  const levelLabel =
    stepIdx < 3
      ? "Contexto general"
      : stepIdx < 5
        ? "Naturaleza del hecho"
        : "Detalles del caso";

  const levelColor =
    stepIdx < 3 ? "#15BDE6" : stepIdx < 5 ? "#A561AB" : "#BACF00";

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -32 }}
        transition={{ duration: 0.38, ease: "easeOut" }}
        className="text-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden"
        style={{
          background: "#152C47",
          border: "1px solid rgba(217,217,217,0.1)",
        }}
      >
        {/* Celeste top stripe */}
        <div style={{ height: "4px", background: "#15BDE6" }} />

        <div className="p-7 md:p-9 space-y-7">
          {/* Level badge */}
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded-full"
              style={{
                background: `${levelColor}18`,
                color: levelColor,
                border: `1px solid ${levelColor}35`,
              }}
            >
              {levelLabel}
            </span>
          </div>

          {/* Question + info button */}
          <div className="flex items-start justify-between gap-4">
            <h2
              className="text-xl md:text-2xl font-bold leading-snug"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {question.text}
            </h2>
            {question.why && (
              <button
                onClick={() => setShowInfo(true)}
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition-all hover:opacity-80"
                style={{
                  background: "rgba(21,189,230,0.12)",
                  border: "1px solid rgba(21,189,230,0.3)",
                  color: "#15BDE6",
                }}
              >
                ?
              </button>
            )}
          </div>

          {/* Options */}
          <div className="flex flex-col gap-2.5">
            {question.options.map((opt, i) => (
              <motion.button
                key={i}
                onClick={() => onAnswer(opt)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="text-left rounded-xl overflow-hidden transition-all group"
                style={{
                  background: "rgba(217,217,217,0.04)",
                  border: "1px solid rgba(217,217,217,0.1)",
                }}
              >
                <div className="flex items-stretch">
                  <div
                    className="w-1 flex-shrink-0 transition-all duration-200"
                    style={{ background: "transparent" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#BACF00")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  />
                  <div className="px-4 py-3.5 flex-1">
                    <p
                      className="font-semibold text-sm mb-0.5"
                      style={{ color: "#D9D9D9" }}
                    >
                      {opt.label}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(217,217,217,0.45)" }}
                    >
                      {opt.desc}
                    </p>
                    {opt.eg && (
                      <p
                        className="text-xs italic mt-1"
                        style={{ color: "rgba(217,217,217,0.3)" }}
                      >
                        {opt.eg}
                      </p>
                    )}
                  </div>
                  <div
                    className="flex items-center pr-4 text-lg transition-colors group-hover:opacity-70"
                    style={{ color: "rgba(217,217,217,0.25)" }}
                  >
                    ›
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <ProgressBar
            progress={progress}
            step={stepIdx + 1}
            total={totalSteps}
          />
        </div>
      </motion.div>

      {/* Info Modal */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowInfo(false)}
            />
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              className="relative rounded-2xl p-7 max-w-md w-full mx-4 z-10 shadow-2xl"
              style={{
                background: "#1a3556",
                border: "1px solid rgba(21,189,230,0.25)",
              }}
            >
              <div
                className="w-10 h-1 rounded-full mb-5"
                style={{ background: "#15BDE6" }}
              />
              <h3
                className="font-bold text-lg mb-2 text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                ¿Por qué te preguntamos esto?
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#D9D9D9" }}
              >
                {question.why}
              </p>
              {question.whySrc && (
                <p
                  className="text-xs italic mt-3"
                  style={{ color: "rgba(217,217,217,0.5)" }}
                >
                  {question.whySrc}
                </p>
              )}
              <button
                onClick={() => setShowInfo(false)}
                className="w-full mt-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "#15BDE6" }}
              >
                Entendido
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResultCard({ resultado, onReset }) {
  if (!resultado) return null;
  const { key, scores, data } = resultado;

  function getRiskLevel(scores) {
    const total = scores.acoso + scores.disc;
    if (total >= 10)
      return { label: "Alto", color: "#A561AB", bg: "rgba(165,97,171,0.12)" };
    if (total >= 6)
      return { label: "Medio", color: "#15BDE6", bg: "rgba(21,189,230,0.12)" };
    return { label: "Bajo", color: "#BACF00", bg: "rgba(186,207,0,0.12)" };
  }

  const risk = getRiskLevel(scores);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
        style={{
          background: "#152C47",
          border: "1px solid rgba(217,217,217,0.1)",
        }}
      >
        {/* Gradient stripe */}
        <div
          style={{
            height: "4px",
            background: "#15BDE6",
          }}
        />

        <div className="p-7 md:p-9 space-y-6">
          {/* Header */}
          <div
            className="pb-5"
            style={{ borderBottom: "1px solid rgba(217,217,217,0.08)" }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-2"
              style={{ color: "#15BDE6" }}
            >
              Informe de evaluación
            </p>
            <h2
              className="text-2xl font-bold leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {data.title}
            </h2>
            <p
              className="text-sm mt-1.5"
              style={{ color: "rgba(217,217,217,0.5)" }}
            >
              {data.subtitle}
            </p>
          </div>

          {/* Summary grid */}
          <div className="grid grid-cols-2 gap-3">
            <div
              className="p-4 rounded-xl"
              style={{
                background: "rgba(217,217,217,0.04)",
                border: "1px solid rgba(217,217,217,0.1)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-widest mb-2"
                style={{ color: "rgba(217,217,217,0.4)" }}
              >
                Tipo identificado
              </p>
              <p className="text-base font-bold text-white">{key}</p>
            </div>
            <div
              className="p-4 rounded-xl"
              style={{
                background: risk.bg,
                border: `1px solid ${risk.color}35`,
              }}
            >
              <p
                className="text-[10px] uppercase tracking-widest mb-2"
                style={{ color: "rgba(217,217,217,0.4)" }}
              >
                Nivel de riesgo
              </p>
              <p className="text-base font-bold" style={{ color: risk.color }}>
                {risk.label}
              </p>
            </div>
          </div>

          {/* Interpretación */}
          <div>
            <p
              className="text-[10px] uppercase tracking-widest mb-2.5 font-semibold"
              style={{ color: "rgba(217,217,217,0.4)" }}
            >
              Interpretación
            </p>
            <div
              className="p-4 rounded-xl text-sm leading-relaxed"
              style={{
                background: "rgba(217,217,217,0.04)",
                color: "rgba(217,217,217,0.8)",
                border: "1px solid rgba(217,217,217,0.08)",
              }}
            >
              {data.definicion}
            </div>
          </div>

          {/* Acciones */}
          <div>
            <p
              className="text-[10px] uppercase tracking-widest mb-2.5 font-semibold"
              style={{ color: "rgba(217,217,217,0.4)" }}
            >
              Acciones recomendadas
            </p>
            <div className="space-y-2">
              {data.canales.map((c, i) => (
                <a
                  key={i}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl transition-all group"
                  style={{
                    background: "rgba(217,217,217,0.04)",
                    border: "1px solid rgba(217,217,217,0.08)",
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#15BDE6" }}
                  />
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#D9D9D9" }}
                    >
                      {c.label}
                    </p>
                    <p
                      className="text-xs truncate"
                      style={{ color: "rgba(217,217,217,0.4)" }}
                    >
                      {c.desc}
                    </p>
                  </div>
                  <span
                    className="text-lg flex-shrink-0 transition-colors group-hover:opacity-70"
                    style={{ color: "rgba(217,217,217,0.2)" }}
                  >
                    ›
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div
            className="p-3.5 rounded-xl text-xs leading-relaxed"
            style={{
              background: "rgba(165,97,171,0.06)",
              border: "1px solid rgba(165,97,171,0.2)",
              color: "rgba(217,217,217,0.45)",
            }}
          >
            Este resultado es orientativo y se basa en las respuestas
            proporcionadas. No constituye un diagnóstico legal definitivo. Se
            recomienda acudir a los canales formales o asesoría especializada.
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <button
              onClick={onReset}
              className="flex-1 py-2.5 rounded-full text-sm font-medium transition-all hover:opacity-80"
              style={{
                background: "rgba(217,217,217,0.07)",
                border: "1px solid rgba(217,217,217,0.2)",
                color: "#D9D9D9",
              }}
            >
              Nueva evaluación
            </button>
            <button
              onClick={() => window.open(data.canales[0]?.url, "_blank")}
              className="flex-1 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "#A561AB" }}
            >
              Reportar caso
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function HowItWorksModal({ onClose }) {
  const steps = [
    {
      icon: "📝",
      title: "Responde",
      desc: "Contesta preguntas simples según tu experiencia reciente.",
      color: "#15BDE6",
    },
    {
      icon: "🔍",
      title: "Analizamos",
      desc: "Evaluamos tus respuestas para identificar la situación.",
      color: "#BACF00",
    },
    {
      icon: "🧭",
      title: "Te orientamos",
      desc: "Te indicamos el canal adecuado para actuar de forma segura.",
      color: "#A561AB",
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ duration: 0.28 }}
          className="relative rounded-2xl p-7 md:p-9 max-w-md w-full mx-4 shadow-2xl z-10"
          style={{
            background: "#1a3556",
            border: "1px solid rgba(21,189,230,0.25)",
          }}
        >
          <div
            className="w-10 h-1 rounded-full mb-6"
            style={{
              background: "linear-gradient(to right, #15BDE6, #A561AB)",
            }}
          />
          <h2
            className="text-xl font-bold text-white mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            ¿Cómo funciona?
          </h2>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                  style={{
                    background: `${s.color}18`,
                    border: `1px solid ${s.color}30`,
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{s.title}</p>
                  <p
                    className="text-xs mt-0.5 leading-relaxed"
                    style={{ color: "rgba(217,217,217,0.55)" }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={onClose}
            className="w-full mt-7 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "#15BDE6" }}
          >
            Cerrar
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const BUBBLES = [
  {
    img: apoyo1,
    size: "w-[110px] h-[110px] md:w-[140px] md:h-[140px]",
    pos: "top-0 left-[5%]",
    float: { y: [0, -12, 0], duration: 4 },
    border: "#152C47",
  },
  {
    img: apoyo2,
    size: "w-[140px] h-[140px] md:w-[275px] md:h-[275px]",
    pos: "top-[-55px] right-0",
    float: { y: [0, -18, 0], duration: 5 },
    border: "#152C47",
  },
  {
    img: apoyo3,
    size: "w-[90px] h-[90px] md:w-[215px] md:h-[215px]",
    pos: "bottom-0 left-[22%]",
    float: { y: [0, -10, 0], duration: 3.5 },
    border: "#152C47",
  },
  {
    img: apoyo4,
    size: "w-[90px] h-[90px] md:w-[155px] md:h-[155px]",
    pos: "bottom-[-70px] right-[8%]",
    float: { y: [0, -14, 0], duration: 4.5 },
    border: "#152C47",
  },
];

function ReportesSection() {
  const [showModal, setShowModal] = useState(false);

  const {
    screen,
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
    <div className="min-h-screen w-full">
      {/* Background image */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #0d1e30 0%, #152C47 50%, #1a3a5c 100%)",
        }}
      />
      {/* Azul overlay */}

      <div className="w-full px-4 md:pl-16">
        <AnimatePresence mode="wait">
          {/* ── INTRO ─────────────────────────────────────── */}
          {screen === SCREEN.INTRO && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen text-white flex flex-col justify-center py-16"
            >
              <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
                {/* BUBBLES */}
                {/* BUBBLES — ocultas en mobile, visibles en desktop */}
                <div className="hidden md:block relative md:w-1/2 md:h-[420px] order-1 md:order-2">
                  {BUBBLES.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1, y: item.float.y }}
                      transition={{
                        scale: { delay: i * 0.15, duration: 0.4 },
                        opacity: { delay: i * 0.15, duration: 0.4 },
                        y: {
                          delay: i * 0.15,
                          duration: item.float.duration,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      className={`absolute ${item.size} ${item.pos} rounded-full bg-cover bg-center overflow-hidden shadow-2xl`}
                      style={{
                        backgroundImage: `url(${item.img})`,
                        border: `2px solid ${item.border}`,
                        boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${item.border}22`,
                      }}
                    />
                  ))}
                </div>

                {/* HERO TEXT */}
                <div
                  className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left order-2 md:order-1 rounded-2xl p-7 md:p-10"
                  style={{
                    background: "rgba(21,44,71,0.7)",
                    border: "1px solid rgba(217,217,217,0.1)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  {/* Gradient accent bar */}
                  <div
                    className="hidden md:block w-14 h-1 rounded-full"
                    style={{
                      background: "#15BDE6",
                    }}
                  />{" "}
                  {/* Eyebrow */}
                  <p
                    className="text-[11px] font-semibold tracking-[0.22em] uppercase"
                    style={{ color: "#15BDE6" }}
                  >
                    Canal de apoyo
                  </p>
                  <h1
                    className="text-3xl md:text-[2.6rem] font-bold leading-tight text-white"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    ¿Algo no está bien?
                    <br />
                    <span style={{ color: "#BACF00" }}>Hablemos.</span>
                  </h1>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(217,217,217,0.6)" }}
                  >
                    No tienes que cargar esto solo/a. Esta herramienta te guía
                    paso a paso para identificar qué tipo de situación estás
                    viviendo y cómo reportarla de forma segura.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 items-center md:items-start">
                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-white/10"
                      style={{
                        border: "1px solid rgba(217,217,217,0.25)",
                        color: "#D9D9D9",
                      }}
                    >
                      ¿Cómo funciona?
                    </button>
                    <button
                      onClick={startQuestionnaire}
                      className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90 flex items-center justify-center gap-2"
                      style={{ background: "#BACF00", color: "#152C47" }}
                    >
                      Iniciar cuestionario
                      <span className="text-base font-bold">›</span>
                    </button>
                  </div>
                  {/* Trust indicators */}
                  <div className="flex items-center gap-4 justify-center md:justify-start mt-1 flex-wrap">
                    {[
                      { dot: "#15BDE6", label: "Confidencial" },
                      { dot: "#BACF00", label: "Seguro" },
                      { dot: "#A561AB", label: "Orientativo" },
                    ].map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: t.dot }}
                        />
                        <p
                          className="text-[11px]"
                          style={{ color: "rgba(217,217,217,0.4)" }}
                        >
                          {t.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {screen === SCREEN.QUESTION && currentQuestion && (
            <QuestionCard
              key="question"
              question={currentQuestion}
              progress={progress}
              stepIdx={stepIdx}
              totalSteps={totalSteps}
              onAnswer={handleAnswer}
            />
          )}

          {screen === SCREEN.RESULT && (
            <ResultCard key="result" resultado={resultado} onReset={reset} />
          )}
        </AnimatePresence>
      </div>
      {showModal && <HowItWorksModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default ReportesSection;
