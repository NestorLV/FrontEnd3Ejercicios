import React from 'react';

function FunctionComponents(props) {
    return (props.invitados.map((invitado)=>{
            const {nombre,tarea}= invitado;
            return <li>{nombre} traera {tarea}</li>
            }
        )
    )
}
export default FunctionComponents;