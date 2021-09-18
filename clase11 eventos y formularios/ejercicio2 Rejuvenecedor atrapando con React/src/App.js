import React from 'react';
import Swal from 'sweetalert2';
import './App.css';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
      age:0,
      disabled:false
    }
    this.handleChangeName=this.handleChangeName.bind(this)
    this.inputNicknameRef=React.createRef();

  }

  handleChangeName(event){this.setState({name: event.target.value})}
  
  handleChangeAge=(event)=>{
    this.setState({age: parseInt(event.target.value)})
   }
  
  handleSubmit=(event)=>{
    event.preventDefault();
    const age= this.state.age-10;
    console.log(this.state.name.length>1);
    console.log(this.state.age>0);
    console.log(!isNaN(this.state.age));
    const nickName = this.inputNicknameRef.current;
    console.log(nickName.value.length);
    if (this.state.name.length>1 && this.state.age>0 && !isNaN(this.state.age) && nickName.value.length){
      Swal.fire("Su nombre es: "+this.state.name+" y ahora tu nueva edad: "+age) 
    }       
  }


  render(){
    return (
    <div className="App">
      <h1>Bienvenido al primer formulario de leo en react</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Ingrese su nombre: </label>
        <input type="text" onChange={this.handleChangeName}/>
        <label>Ingrese su edad:</label>
        <input type="text" onChange={this.handleChangeAge}/>
        <label>Ingrese su apodo: </label>
        <input type="text" ref={this.inputNicknameRef}/>
        <input type="submit" value="submit" disabled={this.state.disabled} />
      </form>
    </div>)
  }
  
}


