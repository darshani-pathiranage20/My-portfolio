import React from "react";
import "./contact.css";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import contactImage from "../../assets/contactme.png"; // Adjust the path as necessary

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="contact-heading">
          <p className="contact-heading-1">Let's work together</p>
        </div>
        <div className="contact-info">
          <div>
            {/* Email */}
            <div className="flex mb-16">
              {/* Uncomment if you want icon bubble:
              <div className="rounded-full bg-[#739497] opacity-80 flex justify-center items-center absolute  w-[120px] h-[120px] ">
                <TfiEmail className=" text-white text-7xl flex" />
              </div> 
              */}
              <div className="contact-email-phone-wrapper">
                <div>
                  <p className="contact-heading-2">GET IN TOUCH</p>{" "}
                </div>
                <div className="contact-email-phone">
                  <p className="contact-email">
                    darshanipathirana2024@gmail.com
                  </p>
                  <p className="contact-email">Phone : 075 315 2110</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
          </div>
        </div>
        <div className="social">
          
          <div className="contact-socials">
            <a
              href="https://github.com/darshani-pathiranage20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub size={40} className="contact-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/darshani-pathiranage-000b88217/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} className="contact-icon" />
            </a>
            <a
              href="https://www.instagram.com/darshani_pathiranage_/"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaInstagramSquare size={40} className="contact-icon" />
            </a>
            
          </div>
        </div>
      </div>

      {/* Contact Image */}
      <div className="contact-right">
        <img className="contact-image" src={contactImage} alt="Contact" />
      </div>
    </div>
  );
}
