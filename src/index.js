import React from "react";
import ReactDOM from "react-dom";

import { ComponentCounter, UseStateCounter } from "./components/Counter";

import "./styles.css";

const App = () => (
  <div className="App">
    <h2>UseStateCounter</h2>
    <UseStateCounter />

    <br />

    <h2>ComponentCounter</h2>
    <ComponentCounter />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
