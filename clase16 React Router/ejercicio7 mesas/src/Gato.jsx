function Gato(props) {
    console.log(props);
    return (
        <>
            <h1>Soy Gato y hago Miauuuu Miauu</h1>
            <p>id: {props.match.params.id}</p>
            <p>queryString: {props.location.search}</p>
        </>
    );

}

export default Gato;