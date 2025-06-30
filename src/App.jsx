import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Home from "./components/home";
import About from "./components/about";
import Navigation from "./components/navigation";
import Img from "./assets/my Photo-2.png";

function App() {
  return (
    <div className="bg-[#161718] w-screen">
      <Navigation />

      <section 
        id="home"
        className="h-screen px-20  flex items-center justify-between"
      >
        <div className="grid justify-start mb-40 text-zinc-300 text-3xl w-2/4">
          <div className="mx-20  mb-20">
            <Home />
          </div>
        </div>
        <div className="flex justify-start  w-2/4">
          <div className="w-[350px] h-[500px] ml-10 mb-20 flex items-center justify-center ">
            <img
              src={Img}
              alt="Profile"
              className="w-full h-full object-contain rounded-xl "
            />
          </div>
        </div>
      </section>

      <section id="about">
        {/* <div className="col-span-1 grid justify-start pt-10 ml-20 mb-10 text-[#ffffff] text-5xl font-arvo ">
          <p>About Me</p>
        </div> */}
        <div className="grid mx-20 mt-5 mb-20">
          <About />
        </div>
      </section>

      <section id="skills">
        {/* <div className="col-span-1 grid justify-start  ml-20 mb-10  text-[#ffffff] text-5xl font-arvo">
          Skills
        </div> */}
        <div className="grid mx-20 mt-5 mb-20 ">
          <Skills />
        </div>
      </section>

      <section id="project">
        <div className="ml-20   text-[#ffffff] text-xl font-arvo  "> 
        <h4>Project history</h4>
      </div>
        <div className="ml-20   text-[#ffffff] text-xl font-arvo  ">
          Under Construction
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
    </div>
  );
}

export default App;
