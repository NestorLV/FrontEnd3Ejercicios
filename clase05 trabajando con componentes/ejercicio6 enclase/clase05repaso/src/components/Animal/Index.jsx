import React from 'react';

function Animal(props) {
    const descripcion = props.data;
    return (
       <React.Fragment>
           <ul>
               <li>Edad: {descripcion.edad}</li>
               <li>Sexo: {descripcion.sexo}</li>
               <li>Raza: {descripcion.raza}</li>
               <li>Tamaño: {descripcion.tamano}</li>
           </ul>
       </React.Fragment>
    );
}

export default Animal;