import { logDOM } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Padre = (props)=>{return (
  <div style={{width: "85%",background: "pink", height:"200px", padding:"20px", border:"1px solid black"}}>
    <h5>Soy un padre</h5>
    {props.children}
    
  </div>
)}

const Hijo=(props)=>{return (
  <div style={{width: "50%",background: "cyan", height:"100px", padding:"10px", color:"red",fontSize:"30px", border:"1px solid black"}}>
    {props.autor}
   
  </div>
)}

const App = ()=>{
  return (
    <Padre >
      <Hijo autor="Soy un hijo"/>
    </Padre>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

