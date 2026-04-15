import React from 'react';
import './Styles/PARTE03.css';

const PARTE3 = () => {
  const trainingData = [
    { id: '01', text: 'Estudio de políticas internas' },
    { id: '02', text: 'Detección temprana de acoso o discriminación' },
    { id: '03', text: 'Cómo actuar ante un caso de discriminación o acoso' }
  ];

  return (
    <section className="training-section">
      <div className="training-grid">
        
        {/* LADO IZQUIERDO: Imagen con corte estilizado */}
        <div className="training-visual">
          <div className="image-cutout">
            <img src="/capacitacion.jpg" alt="Training" />
            <div className="image-overlay-gradient"></div>
          </div>
        </div>

        {/* LADO DERECHO: Contenido */}
        <div className="training-content">
          <span className="subtitle-tag">PROGRAMA 2026</span>
          <h2 className="training-title">Capacitaciones</h2>
          
          <div className="items-wrapper">
            {trainingData.map((item, index) => (
              <div className="training-card" key={item.id} style={{ "--delay": index }}>
                <div className="card-number">{item.id}</div>
                <div className="card-body">
                  <p>{item.text}</p>
                  <div className="hover-line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PARTE3;