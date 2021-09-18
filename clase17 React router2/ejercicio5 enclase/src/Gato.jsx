import React from 'react'

export default class Gato extends React.Component {
    
    render() {
        return (
            <>
                <h1>Soy Gato y hago Miauuuu Miauu</h1>
                <p>id: {this.props.match.params.id}</p>
                <p>queryString: {this.props.location.search}</p>
            </>
        );
    }


}

