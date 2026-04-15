import React, { useState, useEffect, useRef } from "react";

function Carousel({ items, bgColor, textSide = "left" }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // 🎮 teclado
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // 👀 animación SOLO cuando entra en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${bgColor} p-12 overflow-hidden h-[550px] flex items-center relative`}
    >
      <div className="flex justify-between items-center w-full">

        {/* TEXTO IZQUIERDA */}
        {textSide === "left" && (
          <div
            className={`transition-all duration-700 ${
              visible ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"
            }`}
          >
            <h2 className="text-6xl font-bold">
              Esto <span className="text-white">NO</span> es
            </h2>
            <p className="mt-4 font-semibold">ACOSO</p>
            <p className="font-semibold">DISCRIMINACIÓN</p>
          </div>
        )}

        {/* CARRUSEL */}
        <div className="flex gap-6 items-end">
          {items.map((item, i) => {
            const position = (i - index + items.length) % items.length;

            let size = "w-44 h-60 opacity-40";
            let active = false;

            if (position === 0) {
              size = "w-64 h-80 opacity-100";
              active = true;
            } else if (position === 1 || position === items.length - 1) {
              size = "w-52 h-72 opacity-70";
            }

            return (
              <div key={i} className="flex flex-col items-center">

                {/* IMAGEN */}
                <div
                  className={`${size} bg-white overflow-hidden rounded-t-full transition-all duration-500 ${
                    active ? "translate-y-[-15px]" : ""
                  }`}
                >
                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* TEXTO FIJO */}
                <div className="h-[60px] flex items-start justify-center mt-3">
                  <p className="text-sm text-center max-w-[140px]">
                    {item.text}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* TEXTO DERECHA */}
        {textSide === "right" && (
          <div
            className={`text-right transition-all duration-700 ${
              visible ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
            }`}
          >
            <h2 className="text-6xl font-bold">
              Esto <span className="text-white">SI</span> es
            </h2>
            <p className="mt-4 font-semibold">ACOSO</p>
            <p className="font-semibold">DISCRIMINACIÓN</p>
          </div>
        )}
      </div>

      {/* BOTONES */}
      <div className="absolute right-12 bottom-6 flex gap-3">
        <button onClick={prev} className="bg-black/30 text-white px-4 py-2">
          ←
        </button>
        <button onClick={next} className="bg-black/30 text-white px-4 py-2">
          →
        </button>
      </div>
    </section>
  );
}

export default Carousel;