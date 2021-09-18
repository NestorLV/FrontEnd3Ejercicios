import React from "react";
const { Component } = require("react");

class App extends Component {
  state = {
    loading: true,
    data: [],
    error: ""
  };

  componentDidMount() {
    this.buscarAlgoLindo();
  }

  buscarTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const firulais = await response.json();
      this.setState({ data: firulais });
    } catch (error) {
      console.log(error);
      this.setState({ error: "Algo pasó, upsssssss" });
    } finally {
      this.setState({ loading: false });
    }
  };

  buscarTesoro = this.buscarTodos;
  buscarAlgoLindo = this.buscarTesoro;

  render() {
    if (this.state.loading) {
      return (
        <>
          {" "}
          <p>...... estamos buscando los "TODOS"</p>{" "}
        </>
      );
    } else {
      return JSON.stringify(this.state.data);
    }
  }
}

export default App;
