import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import Projects from "./components/Projects";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import FigmaProjects from "./components/FigmaProjects";

const App = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <FigmaProjects/>
     
      <Footer />
    </div>
  );
};

export default App;
