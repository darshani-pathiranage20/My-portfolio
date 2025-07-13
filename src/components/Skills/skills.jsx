import React from "react";
import "./skill.css";
import Webdesign from "../../assets/webdesign.png";
import Webcontent from "../../assets/webcontent.png";
import Codesettings from "../../assets/codesettings.png";
import CloudIcon from "../../assets/cloud-service.png";
import SreIcon from "../../assets/SRE.png";
import DevOpsIcon from "../../assets/devOps.png";
import SoftwareDevIcon from "../../assets/SE.png";
import SkillCard from "../Skills/SkillCard";

import { FaJava } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoPython } from "react-icons/io";
import { DiMysql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { FaAws } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiSqlite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";


export default function Skills() {
  const skillsArray = [
    { language: "Java", icon: <FaJava /> },
    { language: "JS", icon: <DiJavascript1 /> },
    { language: "CSS", icon: <FaCss3Alt /> },
    { language: "HTML", icon: <FaHtml5 /> },
    { language: "Python", icon: <IoLogoPython /> },
    { language: "MySQL", icon: <DiMysql /> },
    { language: "MongoDB", icon: <SiMongodb /> },
    { language: "Oracle", icon: <GrOracle /> },
    { language: "AWS", icon: <FaAws /> },
    { language: "Firebase", icon: <IoLogoFirebase /> },
    { language: "SQLite", icon: <SiSqlite /> },
    { language: "React", icon: <FaReact /> },
    { language: "React Native", icon: <TbBrandReactNative /> },
    { language: "Node js", icon: <IoLogoNodejs /> },
    { language: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { language: "Express js", icon: <SiPostman /> },
    { language: "Postman", icon: <SiPostman /> },
    { language: "EXPO", icon: <FaGithub /> },
    { language: "VS Code", icon: <VscVscode /> },
    { language: "GitHub", image: <FaGithub /> },

    // { language: "Java", icon: <FaJava /> },
    // { language: "Java", icon: <IoLogoJavascript /> },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
    // { language: "Java", image: "../src/assets/tools-icons/java.png" },
  ];

  return (
    <div>
      <div className="skills-container">
        <div className="skills-container-left">
          <div className="skills-background">
            <p className="skills-background-title">My Interestings</p>
            <p className="skills-title">My Interesting</p>
          </div>
          <div className="skills-subtitle">
            <p>
              I Exploring the World of <br /> Cloud, Code, and <br /> Automation
            </p>
          </div>
          <div className="skills-description">
            <p>
              I am a final-year IT undergraduate who is passionate about modern
              technology and eager to build practical skills. I’m currently
              exploring Cloud Engineering, DevOps, Infrastructure Management,
              and Software Development. I am actively looking for an internship
              opportunity where I can learn, contribute, and grow in these areas
              while gaining real-world experience.
            </p>
          </div>
        </div>

        <div className="skills-container-right">
          <div className="skill-card-column-left">
            <SkillCard
              image={CloudIcon}
              title="Cloud Engineering"
              description="I enjoy understanding how to design, secure, and maintain
                cloud-based infrastructure and applications."
              color="#f1d98a"
            />
            <SkillCard
              image={SreIcon}
              title="SRE"
              description="I am curious about the processes and tools that ensure the
                scalability, reliability, and availability of software systems."
            />
          </div>

          <div className="skill-card-column-right">
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

      <div className="skills-tools-container">
        <div className="tools-title">
          Tools & Frameworks
        </div>

        <div className="skills-grid">
          {skillsArray.map((item, index) => (
            <div key={index} className="skills-grid-item">
              <div className="skills-icon-grid">
                {item.icon}
                <p className="skill-icon-text">{item.language}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
