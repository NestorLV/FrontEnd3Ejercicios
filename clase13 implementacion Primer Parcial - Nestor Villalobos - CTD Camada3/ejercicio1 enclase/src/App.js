import "./styles.css";
import data from "./components/data.json";
import { Component } from "react";
import Todo from "./components/Todo";
export default class App extends Component {
  state = {
    todos: [],
    bitacora: []
  };

  UNSAFE_componentWillMount() {
    console.log("Ha sido montado mi component App");
  }

  componentDidMount() {
    console.log("componentDidMount", data);
    this.setState({ todos: data });
  }

  handleSelected = (id, title) => {
    console.log("El todo component me envío", id, title);
    const newBitacora = {
      id: id,
      title: title,
      date: new Date().toLocaleTimeString()
    };
    this.setState({ bitacora: [...this.state.bitacora, newBitacora] });
  };
  // {
  //   "userId": 1,
  //   "id": 1,
  //   "title": "delectus aut autem",
  //   "completed": false
  // },

  render() {
    console.log("render desde App", this.state.bitacora);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        {this.state.todos.map((todo) => (
          <Todo
            key={`${todo.id}-${todo.title}-${todo.userId}`}
            userId={todo.userId}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onSelect={this.handleSelected}
          />
        ))}
        <ul>Has dado click en los siguiente elementos</ul>
        {this.state.bitacora.map((element,index)=><li key={index+element.id+element.title}>{element.id +" "+element.title}</li>)}
      </div>
    );
  }
}
