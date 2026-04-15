import React from "react";
import decoracionAzul from "../assets/decoracionazul.png";
import decoracionVerde from "../assets/decoracionverde.png";
import portada from "../assets/portada.png";

function Home() {
  return (
    <div className="font-sans">

      <section
        className="h-[680px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${portada})`,
        }}
      >
      </section>

      <section className="relative bg-[#0979bb] text-white p-10 overflow-hidden">

        <img
          src={decoracionAzul}
          alt="decoración azul"
          className="absolute top-0 right-0 h-full w-64 object-cover pointer-events-none"
        />

        <h3 className="text-2xl font-bold mb-3">DISCRIMINACIÓN</h3>
        <p className="max-w-3xl leading-relaxed">
          Es un conjunto de acciones que trata de humillar o intimidar a una persona
          por un periodo largo de tiempo, haciendo sentir inseguro e incómodo.
        </p>
      </section>

      <section className="relative bg-[#bacf00] text-white p-10 overflow-hidden">

        <img
          src={decoracionVerde}
          alt="decoración verde"
          className="absolute top-0 left-0 h-full w-64 object-cover  pointer-events-none"
        />

        <h3 className="text-2xl font-bold mb-3 text-right">ACOSO</h3>
        <p className="max-w-3xl ml-auto text-right leading-relaxed">
          Es el trato injusto o desigual hacia una persona o grupo debido a
          características como su origen, género, edad, apariencia, religión u
          otras diferencias, afectando sus derechos y oportunidades.
        </p>
      </section>

      <section className="bg-[#1e3a5f] py-10 flex justify-center gap-6">
        <div className="w-40 h-24 rounded-xl bg-purple-400 flex items-center justify-center text-white shadow-lg hover:scale-105 transition">
          Ejemplo 1
        </div>
        <div className="w-40 h-24 rounded-xl bg-blue-300 flex items-center justify-center text-white shadow-lg hover:scale-105 transition">
          Ejemplo 1
        </div>
      </section>

      <section className="bg-[#b6d400] p-10">
        <h2 className="text-2xl font-bold mb-6">Esto NO es</h2>
        <div className="flex gap-6">
          <div className="w-20 h-32 rounded-full bg-gray-200"></div>
          <div className="w-20 h-32 rounded-full bg-[#7a9a00]"></div>
          <div className="w-20 h-32 rounded-full bg-gray-200"></div>
        </div>
      </section>

      <section className="bg-[#2b6ca3] text-white p-10">
        <h2 className="text-2xl font-bold mb-6">Esto SI es</h2>
        <div className="flex gap-6">
          <div className="w-20 h-32 rounded-full bg-[#1e3a5f]"></div>
          <div className="w-20 h-32 rounded-full bg-gray-200"></div>
          <div className="w-20 h-32 rounded-full bg-[#1e3a5f]"></div>
        </div>
      </section>

      <section className="bg-[#1e3a5f] text-white p-10">
        <h3 className="text-xl font-bold mb-4">
          Causas por las que los trabajadores no denuncian
        </h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>No supo cómo denunciar</li>
          <li>El proceso no era claro</li>
        </ul>
      </section>

    </div>
  );
}

export default Home;