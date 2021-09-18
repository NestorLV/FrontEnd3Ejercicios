
function Name () {
    const name = "John Doe";
    return (<h1 className="title"> {name} </h1>);
    }

// -------------------------------------------------------------------------

/* Este es un componente, por lo que la primera letra
debe ser mayúscula */
function MiComponente() {  
    /* El uso de div en minúscula sí es correcto
    porque div es una etiqueta válida de HTML */
    return <div>Soy un componente React</div>;
    }

function miFuncion() {
    /* ¡No hacer! React piensa que <miComponente /> es una etiqueta HTML
    porque no empieza con mayúscula */
    return <miComponente />;
}

function miFuncion() {
    /* ¡Esta es la forma correctar de agregar el componente */
    return <MiComponente/>;
}


//------------------------------------------------------------------
/*  Para los elementos HTML que tienen etiquetas de cierre automático como <img>,
<hr>, <input> y <br>, la barra diagonal antes del corchete angular de cierre es
obligatoria en JSX (aunque es opcional en HTML) */

//  <input/>  CORRECTO
//  <input>   ERRADO



//--------------------------------------------------------------------
/*  Las expresiones entre llaves se evalúan como JavaScript, por lo que deben ser
expresiones válidas de JavaScript. Por ejemplo, la siguiente línea produce un
paragraph con el contenido 2 + 3 = 5 porque la porción entre llaves {2 + 3} evalúa a
5: */

<p> 2+3 = {2+3} </p>;
   
//---------------------------------------------------------------------

/* JSX acepta anidación, pero la expresión debe tener solo un elemento externo.
Por ejemplo, esto funciona:  */

const headings = (
    <div id = "outermost-element">
        <h1>Soy un encabezado h1</h1>
        <h2>Soy un encabezado h2</h2>
    </div>
);

/* Esto no funcionará: 
    const headings2 = (
        <h1>Soy un encabezado h1</h1>
        <h2>Soy un encabezado h2</h2>
    ); 
*/


/*  Las propiedades (props) en JSX utilizan la convención de nomenclatura de
camelCase en lugar de la usada para nombres de atributos en HTML, porque se
basan en la API DOM, no en las especificaciones del lenguaje HTML. Por ejemplo, se
debe usar className y tabIndex en lugar de classname y tabindex respectivamente,
igual que cuando usamos JavaScript para manipular el DOM. Por ejemplo, esto
funciona: */

const hola = <h1 className="welcome"> Hola Mundo </h1>;

/* Esto no funcionará:const hola = <h1 classname="welcome"> Hola Mundo </h1> */
function handleClick(params) {};
<button onClick = {handleClick}>Hazme click</button>

/* Esto no funcionará: <button onclick = {handleClick}>Hazme click</button> */
