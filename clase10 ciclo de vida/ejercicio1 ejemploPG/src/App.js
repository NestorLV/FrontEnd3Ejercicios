import './App.css';
import React, {Component} from 'react';
import swal from 'sweetalert2';


const App =()=><CounterWrapper/>

class Counter extends Component{
  render(){
    return (
      <div className="Counter">
        <p className="count">{this.props.count}</p>
        <section className="controls">
          <button onClick={this.props.decrement}>Disminuir</button>
          <button onClick={this.props.increment}>Aumentar</button>
          <button onClick={this.props.reset}>Reiniciar</button>
        </section>
      </div>
    )
  }
}

class Start extends Component {
    render(){
      return (
        <div className="Counter">
          <section className="controls">
            <button onClick={this.props.starting}>Iniciar</button>
          </section>
        </div>
      )
    }
}

class CounterWrapper extends Component{
  constructor(props){
    super(props);
    this.state={
      count:5,
      start: false
    }
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleStartingReset = this.handleStartingReset.bind(this);
  }

  componentWillMount(){
    console.log("El componente CounterWrapper se esta por montar al DOM");
  }

  componentDidMount(){
    console.log("El componente CounterWrapper se montó en el DOM");
  }

  componentDidUpdate(prevState){
    console.log("El componente CounterWrapper se ha actualizado");
    console.log(prevState);
    if(prevState.start!==this.state.start){
      if(this.state.start===false){console.log("El contador se ha reiniciado");}
      else{console.log("El contador se ha iniciado");}
    }
    if(prevState.count!== this.state.count && this.state.count===0){
      swal.fire("You are magic !!")
        .then(()=>{this.handleStartingReset()});
    }
  }

  handleStartingReset(){
    this.setState((prevState)=>{
      return{
        //...prevState,   no usamos el estado anterior y le indicamos los valores nuevos a tomar como estado
        count:5,
        start: !prevState.start
      }
    })
  }

  handleDecrement(){
    this.setState({count: this.state.count-1});
  }

  handleIncrement(){
    this.setState({count: this.state.count+1});
  }
  
  render(){
    return (
      <main>
       {this.state.start===true?
          <Counter decrement={this.handleDecrement} reset={this.handleStartingReset} increment={this.handleIncrement} count={this.state.count}/>:
          <Start starting={this.handleStartingReset}/>
       }
      </main>
    )
  }
}
export default App;