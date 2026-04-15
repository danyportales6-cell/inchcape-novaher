import React from "react";
import PARTE1 from "../components/ACCIONES/PARTE1";
import PARTE2 from "../components/ACCIONES/PARTE2";
import PARTE3 from "../components/ACCIONES/PARTE3";
import PARTE4 from "../components/ACCIONES/PARTE4";

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
    </div>
  );
}

export default Actions;
