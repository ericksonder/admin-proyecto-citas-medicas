import React, { useState, useEffect } from "react";
import WidgetDeEstadistica from "../widgetEstadisticas/WidgetEstadisticas";
import "./barraDeEstadisticas.css";

const BarraDeEstadisticas = ({ adminName, cantidadDeUsuarios, citasXDia, citasXMes }) => {
  

  

  return (
    <section className="row stads__wrapper">
      <h1 className="text-white col-12 p-5">Hola {adminName}</h1>

      <div className="col-xl-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-end">
        <WidgetDeEstadistica titulo={"Usuarios"} dato={cantidadDeUsuarios} />
      </div>
      <div className="col-xl-3 col-md-4 col-sm-6  d-flex justify-content-center align-items-end">
        <WidgetDeEstadistica  titulo={"Citas / Dia"} dato={citasXDia} />
      </div>
      <div className="col-xl-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-end">
        <WidgetDeEstadistica titulo={"Citas / Mes"} dato={citasXMes} />
      </div>
    </section>
  );
};

export default BarraDeEstadisticas;
