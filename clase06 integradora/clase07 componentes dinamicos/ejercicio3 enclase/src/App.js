import logo from './logo.svg';
import './App.css';

import zarasa from './App.module.css'
import React from 'react';
import Title from './Title';

const colors= ["red","blue","green"]

function cosito(el){
  console.log("Soy ", el)
  return (<p key={el}>{el}</p>)
}

const ps= colors.map(cosito);
;





function App() {
  console.log(zarasa)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Title name={`Edit <code>src/App.js</code> and save to reload.`} classNameCustom="App-logo"/>
        <Title name={`Another string`} classNameCustom="User-name"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {ps}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <p className={zarasa.gato}>Learn React</p>
        </a>
      </header>
    </div>
  );
}

export default App;
