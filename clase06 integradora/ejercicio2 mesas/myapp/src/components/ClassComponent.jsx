import React from 'react';

class ClassComponent extends React.Component {
    render(){
        return (this.props.invitados.map((invitado)=>{
            const {nombre,estaEnLista}= invitado;
            return <li>{nombre} {estaEnLista?"esta": "no está"} invitado a la fiesta</li>}
            )
        )
    }
}
export default ClassComponent;