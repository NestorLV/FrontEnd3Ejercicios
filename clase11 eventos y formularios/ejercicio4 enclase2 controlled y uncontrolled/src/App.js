import React from "react";
import ControlledComponent from "./ControlledComponent";
//import UnControlledComponent from "./UncontrolledComponent";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <UnControlledComponent /> */}
      <ControlledComponent />
    </div>
  );
}
