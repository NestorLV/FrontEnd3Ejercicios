import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Gato from "./Gato";
import Perro from "./Perro";
import Error from "./Error"
import Nav from "./Nav";
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <hr />
        <h1>¡¡ Tenemos muchos animalitos ¡¡</h1>
        <hr />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/gato/:id" component={Gato} />
          <Route path="/perro" component={(props)=>{
            console.log('component',props)
            return <Perro propsPadre={props}/>}} />
          <Route path="*" component={Error} />
        </Switch>
        <hr />
      </Router>

    );
  }
}
