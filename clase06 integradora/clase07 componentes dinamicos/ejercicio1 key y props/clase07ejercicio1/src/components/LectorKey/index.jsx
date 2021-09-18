import React from 'react';

function LectorKey(props) {
    return (
        <>
            <li>{`${props.nombre} ${props.esImpostor?" ":" no "} era el Impostor`}</li>
        </>
    )
}
 export default LectorKey;