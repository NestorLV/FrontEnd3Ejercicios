import React, { Component } from 'react'
import "../styles/Pokedex.css"

export default class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterPokemons: [],
            searched: ""
        }
        this.handleFilter= this.handleFilter.bind(this)
        this.handleClean=this.handleClean.bind(this)
    }
    
    // AREA DE TRABAJO --> Usemos el ciclo de vida nuevamente para setear por unica vez lo que nos llega por props el filterPokemons
    componentDidMount(){
        this.setState({filterPokemons: this.props.pokemons})
    }

    getPokemon = (pokemon) => {
        this.props.updateParent({pokemon});
        
        
        // Aqui espero setear los datos en una funcion devuelta como prop
    }
    
    handleFilter = (event) => {

        const search = event.target.value;
        const arrayFiltered = this.props.pokemons.filter((word)=>word.name.toUpperCase().includes(search.toUpperCase()));
        this.setState({filterPokemons: arrayFiltered, searched: search});
    }



    handleClean = (event) => {
        event.preventDefault();
        this.setState({filterPokemons: this.props.pokemons, searched:""})
    }


    render() {
        const { filterPokemons } = this.state;
        return (
            <div className="pokeContainer">
                <h3>POKEDEX</h3>
                <form className="pokeSearch">
                    {/* AREA DE TRABAJO PARA CREAR DOS EVENTOS, uno para el input y otro para el button */}
                    <input type="text" value={this.state.searched} onChange={this.handleFilter} placeholder="Filtrar pokemones"/>
                    <button onClick={this.handleClean}>Limpiar</button>
                </form>
                <div className="pokeList">
                    {filterPokemons.map(pokemon => (
                        <p key={pokemon.name} onClick={() => this.getPokemon(pokemon)} className="pokeOption">{pokemon.name}</p>
                    ))}
                </div>
            </div>
        )
    }
}

