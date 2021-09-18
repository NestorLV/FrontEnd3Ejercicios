import React from 'react';
import Home from './Home.jsx';
import Main from './Main.jsx';
import About from './About.jsx';
import Faq from './Faq.jsx';
import Error from './Error.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav.jsx';
import Article from './Article.jsx';

function App() {
  return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/main"><Main /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/faq"><Faq /></Route>
          <Route path="/article/:id"><Article/></Route>
          <Route path="/faq"><Faq /></Route>
          <Route path="*"><Error /></Route>
        </Switch>
      </BrowserRouter>
  );
}
export default App;