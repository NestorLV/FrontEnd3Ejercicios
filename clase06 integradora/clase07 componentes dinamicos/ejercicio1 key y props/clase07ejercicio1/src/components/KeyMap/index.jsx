import React from 'react';
import LectorKey from '../LectorKey';

function KeyMap(props) {
    let array= props.children;
    let newArray= array.map((tripulante,index)=><LectorKey key={index}{...tripulante}/>)
    let lista = 
        <ul>
            <h3>Llegue por un KeyMap</h3>
            {newArray}
        </ul>;
    return (lista);
}

export default KeyMap;