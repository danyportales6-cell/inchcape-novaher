import React from 'react';
import { motion } from 'framer-motion';
import './Styles/SECCION02.css';

const SECCION2 = () => {
  const datos = [
    {
      id: 1,
      titulo: "ACOSO",
      descripcion: "Comportamiento no solicitado y no deseado destinado a ofender, molestar o perturbar. Es de cáracter hostil, amenazante y sirve para degradar o humillar. Puede ser verbal, visual, fisico o sexual. El acoso incluye bullying, insultos raciales y bromas inapropiadas, o publicar cosas de carcter ofensivas.",
      img: "/PORTADA.png"
    },
    {
      id: 2,
      titulo: "DISCRIMINACIÓN",
      descripcion: "Comportamiento donde se trata a alguien de manera menos favorable debido a una característica de diversidad.Existen cuatro formas de discriminación directa, indirecta,asociación con un grupo y por una caracteristica en particular.",
      img: "/PORTADA.png"// Aquí pondrías otra imagen diferente
    },
    // Puedes agregar más tarjetas aquí
  ];

  return (
    <section className="contenedor-seccion-tarjetas">
      <div className="grid-tarjetas">
        {datos.map((item) => (
          <motion.div 
            key={item.id}
            className="tarjeta-expandible"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="contenedor-imagen-card">
              <img src={item.img} alt={item.titulo} className="imagen-card" />
              <div className="capa-gradiente"></div>
            </div>
            
            <div className="contenido-card">
              <h3 className="titulo-card">{item.titulo}</h3>
              <div className="detalles-expandibles">
                <p className="descripcion-card">{item.descripcion}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SECCION2;