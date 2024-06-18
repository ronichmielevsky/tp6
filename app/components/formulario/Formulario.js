import React, { useState } from "react";

const Formulario = ({ agregarCita }) => {
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const [confirmado, setConfirmado] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCita({ ...cita, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    if (!mascota || !propietario || !fecha || !hora || !sintomas) {
      //alert("Por favor, completa todos los campos.");
      setError("Por favor, completa todos los campos.");
      return;
    }

    const propietarioPattern = /^[a-zA-Z\s]*$/;
    if (!propietarioPattern.test(propietario)) {
      //alert("El propietario solo puede contener letras y espacios.");
      setError("El propietario solo puede contener letras y espacios.");
      return;
    }

    if (!confirmado) {
      agregarCita(cita);
      setCita({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
      });
      setConfirmado(true);
    }

    setConfirmado(false);
  };

  return (    
    <form onSubmit={handleSubmit}>      
      <label htmlFor="mascota">Mascota:</label>
      <input
        type="text"
        name="mascota"
        id="mascota"
        value={cita.mascota}
        onChange={handleChange}
        className="u-full-width"        
      />

      <label htmlFor="propietario">Propietario:</label>
      <input
        type="text"
        name="propietario"
        id="propietario"
        value={cita.propietario}
        onChange={handleChange}
        className="u-full-width"        
      />

      <label htmlFor="fecha">Fecha:</label>
      <input
        type="date"
        name="fecha"
        id="fecha"
        value={cita.fecha}
        onChange={handleChange}
        className="u-full-width"        
      />

      <label htmlFor="hora">Hora:</label>
      <input
        type="time"
        name="hora"
        id="hora"
        value={cita.hora}
        onChange={handleChange}
        className="u-full-width"        
      />

      <label htmlFor="sintomas">Síntomas:</label>
      <textarea
        name="sintomas"
        id="sintomas"
        value={cita.sintomas}
        onChange={handleChange}
        className="u-full-width"        
      ></textarea>

      <button type="submit" className="u-full-width button-primary">
        Agregar Cita
      </button>
      {error && <div className="alerta-error">{error}</div>}
    </form>
  );
};

export default Formulario;
