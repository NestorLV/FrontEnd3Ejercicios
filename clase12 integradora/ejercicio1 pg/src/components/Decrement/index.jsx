import React from 'react';
import "./styles.css";

export default class Decrement extends React.Component {
    
    handleDecrement=()=>{
        this.props.customFunction(this.props.currentValue-1);
    }

    render(){
        return(
        <div className="decrement">
            <h3>Decrement</h3>
            <button onClick={this.handleDecrement}>Decrement</button>
        </div>)
    }
}