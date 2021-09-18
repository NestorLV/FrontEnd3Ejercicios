import React from 'react';
import "./styles.css";

export default class Increment extends React.Component {
    
    handleIncrement=()=>{
        this.props.customFunction(this.props.currentValue+1);
    }

    render(){
        return(
        <div className="increment">
            <h3>Increment</h3>
            <button onClick={this.handleIncrement}>Increment</button>
        </div>)
    }
}