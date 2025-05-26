import './App.css';
import { useState, useEffect } from 'react';
import TarjetaCita from './components/tarjetaCita/tarjetaCita';
import CrearCita from './components/crearCita/crearCita';

function App() {
  const [citas, setCitas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const citasLocalStorage = localStorage.getItem('citas');
    if (citasLocalStorage) {
      try {
        const citasParseadas = JSON.parse(citasLocalStorage);
        if (citasParseadas) {
          setCitas(citasParseadas);
        }
      } catch (error) {
        console.error("Error parsing citas from localStorage:", error);

      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const jsonCitas = JSON.stringify(citas);
      localStorage.setItem('citas', jsonCitas);
    }
  }, [citas, isLoading]);

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
