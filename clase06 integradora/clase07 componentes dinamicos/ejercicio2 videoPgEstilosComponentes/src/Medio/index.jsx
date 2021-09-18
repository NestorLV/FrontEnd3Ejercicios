import React from 'react';
import Styles from './Medio.module.css';

function Medio(props) {
    return (<header>
        <h1 className={Styles[props.classNameCustom]}>Medio</h1>
    </header>)
}

export default Medio;