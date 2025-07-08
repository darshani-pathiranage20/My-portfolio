import React, { useEffect, useState } from "react";
import Gardian from "../../assets/gardian.png";
import Openheart from "../../assets/openheart.png";
import Zolo from "../../assets/paf.png";
import SLPEC from "../../assets/SLPEC.jpg";
import "./project.css";

export default function Projects() {
  const projectsArray = [
    {
      image: Gardian,
      Project_name: "GUARDIAN",
      Project_discription:
        "Mobile app and web app system for travel security Mobile app and web app system for travel security",
      Used_languages: "React Native | Node.js | Express.js | MongoDB |EXPO",
    },
    {
      image: Zolo,
      Project_name: "Zolo",
      Project_discription: "Fitness Social Media Platformt",
      Used_languages: "Spring Boot | MySQL | React.js",
    },

    {
      image: Openheart,
      Project_name: "Open Heart  - Mobile Application ",
      Project_discription: "Charity Donation Management System ",
      Used_languages: "Kotlin | Firebase ",
    },
    {
      image: SLPEC,
      Project_name: "Smart Learning Platform for Early Childhood Education",
      Project_discription:
        "React Native mobile application designed to enhance foundational learning for early children aged 3–8",
      Used_languages: "React Native | Node.js | Flask | Mongo DB | AWS S3 Bucket | EXPO",
    },
    // {
    //   image: Openheart,
    //   Project_name: "Zolo",
    //   Project_discription: "Fitness Social Media Platformt",
    //   Used_languages: "Spring Boot | MySQL | React.js",
    // },

    // {
    //   image: Openheart,
    //   Project_name: "Open Heart  - Mobile Application ",
    //   Project_discription: "Charity Donation Management System ",
    //   Used_languages: "Kotlin | Firebase ",
    // },
  ];
  return (
    <div className="projects-container">
      <div className="projects-container-1">
        <div className="projects-container-11">Projects</div>
        <div className="projects-container-12">
          Over the past few years, I’ve had the opportunity to work on a variety
          of projects that reflect both my academic learning and personal
          exploration. Each project challenged me to think differently, adapt to
          new technologies, and find creative solutions to real-world problems.
          {/* Whether it was developing full-stack applications, experimenting with
          machine learning models, or building mobile apps, these projects have
          helped me grow not just as a developer, but as a problem-solver. */}
        </div>
      </div>
      <div className="projects-container-2">
        {projectsArray.map((Pitem, Pindex) => (
          <div key={Pindex} className="project-card">
            <div className="project-image-container">
              <img
                src={Pitem.image}
                alt={Pitem.Project_name}
                className="project-image"
              />
            </div>

            <div className="project-content">
              <div className="project-title">
                <p>{Pitem.Project_name}</p>
              </div>
              <div className="project-description">
                <p>{Pitem.Project_discription}</p>
              </div>
              <div className="project-tech">
                <p>{Pitem.Used_languages}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
