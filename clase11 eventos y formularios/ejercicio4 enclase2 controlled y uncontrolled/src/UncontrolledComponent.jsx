import React from "react";

class UnControlledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passCharacter: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputEmailRef = React.createRef();
  }

  handleSubmit(event) {
    // con js vanilla y html
    //const inputEmail = document.getElementById("Coso")
    // alert("A name was submitted: " + inputEmail.value);

    // Con react y su referencia
    const inputEmail = this.inputEmailRef.current;
    console.log(inputEmail);
    alert("A name was submitted: " + inputEmail.value);
    if (inputEmail.value.length >= 10) {
      this.setState({ passCharacter: true });
    }
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <p>El usuario esta habilitado: {String(this.state.passCharacter)}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={this.inputEmailRef} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default UnControlledComponent;
