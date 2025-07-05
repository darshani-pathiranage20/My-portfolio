import "./App.css";
import React from "react";
import Skills from "./components/Skills/skills";
import Projects from "./components/projects";
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
      <section id="project">
        <div className="project-heading">
          <h4>Project history</h4>
        </div>
        <div className="project-heading">Under Construction</div>
        <div className="section-grid">
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-contact">
        <div>
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default App;
