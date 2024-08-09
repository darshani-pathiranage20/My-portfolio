import React from "react";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdCloudDownload } from "react-icons/md";
// import myphoto from "../assets/myphoto.png";

export default function Home() {
  return (
    <div >
      <div className="grid grid-cols-2">
        <div className="pl-28">
          <div>
            <p className="text-5xl font-extrabold mt-20 relative bg-gradient-to-br from-[#1ae7f6] to-[#ffffff] text-transparent bg-clip-text">
              Hi, I’m Darshani
            </p>
          </div>
          <div className="mt-10">
            <p className="text-lg text-[#FFFFFF] font-mono relative bg-gradient-to-r from-[#ffffff] to-[#1ae7f6] text-transparent bg-clip-text">
              Information Technology undergraduate
            </p>
          </div>
          <div className="grid justify-start">
            <div className="mt-10 grid grid-flow-col gap-4">
              <div className="w-10 h-10">
                <IoLogoGithub size={40} className="text-white" />
              </div>
              <div className="w-10 h-10">
                <FaLinkedin size={40} className="text-white" />
              </div>
              <div className="w-10 h-10">
                <FaInstagramSquare size={40} className="text-white" />
              </div>
            </div>
            <div className="mt-10 grid grid-flow-col justify-start gap-2">
              <div className="font-mono mb-16 pt-1 relative bg-gradient-to-l from-[#1ae7f6] to-[#ffffff] text-transparent bg-clip-text">
                Download CV
              </div>
              <div className="w-6 h-6">
                <a href="../src/assets/DarshaniPathiranage.pdf" download="DarshaniPathiranage.pdf">
                  <MdCloudDownload size={30} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
