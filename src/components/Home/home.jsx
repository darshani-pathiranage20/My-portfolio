// import React from "react";
// import "./home.css";
// import { IoLogoGithub } from "react-icons/io";
// import { FaLinkedin } from "react-icons/fa6";
// import { MdCloudDownload } from "react-icons/md";
// import Img from "../../assets/my Photo-2.png";

// export default function Home() {
//   return (
//     <div className="home-section" id="home" >
      
//       <div className="home-container-left">
//         <p className="intro-text">Hi, I’m Darshani</p>
//         <p className="sub-text">
//           BSc.(Hons) in Information Technology specialized in Information
//           Technology
//         </p>
//         <div className="icon-row">
//           <div className="icon">
//             <a
//               href="https://github.com/it21161742"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <IoLogoGithub size={40} style={{ color: "white" }} />
//             </a>
//           </div>
//           <div className="icon">
//             <a
//               href="https://www.linkedin.com/in/darshani-pathiranage-000b88217/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedin size={40} style={{ color: "white" }} />
//             </a>
//           </div>
//         </div>
//         <div className="download-section">
//           <div className="download-text">Download CV</div>
//           <div className="download-icon">
//             <a
//               href="/Darshani Pathiranage_CV.pdf"
//               download="Darshani Pathiranage_CV"
//             >
//               <MdCloudDownload size={30} style={{ color: "white" }} />
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="home-container-right">
//         <div className="profile-image-container">
//           <img src={Img} alt="Profile" className="profile-image" />
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import "./home.css";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { MdCloudDownload } from "react-icons/md";
import Img from "../../assets/my Photo-2.png";

export default function Home() {
  const [active, setActive] = useState(window.location.hash || "#home");

  useEffect(() => {
    const onHashChange = () => setActive(window.location.hash || "#home");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="home-main">
      {/* Navigation Bar */}
      <nav className="navbar">
        <span className="logo">
          <span className="logo-highlight">My</span> Portfolio
        </span>
        <div className="nav-links">
          <a className={`nav-link${active === "#home" ? " active" : ""}`} href="#home">HOME</a>
          <a className={`nav-link${active === "#about" ? " active" : ""}`} href="#about">About me</a>
          <a className={`nav-link${active === "#skills" ? " active" : ""}`} href="#skills">Skills</a>
          <a className={`nav-link${active === "#projects" ? " active" : ""}`} href="#projects">Projects</a>
          <a className={`nav-link${active === "#contact" ? " active" : ""}`} href="#contact">CONTACT</a>
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
              Bachelor of Science (Hons) in Information Technology - Specilication in Information Technology <br />
              Sri Lanka Institute of Information Technology (SLIIT)
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/darshani-pathiranage-000b88217/" target="_blank" rel="noopener noreferrer" className="icon-btn">
                <FaLinkedin size={28} />
              </a>
              <a href="https://github.com/it21161742" target="_blank" rel="noopener noreferrer" className="icon-btn">
                <IoLogoGithub size={28} />
              </a>
              <a href="/Darshani Pathiranage_CV.pdf" download="Darshani Pathiranage_CV" className="icon-btn">
                <MdCloudDownload size={28} />
              </a>
            </div>
            <div className="download-section">
              <a href="/Darshani Pathiranage_CV.pdf" download="Darshani Pathiranage_CV" className="icon-btn" >
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