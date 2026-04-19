// ── components/Chatbot.jsx ────────────────────────────────────────────────

import { useState, useRef, useEffect } from "react";
import {
  FAQ,
  SUGGESTED_QUESTIONS,
  FALLBACK_RESPONSE,
} from "../data/chatbotFAQ";

// ── Helpers ───────────────────────────────────────────────────────────────

function FormattedText({ text }) {
  const lines = text.split("\n");
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} className="h-1" />;
        const parts = line.split(/(\*\*[^*]+\*\*|_[^_]+_)/g);
        const rendered = parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**"))
            return (
              <strong key={j} className="font-semibold">
                {part.slice(2, -2)}
              </strong>
            );
          if (part.startsWith("_") && part.endsWith("_"))
            return (
              <em key={j} className="opacity-60 not-italic text-xs">
                {part.slice(1, -1)}
              </em>
            );
          return <span key={j}>{part}</span>;
        });
        return (
          <p key={i} className="leading-relaxed">
            {rendered}
          </p>
        );
      })}
    </div>
  );
}

// ── Componentes de mensaje ────────────────────────────────────────────────

function BotAvatar() {
  return (
    <div className="w-7 h-7 rounded-full bg-[#152C47] border border-white/20 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#15BDE6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </div>
  );
}

function BotMessage({ content }) {
  return (
    <div className="flex justify-start mb-3">
      <BotAvatar />
      <div className="max-w-[80%] bg-white/10 text-white/90 rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-sm">
        {Array.isArray(content) ? (
          content.map((line, i) => (
            <p key={i} className="leading-relaxed mb-1">
              {line.link ? (
                <a
                  href={line.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline hover:text-cyan-300"
                >
                  {line.text}
                </a>
              ) : (
                line.text
              )}
            </p>
          ))
        ) : (
          <FormattedText text={content} />
        )}
      </div>
    </div>
  );
}

function UserMessage({ content }) {
  return (
    <div className="flex justify-end mb-3">
      <div className="max-w-[80%] bg-[#15BDE6] text-white rounded-2xl rounded-br-sm px-3.5 py-2.5 text-sm">
        <p className="leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start mb-3">
      <BotAvatar />
      <div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Menú de categorías ────────────────────────────────────────────────────

const CATEGORIES = [
  {
    id: "definiciones",
    label: "¿Qué es el acoso o la discriminación?",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    faqIds: [
      "que_es_hostigamiento",
      "actos_naturaleza_sexual",
      "actos_sexistas",
      "consentimiento",
      "ambiente_hostil",
      "que_es_discriminacion",
    ],
  },
  {
    id: "donde_cuando",
    label: "¿Dónde y cuándo puede ocurrir?",
    icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    faqIds: ["donde_ocurre", "una_sola_vez"],
  },
  {
    id: "reportar",
    label: "¿Cómo reportar una situación?",
    icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z",
    faqIds: ["como_reportar", "codigo_conducta", "marco_denuncias", "tercero"],
  },
  {
    id: "proceso",
    label: "¿Cómo funciona el proceso?",
    icon: "M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
    faqIds: [
      "plazos",
      "medidas_proteccion",
      "comite",
      "denuncia_contra_rrhh",
      "retirar_denuncia",
      "documentos_digitales",
    ],
  },
  {
    id: "dudas",
    label: "Tengo dudas o miedos",
    icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    faqIds: [
      "es_confidencial",
      "miedo_represalia",
      "pruebas",
      "una_sola_vez",
      "cuestionario",
    ],
  },
  {
    id: "inchcape",
    label: "Inchcape y su compromiso",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75 M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    faqIds: [
      "estadisticas_mundo",
      "estadisticas_peru",
      "por_que_no_denuncian",
      "inchcape_compromiso",
      "wellbeing",
    ],
  },
];

function getFaqById(id) {
  return FAQ.find((f) => f.id === id);
}

// ── Chatbot principal ─────────────────────────────────────────────────────

const INITIAL_BOT_MSG = {
  id: 0,
  type: "bot",
  content:
    "Hola, estoy aquí para ayudarte. Todo lo que hablemos es confidencial.\n\n¿Sobre qué tema tienes dudas?",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_BOT_MSG]);
  const [view, setView] = useState("categories"); // "categories" | "questions" | "answer"
  const [activeCategory, setActiveCategory] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, view]);

  // Reinicia al cerrar
  function handleToggle() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function handleReset() {
    setMessages([INITIAL_BOT_MSG]);
    setView("categories");
    setActiveCategory(null);
  }

  // Usuario elige categoría
  function handleCategory(cat) {
    setActiveCategory(cat);
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), type: "user", content: cat.label },
    ]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "bot",
          content:
            "Entendido. ¿Cuál de estas preguntas se acerca más a tu duda?",
        },
      ]);
      setView("questions");
    }, 600);
  }

  // Usuario elige pregunta específica
  function handleQuestion(faqId) {
    const faq = getFaqById(faqId);
    if (!faq) return;

    const userLabel = faq.question || "Tengo esta duda";
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), type: "user", content: userLabel },
    ]);
    setIsTyping(true);
    setTimeout(
      () => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 1, type: "bot", content: faq.answer },
          {
            id: Date.now() + 2,
            type: "bot",
            content: "¿Hay algo más en lo que pueda ayudarte?",
          },
        ]);
        setView("answer");
      },
      700 + Math.random() * 400,
    );
  }

  // Renderiza controles según vista
  function renderControls() {
    if (isTyping) return null;

    if (view === "categories") {
      return (
        <div className="px-3 pb-3 space-y-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategory(cat)}
              className="w-full flex items-center gap-2.5 text-left text-xs text-white/80 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#15BDE6]/50 rounded-xl px-3 py-2.5 transition-all"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#15BDE6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0"
              >
                <path d={cat.icon} />
              </svg>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      );
    }

    if (view === "questions" && activeCategory) {
      const questions = activeCategory.faqIds
        .map(getFaqById)
        .filter(Boolean)
        .filter((f) => f.question);

      return (
        <div className="px-3 pb-3 space-y-1.5">
          {questions.map((faq) => (
            <button
              key={faq.id}
              onClick={() => handleQuestion(faq.id)}
              className="w-full text-left text-xs text-white/80 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#15BDE6]/50 rounded-xl px-3 py-2.5 transition-all"
            >
              {faq.question}
            </button>
          ))}
          <button
            onClick={() => {
              setView("categories");
              setActiveCategory(null);
              setMessages((prev) => [
                ...prev,
                {
                  id: Date.now(),
                  type: "bot",
                  content:
                    "Claro, volvamos al menú principal. ¿Sobre qué tema tienes dudas?",
                },
              ]);
            }}
            className="w-full text-left text-xs text-white/40 hover:text-white/60 px-3 py-1.5 transition"
          >
            ← Volver a los temas
          </button>
        </div>
      );
    }

    if (view === "answer") {
      return (
        <div className="px-3 pb-3 space-y-1.5">
          <button
            onClick={() => {
              setView("questions");
              setMessages((prev) => [
                ...prev,
                {
                  id: Date.now(),
                  type: "bot",
                  content: "¿Tienes otra duda sobre el mismo tema?",
                },
              ]);
            }}
            className="w-full text-left text-xs text-white/80 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#15BDE6]/50 rounded-xl px-3 py-2.5 transition-all"
          >
            Tengo otra duda sobre este tema
          </button>
          <button
            onClick={() => {
              setView("categories");
              setActiveCategory(null);
              setMessages((prev) => [
                ...prev,
                {
                  id: Date.now(),
                  type: "bot",
                  content:
                    "Claro, volvamos al menú principal. ¿Sobre qué tema tienes dudas?",
                },
              ]);
            }}
            className="w-full text-left text-xs text-white/80 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#15BDE6]/50 rounded-xl px-3 py-2.5 transition-all"
          >
            Ver otros temas
          </button>
          <button
            onClick={handleReset}
            className="w-full text-left text-xs text-white/40 hover:text-white/60 px-3 py-1.5 transition"
          >
            ↺ Reiniciar conversación
          </button>
        </div>
      );
    }

    return null;
  }

  return (
    <>
      {/* ── Botón flotante ───────────────────────────────────────────────── */}
      <button
        onClick={handleToggle}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat de ayuda"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#152C47] border border-[#15BDE6]/40 shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95"
      >
        {isOpen ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#15BDE6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#15BDE6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
        {!isOpen && (
          <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-[#BACF00] rounded-full border-2 border-[#152C47]" />
        )}
      </button>

      {/* ── Ventana del chat ─────────────────────────────────────────────── */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col rounded-2xl bg-[#152C47] border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ maxHeight: "560px" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#15BDE6]/20 border border-[#15BDE6]/30 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#15BDE6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-medium leading-none">
              Asistente Inchcape
            </p>
            <p className="text-white/40 text-xs mt-0.5">
              Confidencial · Siempre disponible
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/30 hover:text-white/70 transition p-1"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mensajes */}
        <div className="flex-1 overflow-y-auto px-4 py-3">
          {messages.map((msg) =>
            msg.type === "user" ? (
              <UserMessage key={msg.id} content={msg.content} />
            ) : (
              <BotMessage key={msg.id} content={msg.content} />
            ),
          )}
          {isTyping && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>

        {/* Controles de opciones */}
        <div className="border-t border-white/10 flex-shrink-0">
          {renderControls()}
        </div>
      </div>
    </>
  );
}
