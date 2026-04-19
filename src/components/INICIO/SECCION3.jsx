import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./Styles/SECCION03.css";

const datosSenales = [
  {
    id: 1,
    img: "/UNION.png",
    texto: "Comentarios sobre apariencia o vida personal",
  },
  {
    id: 2,
    img: "/SEPARADO.png",
    texto: "Exclusión en reuniones o decisiones importantes",
  },
  {
    id: 3,
    img: "/EXTRA.png",
    texto: "Asignación de tareas imposibles o sin sentido",
  },
  { id: 4, img: "/FALTA.png", texto: "Limitación de crecimiento laboral" },
  {
    id: 5,
    img: "/COMENTARIOS.png",
    texto: "Críticas constantes y descalificación pública",
  },
  {
    id: 6,
    img: "/OCULTAR.png",
    texto: "Ocultación de información necesaria para el trabajo",
  },
];

const SECCION3 = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Escuchar el cambio de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Definimos cuánto se desplaza: 100% en móvil (1 card), 50% en desktop (2 cards)
  const desplazamiento = isMobile ? index * 100 : index * 50;

  const nextSlide = () => {
    // Si es móvil, el límite es la última carta (longitud - 1)
    // Si es desktop, el límite es el último par (longitud - 2)
    const limite = isMobile ? datosSenales.length - 1 : datosSenales.length - 2;
    if (index < limite) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      const ultimoIndex = isMobile
        ? datosSenales.length - 1
        : datosSenales.length - 2;
      setIndex(ultimoIndex);
    }
  };

  return (
    <section className="seccion-senales-root">
      <div className="contenedor-flex-senales">
        {/* PARTE IZQUIERDA */}
        <div className="bloque-texto-controles">
          <h2 className="titulo-senales">SEÑALES</h2>
          <p className="subtitulo-senales pt-20">ACOSO / DISCRIMINACIÓN</p>
          <p className="descripcion-senales">
            Son comportamientos o actitudes que pueden indicar un ambiente
            laboral inadecuado.
          </p>

          <div className="controles-carrusel">
            <button onClick={prevSlide} className="boton-carrusel">
              <ArrowLeft />
            </button>
            <button onClick={nextSlide} className="boton-carrusel">
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* PARTE DERECHA: Carrusel de 2 tarjetas */}
        <div className="bloque-carrusel-visual">
          <div className="ventana-carrusel">
            <motion.div
              className="track-carrusel"
              animate={{ x: `-${desplazamiento}%` }} // Usamos la variable dinámica aquí
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {datosSenales.map((item) => (
                <div key={item.id} className="card-carrusel-individual">
                  <img src={item.img} alt="Señal" className="imagen-carrusel" />
                  <div className="capa-gradiente-carrusel"></div>
                  <div className="texto-imagen-carrusel">
                    <p>{item.texto}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SECCION3;
