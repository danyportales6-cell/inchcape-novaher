// ── data/chatbotFAQ.js ────────────────────────────────────────────────────

import { li, link } from "framer-motion/client";

export const FAQ = [
  // ── Saludos ───────────────────────────────────────────────────────────────
  {
    id: "saludo",
    keywords: [
      "hola",
      "buenos días",
      "buenas tardes",
      "buenas noches",
      "hey",
      "hi",
      "buenas",
    ],
    question: "",
    answer:
      "Hola, estoy aquí para ayudarte. Puedes preguntarme sobre acoso, discriminación, cómo reportar una situación, los plazos del proceso o cualquier duda relacionada. Todo lo que hablemos es confidencial.",
  },
  {
    id: "gracias",
    keywords: [
      "gracias",
      "muchas gracias",
      "thank you",
      "perfecto",
      "genial",
      "ok gracias",
      "de nada",
    ],
    question: "",
    answer:
      "Con gusto. Recuerda que no estás solo/a en esto. Si en algún momento necesitas dar un siguiente paso, los canales de Inchcape están disponibles para ti.",
  },

  // ── Qué es el hostigamiento / acoso ──────────────────────────────────────
  {
    id: "que_es_hostigamiento",
    keywords: [
      "qué es hostigamiento",
      "que es hostigamiento",
      "qué es acoso",
      "que es acoso",
      "acoso laboral",
      "hostigamiento sexual",
      "qué significa hostigamiento",
      "definición acoso",
      "definicion acoso",
      "definición hostigamiento",
    ],
    question: "¿Qué es el hostigamiento sexual?",
    answer:
      "El hostigamiento sexual es toda conducta de naturaleza sexual o sexista no deseada que pudiera comprometer la relación laboral o generar un ambiente hostil o intimidatorio. Tiene tres elementos: (1) debe ser de naturaleza sexual o sexista, (2) debe ser no deseada o no consentida, y (3) puede causar un ambiente hostil o perjudicar tu situación laboral — aunque no siempre se requiere probar estas consecuencias.\n\n_Fuente: Taller especializado Echecopar 2026, slide 13_",
  },
  {
    id: "actos_naturaleza_sexual",
    keywords: [
      "qué actos",
      "que actos",
      "ejemplos de acoso",
      "qué incluye",
      "que incluye",
      "tocamientos",
      "comentarios sexuales",
      "insinuaciones",
      "miradas",
      "proposiciones",
      "contacto virtual",
      "material pornografico",
      "material pornográfico",
    ],
    question: "¿Qué actos se consideran hostigamiento sexual?",
    answer:
      "La ley considera un rango amplio de conductas, incluyendo: comentarios e insinuaciones de connotación sexual; observaciones o miradas lascivas; exhibición de material pornográfico; tocamientos, roces o acercamientos corporales; exigencias o proposiciones sexuales; y contacto virtual en el marco de coordinaciones laborales (teletrabajo).\n\n_Fuente: Taller Echecopar 2026, slide 14 — Elemento 1: Acto de Naturaleza Sexual_",
  },
  {
    id: "actos_sexistas",
    keywords: [
      "sexista",
      "estereotipos",
      "estereotipo de género",
      "comentarios sobre rol",
      "rol de la mujer",
      "actitudes sexistas",
      "qué es sexista",
    ],
    question: "¿Qué son los actos sexistas?",
    answer:
      "Los actos sexistas son comportamientos que promueven o refuerzan estereotipos de género — por ejemplo, decir que 'las mujeres deben cumplir su rol de madre primero'. Estos actos suponen la subordinación de un sexo o género respecto del otro y también están incluidos en la definición legal de hostigamiento sexual.\n\n_Fuente: Taller Echecopar 2026, slide 15 — Elemento 1: Acto de Naturaleza Sexista · ENARES 2019_",
  },
  {
    id: "consentimiento",
    keywords: [
      "consentimiento",
      "no dije que no",
      "no rechacé",
      "no rechace",
      "no lo exprese",
      "qué es consentir",
      "que es consentir",
      "es lo mismo que rechazar",
    ],
    question: "No rechacé la conducta expresamente, ¿igual cuenta?",
    answer:
      "Sí. El consentimiento no es la ausencia de un 'no'. La ley define que una conducta es no deseada cuando no hay un consentimiento que sea libre, entusiasta, específico, informado y reversible. No necesitas haber dicho 'no' para que tu denuncia sea válida.\n\n_Fuente: Taller Echecopar 2026, slide 16 — Elemento 2: Conducta no deseada_",
  },
  {
    id: "ambiente_hostil",
    keywords: [
      "ambiente hostil",
      "me siento mal en el trabajo",
      "entorno incómodo",
      "no quiero ir al trabajo",
      "afecta mi desempeño",
      "consecuencias en el trabajo",
    ],
    question:
      "¿El hostigamiento tiene que afectarme laboralmente para ser válido?",
    answer:
      "No necesariamente. El hostigamiento sexual puede crear un ambiente intimidatorio, hostil o humillante, o afectar tu situación laboral — pero la ley peruana establece que no siempre se requieren dichas consecuencias para que sea considerado hostigamiento.\n\n_Fuente: Taller Echecopar 2026, slide 17 — Elemento 3: Potencial consecuencia negativa_",
  },

  // ── Dónde puede ocurrir ───────────────────────────────────────────────────
  {
    id: "donde_ocurre",
    keywords: [
      "dónde puede ocurrir",
      "donde puede ocurrir",
      "fuera del trabajo",
      "viaje de trabajo",
      "evento de empresa",
      "teletrabajo acoso",
      "whatsapp acoso",
      "virtual",
      "capacitación",
    ],
    question: "¿El acoso solo ocurre en la oficina?",
    answer:
      "No. El hostigamiento sexual laboral puede producirse en muchos contextos: en el centro de trabajo, durante viajes de trabajo, en capacitaciones, en eventos laborales de la empresa, fuera de la jornada de trabajo, e incluso a través de medios digitales durante coordinaciones laborales o teletrabajo.\n\n_Fuente: Taller Echecopar 2026, slide 18_",
  },

  // ── Discriminación ───────────────────────────────────────────────────────
  {
    id: "que_es_discriminacion",
    keywords: [
      "qué es discriminación",
      "que es discriminacion",
      "discriminación laboral",
      "trato diferente",
      "trato desigual",
      "me tratan diferente",
      "exclusión laboral",
    ],
    question: "¿Qué es la discriminación laboral?",
    answer:
      "La discriminación ocurre cuando recibes un trato diferente e injustificado por características como tu género, origen étnico, edad, discapacidad u otra condición personal. Está expresamente prohibida por el Código de Conducta de Inchcape en su sección de Inclusión, Diversidad y Antidiscriminación.\n\n_Fuente: Código de Conducta Inchcape, pp. 24-27_",
  },

  // ── Estadísticas ─────────────────────────────────────────────────────────
  {
    id: "estadisticas_mundo",
    keywords: [
      "cuántas personas",
      "cuantas personas",
      "estadísticas",
      "estadisticas",
      "datos",
      "cifras",
      "en el mundo",
      "oit",
      "gallup",
    ],
    question: "¿Cuántas personas sufren hostigamiento sexual en el mundo?",
    answer:
      "Según la OIT (2022), 205 millones de trabajadores han experimentado hostigamiento sexual en algún momento de su vida laboral. Esta cifra proviene de la encuesta ILO-Lloyd's Register Foundation-Gallup Survey.\n\n_Fuente: Taller Echecopar 2026, slide 6_",
  },
  {
    id: "estadisticas_peru",
    keywords: [
      "perú",
      "peru",
      "estadísticas peru",
      "casos en peru",
      "denuncias peru",
      "mtpe",
      "ministerio de trabajo",
      "cuántos casos",
      "cuantos casos",
    ],
    question: "¿Cuál es la situación del hostigamiento en Perú?",
    answer:
      "En Perú, las denuncias ante el MTPE han crecido significativamente: de 73 casos en 2018 a 1,840 en 2025. El 90.46% de las personas denunciantes son mujeres, según datos históricos del Ministerio de Trabajo. Sin embargo, estas cifras no reflejan el universo total de casos reales, ya que muchos no se reportan.\n\n_Fuente: Taller Echecopar 2026, slides 10 y 11 · MTPE_",
  },
  {
    id: "por_que_no_denuncian",
    keywords: [
      "por qué no denuncian",
      "por que no denuncian",
      "razones para no denunciar",
      "miedo a denunciar",
      "barreras para denunciar",
      "no quiero denunciar",
    ],
    question: "¿Por qué muchas personas no denuncian?",
    answer:
      "Según la encuesta OIT/Gallup (2022), las principales razones son: el 55% pensó que era pérdida de tiempo, el 45% temió ganar mala reputación, el 43% no tenía claro el procedimiento, el 41% temió que no fuera confidencial, el 38% no supo cómo denunciar, y el 33% tuvo miedo a ser sancionado. Estas barreras son reales, pero existen canales diseñados específicamente para superarlas.\n\n_Fuente: Taller Echecopar 2026, slide 8 · ILO-Gallup Survey 2022_",
  },

  // ── Cómo reportar ────────────────────────────────────────────────────────
  {
    id: "como_reportar",
    keywords: [
      "cómo reportar",
      "como reportar",
      "dónde denunciar",
      "donde denunciar",
      "cómo denunciar",
      "como denunciar",
      "quiero reportar",
      "quiero denunciar",
      "canales",
      "dónde acudo",
      "donde acudo",
    ],
    question: "¿Cómo puedo reportar una situación?",
    answer: [
      { text: "Tienes varias opciones y todas son confidenciales:" },
      {
        text: "• RR.HH. Inchcape — canal interno directo hablar con tu jefe directo",
      },
      {
        text: "• www.inchcape.ethicspoint.com — plataforma anónima externa ",
        link: "https://secure.ethicspoint.eu/domain/media/en/gui/104822/index.html",
      },
      {
        text: "• Marco de denuncias Inchcape — inchcape.com/es-co/sostenibilidad/…/marco-de-denuncias",
        link: "https://www.inchcape.com/es-co/sostenibilidad/nuestro-enfoque/ruta-sostenible-al-mercado/prácticas/marco-de-denuncias",
      },
      {
        text: "• Código de Conducta Inchcape — página 8: búsqueda de orientación",
        link: "https://www.inchcape.com/pdf-viewer.aspx?pdf=code-of-conduct-spanish",
      },
      {
        text: "• MTPE — canal estatal si prefieres una vía externa",
        link: "https://www.gob.pe/mtpe",
      },
      {
        text: "La denuncia puede ser presentada por la persona afectada o por un tercero en su nombre.",
      },
      {
        text: "_Fuente: Taller Echecopar 2026, slide 26 · Protocolos y Códigos Inchcape_",
      },
    ],
  },
  {
    id: "codigo_conducta",
    keywords: [
      "código de conducta",
      "codigo de conducta",
      "política",
      "politica",
      "normas",
      "reglas",
      "reglamento inchcape",
      "dónde leer",
      "donde leer",
    ],
    question: "¿Dónde puedo leer el Código de Conducta de Inchcape?",
    answer: [
      {
        text: "Puedes consultarlo en nuestra plataforma \n\nLas secciones más relevantes son:\n• Búsqueda de orientación: página 8\n• Inclusión, diversidad y antidiscriminación: páginas 24 a 27\n\n_Fuente: Protocolos y Códigos Inchcape_",

        link: "https://www.inchcape.com/pdf-viewer.aspx?pdf=code-of-conduct-spanish",
      },
    ],
  },
  {
    id: "marco_denuncias",
    keywords: [
      "marco de denuncias",
      "ethicspoint",
      "web de denuncias",
      "plataforma de denuncias",
      "canal anónimo",
      "canal anonimo",
      "denuncia anónima",
      "denuncia anonima",
    ],
    question: "¿Qué es el canal EthicsPoint?",
    answer: [
      {
        text: "EthicsPoint es la plataforma externa y anónima de Inchcape para presentar denuncias.",

        link: "https://www.inchcape.ethicspoint.com",
      },
    ],
  },

  // ── Proceso y plazos ─────────────────────────────────────────────────────
  {
    id: "plazos",
    keywords: [
      "cuánto tiempo",
      "cuanto tiempo",
      "plazos",
      "cuándo resuelven",
      "cuando resuelven",
      "días",
      "dias",
      "tiempo demora",
      "proceso cuánto dura",
      "proceso cuanto dura",
    ],
    question: "¿Cuánto tiempo toma el proceso de investigación?",
    answer:
      "El protocolo de Inchcape tiene plazos claros desde la presentación de la denuncia:\n\n• **Medidas de protección:** hasta 3 días hábiles\n• **Registro ante el MTPE:** hasta 6 días hábiles\n• **Traslado al Comité:** 1 día hábil\n• **Investigación del Comité:** hasta 15 días calendario\n• **Decisión final de RR.HH.:** hasta 10 días calendario adicionales\n• **Comunicación al MTPE:** hasta 6 días hábiles desde la decisión final\n\n_Fuente: Taller Echecopar 2026, slide 26_",
  },
  {
    id: "medidas_proteccion",
    keywords: [
      "medidas de protección",
      "medidas de proteccion",
      "me van a proteger",
      "qué pasa después de denunciar",
      "que pasa despues",
      "protección inmediata",
    ],
    question: "¿Me protegen mientras se investiga?",
    answer:
      "Sí. Una vez recibida la denuncia, RR.HH. debe adoptar medidas de protección a favor de la persona denunciante y los testigos en un plazo máximo de 3 días hábiles. Estas medidas buscan garantizar tu seguridad y evitar represalias durante la investigación.\n\n_Fuente: Taller Echecopar 2026, slide 26_",
  },
  {
    id: "comite",
    keywords: [
      "comité",
      "comite",
      "quién investiga",
      "quien investiga",
      "cifhs",
      "comité de intervención",
      "comite de intervencion",
    ],
    question: "¿Quién investiga mi denuncia?",
    answer:
      "El Comité de Intervención frente al Hostigamiento Sexual (CIFHS) es el órgano encargado de investigar. RR.HH. traslada la denuncia al Comité en 1 día hábil. El Comité notifica al denunciado, le da un plazo de descargos, realiza las diligencias necesarias y elabora un informe con hallazgos y recomendaciones.\n\n_Fuente: Taller Echecopar 2026, slides 26 y 27_",
  },
  {
    id: "denuncia_contra_rrhh",
    keywords: [
      "denuncia contra rrhh",
      "denuncia contra rr.hh",
      "si el acosador es de rrhh",
      "miembro del comité",
      "qué pasa si es de rrhh",
      "que pasa si es de rrhh",
    ],
    question:
      "¿Qué pasa si la denuncia es contra alguien de RR.HH. o del Comité?",
    answer:
      "Si la denuncia es formulada contra un miembro del CIFHS o personal de RR.HH., existe un procedimiento alternativo para garantizar la imparcialidad. En ese caso, te recomendamos usar directamente el canal externo **www.inchcape.ethicspoint.com** o el Marco de Denuncias de Inchcape.\n\n_Fuente: Taller Echecopar 2026, slide 35_",
  },
  {
    id: "retirar_denuncia",
    keywords: [
      "retirar denuncia",
      "quitar denuncia",
      "me arrepentí",
      "me arrepenti",
      "ya no quiero denunciar",
      "puedo retirar",
      "desestimar denuncia",
    ],
    question: "¿Puedo retirar mi denuncia después de presentarla?",
    answer:
      "Una vez presentada la denuncia, no puede desestimarse únicamente por la voluntad de la persona denunciante de retirarla. Esto es una garantía: protege tanto a la víctima (que podría ser presionada a retirarla) como la integridad del proceso de investigación.\n\n_Fuente: Taller Echecopar 2026, slide 35_",
  },
  {
    id: "documentos_digitales",
    keywords: [
      "firma digital",
      "documentos digitales",
      "firmar digitalmente",
      "documentos electronicos",
      "documentos electrónicos",
      "se puede firmar digital",
    ],
    question: "¿Los documentos del proceso pueden firmarse digitalmente?",
    answer:
      "Sí. Los documentos que se emitan o utilicen en el marco de la investigación pueden ser suscritos de manera digital, lo que facilita el proceso especialmente en contextos de teletrabajo.\n\n_Fuente: Taller Echecopar 2026, slide 35_",
  },

  // ── Confidencialidad ─────────────────────────────────────────────────────
  {
    id: "es_confidencial",
    keywords: [
      "confidencial",
      "anónimo",
      "anonimo",
      "se va a saber",
      "van a saber",
      "privacidad",
      "me van a identificar",
      "es privado",
    ],
    question: "¿Mi denuncia es confidencial?",
    answer:
      "Sí. El proceso está diseñado para proteger tu identidad. Puedes usar **www.inchcape.ethicspoint.com** de forma completamente anónima. RR.HH. también está obligado a mantener la confidencialidad durante todo el proceso. Además, el 41% de quienes no denuncian lo hace por temor a que no sea confidencial — pero ese miedo no debería impedirte buscar ayuda.\n\n_Fuente: Taller Echecopar 2026, slide 8 · Protocolos Inchcape_",
  },

  // ── Represalias y miedo ──────────────────────────────────────────────────
  {
    id: "miedo_represalia",
    keywords: [
      "miedo",
      "represalia",
      "me van a despedir",
      "consecuencias",
      "miedo a reportar",
      "me van a hacer algo",
      "venganza",
      "me sancionarán",
      "me sancionaran",
    ],
    question: "Tengo miedo de las represalias, ¿qué hago?",
    answer:
      "Es completamente normal sentir ese miedo — la encuesta OIT/Gallup indica que el 33% de quienes no denuncian lo hace por miedo a ser sancionado. Sin embargo, las represalias contra quienes denuncian están expresamente prohibidas. Además, puedes usar el canal anónimo **www.inchcape.ethicspoint.com** para proteger tu identidad desde el inicio.\n\n_Fuente: Taller Echecopar 2026, slide 8 · OIT/Gallup Survey 2022_",
  },

  // ── Pruebas ───────────────────────────────────────────────────────────────
  {
    id: "pruebas",
    keywords: [
      "pruebas",
      "evidencia",
      "no tengo pruebas",
      "no hay testigos",
      "cómo probar",
      "como probar",
      "sin evidencia",
    ],
    question: "¿Necesito pruebas para denunciar?",
    answer:
      "No necesitas pruebas tangibles para iniciar una denuncia. El marco legal peruano valora tres elementos para evaluar el testimonio: (1) ausencia de incredibilidad subjetiva — que la denuncia no tenga motivos de enemistad o venganza; (2) verosimilitud del testimonio — coherencia y solidez del relato; y (3) persistencia en la incriminación — que te reafirmes en tu denuncia con el tiempo. Tu palabra importa.\n\n_Fuente: Taller Echecopar 2026, slide 32 · Art. 20 del Reglamento de la Ley 27942_",
  },

  // ── Terceros y testigos ───────────────────────────────────────────────────
  {
    id: "tercero",
    keywords: [
      "tercero",
      "por otra persona",
      "en nombre de",
      "denunciar por alguien",
      "vi algo",
      "fui testigo",
      "testigo",
      "soy testigo",
    ],
    question: "¿Puedo reportar en nombre de otra persona o como testigo?",
    answer:
      "Sí. Un tercero puede presentar una denuncia de hostigamiento sexual en nombre de la persona afectada. Si fuiste testigo de una situación, tu testimonio también es valioso e importante dentro del proceso. No es necesario ser la persona afectada directamente para activar el proceso.\n\n_Fuente: Taller Echecopar 2026, slide 35_",
  },

  // ── Frecuencia ────────────────────────────────────────────────────────────
  {
    id: "una_sola_vez",
    keywords: [
      "una sola vez",
      "pasó una vez",
      "solo una vez",
      "fue una vez",
      "ocurrió una vez",
      "un solo incidente",
    ],
    question: "¿Puedo reportar si ocurrió solo una vez?",
    answer:
      "Sí, absolutamente. La ley peruana no exige que la situación sea repetida para considerarse hostigamiento. Un solo incidente puede ser suficiente, especialmente si involucra contacto físico no deseado, una amenaza o una proposición sexual. No dudes en consultar o denunciar.\n\n_Fuente: Taller Echecopar 2026, slide 17 — el hostigamiento no requiere consecuencias probadas_",
  },

  // ── Cuestionario ─────────────────────────────────────────────────────────
  {
    id: "cuestionario",
    keywords: [
      "cuestionario",
      "formulario",
      "no sé qué tipo",
      "no sé si es acoso",
      "no se si es acoso",
      "identificar",
      "saber si es acoso",
      "identificar situación",
      "identificar situacion",
    ],
    question: "No sé si lo que viví es acoso o discriminación, ¿qué hago?",
    answer:
      "Para eso está el cuestionario guiado de esta plataforma. Te hace 7 preguntas — de lo general a lo particular — y al final te indica si apunta a acoso, discriminación o si necesitas orientación personalizada. Es confidencial, anónimo y no genera ningún reporte automático.",
  },

  // ── Inchcape y compromiso ─────────────────────────────────────────────────
  {
    id: "inchcape_compromiso",
    keywords: [
      "qué hace inchcape",
      "que hace inchcape",
      "compromiso inchcape",
      "política de inchcape",
      "politica de inchcape",
      "inchcape y diversidad",
      "inclusión inchcape",
      "inclusion inchcape",
    ],
    question: "¿Qué hace Inchcape para prevenir el acoso y la discriminación?",
    answer:
      "Inchcape tiene un compromiso activo en esta área. A nivel global, el 26% de posiciones de liderazgo son ocupadas por mujeres. En Perú específicamente, el 36.7% de la población colaboradora son mujeres, con 33% en contrataciones y 25% en promociones a cargos de liderazgo. Además, cuenta con un Código de Conducta, un Marco de Denuncias, un canal externo anónimo (EthicsPoint) y una estrategia de Wellbeing que incluye el bienestar físico, mental, social y financiero.\n\n_Fuente: Presentación Corporativa Inchcape 2026, slides 6 y 11 · Protocolos y Códigos Inchcape_",
  },
  {
    id: "wellbeing",
    keywords: [
      "wellbeing",
      "bienestar",
      "salud mental",
      "apoyo emocional",
      "me siento mal",
      "no estoy bien",
      "ayuda psicológica",
      "apoyo psicologico",
    ],
    question: "¿Inchcape tiene apoyo para el bienestar emocional?",
    answer:
      "Sí. La estrategia global de Wellbeing de Inchcape abarca cuatro dimensiones: físico, mental, social y financiero. El pilar mental incluye construir una cultura que fomente el equilibrio entre vida personal y laboral, promover la salud mental positiva y brindar apoyo cuando se necesite. Si estás pasando por una situación difícil, no dudes en contactar a RR.HH.\n\n_Fuente: Presentación Corporativa Inchcape 2026, slide 2_",
  },
];

export const SUGGESTED_QUESTIONS = [
  "¿Qué es el hostigamiento sexual?",
  "¿Cómo puedo reportar una situación?",
  "¿Mi denuncia es confidencial?",
  "¿Necesito pruebas para denunciar?",
  "¿Cuánto tiempo toma el proceso?",
];

export const FALLBACK_RESPONSE =
  "Entiendo tu consulta. Para este tipo de pregunta te recomiendo contactar directamente con RR.HH. de Inchcape o usar el canal anónimo **www.inchcape.ethicspoint.com** donde podrán orientarte de forma personalizada y confidencial. También puedes revisar el Marco de Denuncias en inchcape.com/es-co/sostenibilidad/…/marco-de-denuncias";
