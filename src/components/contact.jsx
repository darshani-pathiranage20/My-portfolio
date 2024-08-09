import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import contactImage from "../assets/contactme.png"

export default function Contact() {
  return (
    <div className="flex ">
      <div className="flex flex-col  justify-center   ">
        <div className=" text-white text-5xl mb-16 ">
          <p className="p-6 font-libre opacity-90">Let's work together</p>
        </div>
        <div className=" flex flex-row p-16">
          <div className="">
            <div className=" flex  mb-16">
              {/* <div className="rounded-full bg-[#739497] opacity-80 flex justify-center items-center absolute  w-[120px] h-[120px] ">
                <TfiEmail className=" text-white text-7xl  flex " />
              </div> */}
              <div className="mt-20 ml-16">
                <p className="bg-[#1ae7f6] opacity-80 font-libre text-lg rounded-full p-5 pl-10 text-[#0f0f0f] ">
                  darshanipathirana2024@gmail.com
                </p>
              </div>
            </div>
            <div className=" flex flex-col">
              <p className="text-2xl text-white font-libre mb-3 opacity-80">Socials</p>
              <div className="flex ">
                <IoLogoGithub size={40} className="text-white mr-5" />
                <FaLinkedin size={40} className="text-white mr-5" />
                <FaInstagramSquare size={40} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[40vw] justify-end items-end  pt-32 ml-20">
          <img src={contactImage}></img>
      </div>
    </div>
  );
}
