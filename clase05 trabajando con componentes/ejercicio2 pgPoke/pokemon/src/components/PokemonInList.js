import React from 'react';
import PokeCard from './PokeCard';
//import "../styles/PokemonInList.css";

const PokemonInList=(props)=>{
    const renderedItems=()=>
        props.results.map(item=><PokeCard id={item.id} name={item.name}/>);
        return <div className="container">{renderedItems()}</div>
};

export default PokemonInList;



