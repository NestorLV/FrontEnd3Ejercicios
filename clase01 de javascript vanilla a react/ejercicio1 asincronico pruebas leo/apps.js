//import { React } from "react";  //  importacion para automcompletar con vscode
//import { ReactDOM } from "react-dom"; // importacion para automcompletar con vscode

//import React from "react";   // alternativa importacion para automcompletar con vscode
//import ReactDOM from "react-dom";  // importacion para autocompletar con vscode

const p_1= React.createElement(
    "p",
    {key:1},
    "Soy un parafo"
);

const p_2= React.createElement(
    "p",
    {key:2},
    "Soy un parafo adicional"
);

const div_el= React.createElement(
    "div",
    {key:3},
    [p_1,p_2]
);


//abreviando el funcionamiento de la funcion React.createElement

const c= React.createElement;
const p1=c("p",{key:4},"Hola de nuevo");
const p2=c("p",{key:5},"Hola otra vez");
const div2=c("div",{key:6},[div_el,p1,p2])

ReactDOM.render(div2,document.getElementById("root"));