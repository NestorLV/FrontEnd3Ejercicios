import React from "react";

const estaHabilitado = true;

class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", disabled: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value.length);
    if (event.target.value.length >= 3) {
      this.setState({ disabled: false });
    }
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>

        <input type="submit" value="Submit" disabled={this.state.disabled} />
        <br />
        <br />
        <label>
          Agente libre:
          <input type="text" />
        </label>
        <input type="checkbox" checked={this.state.disabled} readOnly />
        <input type="checkbox" checked={estaHabilitado} readOnly />
        <input type="checkbox" />
      </form>
    );
  }
}

export default ControlledComponent;