import React from 'react';
import Home from "./Home.jsx"
import Main from "./Main.jsx"
import Faq from "./Faq.jsx"
import About from "./About.jsx"
import { Route, BrowserRouter, Link, Switch} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <ul>
          <li><Link to="/main">Main</Link></li>
        </ul>
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
        <ul>
          <li><Link to="/faq">Faq</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/main" component={Main}/>
          <Route path="/faq" component={Faq} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>    
    );
  }
}
export default App;