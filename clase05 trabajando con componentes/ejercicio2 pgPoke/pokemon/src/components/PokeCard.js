import React from 'react';

const url= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

const PokeCard = ({id,name})=>{
    return (
        <div className={'card'} key={id}>
            <div className="pokemon">
                <img alt={name} src={`${url}${id}.svg`}/>
            </div>
            <h3>{name} Nro {id}</h3>
        </div>
    );
    
};

export default PokeCard;