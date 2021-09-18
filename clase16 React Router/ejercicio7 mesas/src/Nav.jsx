import "./App.css";
import { Link } from "react-router-dom";
import React from "react";

function Nav(props) {
  return <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/gato/abc?start">Gato</Link></li>
      <li><Link to="/perro/123?qq=cc">Perro</Link></li>
    </ul>
  </div>
}


export default Nav;

