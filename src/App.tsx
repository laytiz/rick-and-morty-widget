import React from "react";
import "./App.css";
import Persons from "./components/persons/Persons";
import logo from "./assets/Rickandmortylogoru.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="лого" />
      <Persons />
    </div>
  );
}

export default App;
