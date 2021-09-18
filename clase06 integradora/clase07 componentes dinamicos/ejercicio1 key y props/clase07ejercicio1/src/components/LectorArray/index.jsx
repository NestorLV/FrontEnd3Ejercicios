import React from 'react';

function LectorArray(props) {
    return (<div>
        <ul>
            <h3>Llegue por un {props.function}</h3> 
            {props.data.map((element,index)=><li key={index}>{element}</li>)}
        </ul>
    </div>)
}
 export default LectorArray;