import ClassComponent from "../components/ClassComponent";
import FunctionComponents from "../components/FunctionComponent";
import "../styles/App.css";

function App() {
  const invitados = [
    { nombre: "Nicolas", estaEnLista: true, tarea: "Papas Frintas" },
    { nombre: "Juan", estaEnLista: false, tarea: "Pizza" },
    { nombre: "Nestor", estaEnLista: true, tarea: "Bebidas" },
  ];
  return (
    <div className="App">
      <h3>Invitados: </h3>
      <ClassComponent invitados={invitados} />
      <h3>Tareas: </h3>
      <FunctionComponents invitados={invitados} />
    </div>
  );
}

export default App;
