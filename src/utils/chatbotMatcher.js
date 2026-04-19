// ── utils/chatbotMatcher.js ───────────────────────────────────────────────
// Lógica para encontrar la mejor respuesta según el mensaje del usuario.

import { FAQ, FALLBACK_RESPONSE } from "../data/chatbotFAQ";

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .trim();
}

export function findResponse(userMessage) {
  const normalized = normalize(userMessage);

  let bestMatch = null;
  let bestScore = 0;

  for (const entry of FAQ) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (normalized.includes(normalize(keyword))) {
        // Frases más largas pesan más
        score += keyword.split(" ").length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.answer;
  }

  return FALLBACK_RESPONSE;
}
