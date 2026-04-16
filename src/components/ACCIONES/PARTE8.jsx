import React from 'react';
import './Styles/PARTE08.css';
// Asegúrate de tener la imagen en public/ o importarla

const PARTE8 = () => {
  return (
    <section className="denuncia-section">
      <div className="denuncia-container">
        
        {/* Lado Izquierdo: Imagen con marco decorativo */}
        <div className="denuncia-visual animate-fade-in-left">
          <div className="image-frame">
            <img src= "/denuncia.png" alt="Equipo de trabajo" />
          </div>
          <div className="accent-blob"></div>
        </div>

        {/* Lado Derecho: Contenido */}
        <div className="denuncia-content animate-fade-in-right">
          <header className="denuncia-header">
            <span className="denuncia-tag">Canal Confidencial</span>
            <h2 className="denuncia-main-title">CANAL DE <br /><span>DENUNCIA</span></h2>
          </header>

          <div className="denuncia-body">
            <div className="web-label-container">
              <div className="icon-circle">
                <i className="fas fa-globe"></i> {/* Si usas FontAwesome */}
                <span>WEB</span>
              </div>
            </div>
            
            <p className="denuncia-description">
              En esta página web puedes realizar un informe de forma <strong>totalmente anónima</strong>. 
              Dependiendo de tu caso, serás derivado a un encargado especializado para 
              brindarte atención y tomar las acciones necesarias ante lo sucedido.
            </p>

            <a 
              href="https://secure.ethicspoint.eu/domain/media/en/gui/104822/index.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="reporte-button"
            >
              <span className="btn-text">PAGINA WEB</span>
              <span className="btn-icon">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PARTE8;