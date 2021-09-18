import './App.css';
import React,{Component} from 'react';

const imageDown="https://vegeta-flexiones.netlify.app/static/media/up.fd9f3c14.png";
const imageUp= "https://vegeta-flexiones.netlify.app/static/media/down.2f147ccd.png";

export default class Counter extends Component {

  state = {
    contador:0,
    imagenUrl: imageDown
  }

  getImage(prevImage, newCounter) {
    return (prevImage===imageDown?{imagenUrl:imageUp}:{imagenUrl:imageDown, contador: newCounter})
  }
   
  handlePushUp=()=>{
    const newStateCounter = this.state.contador++;
    const newState= this.getImage(this.state.imagenUrl,newStateCounter);
    this.setState(newState)
  } 
  
  
  render(){
    return (
      <div className="App">
        <button onClick={this.handlePushUp}>Flexion</button>
        <p>{this.state.contador}</p>
        <img src={this.state.imagenUrl} alt="vegeta down"/>
      </div>
    );
  }
}




