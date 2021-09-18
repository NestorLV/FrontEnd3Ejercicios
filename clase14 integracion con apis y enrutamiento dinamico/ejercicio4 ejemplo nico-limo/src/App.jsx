import React, { Component } from 'react'
import FetchComponent from "./components/FetchComponent"
import AxiosComponent from "./components/AxiosComponent"
import AsyncAwaitComponent from "./components/AsyncAwaitComponent"
import TryCatchComponent from "./components/TryCatchComponent"

export default class App extends Component {
  render() {
    return (
      <div>
        <FetchComponent />
        <AxiosComponent />
        <AsyncAwaitComponent />
        <TryCatchComponent />
      </div>
    )
  }
}
