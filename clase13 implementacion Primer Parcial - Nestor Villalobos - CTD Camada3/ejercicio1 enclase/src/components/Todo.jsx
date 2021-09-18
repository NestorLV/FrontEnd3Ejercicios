import { Component } from "react";

class Todo extends Component {
  handleSelect = () => {
    this.props.onSelect(this.props.id, this.props.title);
  };

  render() {
    const { userId, id, title, completed } = this.props;
    return (
      <div>
        <p>userId : {userId}</p>
        <p>id : {id}</p>
        <p>Título : {title}</p>
        <p>¿Está completo? : {`${completed ? "Yessss" : "Todavía nop"}`}</p>
        {/* <p>¿Está completo? : {String(completed)}</p> */}
        {/* <p>¿Está completo? : {completed.toString()}</p> */}
        <button onClick={this.handleSelect}>Seleccioname</button>
        <hr />
      </div>
    );
  }
}

export default Todo;
