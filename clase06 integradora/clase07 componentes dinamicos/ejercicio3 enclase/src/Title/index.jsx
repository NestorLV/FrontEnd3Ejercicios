import styles from './Title.module.css';
import coso from '../App.module.css';


const k = { "App-logo":{color:"red"}, "User-name":{color:"crimson"}}

function Title(props) {
    const {name, classNameCustom} = props;   
    return (
        <>
            <p className={styles["App-logo"]}>{name}</p>
            <p className={coso.gato}>{name}</p>
        </>
    )
    
    
}

export default Title;