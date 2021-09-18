import { Component } from "react";
import MyComponent from "./MyComponent";
import "./styles.css";
// function d(id) {}
// d(3);

// class Animal {
//   nombre = "Puppy";
//   state={}
//   constructor(props) {
//     //this.nombre = props.name
//     this.state ={
//       loading: props.cargando
//       date: new Date().getFullYear()
//     }
//   }
// }

// const perro = new Animal();
// const perro2 = new Animal({name: "Will", cargando: true});

// perro.nombre;
// perro2.nombre;

const g = {
  h: function () {},
  f() {}
};

class Supra extends Component {
  render() {
    return (
      <MyComponent
        name={this.props.nombre}
        clickMe={this.props.ejecutarClick}
        deleteMe={this.props.ejecutarDelete}
      />
    );
  }
}

export default class App extends Component {
  state = {
    nombre: "Will",
    date: new Date().getFullYear()
  };
  handleClick = (edad) => {};
  handleDelete(id, d) {
    console.log("hola", id);
  }

  h = this.handleDelete;
  g = this.handleClick;

  manejardorClick = () => {
    const cargar = "lote";
  };
  manejadorBorrar() {
    let type = "doctor";
  }
  render() {
    return (
      <div className="App">
        <h1>Ejemplo practico de props</h1>
        <MyComponent
          name="Josefa"
          clickMe={this.g}
          deleteMe={this.h}
          ranchoViejo
        />
      </div>
    );
  }
}
