import React from "react";
import PORTADA from "../components/ACCIONES/PORTADA";
import SECCION2 from "../components/INICIO/SECCION2";
import SECCION3 from "../components/INICIO/SECCION3";
import SECCION4 from "../components/INICIO/SECCION4";
import SECCION5 from "../components/INICIO/SECCION5";

function Actions() {

  return (
    <div  style={{ 
      width: '100%', 
      minHeight: '100vh',    /* Usamos minHeight en lugar de height */
      display: 'flex', 
      flexDirection: 'column', 
      backgroundColor: '#f0f8ff' 
    }}>
      <PORTADA/>
      <SECCION2/>
      <SECCION3/>
      <SECCION4/>
      <SECCION5/>
    </div>
  )
}

export default Actions;





