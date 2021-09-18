import { Component } from "react";
import "./styles.css";

class Product extends Component {
  componentWillUnmount() {
    console.log(
      "[componentWillUnmount]- Se elimino el producto: ",
      this.props.name
    );
  }

  render() {
    return (
      <div>
        <span>{this.props.name}</span>
        <button onClick={() => this.props.onRemove(this.props.name)}>x</button>
      </div>
    );
  }
}

const products = [{ name: "gaseosa" }, { name: "gaseosa ligera" }];

export default class App extends Component {
  state = { products: products };

  handleRemove = (name) => {
    console.log(name);
    const newProducts = this.state.products.filter((el) => el.name !== name);
    console.log(newProducts);
    this.setState({ products: newProducts });
  };
  render() {
    console.log(this.state.products);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        {this.state.products.map((product, index) => (
          <Product
            name={product.name}
            key={product.name}
            position={index}
            onRemove={this.handleRemove}
          />
        ))}
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}
