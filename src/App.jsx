import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;