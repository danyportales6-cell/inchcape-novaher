import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Importante para la navegación
import { X } from 'lucide-react'; //
import './Styles/TRIVIASTYLE.css';

const preguntas = [
  {
    id: 1,
    pregunta: "Un supervisor critica el desempeño de un empleado en privado y de forma constructiva.",
    esAcoso: false,
    feedback: "Correcto. La retroalimentación laboral constructiva y privada no es acoso."
  },
  {
    id: 2,
    pregunta: "Asignar tareas imposibles de cumplir sistemáticamente para forzar una renuncia.",
    esAcoso: true,
    feedback: "Correcto. Esto se conoce como acoso laboral o mobbing."
  },
  {
    id: 3,
    pregunta: "Hacer bromas persistentes sobre la orientación sexual o religión de un colega.",
    esAcoso: true,
    feedback: "Correcto. Esto constituye discriminación y acoso hostil."
  },
  {
    id: 4,
    pregunta: "Tener una diferencia de opinión puntual con un compañero sobre un proyecto.",
    esAcoso: false,
    feedback: "Correcto. Los conflictos aislados o diferencias de opinión no son acoso."
  },
  {
    id: 5,
    pregunta: "Un compañero de trabajo te invita a salir una vez, le dices que no, y él respeta tu decisión sin insistir.",
    esAcoso: false,
    feedback: "Correcto. Una invitación respetuosa y no insistente no se considera acoso sexual."
  },
  {
    id: 6,
    pregunta: "Difundir rumores malintencionados sobre la vida personal de un colega para dañar su reputación.",
    esAcoso: true,
    feedback: "Correcto. La difamación y el aislamiento social son tácticas comunes de acoso laboral."
  },
  {
    id: 7,
    pregunta: "Tu jefe te pide realizar horas extra ocasionales por un cierre de proyecto, pagándolas según la ley.",
    esAcoso: false,
    feedback: "Correcto. Las exigencias laborales legítimas y legales no constituyen acoso."
  },
  {
    id: 8,
    pregunta: "Ignorar o excluir deliberadamente a una persona de reuniones importantes de su área.",
    esAcoso: true,
    feedback: "Correcto. La exclusión aplicada de forma sistemática es una forma de violencia psicológica."
  }
];

const TRIVIA = () => {
  const [paso, setPaso] = useState(0);
  const [score, setScore] = useState(0);
  const [mostrarFeedback, setMostrarFeedback] = useState(null); // 'true', 'false' o null
  const [finalizado, setFinalizado] = useState(false);

  const manejarRespuesta = (respuestaUsuario) => {
    const esCorrecta = respuestaUsuario === preguntas[paso].esAcoso;
    if (esCorrecta) setScore(score + 1);
    
    setMostrarFeedback(esCorrecta ? 'correcto' : 'error');

    setTimeout(() => {
      if (paso < preguntas.length - 1) {
        setPaso(paso + 1);
        setMostrarFeedback(null);
      } else {
        setFinalizado(true);
      }
    }, 2500);
  };

// PANTALLA DE RESULTADOS
  if (finalizado) {
    return (
      <section className="seccion-trivia-root">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="trivia-resultado">
          <h2 className="titulo-final">¡Trivia Completada!</h2>
          <p className="puntuacion">Tu puntaje: {score} / {preguntas.length}</p>
          
          <div className="grupo-botones-final">
            <button onClick={() => window.location.reload()} className="boton-reiniciar">
              Reintentar
            </button>
            
            {/* BOTÓN PARA VOLVER AL HOME */}
            <Link to="/" className="boton-volver-home">
              Finalizar y Salir
            </Link>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="seccion-trivia-root">
        
        <Link to="/" className="boton-cerrar-trivia" title="Cerrar trivia">
        <X size={30} />
      </Link>

      <div className="trivia-container">
        <h2 className="trivia-titulo">¿SABES IDENTIFICAR EL ACOSO?</h2>
        <p className="trivia-instruccion">Lee la situación y decide si es Acoso/Discriminación o no.</p>

        <AnimatePresence mode="wait">
          <motion.div 
            key={paso}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="card-pregunta"
          >
            <p className="texto-pregunta">{preguntas[paso].pregunta}</p>
            
            <div className="opciones-container">
              <button 
                onClick={() => manejarRespuesta(true)} 
                className={`boton-opcion acoso ${mostrarFeedback === 'correcto' && preguntas[paso].esAcoso ? 'ganador' : ''}`}
                disabled={mostrarFeedback !== null}
              >
                ES ACOSO / DISCRIMINACIÓN
              </button>
              <button 
                onClick={() => manejarRespuesta(false)} 
                className={`boton-opcion no-acoso ${mostrarFeedback === 'correcto' && !preguntas[paso].esAcoso ? 'ganador' : ''}`}
                disabled={mostrarFeedback !== null}
              >
                NO ES ACOSO
              </button>
            </div>

            {mostrarFeedback && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className={`feedback-texto ${mostrarFeedback}`}
              >
                {mostrarFeedback === 'correcto' ? "¡Muy bien! " : "Incorrecto. "}
                {preguntas[paso].feedback}
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="progreso-bar">
          <div className="progreso-relleno" style={{ width: `${((paso + 1) / preguntas.length) * 100}%` }}></div>
        </div>
      </div>
    </section>
  );
};

export default TRIVIA;