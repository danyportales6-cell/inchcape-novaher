import React from "react";
import decoracionAzul from "../assets/decoracionazul.png";
import decoracionVerde from "../assets/decoracionverde.png";
import portada from "../assets/portada.png";
import Carousel from "../components/Carousel";

function Home() {

  const items = [
    {
      img: "https://picsum.photos/300/400?1",
      text: "Exigir cumplimiento de tareas",
    },
    {
      img: "https://picsum.photos/300/400?2",
      text: "Dar retroalimentación respetuosa",
    },
    {
      img: "https://picsum.photos/300/400?3",
      text: "Fomentar comunicación clara",
    },
    {
      img: "https://picsum.photos/300/400?4",
      text: "Promover un ambiente sano",
    },
  ];

  return (
    <div className="font-sans">

      {/* HERO */}
      <section
        className="relative h-[680px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${portada})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 pl-16 max-w-xl animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            EN INCHCAPE EL RUMBO A TU BIENESTAR SE CONDUCE CON RESPETO
          </h1>
        </div>
      </section>

      {/* DISCRIMINACIÓN */}
      <section className="relative bg-[#0979bb] text-white p-12 overflow-hidden">
        <img
          src={decoracionAzul}
          alt=""
          className="absolute top-0 right-0 h-full w-72 object-cover pointer-events-none"
        />

        <h3 className="text-3xl font-bold mb-4">DISCRIMINACIÓN</h3>
        <p className="max-w-4xl text-lg leading-relaxed">
          Es un conjunto de acciones que trata de humillar o intimidar a una persona
          por un periodo largo de tiempo, haciendo sentir inseguro e incómodo.
        </p>
      </section>

      {/* ACOSO */}
      <section className="relative bg-[#bacf00] text-white p-12 overflow-hidden">
        <img
          src={decoracionVerde}
          alt=""
          className="absolute top-0 left-0 h-full w-72 object-cover pointer-events-none"
        />

        <h3 className="text-3xl font-bold mb-4 text-right">ACOSO</h3>
        <p className="max-w-4xl ml-auto text-right text-lg leading-relaxed">
          Es el trato injusto o desigual hacia una persona o grupo debido a
          características como su origen, género, edad, apariencia, religión u
          otras diferencias.
        </p>
      </section>

      {/* CARDS */}
      <section className="bg-[#1e3a5f] py-14 flex justify-center gap-8 flex-wrap">

        <div className="w-56 bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
          <img
            src="https://picsum.photos/300/200?1"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h4 className="font-bold text-lg mb-2">Respeto</h4>
            <p className="text-sm text-gray-600">
              Fomentar un ambiente donde todos sean valorados.
            </p>
          </div>
        </div>

        <div className="w-56 bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
          <img
            src="https://picsum.photos/300/200?2"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h4 className="font-bold text-lg mb-2">Inclusión</h4>
            <p className="text-sm text-gray-600">
              Promover igualdad sin importar diferencias.
            </p>
          </div>
        </div>

        <div className="w-56 bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
          <img
            src="https://picsum.photos/300/200?3"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h4 className="font-bold text-lg mb-2">Confianza</h4>
            <p className="text-sm text-gray-600">
              Crear espacios seguros para todos.
            </p>
          </div>
        </div>

      </section>

      {/* ESTO SI Y NO */}
      <Carousel items={items} bgColor="bg-[#b6d400]" textSide="left" />
      <Carousel items={items} bgColor="bg-[#2b6ca3]" textSide="right" />

      {/* SECCIÓN FINAL */}
      <section
        className="relative bg-cover bg-center text-white p-16 h-[500px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* TRIÁNGULO */}
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[200px] border-l-transparent border-b-[200px] border-b-[#bacf00]"></div>

        <div className="relative z-10 flex justify-between items-start">
          <ul className="text-lg space-y-3 max-w-md">
            <li>No supo cómo denunciar</li>
            <li>Procedimientos no claros</li>
            <li>Miedo a falta de confidencialidad</li>
          </ul>

          <h3 className="text-3xl font-bold text-right">
            Causas por las que los trabajadores no denuncian
          </h3>
        </div>
      </section>

    </div>
  );
}

export default Home;