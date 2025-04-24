import React, { useState } from "react";
import './tarjetaCita.css';

const TarjetaCita = (props) => {
    const [visible, setVisible] = useState(true);

    const handleEliminar = () => {
        setVisible(false); 
    }

    if (!visible) return null;

    return (
        <div className="cita">
            <p>Mascota: <span>{props.nombre}</span></p>
            <p>Dueño: <span>{props.dueño}</span></p>
            <p>Fecha: <span>{props.fecha}</span></p>
            <p>Hora: <span>{props.hora}</span></p>
            <p>Sintomas: <span>{props.sintomas}</span></p>
            <button className="button eliminar u-full-width" onClick={handleEliminar}>
                Eliminar ×
            </button>
        </div>
    );
}

export default TarjetaCita;
