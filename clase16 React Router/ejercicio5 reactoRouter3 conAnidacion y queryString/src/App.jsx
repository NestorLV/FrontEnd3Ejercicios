import React from 'react';
import Home from "./Home.jsx"
import Main from "./Main.jsx"
import Article from "./Article.jsx"
import Faq from "./Faq.jsx"
import About from "./About.jsx"
import { Router, Route, browserHistory } from "react-router-3";

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="/main" component={Main}> 
            <Route path="/main/article/:titleId" component={Article} /> 
          </Route>
          <Route path="/faq" component={Faq} />
          <Route path="/about" component={About} />
        </Route>
      </Router>
    );
  }
}
export default App;