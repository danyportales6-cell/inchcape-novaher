import React from 'react';
import { motion } from 'framer-motion'
import './Styles/SECCION01.css';

const SECCION1 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Tiempo entre la aparición de cada hijo
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <motion.div className="portada-hero-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      {/* Sección 1: El Título Principal - Ahora más grande y jerárquico */}
      <section className="seccion-titulo-principal">
        <motion.h1 variants={itemVariants} className="portada-super-titulo">COMPROMETIDOS</motion.h1>
        <motion.h1 values={itemVariants} className="portada-titulo-foco">CON EL CAMBIO</motion.h1>
        <motion.h1 variants={itemVariants} className="portada-super-titulo">LO QUE ESTAMOS</motion.h1>
        <motion.h1 values={itemVariants} className="portada-titulo-foco">CONSTRUYENDO</motion.h1>
      </section>

      {/* Sección 2: Marca de Agua del Gráfico (Invisible pero presente en el fondo) */}
      {/* Esta sección no contiene elementos visuales directos, pero el CSS la usará */}
      <div className="marca-agua-grafico">
        <svg
          className="svg-fondo-linea"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice" // Se ajusta para cubrir, no para escalarse
          aria-hidden="true" // Ocultar a lectores de pantalla, es puramente visual
        >
          {/* Línea principal con degradado sutil */}
          <motion.polyline
            className="polyline-grafico"
            points="0,520 180,480 350,500 520,450 690,390 860,420 1030,360 1150,250 1200,150"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
          {/* Pequeños puntos en los nodos para detalle */}
          <circle cx="0" cy="520" r="10" className="punto-grafico" />
          <circle cx="180" cy="480" r="10" className="punto-grafico" />
          <circle cx="350" cy="500" r="10" className="punto-grafico" />
          <circle cx="520" cy="450" r="10" className="punto-grafico" />
          <circle cx="690" cy="390" r="10" className="punto-grafico" />
          <circle cx="860" cy="420" r="10" className="punto-grafico" />
          <circle cx="1030" cy="360" r="10" className="punto-grafico" />
          <circle cx="1150" cy="250" r="10" className="punto-grafico" />
          <circle cx="1200" cy="150" r="10" className="punto-grafico" />
        </svg>
      </div>

      {/* Sección 3: El Pie de Página (Footer) - Refinado y con espaciado */}
      <footer className="seccion-footer">
        <motion.div className="contenedor-footer-texto">
          <p className="portada-texto-respeto">
            EN INCHCAPE EL RUMBO A TU BIENESTAR SE CONDUCE CON RESPETO
          </p>
        </motion.div>
      </footer>
    </motion.div>
  );
};

export default SECCION1;