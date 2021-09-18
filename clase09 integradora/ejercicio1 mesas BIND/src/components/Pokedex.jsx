import React, { Component } from 'react'
import '../styles/App.css'
export default class PokedexClass extends Component {

    render() {
        const {updateParent} = this.props
        return (
            <div className="pokeContainer">
                <h3>POKEDEX</h3>
                <div className="pokeList">
                    {this.props.pokemons.map(pokemon => (
                    <p onClick={() => updateParent({pokemon: [pokemon.id,pokemon.name,  pokemon.type, pokemon.base]})} className="pokeOption" key={pokemon.id}>{pokemon.name}</p>
                    ))}
                </div>
            </div>
        )
    }
}


