import React, { Component } from "react";
import Swal from "sweetalert2";
//import "./styles.module.css";

const App = () => <MyLittleForm />;

class MyLittleForm extends Component {
  state = { 
    name: "", 
    error: false 
  };

  handleChange = (event) => {
    console.log(event);
    this.setState({
      name: event.target.value,
      error: false,
    });
    console.log("Has cambiado el nombre");
  };

  handleSubmit = (event) => {
    
    event.preventDefault();
    if (this.state.name === "") this.setState({ error: true });
    else {
      Swal.fire("Hello " + this.state.name);
      this.setState({ name: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <img src="/img/pony.jpg" alt="Pony" />
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        {this.state.error && <span>This field is required</span>}
        <button type="submit">Submit!</button>
      </form>
    );
  }
}
export default App;
