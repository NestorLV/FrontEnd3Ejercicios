import './App.css';
import React,{Component} from 'react';
import vegetaUp from './images/up.png'
import vegetaDown from './images/down.png'

// codigo sin estado


/* export default class Counter extends Component {
  contador=0;
  
  handlePushUp(){   // no es necesario colocar la palabra reservada function al inicio de la funcion, por lo parentesis ya lo reconoce
    this.contador+=1;
    console.log(this.contador);
  }

  render(){
    return (
      <div className="App">
        <button onClick={()=>this.handlePushUp()}>Flexion</button>
        <p>{this.contador}</p>
        <img src={vegetaUp} alt="vegeta Up"/>
        <img src={vegetaDown} alt="vegeta down"/>
      </div>
    );
  }
} */

// codigo con estado
export default class Counter extends Component {

  constructor(){
    super();
    this.handlePushUp= this.handlePushUp.bind(this);
    this.state={
      contador:0,
      vegeta: vegetaDown
    }
  }

  
  
  handlePushUp(){   // no es necesario colocar la palabra reservada function al inicio de la funcion, por lo parentesis ya lo reconoce
    this.setState(this.state.vegeta===vegetaDown?{vegeta:vegetaUp}:{vegeta:vegetaDown, contador: this.state.contador+1})
  }
  
  render(){
    return (
      <div className="App">
        <button onClick={this.handlePushUp}>Flexion</button>
        <p>{this.state.contador}</p>
        <img src={this.state.vegeta} alt="vegeta down"/>
      </div>
    );
  }
}




