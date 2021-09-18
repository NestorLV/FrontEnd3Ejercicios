import React from 'react';
import LectorKey from '../LectorKey';

function KeyFor(props) {
    let array= props.children;
    let newArray=[];
    for (let i = 0; i < array.length; i++) {
       let tripulante = <LectorKey key={i} {...array[i]}/>;
       newArray.push(tripulante);        
    }
    let lista = 
        <ul>
            <h3>Llegue por un KeyFor</h3>
            {newArray}
        </ul>;
    return (lista);
}

export default KeyFor;
