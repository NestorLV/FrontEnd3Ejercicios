import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pokemon from './components/Pokemon'
import About from './components/About'
import Gallery from './components/Gallery'

export default class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route exact path="/pokemon/:id" component={Pokemon}></Route>
                        <Route exact path="/pokemon/:id/gallery/:name" component={Gallery}></Route>
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}
