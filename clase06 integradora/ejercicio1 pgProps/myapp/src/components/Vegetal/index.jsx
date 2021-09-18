import React from 'react';
import Cactus from '../Cactus';

class Vegetal extends React.Component {
    render(){
        return(
        <React.Fragment>
            <h1>Soy una clase Vegetal</h1>
            <Cactus especie={this.props.especie}>{this.props.children}</Cactus>
            
        </React.Fragment>)
    }
}

export default Vegetal;