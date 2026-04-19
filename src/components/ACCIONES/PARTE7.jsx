import React, { useState } from "react";
import "./Styles/PARTE07.css";

const PARTE7 = () => {
  // Estado para controlar qué tarjeta del carrusel está activa (0 a 3)
  const [currentSlide, setCurrentSlide] = useState(0);
  // Estado para controlar qué tarjeta tiene la información "revelada" (subida)
  const [revealedCard, setRevealedCard] = useState(null);
  // Estado para controlar si el panel extra (Modal) está abierto
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Estado para saber qué contenido mostrar en el modal
  const [modalContent, setModalContent] = useState(null);

  // DATOS DE LAS 4 TARJETAS
  const cardsData = [
    {
      id: 0,
      title: "JEFATURA DIRECTA",
      icon: "/Jefatura.png", // Puedes usar un string '👩‍💼' si no tienes imagen
      shortDesc: "Tu primer punto de contacto para consultas operativas.",
      longDesc:
        "Ellos se encargaran de tu caso y tomaran medidas dentro del equipo. Acudir cuando el problema es reciente y necesitas una solución rapida. IMPORTANTE: Si el problema es tu superior, puedes dirigirte a otra área para poder solucionar tu situación.",
    },
    {
      id: 1,
      title: "RECURSOS/HUMANOS",
      icon: "/RH.png",
      shortDesc: "Encargada del bienestar y relaciones laborales.",
      longDesc:
        "Te brindaran orientación y apoyo en el caso,tambien a gestionar las investigaciónes internas de forma confidencial. Acudir cuando necesitas acompañamiento formal y no se resolvio con tu superior.",
    },
    {
      id: 2,
      title: "ÁREA LEGAL",
      icon: "/legal.png",
      shortDesc:
        "Velamos por el cumplimiento de la ley y ética dentro de la empresa.",
      longDesc:
        "Te apoyaran con averiguar si hubo incumplimientos legales y te asesoraran sobre los derechos, apoyando en tu caso formalmente. Acudir cuando tu problema es de forma persistente y vulnera tus derechos..",
    },
    {
      id: 3,
      title: "Á.INCUMPLIMIENTO",
      icon: "/cumplimiento.png",
      shortDesc: "Supervisa que se respenten las normas internas y éticas.",
      longDesc:
        "Recibiran las denuncias de forma anónima e investigara de forma parcial,asegurandose que se cumpla las politicas de la empresa. Acudir cuando buscas confidencialidad en tu caso y cuando involucra varias áreas, todo se resolvera bajo los criterios éticos dentro de la empresa..",
    },
  ];

  // Funciones para manejar la interacción
  const handleCardClick = (id) => {
    // Si haces clic en la misma, se cierra; si no, se abre la nueva
    setRevealedCard(revealedCard === id ? null : id);
  };

  const openModal = (card, e) => {
    e.stopPropagation(); // Evita que el clic en el botón cierre la tarjeta
    setModalContent(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const totalPages = Math.ceil(cardsData.length / 2);

  return (
    <section className="orientacion-section">
      <div className="orientacion-container">
        {/* ENCABEZADO */}
        <header className="orientacion-header animate-fade-in-down">
          <h2 className="orientacion-title">ORIENTACIÓN</h2>
          <p className="orientacion-subtitle">
            Nunca dude en hacer preguntas, plantear inquietudes o buscar la
            asesoría que necesita. Inchcape no tolerará ninguna represalia o
            discriminación contra quienes planteen una inquietud.
          </p>
        </header>

        {/* CONTENEDOR DEL CARRUSEL */}
        <div className="carousel-view-window">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cardsData.map((card) => (
              <div key={card.id} className="carousel-slide-dual">
                <div
                  className={`orientacion-card ${revealedCard === card.id ? "revealed" : ""}`}
                  onClick={() => handleCardClick(card.id)}
                >
                  <div className="card-front whitespace-pre-line">
                    {/* Si el icono empieza con / es una imagen, si no, es un emoji */}
                    {card.icon.startsWith("/") ? (
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="card-icon-img "
                      />
                    ) : (
                      <span className="card-icon-emoji">{card.icon}</span>
                    )}
                    <h3 className="card-title-front whitespace-pre-line">
                      {card.title}
                    </h3>
                  </div>

                  {/* Contenido Revelado (Texto corto y botón) */}
                  <div className="card-back whitespace-pre-line">
                    <h3 className="card-title-back">{card.title}</h3>
                    <p className="card-short-desc">{card.shortDesc}</p>
                    <button
                      className="more-info-btn"
                      onClick={(e) => openModal(card, e)}
                    >
                      IMPORTANTE &gt;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INDICADORES DEL CARRUSEL (PUNTOS) */}
        <div className="carousel-indicators">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* PANEL EXTRA (MODAL) */}
      {isModalOpen && modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content animate-pop-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-header">
              {typeof modalContent.icon === "string" &&
              modalContent.icon.length < 3 ? (
                <span className="modal-icon-emoji">{modalContent.icon}</span>
              ) : (
                <img
                  src={modalContent.icon}
                  alt={modalContent.title}
                  className="modal-icon-img"
                />
              )}
              <h2 className="modal-title">{modalContent.title}</h2>
            </div>
            <div className="modal-body">
              <p>{modalContent.longDesc}</p>
            </div>
            <div className="modal-footer">
              <button className="modal-action-btn" onClick={closeModal}>
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PARTE7;
