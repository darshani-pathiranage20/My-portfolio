import React, { useEffect, useState } from "react";
import Webdesign from "../assets/webdesign.png";
import Webcontent from "../assets/webcontent.png";
import Codesettings from "../assets/codesettings.png";
import CloudIcon from "../assets/cloud-service.png";
import SreIcon from "../assets/SRE.png";
import DevOpsIcon from "../assets/devOps.png";
import SoftwareDevIcon from "../assets/SE.png";
import SkillCard from "../components/SkillCard.jsx";

export default function Skills() {
  const skillsArray = [
    //laguages
    {
      language: "Java",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "JavaScript",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "CSS",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "HTML",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "Python",
      image: "../src/assets/skills/css.png",
    },
    //DB management
    {
      language: "MySQL",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "MongoDB",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "oracle",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "AWS",
      image: "../src/assets/skills/css.png",
    },
    
    {
      language: "Firebase",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "SQLite",
      image: "../src/assets/skills/css.png",
    },
    //Frameworks and tools
    {
      language: "React",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "React Native",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "Node js",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "Tailwind CSS",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "Express js",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "Postman",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "EXPO",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "VS Code",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "GitHub",
      image: "../src/assets/skills/css.png",
    },
  ];

  return (
    <div>
      <div className="mt-10 items-center flex flex-col justify-center w-[100%]">
        <div className="text-[#1ae7f6]  w-[100%] ">
          <div className=" flex flex-col items-center  ">
            <div>
              <p className="text-6xl pl-6 text-[#d8ebf7] font-libre font-bold absolute opacity-20 ">
                My Services
              </p>
              <p className="font-libre font-bold pl-6 text-5xl   text-[#1ae7f6] pt-8">
                My Services
              </p>
            </div>
            <div className="text-center text-[#ffffff] pt-6 pl-6 opacity-80 ">
              <p>
                I am a final-year IT undergraduate who is passionate about
                modern technology and eager to build practical skills. I’m
                currently exploring Cloud Engineering, DevOps, Infrastructure
                Management, and Software Development. I am actively looking for
                an internship opportunity where I can learn, contribute, and
                grow in these areas while gaining real-world experience.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center pt-7">
          <div className=" flex flex-col items-center gap-3">
            <SkillCard
              image={CloudIcon}
              title="Cloud Engineering"
              description="I enjoy understanding how to design, secure, and maintain
                cloud-based infrastructure and applications."
              color="#1ae7f6"
            />
            <SkillCard
              image={SreIcon}
              title="SRE"
              description="I am curious about the processes and tools that ensure the
                scalability, reliability, and availability of software systems."
            />
          </div>
          <div className=" flex flex-col ml-6 items-center mt-7 gap-y-3 ">
            <SkillCard
              image={DevOpsIcon}
              title="DevOps"
              description="I am eager to improve the speed and quality of software delivery
                by learning automation and CI/CD practices. am passionate about learning software development for both personal growth and practical applications."
            />

            <SkillCard
              image={SoftwareDevIcon}
              title="Software Development"
              description="I am passionate about learning software development for both
                personal growth and practical applications."
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="text-[#ffffff] text-5xl text-center mt-24 mb-10 font-libre opacity-90 ">
          Tools & Frameworks for <br /> Digital Brilliance
        </div>
        <div className="text-[#ffffff]  px-16  ">
          <p className="text-center  opacity-80">
            Empowering innovative digital solutions through a curated selection
            of cutting-edge tools and frameworks. This includes leveraging
            robust development environments, agile methodologies, and advanced
            cloud platforms to create scalable and efficient applications.
            Utilizing state-of-the-art design and prototyping tools ensures
            visually compelling and user-centric interfaces, while comprehensive
            testing frameworks and continuous integration tools maintain high
            standards of quality and performance.
          </p>
        </div>
        <div className=" grid grid-cols-6  p-16  ">
          {skillsArray.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col rounded-2xl mr-2 justify-center w-fit mb-5 "
            >
              <div className="  flex justify-center rounded-2xl    ">
                {/* <img className=""  src={item.image}></img> */}
              </div>
              <div className=" text-[#ffffff] flex justify-center py-1  w-40 rounded-md bg-gradient-to-r from-[#46c7f6] to-[#44cfd8]">
                <p className="text-lg ">
                  {"# "}
                  {item.language}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
