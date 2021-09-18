

const lista=[
    "Batman",
    "Dragon Ball",
    "Kill Bill",
    "Shrek",
    "Naruto"
];


// los componenetes en react deben crearse con la primera letra en mayuscula


function Peliculas(props){   

    const peliculasArray= props.pelicula;
    const elements = peliculasArray.map((peli)=>React.createElement("li",{ key: peli },peli)); 
    // createElement (type, props, child)
    // al create element si le pasamos una funcion en el type lo toma asi _
    // opcion 1)  type(props), 
    // opcion 2) si le pasamos un string lo toma asi: <type style:${props.style} > ${children}</type>
    // Cuando recibe un arreglo no es necesario hacer join, porque el create element lo convierte en string
    const peliculas = React.createElement("ul",null, elements);
    return peliculas;
};


const element =  React.createElement(Peliculas,{pelicula:lista},null);
const container = document.getElementById("root");
ReactDOM.render( element, container );

console.log(ReactDOM);

/*  function item (pelis) { return `<li>${pelis}</li>`};
    const listPelis= lista.map(item).join("")
    document.getElementById("root").innerHTML= `<ul>${listPelis}</ul>`; */