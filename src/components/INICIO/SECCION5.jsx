import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Styles/SECCION05.css';

const SECCION5 = () => {
  return (
    <section className="contenedor-identificar">
      <motion.div 
        className="bloque-oscuro-identificar"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="titulo-identificar">IDENTIFICAR</h2>
        <p className="texto-identificar">Aprende a identificar acoso y discriminación</p>
        
        {/* El Link conecta esta sección con la ruta de la Trivia */}
        <Link to="/TRIVIA" className="boton-trivia-link"> TRIVIA</Link>
      </motion.div>
    </section>
  );
};

export default SECCION5;