import React from "react"
import './App.css';
import Home from "./Home"
import Article from "./Article"
import About from "./About"
import NotFound from "./NotFound"
import Faq from "./Faq"
import {Router,Route,IndexRoute, browserHistory} from "react-router-3"

export default class App extends React.Component{
   
  render(){
    return (
      <>
        <h1>App</h1>
        <Router history={browserHistory}>
          <Route path="/">
            <IndexRoute component={Home}/>
            <Route path="/main">
                <IndexRoute component={Article}/>
            </Route>
            <Route path="/about" component={About}/>
            <Route path="/faq" component={Faq}/>
            <Route path="*" component={NotFound} status={404}/>
          </Route>
        </Router>   
      </>
    );
  }
}