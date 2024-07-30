import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Home from "./components/home";
import About from "./components/about";
import Navigation from "./components/navigation";
import Img from "./assets/myphoto.png"

function App() {
  return (
    <div className="bg-[#030303] w-screen">
      <section>
        <Navigation />
      </section>

      <section className="scroll-v ">
        <section id="home" className=" h-screen px-20 pt-16  bg-cover bg-center size-cover  " style={{ backgroundImage: `url(${Img})` }}>
          <div className=" grid justify-start text-zinc-300 text-3xl   ">
            <p></p>
          </div>
          <div className="grid mx-20 mt-5 mb-20">
            <Home />
          </div>
        </section>

        <section id="about">
          <div className="col-span-1 grid justify-start  ml-20 mb-10 text-[#ffffff] text-5xl font-arvo ">
            <p>About Me</p>
          </div>
          <div className="grid mx-20 mt-5 mb-20">
            <About />
          </div>
        </section>

        <section id="skills">
          <div className="col-span-1 grid justify-start  ml-20 mb-10  text-[#ffffff] text-5xl font-arvo">
            Skills
          </div>
          <div className="grid mx-20 mt-5 mb-20 ">
            <Skills />
          </div>
        </section>

        <section id="project">
          <div className="ml-20 mb-10  text-[#ffffff] text-5xl font-arvo  ">
            Projects
          </div>
          <div className="grid mx-20 mt-5 mb-20 ">
            <Projects />
          </div>
        </section>

        <section id="contact" className="h-screen m-20  my-2">
          <div className="">
            <Contact />
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
