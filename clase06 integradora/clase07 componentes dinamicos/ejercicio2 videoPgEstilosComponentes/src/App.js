import './App.css';
import Encabezado from './Encabezado';
import React from 'react';
import Medio from './Medio';
import PieDePagina from './PieDePagina';

function App() {
  return (
    <div className="App">
      <Encabezado classNameCustom="encabezado1"></Encabezado>
      <Medio classNameCustom="encabezado2"></Medio>
      <PieDePagina></PieDePagina>
     
    </div>
  );
}

export default App;
