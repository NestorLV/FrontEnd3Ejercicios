import React from "react";
import Hijo from "../components/Hijo";

const frutas = ["banana","pera","mango","uva","fresa"];
const titulo = "Listado de Frutas";

const Padre = ()=> {
    const hijos = ()=>{return frutas.map((fruta)=><Hijo fruta={fruta}/>)}
    return (
        <div>
            <h1>{titulo}</h1>
            <ul>{hijos()}</ul>
        </div>
    );    
        
};


export default Padre;