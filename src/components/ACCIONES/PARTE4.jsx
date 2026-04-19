import React, { useState, useEffect, useRef } from 'react';
import './Styles/PARTE04.css';

// Sub-componente que maneja la lógica del contador animado
const CountUpItem = ({ targetValue, label }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

useEffect(() => {
    // Si ya animó, no hacemos nada más.
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        // Reducimos el umbral al 10% (0.1) para que sea más sensible
        if (entry.isIntersecting) {
          console.log(`Disparando contador para: ${label}`); // <-- Agrega este log para depurar
          startCounting();
          setHasAnimated(true);
          // Importante: Dejar de observar inmediatamente
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1, // <-- CAMBIO CLAVE: Más sensible a la entrada
        rootMargin: "0px 0px -50px 0px" // Opcional: dispara un poco antes de que entre
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
    // Quitamos 'hasAnimated' de las dependencias para evitar bucles extraños
  }, []);

const startCounting = () => {
    let currentCount = 0; // Usamos una variable local, no el estado directamente
    const duration = 2000; // 2 segundos
    const frameRate = 1000 / 60; // Intentamos 60fps (~16.6ms) para máxima suavidad
    const totalFrames = duration / frameRate;
    const increment = targetValue / totalFrames;

    console.log(`Iniciando contador: Objetivo ${targetValue}, Incremento ${increment}/frame`);

    const counterInterval = setInterval(() => {
      currentCount += increment;
      
      if (currentCount >= targetValue) {
        setCount(targetValue); // Valor final exacto
        clearInterval(counterInterval);
      } else {
        // Importante: Math.floor aquí para ver el progreso de enteros
        setCount(Math.floor(currentCount)); 
      }
    }, frameRate);
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
    { value: 33, label: 'Mujeres en puesto de liderazgo' },
    { value: 28, label: 'Representación Femenina en la fuerza laboral' },
    { value: 26, label: 'Contrataciones de mujeres en Inchcape' },
  ];

  return (
    <section className="avances-section-container">
      <div className="avances-card-wrapper">
        
        {/* Encabezado */}
        <header className="avances-header">
          <h2 className="main-title">Avances de Inchcape</h2>
          <span className="year-subtitle">2025</span>
          <h3 className='fuentes'>CÓDIGO DE CONDUCTA/INCHCAPE</h3>
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