import React from 'react';
import LectorArray from '../LectorArray';

function MapArray(props){
    let array = props.children;
    let newArray = array.map((tripulante)=>`${tripulante.nombre} ${tripulante.esImpostor?" ":" no "} era el Impostor`);
    return (<LectorArray data={newArray} function="MapArray"/>)
}

export default MapArray;