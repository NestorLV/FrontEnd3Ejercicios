import React from 'react';
import Gato from '../Gato';

function Animal(props) {
    return (
    <>
        <h1>Soy un funcion de Animal</h1>
        <Gato>{props.children}</Gato>
    </>
    );
}

export default Animal;