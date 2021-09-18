import React from 'react';
import styles from './greetingStyle.module.css';


function Greeting(props) {
    return (<h3 key={props.indice} className={styles[props.classCustomName]}>{props.children}</h3>)
}

export default Greeting;