import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Carousel({ items, bgColor, textSide = "left" }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${bgColor} p-12 overflow-hidden h-[570px] flex items-center relative`}
    >
      <div className="flex justify-between w-full h-full items-center">

        {/* TEXTO IZQUIERDA */}
        {textSide === "left" && (
          <div
            style={{
              transform: `translateY(${scrollY * 0.05}px)`
            }}
            className={`flex flex-col justify-center h-full max-w-[300px] transition-all duration-1000 ${visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-32 opacity-0"
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
        <div className="flex gap-6 items-center">
          {items.map((item, i) => {
            const position = (i - index + items.length) % items.length;

            let size = "w-44 h-60 opacity-40 scale-90";
            let active = false;

            if (position === 0) {
              size = "w-64 h-80 opacity-100 scale-100";
              active = true;
            } else if (position === 1 || position === items.length - 1) {
              size = "w-52 h-72 opacity-70 scale-95";
            }

            return (
              <div key={i} className="flex flex-col items-center">

                {/* IMAGEN */}
                <div
                  className={`${size} bg-white overflow-hidden rounded-t-full transition-all duration-700 ease-in-out`}
                  style={{
                    transform: active ? "translateY(-15px)" : "translateY(0px)",
                    transition: active ? "transform 0.7s ease" : "none"
                  }}
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
            style={{
              transform: `translateY(${scrollY * 0.05}px)`
            }}
            className={`flex flex-col justify-center items-end text-right h-full max-w-[300px] transition-all duration-1000 ${visible
                ? "translate-x-0 opacity-100"
                : "translate-x-32 opacity-0"
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
      <div
        className={`absolute bottom-6 flex gap-3 ${textSide === "right" ? "left-12" : "right-12"
          }`}
      >
        <button
          onClick={prev}
          className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default Carousel;