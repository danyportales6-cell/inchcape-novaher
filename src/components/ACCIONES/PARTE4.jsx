import React, { useState, useEffect, useRef } from 'react';
import './Styles/PARTE04.css';

// Sub-componente que maneja la lógica del contador animado
const CountUpItem = ({ targetValue, label }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Definimos el observador para saber cuándo el elemento entra en pantalla
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Si el elemento es visible y no ha animado aún, empezamos
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true); // Evitamos que anime múltiples veces
          observer.unobserve(entry.target); // Dejamos de observar
        }
      },
      { threshold: 0.5 } // Necesitamos que el 50% sea visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  // Lógica de la animación del contador
  const startCounting = () => {
    let start = 0;
    const duration = 2000; // Duración de la animación en milisegundos
    const increment = Math.ceil(targetValue / (duration / 10)); // Incremento por frame

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue); // Nos aseguramos de llegar al valor exacto
        clearInterval(counterInterval);
      } else {
        setCount(start);
      }
    }, 10); // Actualización cada 10ms para suavidad
  };

  return (
    <div className="avances-item" ref={elementRef}>
      <div className="percent-wrapper">
        <span className="percent-number">{count}</span>
        <span className="percent-symbol">%</span>
      </div>
      <p className="avances-label">{label}</p>
    </div>
  );
};

// Componente principal de la sección
const PARTE4 = () => {
  // Datos sacados de tu imagen
  const data = [
    { value: 33, label: 'Puesto de liderazgo' },
    { value: 20, label: 'Reducción de acoso y discriminación' },
    { value: 26, label: 'Contrataciones' },
  ];

  return (
    <section className="avances-section-container">
      <div className="avances-card-wrapper">
        
        {/* Encabezado */}
        <header className="avances-header">
          <h2 className="main-title">Avances</h2>
          <span className="year-subtitle">2026</span>
          <div className="title-underline"></div>
        </header>

        {/* Grid de Datos */}
        <div className="avances-data-grid">
          {data.map((item, index) => (
            <CountUpItem 
              key={index} 
              targetValue={item.value} 
              label={item.label} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PARTE4;