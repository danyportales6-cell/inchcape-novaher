import React from "react";
import "./Styles/PARTE05.css";

const Parte5 = () => {
  const handleOpenPDF = () => {
    window.open("/docs/taller-especializacion.pdf", "_blank");
  };

  return (
    <section className="taller-section-container">
      <div className="taller-card">
        {/* Título que sobresale */}
        <h1 className="taller-title-overlay">PROGRAMA</h1>

        <div className="taller-content">
          <p className="taller-description">
            Especialización en materia de investigación de denuncias <br />
            de hostigamiento sexual
          </p>

          <button
            className="taller-pdf-button"
            onClick={() => window.open("/docs/taller.pdf", "_black")}
          >
            Ver detalles del taller
          </button>
        </div>
      </div>
    </section>
  );
};

export default Parte5;
