import React from "react";
import { Button, Input, Textarea } from "@nextui-org/react";

import "./formulario.css";

export default function Formulario() {
  return (
    <div className="formulario">
      <h3>Rellena este formulario</h3>
      <div className="form">
        <Input bordered labelPlaceholder="Nombre" width="90%" color="primary" />

        <Input
          bordered
          labelPlaceholder="Telefono"
          width="90%"
          color="primary"
        />

        <Input bordered labelPlaceholder="Email" width="90%" color="primary" />

        <Textarea
          bordered
          width="90%"
          color="secondary"
          labelPlaceholder="Tus Dudas"
        />

        <Button shadow color="gradient" auto className="enviar">
          <span className="palabra">Enviar</span>
        </Button>
      </div>
    </div>
  );
}
