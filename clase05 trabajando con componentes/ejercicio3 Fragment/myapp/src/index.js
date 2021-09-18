import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const numbers =[1,2,3,4,5,6];
const listItems= numbers.map((number)=>
  <React.Fragment>
    <span>Nro </span>
    <p>{number}</p>
  </React.Fragment>);

ReactDOM.render(
  <React.StrictMode>
    <>{listItems}</>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

