import React from "react";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdCloudDownload } from "react-icons/md";
// import myphoto from "../assets/myphoto.png";

export default function Home() {
  return (
    <div>
      <div >
        <div className="pl-12">
          <div>
            <p className="text-5xl font-extrabold mt-20 relative bg-gradient-to-br from-[#1ae7f6] to-[#ffffff] text-transparent bg-clip-text">
              Hi, I’m Darshani
            </p>
          </div>
          <div className="mt-10">
            <p className="text-lg text-[#FFFFFF] font-mono relative bg-gradient-to-r from-[#ffffff] to-[#1ae7f6] text-transparent bg-clip-text">
               BSc.(Hons) in Information Technology specialized in Information Technology
            </p>
          </div>
          <div className="grid justify-start">
            <div className="mt-10 grid grid-flow-col justify-start gap-4">
              <div className="w-10 h-10">
                <a
                  href="https://github.com/it21161742"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub size={40} className="text-white" />
                </a>
              </div>
              <div className="w-10 h-10">
                <a
                  href="https://www.linkedin.com/in/darshani-pathiranage-000b88217/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <FaLinkedin size={40} className="text-white" />
                </a>
              </div>
              {/* <div className="w-10 h-10">
                <FaInstagramSquare size={40} className="text-white" />
              </div> */}
            </div>
            <div className="mt-10 grid grid-flow-col justify-start gap-2">
              <div className="font-mono mb-16 pt-1 relative bg-gradient-to-l from-[#1ae7f6] to-[#ffffff] text-transparent bg-clip-text">
                Download CV
              </div>
              <div className="w-6 h-6">
                <a
                  href="/Darshani Pathiranage_CV.pdf"
                  download="Darshani Pathiranage_CV"
                >
                  <MdCloudDownload size={30} className="text-white mt-2 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
