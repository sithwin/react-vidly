import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/movies";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <h1>Header</h1>
        <Movies />
      </main>
    </React.Fragment>
  );
}

export default App;
