// import React from 'React';  con esta alternativa de import se extiende con React.Component
import React, {Component} from 'react';  // con esta alternativa de import se extiende solo con Component
import * as peliculas from './movies.json';

class Pelicula extends Component {
    constructor(props){
        super(props);

        this.state={  //definimos el estado inicial
            imagen:"",
            titulo:"",
            anio:0,
            director:"",
            actores:[],
            genero:"",
            puntaje:0,
            imdb_URL:""
        }

        this.seleccionarPelicula= this.seleccionarPelicula.bind(this);
        this.verEnIMDB= this.verEnIMDB.bind(this);

    };

    seleccionarPelicula(){return (console.log('Se ejecuto la funcion seleccionarPelicula()'))}
    verEnIMDB(){return (console.log('Se ejecuto la funcion verEnIMDB'))}

   
    componentDidMount(){
        this.setState({...this.props,...peliculas});  // copie esta linea de la consigna
    }; 

    componentDidUpdate(){
        this.setState({...this.props,...peliculas});  // me invente esta linea
    }; 

    render(){
        return (
        <>
            <li onClick={this.seleccionarPelicula}>
                <img src={this.state.image} alt={this.state.titulo +" image"} width="auto" height="200px"/>
                <div onClick={this.verEnIMDB}>
                    <p> <b>Titulo: </b> {this.state.titulo} </p>
                    <p> <b>Año: </b> {this.state.anio} </p>
                    <p> <b>Director: </b> {this.state.directos} </p>
                    <p> <b>Actores: </b> {this.state.actores.join(', ')} </p>
                    <p> <b>Genero: </b> {this.state.genero} </p>
                    <p> <b>Puntaje:: </b> {this.state.puntaje} </p>
                </div>
            </li>
        </>)
    }
}

export {Pelicula};  // export con nombre, se debe importar asi import {Pelicula} from './Pelicula.jsx';
export default Pelicula; // export sin nombre, se debe importar asi import NAME from from './Pelicula.jsx'; NAME puede ser cualquier nombre por ejemplo: Pelicula, Movie