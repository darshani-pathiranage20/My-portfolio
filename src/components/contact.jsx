import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import contactImage from "../assets/contactme.vecImage-removebg-preview.png"

export default function Contact() {
  return (
    <div className="flex ">
      <div className="flex flex-col hover:shadow-[#025a62] justify-center  p-10 shadow-lg rounded-3xl">
        <div className=" text-white text-5xl mb-16">
          <p className="p-6">Let's work together</p>
        </div>
        <div className=" flex flex-row">
          <div className="">
            <div className=" flex  mb-16">
              <div className="rounded-full bg-black flex justify-center items-center absolute  w-[120px] h-[120px] ">
                <TfiEmail className=" text-white text-7xl  flex " />
              </div>
              <div className="mt-20 ml-16">
                <p className="bg-[#025a62]  rounded-full p-5 pl-10 text-[#ffffff]">
                  darshanipathirana2024@gmail.com
                </p>
              </div>
            </div>
            <div className=" flex flex-col">
              <p className="text-2xl text-white mb-3">Socials</p>
              <div className="flex ">
                <IoLogoGithub size={40} className="text-white mr-5" />
                <FaLinkedin size={40} className="text-white mr-5" />
                <FaInstagramSquare size={40} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[50vw] justify-center items-center ">
          <img src={contactImage}></img>
      </div>
    </div>
  );
}
