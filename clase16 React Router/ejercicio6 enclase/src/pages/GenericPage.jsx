function GenericPage(props) {
  return (
    <div>
      <h2>Welcome to page {props.name || "Feliz cumple"}</h2>
    </div>
  );
}

export default GenericPage;
