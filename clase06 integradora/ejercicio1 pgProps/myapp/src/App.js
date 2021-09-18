import React from 'react';
import './App.css';
import Animal from './components/Animal';
import Vegetal from './components/Vegetal/index'

function App() {
  return (
    <div>
      <Animal raza="Ragdoll">Tango</Animal>
      <Vegetal especie="Cactus">Verde</Vegetal>
    </div>
  );
}

export default App;
