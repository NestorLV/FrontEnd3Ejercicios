import React from 'react';
import './App.css';
import List from './components/List';

function App() {
  const animalNames=["Firualais", "Maya", "Pipo", "Pacha"];
  const animalsDescripcion=[
    {edad:23, raza:"Pastor", sexo:"Macho", tamano:"Grande"},
    {edad:5, raza:"Caniche", sexo:"Macho", tamano:"Grande"},
    {edad:3, raza:"Pitbull", sexo:"Macho", tamano:"Grande"},
    {edad:2, raza:"Hotdog", sexo:"Macho", tamano:"Grande"},
  ];

  return (
    <div>
     <List labels={animalNames} animals={animalsDescripcion}></List>
    </div>
  );
}

export default App;
