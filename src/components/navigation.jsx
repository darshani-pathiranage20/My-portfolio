import React from "react";

export default function Navigation() {
  return (
    <div className=" mx-20">
      <section className=" bg-[#0f172a] grid grid-flow-col pt-4">
        <div className="bg-[#0f172a] text-[#37f0e7] p-3 ">Darshani</div>
        <ul className="grid text-[#37f0e7] grid-flow-col  ">
          <li className="p-3"> <a href="#about" className="bg-[#0f172a] ">About</a></li>
          <li className="p-3"> <a href="#skills" className="bg-[#0f172a] p-3">Skills</a></li>
          <li className="p-3"> <a href="#project"  className="bg-[#0f172a] p-3">Projects</a></li>
          <li className="p-3"> <a href="#contact"  className="bg-[#0f172a] p-3">Contact</a></li>
          <li className="p-3"> <a href  className="bg-[#0f172a] p-3">CV</a></li>
        </ul>
      </section>
    </div>
  );
}
