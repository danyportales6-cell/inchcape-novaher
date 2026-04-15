import React from 'react';
import './Styles/PARTE01.css';

const PARTE1 = () => {

  return (
    <div className="inchcape-page-container">
      <section className="profile-section">
        
{/* Lado Izquierdo: Contenedor de la Imagen */}
        <div className="profile-image-container animate-fade-in-left">
          <div className="arched-cutout">
            <img 
              src="/P.inchcape.png" 
              alt="Duncan Tait, CEO Global Inchcape" 
              className="profile-photo"/>
          </div>
        </div>

        {/* Lado Derecho: Contenedor de Texto */}
        <div className="profile-text-container animate-fade-in-right">
          <h1 className="profile-name">Duncan Tait</h1>
          <p className="profile-title">CEO Global Inchcape</p>
          <blockquote className="profile-quote">
            <p>“ Nuestro propósito nos impulsa a hacer una contribución positiva para las comunidades con las que trabajamos.
                Para lograr esto, Inchcape debe hacer lo correcto y actuar de manera responsable de cara a nuestros colaboradores, socios OEM, proveedores y clientes. Esto
                es parte de lo que significa ser una empresa responsable. “</p>
          </blockquote>
          <a href="https://www.inchcape.com/es-co/nuestra-empresa/nuestro-proposito" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}>
              <button className="read-more-btn">Saber más sobre nuestra visión</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default PARTE1;