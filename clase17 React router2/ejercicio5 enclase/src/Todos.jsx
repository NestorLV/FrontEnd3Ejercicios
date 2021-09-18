import React from 'react'

export default class Todos extends React.Component {

    state = { todos: [] }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(response => response.json())
            .then(data => this.setState({ todos: data }));
    }

    handleBuscar=(valor)=>{
        this.props.history.push(`/todo/${valor}`);
        }
    
    render() {
        return (
            <>
                {this.state.todos.map(todo => (
                    <div key={todo.id.toString()}>
                        <hr />
                        <p>{todo.title}</p>
                        <button onClick={()=>this.handleBuscar(todo.id)}>Buscar todo</button>
                        <hr />
                    </div>

                ))}
            </>
        );
    }


}

