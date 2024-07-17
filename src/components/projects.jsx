import React, { useEffect, useState } from "react";

export default function Projects() {
  const projectsArray = [
    {
      image: "../src/assets/gardian.png",
      Project_name: "GUARDIAN",
      Project_discription:
        "Mobile app and web app system for travel security Mobile app and web app system for travel security",
      Used_languages: "React Native | Node.js | Express.js | MongoDB |EXPO",
    },
    {
      image: "../src/assets/openheart.png",
      Project_name: "Zolo",
      Project_discription: "Fitness Social Media Platformt",
      Used_languages: "Spring Boot | MySQL | React.js",
    },

    {
      image: "../src/assets/openheart.png",
      Project_name: "Open Heart  - Mobile Application ",
      Project_discription: "Charity Donation Management System ",
      Used_languages: "Kotlin | Firebase ",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-16  p-10  ">
      {projectsArray.map((Pitem, Pindex) => (
        <div
          key={Pindex}
          className=" flex flex-col  hover:shadow-[#025a62]  shadow-lg rounded-3xl "
        >
          <div className=" bg-flex justify-center items-center rounded-3xl h-projet w-full mb-3">
            <img
              src={Pitem.image}
              className="rounded-3xl  object-fill h-projet "
            ></img>
          </div>

          <div className="flex flex-col gap-1 justify-start ml-3 ">
            <div className="text-[#1ae7f6] text-xl  font-black">
              <p>{Pitem.Project_name}</p>
            </div>
            <div className="text-[#bcc4c8] font-mono mb-4  pr-4">
              <p>{Pitem.Project_discription}</p>
            </div>
            <div className="text-[#90e8f9] font-mono pb-5 pr-4">
              <p>{Pitem.Used_languages}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
