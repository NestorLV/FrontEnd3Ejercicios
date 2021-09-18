import React from 'react';
import './App.css';
import Decrement from './components/Decrement';
import Increment from './components/Increment';
import Swal from 'sweetalert2';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null
    };
    this.update = this.update.bind(this)
  }

  componentDidMount() {
    this.setState({ number: 5 })
  }

  componentDidUpdate(){
    if(this.state.number===0){Swal.fire("ups llegaste al minimo")}
    if(this.state.number===10){Swal.fire("ups te excediste")
    }
  }

  update(newValue) {
    this.setState({ number: newValue })
  }

  

  render() {
    return (
      <div className="App">
        <h1>Hola Mundo</h1>
        <h2>{this.state.number}</h2>

        <Increment customFunction={this.update} currentValue={this.state.number} />
        <Decrement customFunction={this.update} currentValue={this.state.number} />
      </div>
    )
  }
}


