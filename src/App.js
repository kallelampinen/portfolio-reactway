import React from "react";
import Home from "./components/Home";
import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import { BackGroundImage } from "./components/BackgroundImage";
import { NavBar } from "./components/Navbar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ImageAPI } from "./components/ImageAPI";
import { Sourdough } from "./components/Sourdough";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <BackGroundImage /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/imageapi" element={<ImageAPI />} />
          <Route path="/projects/sourdough" element={<Sourdough />} />
        </Routes>
        <Footer />
      </Router>
      <GlobalStyles />
    </div>
  );
}

export default App;
