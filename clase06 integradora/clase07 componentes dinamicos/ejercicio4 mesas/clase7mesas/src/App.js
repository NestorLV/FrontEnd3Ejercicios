
import './App.css';
import Greeting from './components/Greeting';

function App() {
  const texto = ["hola1", "hola2", "hola3","mundo"]

  return (
    <>
     {texto.map((element,index)=><Greeting indice={index} classCustomName="greetingClass">{element}</Greeting>)}
    </>
  );
}

export default App;
