import { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ErrorPage from "./pages/Error";
import GenericPage from "./pages/GenericPage";
import "./styles.css";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">
          Home
          <span aria-label="emoji-rock" role="img">
            🤟
          </span>
        </Link>
      </li>
      <li>
        {/* <a href="/about">About</a> */}
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  );
};

export default class App extends Component {
  state = { key: "/Home" };
  componentDidMount() {
    // window.location.pathname = "/Dashboard";
  }

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={() => <GenericPage name="Home" />} />  {/* la primera linea a buscar por el exac */}
          <Route path="/About" component={() => <GenericPage name="About" />} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
  // render() {
  //   console.log("render", window.location);
  //   switch (window.location.pathname) {
  //     case "/":
  //       return <GenericPage name="Home" />;
  //     case "/About":
  //       return <GenericPage name="About" />;
  //     default:
  //       return <ErrorPage />;
  //   }
  // }
}
