import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import './Styles/SECCION04.css';

// --- Sub-componente del Contador con detección de vista ---
const ContadorDePorcentaje = ({ valorFinal }) => {
  const elementoRef = useRef(null);
  const estaEnVista = useInView(elementoRef, { once: true, amount: 0.5 });
  const count = useMotionValue(0); 
  const rounded = useTransform(count, (value) => `${Math.round(value)}%`);

  useEffect(() => {
    // Solo inicia la animación cuando el elemento entra en el campo de visión
    if (estaEnVista) {
      const animation = animate(count, valorFinal, {
        duration: 2, // 2 segundos para llegar al final
        ease: "easeOut",
      });
      return animation.stop;
    }
  }, [estaEnVista, count, valorFinal]);

  return <motion.span ref={elementoRef}>{rounded}</motion.span>;
};

// --- Componente Principal ---
const SECCION4= () => {
  const datosEstadisticos = [
    { id: 1, porcentaje: 41, descripcion: "Miedo a que procedimiento no fuera confidencial" },
    { id: 2, porcentaje: 38, descripcion: "No supo cómo denunciar" },
    { id: 3, porcentaje: 43, descripcion: "Procedimientos de investigación laboral no era claro" }
  ];

  return (
    <section className="seccion-casos-root">
      <div className="capa-fondo-trama"></div>

      <motion.div 
        className="tarjeta-estadistica"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="encabezado-tarjeta">
          <h2 className="titulo-tarjeta">CASOS SIN REPORTAR</h2>
          <p className="subtitulo-tarjeta">
            Razones de por qué no llegan a denunciar sufrir acoso o discriminación
          </p>
        </div>

        <div className="contenedor-datos-grid">
          {datosEstadisticos.map((item) => (
            <div key={item.id} className="bloque-dato-individual">
              <p className="porcentaje-grande">
                {/* Invocamos el contador que detecta el scroll */}
                <ContadorDePorcentaje valorFinal={item.porcentaje} />
              </p>
              <p className="descripcion-dato">{item.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="pie-tarjeta">
          <p>TALLER DE INVESTIGACIÓN DE DENUNCIAS... / INCHCAPE</p>
        </div>
      </motion.div>
    </section>
  );
};

export default SECCION4;