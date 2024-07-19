import React from "react";
import Git from "../../src/assets/github.png";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdCloudDownload } from "react-icons/md";
import myphoto from "../assets/global-network-icon.png";


export default function Home() {
  return (
    <div>
      <div className="  grid grid-cols-2  hover:shadow-[#025a62]  shadow-md rounded-3xl">
        <div className=" pl-28 ">
          <div className=" ">
            <p className="text-5xl font-extrabold  mt-20 relative bg-gradient-to-r from-[#99e9ff] to-[#717172] text-transparent bg-clip-text">
              Hi, I’m Darshani
            </p>
          </div>
          <div className=" mt-10  ">
            <p className="text-xl text-[#FFFFFF] font-mono relative bg-gradient-to-r from-[#99e9ff] to-[#999a9d] text-transparent bg-clip-text">
              Information Technology undergraduate
            </p>
          </div>
          <div className="grid justify-start">
            <div className=" mt-10 grid grid-flow-col gap-4 ">

              <div className="w-10 h-10">
               
               
              <IoLogoGithub size={40} className="text-white"/>
              </div>
              <div className="w-10 h-10">
              <FaLinkedin size={40} className="text-white"/>
              </div>
              <div className="w-10 h-10">
              <FaInstagramSquare size={40} className="text-white"/>
              </div>
            </div>
            <div className="mt-10 grid grid-flow-col justify-start gap-2">
              <div className=" text-[#FFFFFF] font-mono mb-16 pt-1 relative bg-gradient-to-r from-[#81dcf6] to-[#b0b1b4] text-transparent bg-clip-text">Download CV</div>
              <div className="w-6 h-6">
              <a href="../src/assets/DarshaniPathiranage.pdf" download="DarshaniPathiranage.pdf"><MdCloudDownload size={30} className="text-white"/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" m-24 mt-24  ">
            <img
              src={myphoto} alt="ggthb"
              className="m-3 w-96 h-96"
              
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
