import React from 'react';

function Gato(props) {
    return <h3>Mi padre es una funcion de Animal, con un gato adentro y me llamo: {props.children} y soy de la raza: {props.raza}</h3>;
}

export default Gato;