import "./App.css";
import React from "react";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Navigation from "./components/navigation";
import Img from "./assets/my Photo-2.png";

function App() {
  return (
    <div className="app-container">
      {/* <Navigation /> */}

      {/* Home Section */}
      <section id="home">
        
          <div className="section-grid">
            <Home />
          </div>
      
      </section>

      {/* About Section */}
      <section id="about">
        <div className="section-grid">
          <About />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="section-grid">
          <Skills />
        </div>
      </section>

      {/* Project Section */}
      <section id="projects">
        <div className="section-grid">
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-grid">
        <div>
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default App;
