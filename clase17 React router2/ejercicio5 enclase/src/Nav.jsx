import "./App.css";
import { Link } from "react-router-dom";
import React from "react";

function Nav(props) {
  return <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/gato/1">Gato</Link></li>
      <li><Link to="/perro/2">Perro</Link></li>
      <li><Link to="/todos">Todos</Link></li>
    </ul>
  </div>
}


export default Nav;

