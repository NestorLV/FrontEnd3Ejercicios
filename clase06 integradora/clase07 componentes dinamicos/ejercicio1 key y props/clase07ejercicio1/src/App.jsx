import React from "react";
import "./App.css";
import ForArray from "./components/ArrayFor";
import MapArray from "./components/ArrayMap";
import KeyFor from "./components/KeyFor/index.jsx";
import KeyMap from "./components/KeyMap";



function App() {
  const tripulantes = [
    { nombre: "Mr. Poindibags", esImpostor: true },
    { nombre: "Bombom", esImpostor: false },
    { nombre: "Tito", esImpostor: false },
    { nombre: "X-Ray", esImpostor: false },
    { nombre: "Fixfox", esImpostor: false },
  ];

  

  return (
    <React.Fragment>
      <ForArray>{tripulantes}</ForArray>
      <MapArray>{tripulantes}</MapArray>
      <KeyFor>{tripulantes}</KeyFor>
      <KeyMap>{tripulantes}</KeyMap>

    </React.Fragment>
  );
}

export default App;
