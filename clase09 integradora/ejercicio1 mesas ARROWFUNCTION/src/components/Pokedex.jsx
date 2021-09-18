import React, { Component } from 'react'

export default class Pokedex extends Component {

    render() {
        const {updateParent} = this.props
        return (
            <div style={pokeContainer}>
                <h3>POKEDEX</h3>
                <div style={pokeList}>
                    {this.props.pokemons.map(pokemon => (
                    <p onClick={() => updateParent({pokemon: [pokemon.name, pokemon.id, pokemon.type]})} style={pokeOption}>{pokemon.name}</p>
                    ))}
                </div>
            </div>
        )
    }
}

const pokeContainer = {
    width: "50%",
    background: "red",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const pokeList = {
    border:"3px solid black",
    display: "flex", 
    flexWrap: "wrap", 
    justifyContent: "space-around", 
    width: "500px"
}

const pokeOption = {
    margin:"10px", 
    padding:"5px", 
    cursor:"pointer", 
    border:"2px solid yellow",
    backgroundColor:"black",
    color:"white"
}
