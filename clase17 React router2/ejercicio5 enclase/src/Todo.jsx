import React from 'react'

export default class Todo extends React.Component {
  state = {
    todo: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params; // este valor lee el id en la barra del navegador y lo pasa al fecth
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ todo: data }))
  }

  render() {
    return (
      <div>
        <p>{this.state.todo?.title}</p>
        <p>{this.state.todo?.id}</p>
        <button onClick={() => this.props.history.goBack()}>Atras</button>
      </div>
    )
  }
}