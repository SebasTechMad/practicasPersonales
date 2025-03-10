import React from "react"
import Formulario from "./components/formulario/formulario"
import './index.css';

const elementos = ['usuario', 'contraseña'];

function App() {
    return (
      <main className="d-flex justify-content-center align-items-center">
        <Formulario titulo={'Iniciar sesion'} datos={elementos}></Formulario>
      </main>
      
    );
}

export default App
