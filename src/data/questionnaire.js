// ── data/questionnaire.js ─────────────────────────────────────────────────

import { label } from "framer-motion/client";

export const QUESTIONS = [
  {
    id: "frecuencia",
    step: "Pregunta 1 de 7 — Contexto general",
    text: "¿Con qué frecuencia ocurre la situación?",
    why: "La frecuencia es uno de los indicadores más importantes. Según el taller de Echecopar (2026), la conducta de hostigamiento sexual se define como aquella que puede crear un ambiente hostil o intimidatorio — lo que suele construirse con el tiempo y la repetición. A nivel global, la OIT registra que 205 millones de trabajadores han vivido situaciones de hostigamiento en algún momento de su vida laboral.",
    whySrc:
      "Fuente: Taller especializado Echecopar 2026, slides 13 y 17 · OIT/Gallup Survey 2022",
    options: [
      {
        label: "Ocurre constantemente",
        desc: "Pasa casi todos los días o varias veces por semana. Ya anticipas que va a ocurrir.",
        eg: "Ejemplo: tu jefe hace comentarios sobre tu apariencia cada mañana.",
        scores: { acoso: 2, disc: 2 },
      },
      {
        label: "Ha pasado varias veces",
        desc: "Ha ocurrido en más de una ocasión, aunque no todos los días.",
        eg: "Ejemplo: en tres reuniones del último mes te interrumpieron o ignoraron de forma diferente al resto.",
        scores: { acoso: 1, disc: 1 },
      },
      {
        label: "Solo ocurrió una vez",
        desc: "Fue un incidente único hasta ahora.",
        eg: "Ejemplo: un compañero te tocó el hombro de forma incómoda en la última reunión.",
        scores: { acoso: 0, disc: 1 },
      },
    ],
  },
  {
    id: "quien",
    step: "Pregunta 2 de 7 — Contexto general",
    text: "¿Quién ejerce esta situación hacia ti?",
    why: "La relación jerárquica con la persona involucrada determina el tipo de procedimiento que debe activarse. Según el Reglamento de la Ley de Prevención y Sanción del Hostigamiento Sexual en Perú y el taller Echecopar 2026, cuando el hostigador tiene autoridad sobre la víctima, la investigación debe ser asumida por la empresa principal. El Código de Conducta de Inchcape refuerza que aplica a todas las relaciones laborales sin importar el nivel jerárquico.",
    whySrc:
      "Fuente: Taller Echecopar 2026, slide 27 (tabla de obligaciones) · Código de Conducta Inchcape, pp. 24-27",
    options: [
      {
        label: "Mi jefe o supervisor directo",
        desc: "Alguien que tiene autoridad formal sobre tu trabajo, evaluaciones o permanencia en la empresa.",
        eg: "Ejemplo: gerente de área, supervisor de turno, coordinador de equipo.",
        scores: { acoso: 2, disc: 2 },
      },
      {
        label: "Un compañero/a de trabajo",
        desc: "Alguien en un nivel similar al tuyo, sin autoridad formal sobre ti.",
        eg: "Ejemplo: colega del mismo equipo, compañero de otro departamento.",
        scores: { acoso: 1, disc: 1 },
      },
      {
        label: "Alguien externo a la empresa",
        desc: "Cliente, proveedor o tercero que opera en el espacio laboral de Inchcape.",
        eg: "Ejemplo: representante de una marca, técnico de un proveedor.",
        scores: { acoso: 1, disc: 0 },
      },
    ],
  },
  {
    id: "impacto",
    step: "Pregunta 3 de 7 — Contexto general",
    text: "¿Cómo está afectando esto tu trabajo o bienestar?",
    why: "El impacto personal es el tercer elemento que define una conducta como hostigamiento según la ley peruana (taller Echecopar, slide 17): la conducta puede crear un ambiente intimidatorio, hostil o humillante, aunque no siempre se requiere evidencia tangible del daño. Inchcape reconoce cuatro dimensiones de bienestar: físico, mental, social y financiero.",
    whySrc:
      "Fuente: Taller Echecopar 2026, slide 17 (Elemento 3) · Presentación Corporativa Inchcape 2026 (Wellbeing)",
    options: [
      {
        label: "Afecta mucho mi desempeño y salud",
        desc: "Tienes dificultades para concentrarte, duermes mal, evitas ir al trabajo o sientes miedo.",
        eg: "Ejemplo: has empezado a llegar tarde o a pedir días libres para no coincidir con esa persona.",
        scores: { acoso: 2, disc: 2 },
      },
      {
        label: "Me afecta de forma moderada",
        desc: "Notas estrés o incomodidad pero puedes seguir trabajando con esfuerzo.",
        eg: "Ejemplo: te sientes tenso/a en reuniones y evitas hablar en presencia de esa persona.",
        scores: { acoso: 1, disc: 1 },
      },
      {
        label: "Me incomoda pero no me detiene",
        desc: "Te molesta pero no ha cambiado tu desempeño aún.",
        eg: "Ejemplo: el comentario fue desagradable pero sigues trabajando con normalidad.",
        scores: { acoso: 0, disc: 0 },
      },
    ],
  },
  {
    id: "naturaleza",
    step: "Pregunta 4 de 7 — Naturaleza del hecho",
    text: "¿Cómo describirías mejor lo que ocurre?",
    why: "La ley peruana distingue entre conductas de naturaleza sexual o sexista (acoso) y conductas que generan un trato desigual por características personales (discriminación). El taller Echecopar 2026 detalla que los actos de hostigamiento incluyen comentarios, miradas, tocamientos, proposiciones y contacto virtual — un rango amplio y abierto. El Código de Conducta Inchcape añade que el trato diferente injustificado también constituye una infracción ética.",
    whySrc:
      "Fuente: Taller Echecopar 2026, slides 14 y 15 · Código de Conducta Inchcape, pp. 24-27",
    options: [
      {
        label: "Comentarios, burlas o insultos",
        desc: "Palabras con carga sexual, sobre tu apariencia, o que refuerzan estereotipos de género.",
        eg: "Ejemplo: 'qué buena estás hoy' de forma reiterada, o 'los de tu país son todos iguales'.",
        scores: { acoso: 1, disc: 2 },
      },
      {
        label: "Contacto físico no deseado",
        desc: "Tocamientos, roces, abrazos o acercamientos corporales sin tu consentimiento.",
        eg: "Ejemplo: alguien te toca el hombro, la mano o te da palmadas que te incomodan.",
        scores: { acoso: 3, disc: 0 },
      },
      {
        label: "Me tratan diferente sin razón aparente",
        desc: "Recibes un trato distinto al de tus colegas en tareas, oportunidades o decisiones.",
        eg: "Ejemplo: no te incluyen en proyectos nuevos o te dan las peores tareas.",
        scores: { acoso: 0, disc: 3 },
      },
      {
        label: "Me excluyen de actividades o decisiones",
        desc: "Te dejan fuera de reuniones, grupos de comunicación o decisiones del equipo.",
        eg: "Ejemplo: te omiten del chat del equipo o no te invitan a eventos internos.",
        scores: { acoso: 0, disc: 2 },
      },
      {
        label: "Me intimidan o amenazan",
        desc: "Te presionan, te hacen sentir que tu trabajo está en riesgo o usan su poder para controlarte.",
        eg: "Ejemplo: 'si sigues quejándote, ya veremos qué pasa en tu evaluación'.",
        scores: { acoso: 2, disc: 1 },
      },
    ],
  },
  {
    id: "intencion",
    step: "Pregunta 5 de 7 — Naturaleza del hecho",
    text: "¿Sientes que la intención es hacerte daño o incomodarte?",
    why: "El consentimiento y la intención son centrales en la definición legal. El taller Echecopar 2026 explica que el consentimiento es libre, entusiasta, específico, informado y reversible — no es la mera ausencia de un 'no'. La ley peruana no exige que hayas rechazado expresamente la conducta para que sea considerada hostigamiento.",
    whySrc:
      "Fuente: Taller Echecopar 2026, slide 16 (Elemento 2: conducta no deseada)",
    options: [
      {
        label: "Sí, claramente",
        desc: "La persona sabe que su comportamiento te molesta y lo hace igual.",
        eg: "Ejemplo: le dijiste que sus comentarios te incomodan y continuó haciéndolos.",
        scores: { acoso: 2, disc: 2 },
      },
      {
        label: "Probablemente sí",
        desc: "No te lo ha dicho explícitamente, pero el contexto sugiere que lo hace a propósito.",
        eg: "Ejemplo: solo actúa así contigo, no con otros compañeros en situaciones similares.",
        scores: { acoso: 1, disc: 1 },
      },
      {
        label: "No estoy seguro/a",
        desc: "Podría ser falta de sensibilidad o costumbre, no está claro si hay intención.",
        eg: "Ejemplo: el comentario fue inapropiado pero puede ser que la persona no se dé cuenta del impacto.",
        scores: { acoso: 0, disc: 0 },
      },
    ],
  },
  {
    id: "motivo",
    step: "Pregunta 6 de 7 — Detalles del caso",
    text: "¿Crees que el trato tiene que ver con alguna característica tuya?",
    why: "La discriminación se distingue del acoso principalmente porque está motivada por una característica personal protegida: género, origen, edad, discapacidad, entre otras. El Código de Conducta de Inchcape prohíbe explícitamente el trato diferente basado en estas características. En Perú, el 90.46% de denuncias de hostigamiento sexual son presentadas por mujeres, según datos históricos del MTPE.",
    whySrc:
      "Fuente: Código de Conducta Inchcape, pp. 24-27 · Taller Echecopar 2026, slides 11 y 15",
    options: [
      {
        label: "Sí, por mi género o identidad sexual",
        desc: "El trato diferente parece relacionado con ser mujer, hombre, o con tu identidad de género u orientación sexual.",
        eg: "Ejemplo: 'las mujeres son más emocionales para este tipo de trabajo'.",
        scores: { acoso: 1, disc: 3 },
      },
      {
        label: "Sí, por mi origen, etnia o edad",
        desc: "Recibes trato diferente relacionado con de dónde vienes, tu aspecto étnico o cuántos años tienes.",
        eg: "Ejemplo: 'para tu edad ya no aprendes tan rápido'.",
        scores: { acoso: 0, disc: 3 },
      },
      {
        label: "Sí, por otra condición personal",
        desc: "Relacionado con discapacidad, estado civil, situación económica u otra condición.",
        eg: "Ejemplo: te excluyen de viajes de trabajo porque tienes hijos pequeños.",
        scores: { acoso: 0, disc: 2 },
      },
      {
        label: "No, parece algo personal hacia mí",
        desc: "El comportamiento parece dirigido específicamente a ti, no por una característica de grupo.",
        eg: "Ejemplo: solo ocurre contigo entre todos tus compañeros, sin ningún motivo de grupo.",
        scores: { acoso: 2, disc: 0 },
      },
      {
        label: "No lo sé",
        desc: "Aún no puedes identificar si hay una razón detrás del trato.",
        eg: "Ejemplo: el comportamiento es inconsistente y no encuentras un patrón claro.",
        scores: { acoso: 0, disc: 0 },
      },
    ],
  },
  {
    id: "patron",
    step: "Pregunta 7 de 7 — Detalles del caso",
    text: "¿Notas algún patrón en cuándo o con quién ocurre?",
    why: "Los patrones ayudan a distinguir incidentes aislados de conductas sistemáticas. La guía del taller Echecopar 2026 recomienda como primer paso de investigación revisar la denuncia y preparar una línea temporal. Las tres causas legales para valorar una denuncia incluyen la persistencia en la incriminación y la verosimilitud del testimonio.",
    whySrc:
      "Fuente: Taller Echecopar 2026, slides 28 y 32 · Reglamento Ley 27942, art. 20",
    options: [
      {
        label: "Sí, siempre con la misma persona",
        desc: "La conducta viene de una sola persona de forma sistemática.",
        eg: "Ejemplo: es siempre tu supervisor el que hace los comentarios o el contacto físico.",
        scores: { acoso: 2, disc: 1 },
      },
      {
        label: "Sí, en ciertos contextos o grupos",
        desc: "Ocurre en reuniones específicas, con determinado equipo, o en ciertos espacios.",
        eg: "Ejemplo: solo pasa en las reuniones de cierre de mes o en turno de tarde.",
        scores: { acoso: 0, disc: 2 },
      },
      {
        label: "No, parece aleatorio",
        desc: "No encuentras un patrón claro de persona, lugar o momento.",
        eg: "Ejemplo: distintas personas, en distintos contextos, sin regularidad aparente.",
        scores: { acoso: 1, disc: 0 },
      },
    ],
  },
];

export const MIN_SCORE = 5;
export const DIFF_SCORE = 2;

export const RESULTS = {
  Acoso: {
    badge: "Posible caso de acoso",
    title: "Las respuestas apuntan a una situación de acoso laboral",
    subtitle:
      "Esto no es tu culpa. El acoso laboral, incluyendo el hostigamiento sexual, está prohibido por la ley peruana (Ley 27942) y por el Código de Conducta de Inchcape.",
    definicion:
      "Según el taller especializado de Echecopar (2026), el hostigamiento sexual es 'toda conducta de naturaleza sexual o sexista no deseada que pudiera comprometer la relación laboral o generar un ambiente hostil o intimidatorio'. No necesitas haber dicho 'no' explícitamente para que tu denuncia sea válida — el consentimiento debe ser libre, entusiasta y específico (slide 16).",
    ejemplo:
      "Si tu supervisor hace comentarios sobre tu cuerpo en reuniones o te toca de forma repetida aunque le hayas pedido que pare, eso configura hostigamiento sexual con componente de abuso de autoridad — uno de los casos más frecuentes en el MTPE de Perú, donde se registraron 1,840 denuncias en 2025.",
    proceso:
      "El procedimiento en Inchcape es claro (taller Echecopar, slide 26): (1) presentas tu denuncia a RR.HH. o por un canal externo, (2) RR.HH. activa el Comité de Intervención en 1 día hábil y adopta medidas de protección en 3 días hábiles, (3) el Comité investiga en hasta 15 días calendario, (4) RR.HH. emite decisión final en 10 días adicionales. Todo el proceso es confidencial.",
    canales: [
      {
        label: "www.inchcape.ethicspoint.com",
        desc: "Plataforma anónima de denuncias",
        url: "https://secure.ethicspoint.eu/domain/media/en/gui/104822/index.html",
      },
      {
        label: "Marco de denuncias Inchcape",
        desc: "inchcape.com/es-co/…/marco-de-denuncias",
        url: "https://www.inchcape.com/es-co/sostenibilidad/nuestro-enfoque/ruta-sostenible-al-mercado/pr%C3%A1cticas/marco-de-denuncias",
      },
      {
        label: "MTPE",
        desc: "Ministerio de Trabajo del Perú — canal estatal externo",
        url: "https://www.gob.pe/mtpe",
      },
    ],
  },
  Discriminación: {
    badge: "Posible caso de discriminación",
    title: "Las respuestas apuntan a una situación de discriminación laboral",
    subtitle:
      "Tienes derecho a un trato igualitario. La discriminación por género, origen, edad u otra condición personal está prohibida por el Código de Conducta de Inchcape y por la legislación laboral peruana.",
    definicion:
      "El Código de Conducta de Inchcape (pp. 24-27, sección de Inclusión, Diversidad y Antidiscriminación) prohíbe el trato diferente basado en características personales. El taller Echecopar 2026 (slide 15) define los actos sexistas como aquellos que refuerzan estereotipos en los que un género está subordinado al otro.",
    ejemplo:
      "Si en tu equipo los proyectos más visibles siempre se asignan a hombres y tú, con igual experiencia, recibes sistemáticamente tareas administrativas — o si recibes comentarios sobre tu edad para no asignarte ciertos roles — eso es discriminación laboral. En Inchcape Perú, el 33% de contrataciones en posiciones de liderazgo son mujeres; hay un compromiso activo de reducir estas brechas.",
    proceso:
      "Pasos recomendados: (1) documenta los hechos con fechas, testigos y evidencias, (2) presenta tu denuncia a RR.HH. o al canal ético externo, (3) el proceso sigue los plazos del protocolo Inchcape con confidencialidad garantizada, (4) si la discriminación tiene base en género, también puede activarse el canal de hostigamiento sexual para mayor protección legal.",
    canales: [
      {
        label: "www.inchcape.ethicspoint.com",
        desc: "Canal anónimo y externo",
        url: "https://secure.ethicspoint.eu/domain/media/en/gui/104822/index.html",
      },
      {
        label: "Código de Conducta Inchcape",
        desc: "Sección de Inclusión y Diversidad, pp. 24-27",
        url: "https://www.inchcape.com/pdf-viewer.aspx?gid=308187638&src=%2F%7E%2Fmedia%2Ffiles%2Fi%2Finchcape%2Fcorp%2Fsustainability%2Fsustainable-route-to-market%2Fpractices%2Fcode-of-conduct%2Fcode+of+conduct+spanish.pdf",
      },
      {
        label: "SUNAFIL",
        desc: "Superintendencia Nacional de Fiscalización Laboral",
        url: "https://www.gob.pe/sunafil",
      },
    ],
  },
  "Caso ambiguo": {
    badge: "Situación no determinada",
    title: "No fue posible determinar el tipo de situación con claridad",
    subtitle:
      "Esto no significa que lo que viviste no sea serio. Significa que necesitas orientación personalizada para evaluar mejor el caso.",
    definicion:
      "Muchas situaciones laborales incómodas no encajan perfectamente en una categoría legal desde el primer momento. El taller Echecopar 2026 (slide 23) advierte que 'no es posible establecer a priori, sin conocer las circunstancias, si un acto es o no hostigamiento sexual'. La OIT reporta que el 55% de personas que no denuncian lo hacen porque pensaron que era pérdida de tiempo — lo cual puede ser un error.",
    ejemplo:
      "Si recibes trato diferente pero no puedes identificar si es por tu género, personalidad o un conflicto previo; o si hubo un comentario incómodo pero fue aislado y sin patrón claro — tu situación puede requerir un análisis más profundo con alguien capacitado. Incluso los casos ambiguos deben ser documentados.",
    proceso:
      "Pasos recomendados: (1) documenta los hechos aunque sean difusos — fecha, lugar, testigos, lo que se dijo o hizo, (2) conversa de forma confidencial con RR.HH. para orientación inicial sin compromiso, (3) revisa el Marco de Denuncias de Inchcape para entender tus opciones, (4) un especialista puede ayudarte a encuadrar mejor la situación.",
    canales: [
      {
        label: "www.inchcape.ethicspoint.com",
        desc: "Consulta anónima disponible",
        url: "https://secure.ethicspoint.eu/domain/media/en/gui/104822/index.html",
      },
      {
        label: "Código de Conducta Inchcape",
        desc: "Mantente informado sobre tus derechos y los canales disponibles",
        url: "https://www.inchcape.com/pdf-viewer.aspx?gid=308187638&src=%2F%7E%2Fmedia%2Ffiles%2Fi%2Finchcape%2Fcorp%2Fsustainability%2Fsustainable-route-to-market%2Fpractices%2Fcode-of-conduct%2Fcode+of+conduct+spanish.pdf",
      },
    ],
  },
};
