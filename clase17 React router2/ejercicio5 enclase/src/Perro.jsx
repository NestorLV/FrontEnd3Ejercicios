import React from 'react'

export default class Perro extends React.Component {

    componentDidMount() {
        const {id}= this.props.match.params;
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(json => console.log(json))
    }

    render() {
        return (
            <>
                <h1>Soy Perro y hago Guauuuu Guauuuu</h1>
                <p>id: {this.props.match.params.id}</p>
                <p>queryString: {this.props.location.search}</p>
            </>
        );
    }


}

