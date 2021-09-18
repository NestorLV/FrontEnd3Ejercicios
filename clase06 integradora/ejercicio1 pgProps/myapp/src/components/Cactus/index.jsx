import React from 'react';

class Cactus extends React.Component {
    render(){
        return<h3>Soy una clase Vegetal, pertenezco a la especie: {this.props.especie} y soy de color: {this.props.children}</h3>
    }
}

export default Cactus;