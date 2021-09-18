import React from 'react'
import "../styles/App.css"
import PokedexClass from './Pokedex';
import pokedex from '../pokedex.json'

export default class App extends React.Component {
  
  pokemon = [pokedex[0].name, pokedex[0].id, pokedex[0].type];
  pokemons = pokedex;
  
  constructor(){
    super();
    this.state ={
      id: 58,
      name: "Growlithe",
      type: ["Fire"],
      base:{
        HP: 90,
        Attack: 110,
        Defense: 80,
        "Sp. Attack": 100,
        "Sp. Defense": 80,
        Speed: 95
      }
    }
    this.update=this.update.bind(this);
  }

  update(pokemon) {
    const newPoke = {id: pokemon.pokemon[0], name: pokemon.pokemon[1], type:pokemon.pokemon[2], base:pokemon.pokemon[3]}
    console.log(newPoke);
    this.setState(newPoke)

  }

  getPokemon = () => {
    if (this.state["id"]?.toString()?.length === 1) return `00${this.state["id"]}`
    if (this.state["id"]?.toString()?.length === 2) return `0${this.state["id"]}`
    if (this.state["id"]?.toString()?.length === 3) return `${this.state["id"]}`
}

  getTypes = () => {
    let phrase;
    let spec=`Abilities:HP:${this.state.base.HP},Att:${this.state.base.Attack},\nDef:${this.state.base.Defense},Sp.Att:${this.state.base['Sp. Attack']}nSp.Def:${this.state.base['Sp. Defense']},Sp:${this.state.base.Speed}`;
    if(this.state.type.length === 1) return this.state.type[0]+spec
    if(this.state.type.length > 1) {
     for (let index = 0; index < this.state.type.length; index++) {
       if(index === 0) phrase = this.state.type[index]
       if(index !== 0) phrase = `${phrase} and ${this.state.type[index]}`
     }
     return phrase+spec;
    }
  }

  render() {
    return (
      <div className="flex">
      <div className="container">
        <img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.getPokemon()}.png`} alt={this.state.id.toString()} />
        <p id="name">{`${this.state.name} is a pokemon type ${this.getTypes()}`}</p>
      </div>
      <PokedexClass updateParent={this.update} pokemons={this.pokemons} />
    </div>
    )
  }
}


