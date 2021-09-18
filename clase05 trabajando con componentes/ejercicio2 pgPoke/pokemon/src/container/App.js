import PokemonInList from '../components/PokemonInList';
import PokeCard from '../components/PokeCard';
//import '../styles/App.css';

const pokemon= [{name:"charmander", id:4},{name:"charmeleon", id:5},{name:"charizard", id:6}]

function App() {
 return <div><PokemonInList results={pokemon}/></div>
}

export default App;
