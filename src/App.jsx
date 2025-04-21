import './App.css'
import TarjetaCita from './components/tarjetaCita/tarjetaCita'

function App() {
  return (
    <>
      <h1>Administrador de Pacientes</h1>

      
      <div>
        <h1>Administra tus citas</h1>
        <TarjetaCita nombre="Toro" dueño="Juan" fecha="20/12/2025" hora="12:00" sintomas="Dolor de panza"/>
      </div>
    </>
  );
}

export default App
