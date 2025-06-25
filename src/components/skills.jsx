import React, { useEffect, useState } from "react";
import Webdesign from "../assets/webdesign.png";
import Webcontent from "../assets/webcontent.png";
import Codesettings from "../assets/codesettings.png";
import Mobileappdevelopment from "../assets/mobileappdevelopment.png";
import SkillCard from "../components/SkillCard.jsx";

export default function Skills() {
  const skillsArray = [
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
      language: "MERN",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "React Native",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "Tailwind CSS",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "Spring Boot",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "MySQL",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "MongoDB",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "Firebase",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "Bootstrap",
      image: "../src/assets/skills/css.png",
    },
  ];

  return (
    <div>
      <div className="flex ml-10  ">
        <div className="flex w-[50%]  pt-10">
          <div className=" flex flex-col items-center ">
            <SkillCard
              image={Mobileappdevelopment}
              title="DevOps"
              description="I am eager to improve the speed and quality of software delivery
                by learning automation and Continuous Integration/Continuous
                Deployment (CI/CD) practices. am passionate about learning software development for both personal growth and practical applications."
            />
            <SkillCard
              image={Mobileappdevelopment}
              title="Cloud Engineering"
              description="I enjoy understanding how to design, secure, and maintain
                cloud-based infrastructure and applications."
            />
          </div>
          <div className=" flex flex-col ml-4 items-center mt-10 ">
            <SkillCard
              image={Mobileappdevelopment}
              title="SRE"
              description="I am curious about the processes and tools that ensure the
                scalability, reliability, and availability of software systems."
            />
            <SkillCard
              image={Mobileappdevelopment}
              title="Software Development"
              description="I am passionate about learning software development for both
                personal growth and practical applications."
            />
          </div>
        </div>

        <div className="text-[#1ae7f6]  ml-10 mt-10 w-[50%] ">
          <div className=" items-center  pt-10">
            <div>
              <p className="text-6xl pl-6 text-[#d8ebf7] font-libre font-bold absolute opacity-20 ">
                My Services
              </p>
              <p className="font-libre font-bold pl-6 text-5xl   text-[#1ae7f6] pt-8">
                My Services
              </p>
            </div>
            <div className="text-balance text-[#ffffff] pt-16 pl-6 opacity-80 ">
              <p>
                In my journey as a developer and designer, I have acquired a
                diverse set of skills and mastered various technologies that
                enable me to create innovative and efficient digital solutions
                technologies that enable me to create innovative and efficient
                digital solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="text-[#ffffff] text-5xl text-center mt-24 mb-10 font-libre opacity-90 ">
          Tools & Frameworks for <br /> Digital Brilliance
        </div>
        <div className="text-[#ffffff]  px-16  ">
          <p className="text-center text-sm opacity-80">
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
        <div className=" grid grid-cols-5  p-16  ">
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
