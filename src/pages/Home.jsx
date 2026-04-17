import React, { useState, useEffect, useRef } from "react";
import decoracionAzul from "../assets/decoracionazul.png";
import decoracionVerde from "../assets/decoracionverde.png";
import portada from "../assets/portada.png";
import Carousel from "../components/Carousel";
import decoracionCausa from "../assets/decoracioncausa.png";
import retro from "../assets/retro.png";
import memo from "../assets/memo.png";
import noco from "../assets/nocontra.png";
import emba from "../assets/emba.png";
import sala from "../assets/sala.png";
import eda from "../assets/eda.png";
import lg from "../assets/lg.png";

function Home() {

  const itemsno = [
    {
      img: "https://www.shutterstock.com/image-photo/coworkers-share-moment-connection-office-600nw-2499220927.jpg",
      text: "Un cumplido puntual o interacciones amistosas",
    },
    {
      img: retro,
      text: "Recibir retroalimentación negativa",
    },
    {
      img: memo,
      text: "Memorandos por incumplimiento de normas internas",
    },
    {
      img: "https://www.magazinespain.com/wp-content/uploads/nuevo-jefe-7.jpg",
      text: "Exigir el cumplimiento de horarios y tareas",
    },
  ];

  const itemsi = [
    {
      img: noco,
      text: "No contratar a alguien por su género",
    },
    {
      img: "https://arraesecenteno.com.br/wp-content/uploads/2024/01/patrao-pode-gritar-com-funcionario-arraes-e-centeno-2.webp",
      text: "Realizar ataques verbales hacia una persona",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9Rz3quv6GUlHOYd_k3MnWtm1zbm2hejVXQ&s",
      text: "Tomar medidas negativas por denunciar abusos.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dVjqt_AoSCp-6KIKZsIfkzEPmw0_J4oocA&s",
      text: "Difundir rumores falsos sobre la vida privada o profesional",
    },
  ];
  const [visibleSections, setVisibleSections] = useState({
    discri: false,
    acoso: false,
  });



  const discriImages = [
    "https://i.pinimg.com/1200x/73/75/80/73758043d8f241e6b878833b3b3abe36.jpg",
    emba,
    sala,
    eda,
    lg
  ];

  const acosoImages = [
    "https://i.pinimg.com/736x/3f/0c/bf/3f0cbf496181445747956ca9bafa0ede.jpg",
    "https://i.pinimg.com/1200x/4e/e3/e3/4ee3e344e67e6dbb8fb1a74f752363cc.jpg",
    "https://i.pinimg.com/736x/b0/1d/42/b01d42699556ba442de4c5b44dc137dd.jpg",
    "https://i.pinimg.com/736x/58/09/9f/58099f2ebf1ca2ea6dd02cf8c23e889b.jpg",
    "https://i.pinimg.com/1200x/6d/5e/93/6d5e93fcba817bb202fe2dff62ef8242.jpg"
  ];

  const [imgIndex, setImgIndex] = useState(0);

  const [visibleEjemplos, setVisibleEjemplos] = useState({
    discri: false,
    acoso: false,
  });

  const discriEjRef = useRef(null);
  const acosoEjRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === discriEjRef.current && entry.isIntersecting) {
            setVisibleEjemplos((prev) => ({ ...prev, discri: true }));
          }
          if (entry.target === acosoEjRef.current && entry.isIntersecting) {
            setVisibleEjemplos((prev) => ({ ...prev, acoso: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (discriEjRef.current) observer.observe(discriEjRef.current);
    if (acosoEjRef.current) observer.observe(acosoEjRef.current);

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % 5);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  const [visibleCausa, setVisibleCausa] = useState(false);
  const causaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisibleCausa(true);
      },
      { threshold: 0.3 }
    );

    if (causaRef.current) observer.observe(causaRef.current);

    return () => observer.disconnect();
  }, []);
  const discriRef = useRef(null);
  const acosoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === discriRef.current && entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, discri: true }));
          }
          if (entry.target === acosoRef.current && entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, acoso: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (discriRef.current) observer.observe(discriRef.current);
    if (acosoRef.current) observer.observe(acosoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans">

      {/* HERO */}
      <section
        className="relative h-[680px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${portada})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 pl-16 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight animate-slideHero">
            EN INCHCAPE EL RUMBO A TU BIENESTAR SE CONDUCE CON RESPETO
          </h1>
        </div>
      </section>

      {/* DISCRIMINACIÓN */}
      <section
        ref={discriRef}
        className="relative bg-[#0979bb] text-white p-12 overflow-hidden"
      >
        <img src={decoracionAzul} className="absolute top-0 right-0 h-full w-72 object-cover" />

        <h3 className={`text-3xl font-bold mb-4 transition-all duration-[1600ms] ease-out ${visibleSections.discri ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          DISCRIMINACIÓN
        </h3>

        <p className={`max-w-4xl text-lg transition-all duration-1000 delay-200 ${visibleSections.discri ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          Es un conjunto de acciones que trata de humillar o intimidar a una persona por un periodo largo de tiempo , haciendo sentir inseguro e incomodo.
        </p>
      </section>

      {/* ACOSO */}
      <section
        ref={acosoRef}
        className="relative bg-[#bacf00] text-white p-12 overflow-hidden"
      >
        <img src={decoracionVerde} className="absolute top-0 left-0 h-full w-72 object-cover" />

        <h3 className={`text-3xl font-bold mb-4 text-right transition-all duration-[1600ms] ease-out ${visibleSections.acoso ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          ACOSO
        </h3>

        <p className={`max-w-4xl ml-auto text-right text-lg transition-all duration-[1600ms] delay-300 ease-out ${visibleSections.acoso ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          Es el trato injusto o desigual hacia una persona o grupo debido a características como su origen, género, edad, apariencia, religión u otras diferencias, afectando sus derechos y oportunidades.
        </p>
      </section>

      {/* STACK VISUAL (como tu imagen) */}
      <section className="bg-[#1e3a5f] py-20 flex justify-between items-center px-20 ">

        <div className="relative w-[400px] h-[400px] left-35 ">
          <div className="absolute w-full h-full bg-purple-400 rounded-3xl -translate-x-8 -translate-y-8"></div>
          <div className="absolute w-full h-full bg-purple-500 rounded-3xl -translate-x-5 -translate-y-5"></div>
          <div className="absolute w-full h-full bg-purple-600 rounded-3xl -translate-x-2 -translate-y-2"></div>

          <img
            src={discriImages[imgIndex]}
            className="relative z-10 w-full h-full object-cover rounded-3xl transition-opacity duration-700 "
          />
        </div>

        <div
          ref={discriEjRef}
          className={`text-white text-right transition-all duration-[1400ms] ease-out ${visibleEjemplos.discri
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-24"
            }`}
        >
          <p className="text-m">EJEMPLOS</p>
          <h2 className="text-5xl font-bold">
            DISCRIMINACIÓN <br /> LABORAL
          </h2>
        </div>
      </section>

      <section className="bg-[#1e3a5f] pb-20 flex justify-between items-center px-20">

        <div
          ref={acosoEjRef}
          className={`text-white text-left transition-all duration-[1400ms] ease-out ${visibleEjemplos.acoso
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-24"
            }`}
        >
          <p className="text-m">EJEMPLOS</p>
          <h2 className="text-5xl font-bold">
            ACOSO <br /> LABORAL
          </h2>
        </div>

        <div className="relative w-[400px] h-[400px] right-35">
          <div className="absolute w-full h-full bg-blue-300 rounded-3xl translate-x-8 translate-y-8"></div>
          <div className="absolute w-full h-full bg-blue-400 rounded-3xl translate-x-5 translate-y-5"></div>
          <div className="absolute w-full h-full bg-blue-500 rounded-3xl translate-x-2 translate-y-2"></div>

          <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden">
            <img
              src={acosoImages[imgIndex]}
              className="w-full h-full object-cover transition-opacity duration-700"
            />
          </div>
        </div>

      </section>

      {/* CARRUSEL */}
      <Carousel items={itemsno} bgColor="bg-[#b6d400]" textSide="left" />
      <Carousel items={itemsi} bgColor="bg-[#2b6ca3]" textSide="right" />
      <section
        ref={causaRef}
        className="relative h-[570px] text-white overflow-hidden flex items-center"
        style={{
          backgroundImage: `url(${decoracionCausa})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-[#0c2c4a]/80"></div>

        {/* TRIÁNGULO DERECHO */}
        <div className="absolute right-0 top-0 h-full w-[40%] bg-[#2b8ac6] clip-triangle"></div>

        {/* CONTENIDO */}
        <div className="relative z-10 w-full flex justify-between px-16">

          {/* LISTA IZQUIERDA */}
          <div className="space-y-10 max-w-lg">

            <div className="flex items-start gap-4">
              <span className="text-cyan-400 text-2xl font-bold">01</span>
              <p className="text-xl border-l-4 border-purple-400 pl-3">
                No supo cómo o donde denunciar
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-cyan-400 text-2xl font-bold">02.</span>
              <p className="text-xl border-l-4 border-purple-400 pl-3">
                Procedimientos de investigación laboral no era claro
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-cyan-400 text-2xl font-bold">03.</span>
              <p className="text-xl border-l-4 border-purple-400 pl-3">
                Tuvo miedo a que procedimiento no fuera confidencial
              </p>
            </div>

          </div>


          <div
            className={`max-w-md text-right transition-all duration-[1400ms] ease-out ${visibleCausa
              ? "translate-x-0 opacity-100"
              : "translate-x-32 opacity-0"
              }`}
          >
            <h2 className="text-5xl font-bold leading-tight text-blue-100">
              Causa por las que <br />
              los trabajadores <br />
              no denuncian
            </h2>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;