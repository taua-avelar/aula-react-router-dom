import React from "react";

import "./styles.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <div className="sidenav">
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="main">
        <Home />
        <About />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export default App;
