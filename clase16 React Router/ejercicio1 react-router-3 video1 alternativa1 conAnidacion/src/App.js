import React from "react"
import './App.css';
import Home from "./Home"
import Article from "./Article"
import About from "./About"
import NotFound from "./NotFound"
import Faq from "./Faq"
import {Router, browserHistory} from "react-router-3"

export default class App extends React.Component{
  
  routes =()=>({
    path: "/",
    indexRoute:{component: Home},
    childRoutes: [
      { path: "home", component: Home},
      { path: "main", indexRoute: {component: Article}}, // se anida un componente dentro de otro
      { path: "about", component: About},
      { path: "faq", component: Faq},
      { path: "*", component: NotFound}
    ]
  });
    
  
  render(){
    return (
      <>
        <h1>App</h1>
        <Router history={browserHistory}

        routes = {this.routes()} />
        
      </>
    );
  }
  
  
}


