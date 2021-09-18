import React from 'react';
import Styles from './Encabezado.module.css';

function Encabezado(props) {
    return (<header>
        <h1 className={Styles[props.classNameCustom]}>Encabezado</h1>
    </header>)
}

export default Encabezado;