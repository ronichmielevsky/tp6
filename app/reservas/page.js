"use client";

import { useState } from "react";

const { default: Citas } = require("../components/citas/Citas");
const { default: Formulario } = require("../components/formulario/Formulario");
const { default: Header } = require("../components/header/Header");

function Reserva() {
  const [citas, setCitas] = useState([]);

  // Función para agregar una nueva cita al listado
  const agregarCita = (nuevaCita) => {
    // Validar datos de la cita (Plus 3)

    // Mostrar confirm antes de agregar la cita (Plus 2)
    if (window.confirm("¿Estás seguro de agregar esta cita?")) {
      setCitas([...citas, nuevaCita]);
    }
  };

  // Función para eliminar una cita del listado
  const eliminarCita = (indice) => {
    // Mostrar confirm antes de eliminar la cita (Plus)
    if (window.confirm("¿Estás seguro de eliminar esta cita?")) {
      const nuevasCitas = [...citas];
      nuevasCitas.splice(indice, 1);
      setCitas(nuevasCitas);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario agregarCita={agregarCita} /> {/* Pasar función como prop */}
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            <Citas citas={citas} eliminarCita={eliminarCita} /> {/* Pasar citas y función eliminarCita como props */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reserva;