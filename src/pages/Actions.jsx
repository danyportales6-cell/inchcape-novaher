import React from "react";
import PARTE1 from "../components/ACCIONES/PARTE1";
import PARTE2 from "../components/ACCIONES/PARTE2";
import PARTE3 from "../components/ACCIONES/PARTE3";
import PARTE4 from "../components/ACCIONES/PARTE4";
import PARTE5 from "../components/ACCIONES/PARTE5";
import PARTE6 from "../components/ACCIONES/PARTE6";
import PARTE7 from "../components/ACCIONES/PARTE7";
import PARTE8 from "../components/ACCIONES/PARTE8";

function Actions() {
  return (
    /* Quitamos el height fijo y el hidden para permitir scroll */
    <div style={{ 
      width: '100%', 
      minHeight: '100vh',    /* Usamos minHeight en lugar de height */
      display: 'flex', 
      flexDirection: 'column', 
      backgroundColor: '#f0f8ff' 
    }}>
      <PARTE1 />
      <PARTE2 />
      <PARTE3/>
      <PARTE4/>
      <PARTE5/>
      <PARTE6/>
      <PARTE7/>
      <PARTE8/>
    </div>
  );
}

export default Actions;
