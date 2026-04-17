import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuestionnaire, SCREEN } from "../hooks/useQuestionnaire";
import apoyo1 from "../assets/img/Apoyo1.png";
import apoyo2 from "../assets/img/Apoyo2.png";
import apoyo3 from "../assets/img/Apoyo3.png";
import apoyo4 from "../assets/img/Apoyo4.png";
import fondo1 from "../assets/img/Fondo1.jpg";

function ProgressBar({ progress, step, total }) {
  return (
    <div className="space-y-1">
      <div className="w-full h-2 bg-[#D9D9D9] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#BACF00]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <p className="text-sm opacity-70 text-center">
        Paso {step} de {total}
      </p>
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

  return (
    <div className="flex items-center justify-center min-h-screen px-4 top-2">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.4 }}
        className="bg-[#152C47] text-white rounded-3xl p-6 md:p-8 shadow-xl space-y-6 w-full max-w-xl"
      >
        {/* Nivel */}
        <p className="text-xs uppercase opacity-40 tracking-widest">
          {levelLabel}
        </p>

        {/* Pregunta + botón ! */}
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl md:text-2xl font-bold">{question.text}</h2>

          {question.why && (
            <button
              onClick={() => setShowInfo(true)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-sm font-bold"
            >
              !
            </button>
          )}
        </div>

        {/* Opciones */}
        <div className="flex flex-col gap-3">
          {question.options.map((opt, i) => (
            <motion.button
              key={i}
              onClick={() => onAnswer(opt)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/5 border border-white/10 hover:border-[#15BDE6]/60 rounded-xl text-left overflow-hidden transition"
            >
              <div className="px-4 py-2 font-semibold border-b border-white/10">
                {opt.label}
              </div>

              <div className="px-4 py-2 text-xs opacity-70">{opt.desc}</div>

              {opt.eg && (
                <div className="px-4 pb-2 text-xs opacity-50 italic">
                  {opt.eg}
                </div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Progress */}
        <ProgressBar
          progress={progress}
          step={stepIdx + 1}
          total={totalSteps}
        />
      </motion.div>
      {/* 🔥 MODAL AQUÍ */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Fondo */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowInfo(false)}
            />

            {/* Caja */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-white text-black rounded-2xl p-6 max-w-md w-full mx-4 z-10 space-y-3"
            >
              <h3 className="font-bold text-lg">
                ¿Por qué te preguntamos esto?
              </h3>

              <p className="text-sm">{question.why}</p>

              {question.whySrc && (
                <p className="text-xs text-gray-500 italic">
                  {question.whySrc}
                </p>
              )}

              <button
                onClick={() => setShowInfo(false)}
                className="w-full bg-[#152C47] text-white py-2 rounded-full text-sm"
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
const RESULT_CONFIG = {
  Acoso: {
    title: "Identificamos un posible caso de acoso",
    message:
      "Las respuestas apuntan a una situación de acoso laboral. Te recomendamos documentar los hechos y contactar al área de Recursos Humanos o al canal de denuncias.",
    color: "bg-[#15BDE6]",
  },
  Discriminación: {
    title: "Identificamos un posible caso de discriminación",
    message:
      "Las respuestas apuntan a una situación de discriminación. Tienes derecho a un trato igualitario. Puedes reportarlo al área de RRHH o al canal formal de denuncias.",
    color: "bg-[#BACF00]",
  },
  "Caso ambiguo": {
    title: "No pudimos determinar el tipo de situación",
    message:
      "Las respuestas no permiten identificar con claridad el tipo de caso. Un especialista puede orientarte mejor y evaluar la situación de forma personalizada.",
    color: "bg-white/20",
  },
};
function ResultCard({ resultado, onReset }) {
  if (!resultado) return null;

  const { key, scores, data } = resultado;
  function getRiskLevel(scores) {
    const total = scores.acoso + scores.disc;

    if (total >= 10) return { label: "Alto", color: "text-red-400" };
    if (total >= 6) return { label: "Medio", color: "text-yellow-400" };
    return { label: "Bajo", color: "text-green-400" };
  }

  const risk = getRiskLevel(scores);

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#152C47] rounded-3xl p-8 text-white shadow-2xl space-y-6 max-w-2xl w-full"
      >
        {/* HEADER */}
        <div className="space-y-2 border-b border-white/10 pb-4">
          <p className="text-xs uppercase tracking-widest opacity-40">
            Informe de evaluación
          </p>

          <h2 className="text-2xl font-bold">{data.title}</h2>

          <p className="text-sm opacity-70">{data.subtitle}</p>
        </div>

        {/* RESUMEN */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 p-4 rounded-xl">
            <p className="text-xs opacity-50 mb-1">Tipo identificado</p>
            <p className="text-lg font-semibold">{key}</p>
          </div>

          <div className="bg-white/5 p-4 rounded-xl">
            <p className="text-xs opacity-50 mb-1">Nivel de riesgo</p>
            <p className={`text-lg font-semibold ${risk.color}`}>
              {risk.label}
            </p>
          </div>
        </div>

        {/* INTERPRETACIÓN */}
        <div className="space-y-2">
          <p className="text-sm font-semibold">Interpretación</p>
          <div className="bg-white/5 p-4 rounded-xl text-sm leading-relaxed">
            {data.definicion}
          </div>
        </div>

        {/* ACCIONES */}
        <div className="space-y-3">
          <p className="text-sm font-semibold">Acciones recomendadas</p>

          <div className="space-y-2">
            {data.canales.map((c, i) => (
              <a
                key={i}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white/5 rounded-xl px-3 py-3 border border-white/10 hover:border-[#15BDE6]/60 hover:bg-white/10 transition cursor-pointer"
              >
                <div className="w-2 h-2 mt-2 rounded-full bg-[#15BDE6]" />

                <div>
                  <p className="text-sm font-medium">{c.label}</p>
                  <p className="text-xs opacity-60">{c.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-xs opacity-60 leading-relaxed">
          Este resultado es orientativo y se basa en las respuestas
          proporcionadas. No constituye un diagnóstico legal definitivo. Se
          recomienda acudir a los canales formales o asesoría especializada para
          una evaluación completa.
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={onReset}
            className="flex-1 bg-white/10 hover:bg-white/20 transition py-2.5 rounded-full text-sm"
          >
            Nueva evaluación
          </button>

          <button
            onClick={() => window.open(data.canales[0]?.url, "_blank")}
            className="flex-1 bg-[#A561AB] hover:opacity-90 transition py-2.5 rounded-full text-sm font-medium"
          >
            Contactar canal
          </button>
        </div>
      </motion.div>
    </div>
  );
}
function HowItWorksModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white text-black rounded-2xl p-6 md:p-8 max-w-lg w-full mx-4 shadow-2xl space-y-6 z-10"
        >
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
  },
  {
    img: apoyo2,
    size: "w-[140px] h-[140px] md:w-[275px] md:h-[275px]",
    pos: "top-[-55px] right-0",
    float: { y: [0, -18, 0], duration: 5 },
  },
  {
    img: apoyo3,
    size: "w-[90px]  h-[90px]  md:w-[215px] md:h-[215px]",
    pos: "bottom-0 left-[22%]",
    float: { y: [0, -10, 0], duration: 3.5 },
  },
  {
    img: apoyo4,
    size: "w-[90px]  h-[90px]  md:w-[155px] md:h-[155px]",
    pos: "bottom-[-70px] right-[8%]",
    float: { y: [0, -14, 0], duration: 4.5 },
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
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fondo1})` }}
      />

      <div className="w-full px-4 md:pl-16">
        <AnimatePresence mode="wait">
          {screen === SCREEN.INTRO && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen text-white flex flex-col justify-center py-16"
            >
              <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-8 md:gap-10">
                {/* BURBUJAS — arriba en mobile, derecha en desktop */}
                <div className="relative w-full h-[210px] md:w-1/2 md:h-[380px] order-1 md:order-2">
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
                      className={`absolute ${item.size} ${item.pos} rounded-full bg-cover bg-center border border-white/20 overflow-hidden shadow-xl`}
                      style={{ backgroundImage: `url(${item.img})` }}
                    />
                  ))}
                </div>

                {/* TEXTO — abajo en mobile, izquierda en desktop */}
                <div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left order-2 md:order-1 bg-white/40 border border-white/10 rounded-3xl p-6 md:p-10 shadow-lg">
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#152C47]">
                    ¿Algo no está bien? Hablemos.
                  </h1>
                  <p className="text-sm text-black leading-relaxed">
                    No tienes que cargar esto solo/a. Esta herramienta te guía
                    paso a paso para identificar qué tipo de situación estás
                    viviendo y cómo reportarla de forma segura.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 items-center md:items-start">
                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full sm:w-auto border border-[1px] border-[#A561AB] text-[#A561AB] px-6 py-3 rounded-full hover:bg-[#A561AB] hover:text-[#152C47] transition"
                    >
                      ¿Cómo funciona?
                    </button>
                    <button
                      onClick={startQuestionnaire}
                      className="w-full sm:w-auto bg-[#A561AB] text-white font-semibold px-6 py-3 rounded-full"
                    >
                      Iniciar cuestionario guiado
                    </button>
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
