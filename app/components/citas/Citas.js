import React from "react";
import Cita from "../cita/Cita";

const Citas = ({ citas, eliminarCita }) => {
  return (
    <>
      {citas.map((cita, index) => ( 
        <Cita key={index} index={index} cita={cita} eliminarCita={eliminarCita} /> 
      ))}
    </>
  );
};

export default Citas;
