import './App.css';
import React from "react"
import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Route path="/"><Main/></Route>
      <Route path="/home"><Home/></Route>
    </div>
  );
}

function Main(){
  return <h2>Main</h2>
};

function Home(){
  return <h2>Home</h2>
};

export default App;
