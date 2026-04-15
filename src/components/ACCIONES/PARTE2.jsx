import React, { useState } from 'react';
import './Styles/PARTE02.css';

// Datos de ejemplo para las tarjetas, basados en tu imagen
const cardData = [
  {
    id: 1,
    imageUrl: '/Juntos es Mejor.png', // Reemplaza con tu imagen real
    title: 'JUNTOS, MEJOR',
    summaryText: 'Nos esforzamos por ser el empleador preferido. Podemos lograrlo manteniendo un ambiente laboral positivo,responsable , abierto y acogedor.',
    expandedText: 'VIDA EN INCHCAPE:Inchcape trata a su personal de forma justa e imparcia, sin prejuicios.Nunca toleraremos el acoso ni el bullying de ningun tipo.Se espera que los colaboradores sean honestos,amables y que se traten mutuamente con respeto. Inchape aspira a brindar a los colaboradores oportunidades para mejorar sus habilidades y capacidades, ayudarlos a desarrollar carreras gratificantes y a maximizar su contribución a la empresa.',
    linkUrl: 'https://www.inchcape.com/es-co/carreras/la-vida-en-inchcape#wellbeing-supports' // URL a la que redirigir
  },
  {
    id: 2,
    imageUrl: '/Antidiscriminacion.png', // Reemplaza con tu imagen real
    title: 'ANTIDISCRIMINACIÓN',
    summaryText: 'Estamos comprometidos a prevenir la discriminacion y a proporcionar un lugar de trabajo compresivo, respetuoso e inclusivo para todos. El respeto mutuo en el trabajo respalda la forma en que hacemos negocios e Inchcape no tolera ninguna forma de discriminación, acoso, bullying o victimización.',
    expandedText: ' CODIGO DE CONDUCTA: El Código nos ayudará a mantenernos seguros y protegerá la reputación entre nuestros colaboradores, clientes , OEM, proveedores, accionistas y otros stakeholders. Ayuda a guiar nuestra conducta y tomar decisiones, para que siempre hagamos lo correcto, y trabajemos de una manera justa, transparente y confiable.',
    linkUrl: 'https://www.inchcape.com/es-co/sostenibilidad/nuestro-enfoque/ruta-sostenible-al-mercado/pr%C3%A1cticas/codigo-de-conducta'
  },
  {
    id: 3,
    imageUrl: '/Inclusion y Diversidad.png', // Reemplaza con tu imagen real
    title: 'INCLUSION Y DIVERSIDAD',
    summaryText: 'Apreciamos la contribución y singularidad de cada colaborador.',
    expandedText: 'Inchcape cree que una fuerza laboral diversa es una fuerza laboral sólida. Valoramos la contribución única que cada persona hace a la empresa. Logramos más cuando personas de diversos origenes, y con diferentes talentos e ideas, trabajan juntas en un ambiente donde se sientan cómodas para contribuir y hacer un uso completo de sus talentos. Nuestra ambición es reflejar mejor las comunidades del mundo. Se incluyen, entre otras cosas, género, edad, discapacidad, orientación sexual, religión, origen étnico, creencia politica o cualquier otra caracteristica.Solo nos basamos en sus habilidades, logros y desempeño relacionado con el trabajo',
    linkUrl: 'https://www.inchcape.com/es-co/noticias-y-an%C3%A1lisis/2025/promoviendo-la-inclusion-y-diversidad-en-inchcape'
  },
    {
    id: 4,
    imageUrl: '/acoso.jpg', // Reemplaza con tu imagen real
    title: 'ANTIACOSO.S.',
    summaryText: 'Garantizamos un ambiente seguro y respetuoso. ',
    expandedText: 'PAGINA DE DENUNCIA: Nuestra política de cero tolerancia al acoso garantiza un ambiente de trabajo seguro y respetuoso para todos. Definimos claramente qué constituye acoso, ofrecemos canales de denuncia anónimos para una mayor privaciodad.',
    linkUrl: 'https://secure.ethicspoint.eu/domain/media/en/gui/104822/index.html'
  }
];

const PARTE2 = () => {
  // Estado para rastrear qué tarjeta tiene su texto expandido (hacia arriba)
  const [expandedTextId, setExpandedTextId] = useState(null);
  
  // Estado para rastrear qué tarjeta está en modo "pantalla completa" (overlay)
  const [fullscreenId, setFullscreenId] = useState(null);

  const toggleTextExpansion = (id) => {
    setExpandedTextId(expandedTextId === id ? null : id);
  };

  const openFullscreen = (id) => {
    setFullscreenId(id);
    setExpandedTextId(null); // Colapsar el texto si estaba expandido
  };

  const closeFullscreen = () => {
    setFullscreenId(null);
  };

  // Encontrar los datos de la tarjeta que está en pantalla completa
  const fullscreenCard = cardData.find(card => card.id === fullscreenId);

  return (
    <div className="actions-page-container">
      {/* Sección Izquierda (Texto Fijo de "ACCIONES") */}
      <div className="left-panel">
        <h1 className="main-title">ACCIONES</h1>
        <div className="integrity-section">
          <h2>ACCIONES</h2>
          <blockquote className="testimonial">
            “ Soy una técnica de 26 años. En mi lugar de trabajo anterior me sentia excluida y discriminada. En Inchcape soy parte del equipo y me siento valorada y respetada. Somos extremadamente profesionales y también nos divertimos es un gran ambiente para trabajar. Nadie se siente amenazado ni intimidado.”
          </blockquote>
        </div>
      </div>

      {/* Sección Derecha (Cuadrícula de Tarjetas) */}
      <div className="right-panel">
        <div className="card-grid">
          {cardData.map((card) => (
            <div key={card.id} className="card-container">
              <div className="image-wrapper">
                <img src={card.imageUrl} alt={card.title} className="card-image" />
              </div>
              
              {/* Recuadro Celeste interactivo */}
              <div 
                className={`info-box ${expandedTextId === card.id ? 'expanded' : ''}`}
                onClick={() => toggleTextExpansion(card.id)}
              >
                <h3 className='card-title-inside'>{card.title}</h3>
                
                {/* Texto que aparece al expandirse */}
                <div className="extra-info">
                  <p>{card.summaryText}</p>
                

                {/* Botón 'más información' */}
                <button 
                  className="more-info-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que el clic en el botón active toggleTextExpansion
                    openFullscreen(card.id);
                  }}
                >
                  más información &gt;
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay de Pantalla Completa (se muestra cuando fullscreenId no es null) */}
      {fullscreenCard && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeFullscreen}>&times;</button>
            
            <div className="fullscreen-layout">
                <div className="fullscreen-image-container">
                    <img src={fullscreenCard.imageUrl} alt={fullscreenCard.title} className="fullscreen-image" />
                </div>
                <div className="fullscreen-text-container">
                    <h2>{fullscreenCard.title}</h2>
                    <p className="full-text">{fullscreenCard.expandedText}</p>
                    
                    {/* Botón que traslada a otra página */}
                    <a href={fullscreenCard.linkUrl} className="external-link-btn" target="_blank" rel="noopener noreferrer">
                      Ver Detalles Completos
                    </a>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PARTE2;