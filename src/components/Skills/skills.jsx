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

export default function Skills() {
  const skillsArray = [
    { language: "Java", image: "../src/assets/skills/css.png" },
    { language: "JavaScript", image: "../src/assets/skills/css.png" },
    { language: "CSS", image: "../src/assets/skills/css.png" },
    { language: "HTML", image: "../src/assets/skills/css.png" },
    { language: "Python", image: "../src/assets/skills/css.png" },
    { language: "MySQL", image: "../src/assets/skills/css.png" },
    { language: "MongoDB", image: "../src/assets/skills/css.png" },
    { language: "oracle", image: "../src/assets/skills/css.png" },
    { language: "AWS", image: "../src/assets/skills/css.png" },
    { language: "Firebase", image: "../src/assets/skills/css.png" },
    { language: "SQLite", image: "../src/assets/skills/css.png" },
    { language: "React", image: "../src/assets/skills/css.png" },
    { language: "React Native", image: "../src/assets/skills/css.png" },
    { language: "Node js", image: "../src/assets/skills/css.png" },
    { language: "Tailwind CSS", image: "../src/assets/skills/css.png" },
    { language: "Express js", image: "../src/assets/skills/css.png" },
    { language: "Postman", image: "../src/assets/skills/css.png" },
    { language: "EXPO", image: "../src/assets/skills/css.png" },
    { language: "VS Code", image: "../src/assets/skills/css.png" },
    { language: "GitHub", image: "../src/assets/skills/css.png" },
  ];

  return (
    <div>
      <div className="skills-container">
        <div className="skills-heading-wrapper">
          <p className="skills-background-title">My Services</p>
          <p className="skills-title">My Services</p>
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

        <div className="skill-card-columns">
          <div className="skill-card-column">
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

          <div className="skill-card-column right">
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
          Tools & Frameworks for <br /> Digital Brilliance
        </div>

        <div className="skills-grid">
          {skillsArray.map((item, index) => (
            <div key={index} className="skills-grid-item">
              <div className="skills-grid-label">
                <p>{"# "}{item.language}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
