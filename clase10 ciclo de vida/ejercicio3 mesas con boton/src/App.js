import './App.css';
import React from 'react';


class Order extends React.Component {
  
  componentWillUnmount(){console.log("Me voy a desmontar");}
  
  render(){
    return (<>
      <p>{this.props.children}</p>
      <button onClick={this.props.customFunction}>{this.props.children}</button>
    </>)
  }
}
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      stage: false,
      life:true
    }
  }


  handleCreateOrder=()=>{this.setState({stage:true,life: this.state.life})}
  handleFinalizeOrder=()=>{this.setState({stage:false,life: this.state.life})}
  handleDismountComponent=()=>{this.setState({stage:this.state.stage,life: !this.state.life})}

  componentWillMount(){console.log("El componente se va agregar al DOM");}
  componentDidMount(){console.log("El componente se agregó al DOM");}
  componentDidUpdate(){
    if(this.state.life===true){
      if(this.state.stage===true){
        console.log("Genial hiciste un pedido");
      }
      else{
        console.log("Genial Finalizaste el pedido");
      }
    }
    else{
      console.log("El componente se actualizo");
    }

  }
  

  render(){
    return (
      <div className="App">
        <h1>Welcomen to Leo's Pizzeria</h1>
        {this.state.life?
          (
            this.state.stage===false?
            <Order customFunction={this.handleCreateOrder}>Create Order</Order>:
            <Order customFunction={this.handleFinalizeOrder}>Finalize App</Order>
          )
        :""
        }
        
        
        {this.state.life===true?<Order customFunction={this.handleDismountComponent}>Dismount Order</Order>:""}
      </div>
    )
  }  
}