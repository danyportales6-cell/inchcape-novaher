import React, { useState, useEffect, useRef } from "react";
import PARTE1 from "../components/ACCIONES/PARTE1";
import PARTE2 from "../components/ACCIONES/PARTE2";
import PARTE3 from "../components/ACCIONES/PARTE3";
import PARTE4 from "../components/ACCIONES/PARTE4";
import PARTE5 from "../components/ACCIONES/PARTE5";
import PARTE6 from "../components/ACCIONES/PARTE6";
import PARTE7 from "../components/ACCIONES/PARTE7";
import PARTE8 from "../components/ACCIONES/PARTE8";
import SECCION1 from "../components/INICIO/SECCION1";
import SECCION2 from "../components/INICIO/SECCION2";
import SECCION3 from "../components/INICIO/SECCION3";
import SECCION4 from "../components/INICIO/SECCION4";
import SECCION5 from "../components/INICIO/SECCION5";

function Home() {
  return (
    /* Quitamos el height fijo y el hidden para permitir scroll */
    <div
      style={{
        width: "100%",
        minHeight: "100vh" /* Usamos minHeight en lugar de height */,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f0f8ff",
      }}
    >
      <SECCION1 />
      <SECCION2 />
      <SECCION3 />
      <SECCION4 />
      <SECCION5 />
      <PARTE1 />
      <PARTE2 />
      <PARTE3 />
      <PARTE4 />
      <PARTE5 />
      <PARTE6 />
      <PARTE7 />
      <PARTE8 />
    </div>
  );
}

export default Home;
