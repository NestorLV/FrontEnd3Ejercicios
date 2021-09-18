import './App.css';

function Item(props){
  return <li>{props.text}</li>
}

function Nav(props){
  return (
  <nav>
    <ul>{props.data.map(element=>(<Item text={element}/>))}</ul>
  </nav>);
}


function List(props){
  return (
    <div>
      <h1>{props.label}</h1>
      <ul>
        {props.data.map(element=>(<Item text={element}/>))}
      </ul>
    </div>
  );  
}

function App() {
  const navigation = ["Home","About","Contact"];
  const availableProducts = ["Tomate","Manzana","Peras"];
  const unAvailableProducts = ["Cebolla", "Bananas"]
  return (
  <div>
    <Nav data={navigation}/>
    <List data={availableProducts} label="Productos Disponibles"/>
    <List data={unAvailableProducts} label="Productos No Disponibles"/>
  </div>);
}

export default App;