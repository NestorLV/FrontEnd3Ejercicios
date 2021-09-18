import './App.css';
import React, { Fragment } from "react";
// se crea un component llamado Inflatter, el cuál nos va a mostrar un log en el momento que se desmonte.
class Inflatter extends React.Component {
  // Utilizo el método que estoy heredando de mi React.component llamado componentWillUnmount para poder hacer el log cuando se desmonte el component
  componentWillUnmount() {
    console.log("Estoy apagado");
  }
  // Uso el render para retornar el jsx a mi front end
  render() {
    return (
      <>
        <h2>Estoy encendido</h2>{" "}
        <button onClick={this.props.onCancelar}></button>
      </>
    );
  }
}

// Se crea un component llamado Offline, en el cúal usamos el constructor para inicializar el state con la key statusOff la cúal va a contener un string
class Offline extends React.Component {
  // Inicializo mi constructor y llamo a super
  constructor(props) {
    super(props);
    // Inicializo el state con la key statusOff
    this.state = {
      statusOff: ""
    };
  }

  // Doy uso de los métodos heredados de React.component, en el cuál podemos hacer uso o no y, dependiendo de nuestras necesidades
  componentDidMount() {
    console.log("componentDidMount desde Offline");
  }
  componentWillMount() {
    console.log("componentWillMount desde Offline");
  }

  // Doy uso del componentWillReceiveProps para setear al estado las propiedades que estoy recibiendo
  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps Offline", nextProps, nextState);
    // Estoy seteando un objeto al cuál contiene statusOff con un string hola más la contatenación de las propiedades que estoy recibiendo.
    this.setState(
      (prev)=>({statusOff: "Hola"+ " " + nextProps.status})
      //Esto es igual a: {statusOff: "Hola"+" "+this.state.statusOff + " " + nextProps.status}
    );
  }

  // Importante!!!!!
  // Al declarar el uso del shouldComponentUpdate, debo retornar un boolean, dentro del mismo podemos implementar la lógica que nosotros decidamos.
  shouldComponentUpdate() {
    console.log("Estoy harcodeado para dar siempre true en el shouldComponentUpdate()");
    return true;
  }

  // Estoy usando el método componentDidUpdate para mostrar un console log una vez se renderice el component ya sea, por cambios en la props ó el state.
  componentDidUpdate() {
    console.log("componentDidUpdate Offline");
    // En este punto estoy ejecutando un método llamado onUpdate, que estaría recibiendo de props
    this.props.onUpdate();
  }

  componentWillUnmount() {
    console.log("Me estoy desmontando con componentWillUnmount");
  }

  render() {
    // en este punto estoy desestructurando del objeto this.props valores que podría llegar a usar ó no
    const { status, onChageStatus, onUpdate, net = "" } = this.props;
    // en este punto estoy desestructurando del objeto this.state valores que podría llegar a usar ó no
    const { statusOff } = this.state;
    return (
      <>
        <p>{statusOff}</p>
        <button onClick={onChageStatus}>Cambiar estado</button>
      </>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offline: false,
      updated: true,
      counter: 0,
      ifShouldUpdate: 0
    };
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState((prev) => ({ ifShouldUpdate: nextProps.whenUpdate }));
    console.log("componentWillReceiveProps App", nextProps, nextState);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate from App", nextProps, nextState);
     return nextState.counter >= this.props.whenUpdate;
    //return false;
  }

  handleChangeStatus = () => {
    this.setState((prev) => ({
      offline: !prev.offline,
      counter: prev.counter + 1
    }));
  };

  render() {
    console.log("render from App", this.state);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <p>{String(this.state.updated)}</p>
        {this.state.offline ? <Inflatter onCancelar/> : <Fragment></Fragment>}
        <Offline
          onUpdate={() => {
            console.log(
              "Me actualizó el component Offline desde componentDidUpdate método"
            );
            // Se esta empleando un método en linea.
            // Este método se puede ejecutar en cuálquier parte de nuestro component padre (App)
            // Acá ojo cuando descomentamos la siguiente linea. Esto nos va hacer que entre en un loop infinito.
            // this.setState((prev) => ({ updated: !prev.updated }));
          }}
          status={`Conectado ${String(this.state.offline)}`}
          onChageStatus={this.handleChangeStatus}
        />
      </div>
    );
  }
}
