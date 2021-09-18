import './App.css';

const enStock = ["Manzana", "Pera", "Naranja", "Banana", "Kiwi"];

const enFalta = ["Durazno", "Cereza", "Anana"];

function List(props){
  return props.data.map((element)=><li>{element}</li>)
}

function Title(props){
  return <ul><h2>{props.text}</h2><List data={props.data}/></ul>
}

function App() {
  return (
   <div>
    <Title text="Productos Disponibles" data={enStock} />
    <Title text="Productos No Disponibles" data={enFalta} />
   </div>
  );
}

export default App;
