import React, { useEffect, useState } from "react";
import Icon from "../assets/Group 58.png";

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

  const workArray = [
    {
      image: Icon,
      whatido: "UI/UX Designing",
      description:
        "Crafting visually appealing and user-friendly designs that enhance the overall user experience.",
    },
    {
      image: Icon,
      whatido: "UI/UX Designing",
      description:
        "Crafting visually appealing and user-friendly designs that enhance the overall user experience.",
    },
    {
      image: Icon,
      whatido: "UI/UX Designing",
      description:
        "Crafting visually appealing and user-friendly designs that enhance the overall user experience.",
    },
    {
      image: Icon,
      whatido: "UI/UX Designing",
      description:
        "Crafting visually appealing and user-friendly designs that enhance the overall user experience.",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="bg flex flex-wrap w-[50%]">
          {workArray.map((workitem, workindex) => (
            <div key={workindex} className="flex w-1/2 p-2  ">
              <div className="m-4 p-6 bg-sky-100 rounded-xl">
                <div className="pb-4">
                  <img src={workitem.image} alt="work item"></img>
                </div>
                <div className="pb-2 font-bold">{workitem.whatido}</div>
                <div>{workitem.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg w-[50%]">
          <div>
          <p className="text-5xl pl-44 text-[#7a909b] font-semibold absolute pt-16 ">My Services</p>
          <p className="font-semibold text-4xl pl-44  text-[#67d3f1]">My Services</p>
          </div>
          <div>vnlvnsdlnds</div>
        </div>
      </div>

      <div className=" grid grid-cols-5   p-16 pl-  ">
        {skillsArray.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col rounded-2xl   justify-center w-fit mb-5 p-"
          >
            <div className="  flex justify-center rounded-2xl    ">
              {/* <img className=""  src={item.image}></img> */}
            </div>
            <div className=" text-[#ffffff] flex justify-center py-1 px-4 w-40 rounded-md bg-gradient-to-r from-[#46c7f6] to-[#0c4a84]">
              <p className="text-lg ">
                {"# "}
                {item.language}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
