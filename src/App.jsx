import './App.css';
import { useState } from 'react';
import TarjetaCita from './components/tarjetaCita/tarjetaCita';
import CrearCita from './components/crearCita/crearCita';

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h1>Crear mi cita</h1>
            <CrearCita crearCita={agregarCita} />
          </div>

          <div className="one-half column">
            <h1>Administra tus citas</h1>
            {citas.map((cita, numeroCitas) => (
              <TarjetaCita 
                key={numeroCitas}
                nombre={cita.nombre}
                dueño={cita.dueño}
                fecha={cita.fecha}
                hora={cita.hora}
                sintomas={cita.sintomas}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
