import React, { useEffect, useState } from "react";
import "./home.css";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { MdCloudDownload } from "react-icons/md";
import Img from "../../assets/my Photo-2.png";
import { FaInstagramSquare } from "react-icons/fa";

export default function Home() {
  const [active, setActive] = useState(window.location.hash || "#home");

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"];

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = "#home";
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = `#${id}`;
        }
      }
      setActive(currentSection);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("hashchange", onScroll); // Also update on hash change

    // Initial check
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onScroll);
    };
  }, []);

  return (
    <div className="home-main">
      {/* Navigation Bar */}
      <nav className="navbar">
        <span className="logo">
          <span className="logo-highlight">My</span> Portfolio
        </span>
        <div className="nav-links">
          <a
            className={`nav-link${active === "#home" ? " active" : ""}`}
            href="#home"
          >
            HOME
          </a>
          <a
            className={`nav-link${active === "#about" ? " active" : ""}`}
            href="#about"
          >
            About me
          </a>
          <a
            className={`nav-link${active === "#skills" ? " active" : ""}`}
            href="#skills"
          >
            Skills
          </a>
          <a
            className={`nav-link${active === "#projects" ? " active" : ""}`}
            href="#projects"
          >
            Projects
          </a>
          <a
            className={`nav-link${active === "#contact" ? " active" : ""}`}
            href="#contact"
          >
            CONTACT
          </a>
        </div>
      </nav>

      {/* Main Split Section */}
      <div className="main-section">
        <div className="left-bg">
          <div className="profile-image-container">
            <img src={Img} alt="Profile" className="profile-image" />
          </div>
        </div>
        <div className="right-bg">
          <div className="intro-content">
            <h2 className="hello">Hello!</h2>
            <h1 className="name">I’m Darshani</h1>
            <div className="degree">
              I’m a final-year Information Technology undergraduate, passionate
              about gaining hands-on experience in full-stack development and
              cloud technologies. I enjoy building real-world solutions and
              constantly seek opportunities to learn modern tools that improve
              system performance, usability, and overall user experience.
            </div>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/darshani-pathiranage-000b88217/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/darshani-pathiranage20"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
              >
                <IoLogoGithub size={28} />
              </a>
              <a
                href="https://www.instagram.com/darshani_pathiranage_/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
              >
                <FaInstagramSquare size={28} />
              </a>
            </div>
            <div className="download-section">
              <a
                href="/Darshani Pathiranage_CV.pdf"
                download="Darshani Pathiranage_CV"
                className="icon-btn"
              >
                <MdCloudDownload size={28} />
                <p className="download CV">Download CV</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
