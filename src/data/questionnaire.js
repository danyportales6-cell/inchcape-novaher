// ── data/questionnaire.js ─────────────────────────────────────────────────

export const INITIAL_QUESTION = {
  id: "tipo",
  text: "¿Qué tipo de situación crees que estás enfrentando?",
  options: [
    { label: "Acoso", value: "acoso" },
    { label: "Discriminación", value: "discriminacion" },
    { label: "No estoy seguro/a", value: "ambiguo" },
  ],
};

// Cada opción tiene un `score` que suma al resultado final.
// Si al terminar el flujo el score total < MIN_SCORE → "Caso ambiguo"
const MIN_SCORE = 3;

export const FLOWS = {
  acoso: {
    label: "Acoso",
    minScore: MIN_SCORE,
    questions: [
      {
        id: "frecuencia",
        text: "¿Con qué frecuencia ocurre la situación?",
        options: [
          { label: "Ocurre constantemente", value: "alta", score: 2 },
          { label: "Ha pasado varias veces", value: "media", score: 1 },
          { label: "Solo ocurrió una vez", value: "baja", score: 0 },
        ],
      },
      {
        id: "tipo_acoso",
        text: "¿Qué tipo de acoso describes mejor?",
        options: [
          { label: "Verbal (insultos, burlas)", value: "verbal", score: 1 },
          { label: "Físico (contacto no deseado)", value: "fisico", score: 2 },
          {
            label: "Sexual (insinuaciones, tocamientos)",
            value: "sexual",
            score: 2,
          },
          {
            label: "Psicológico (intimidación, aislamiento)",
            value: "psicologico",
            score: 1,
          },
        ],
      },
      {
        id: "jerarquia",
        text: "¿Quién es la persona que lo ejerce?",
        options: [
          {
            label: "Mi jefe o supervisor directo",
            value: "superior",
            score: 2,
          },
          { label: "Un compañero/a de trabajo", value: "par", score: 1 },
          { label: "Alguien externo a la empresa", value: "externo", score: 1 },
        ],
      },
      {
        id: "impacto",
        text: "¿Cómo afecta esto tu trabajo o bienestar?",
        options: [
          {
            label: "Afecta mucho mi desempeño y salud",
            value: "alto",
            score: 2,
          },
          { label: "Me afecta de forma moderada", value: "medio", score: 1 },
          { label: "Me incomoda pero no me detiene", value: "bajo", score: 0 },
        ],
      },
    ],
  },

  discriminacion: {
    label: "Discriminación",
    minScore: MIN_SCORE,
    questions: [
      {
        id: "motivo",
        text: "¿Por qué crees que recibes ese trato diferente?",
        options: [
          { label: "Género o identidad sexual", value: "genero", score: 2 },
          { label: "Origen étnico o nacional", value: "origen", score: 2 },
          { label: "Edad", value: "edad", score: 1 },
          { label: "Otro motivo personal", value: "otro", score: 1 },
        ],
      },
      {
        id: "manifestacion",
        text: "¿Cómo se manifestó la situación?",
        options: [
          {
            label: "Recibí un trato claramente diferente",
            value: "trato",
            score: 2,
          },
          {
            label: "Fui excluido/a de actividades",
            value: "exclusion",
            score: 2,
          },
          {
            label: "Escuché comentarios o insultos",
            value: "insulto",
            score: 1,
          },
        ],
      },
      {
        id: "intencion",
        text: "¿Crees que fue intencional?",
        options: [
          {
            label: "Sí, fue claramente a propósito",
            value: "intencional",
            score: 2,
          },
          { label: "Probablemente sí", value: "probable", score: 1 },
          { label: "No estoy seguro/a", value: "dudoso", score: 0 },
        ],
      },
      {
        id: "impacto",
        text: "¿Cómo afecta esto tu trabajo o bienestar?",
        options: [
          {
            label: "Afecta mucho mi desempeño y salud",
            value: "alto",
            score: 2,
          },
          { label: "Me afecta de forma moderada", value: "medio", score: 1 },
          { label: "Me incomoda pero no me detiene", value: "bajo", score: 0 },
        ],
      },
    ],
  },
};
