import { Component } from "react";

function ComponentName({ name, properties }) {
  const keys = Object.keys(properties);
  const values = Object.values(properties);

  const length = keys.length;
  let nodo = `${name}`;

  for (let index = 0; index < length; index++) {
    nodo = `${nodo}
    ${keys[index]}:${values[index]}
    `;
  }

  return ` <${nodo} />`;
}

function ComponentProps(props) {
  return `var props = ${JSON.stringify(props)}`;
}

class MyComponent extends Component {
  render() {
    return (
      <>
        <hr />
        <ComponentName name={MyComponent.name} properties={this.props} />
        <br />
        <hr />
        <ComponentProps {...this.props} />
        <hr />
      </>
    );
  }
}

export default MyComponent;
