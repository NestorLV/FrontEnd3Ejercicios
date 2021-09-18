import React from 'react';
import LectorArray from '../LectorArray';

function ForArray(props) {
    let array = props.children;
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let tripulante= `${array[i].nombre} ${array[i].esImpostor?" ":" no "} era el Impostor`;
        newArray.push(tripulante);
    }
    return (<LectorArray data={newArray} function="ForArray"/>)
}

export default ForArray;
