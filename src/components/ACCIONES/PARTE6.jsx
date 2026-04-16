import React from 'react';
import './Styles/PARTE06.css';

// Importa tus imágenes aquí si están en local
// import imgMulta from '../assets/multa.jpg';
// import imgSanciones from '../assets/sanciones.jpg';
// import imgFinalizacion from '../assets/finalizacion.jpg';

const PARTE6 = () => {
  // Datos de las tarjetas para mapear y limpiar el código
  const tarjetasConsecuencias = [
    {
      id: 1,
      // imagen: imgMulta, // Usa la importación si es local
      imagen: '/multas.jpg', // Placeholder temporal
      titulo: 'MULTA',
    },
    {
      id: 2,
      // imagen: imgSanciones,
      imagen: '/sanciones.jpg', // Placeholder temporal
      titulo: 'SANCIÓNES',
    },
    {
      id: 3,
      // imagen: imgFinalizacion,
      imagen: '/terminar.jpg', // Placeholder temporal
      titulo: 'FINALIZACION DE CONTRATOS',
    },
  ];

  return (
    <section className="incumplimiento-section">
      <div className="incumplimiento-container">
        
        {/* Título Principal */}
        <h2 className="incumplimiento-title">
          INCUMPLIMIENTO DEL CODIGO
        </h2>

        {/* Grid de Tarjetas */}
        <div className="consecuencias-grid">
          {tarjetasConsecuencias.map((tarjeta) => (
            <div key={tarjeta.id} className="consecuencia-card">
              
              {/* Contenedor de Imagen */}
              <div className="card-image-wrapper">
                <img 
                  src={tarjeta.imagen} 
                  alt={tarjeta.titulo} 
                  className="card-image"
                />
              </div>

              {/* Bloque de Texto Celeste */}
              <div className="card-text-block">
                <h3 className="card-title">
                  {tarjeta.titulo}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PARTE6;