import React from "react";
import Photo from "../assets/portfolio.jpg"

export default function About() {
  return (
    <div className=" ">
      <div className=" grid mx-20 grid-cols-[40%_60%] gap-10 mb-10  ">
        <div className=" px-28  my-20  flex items-center justify-center  ">
          <img
            src={Photo}
            alt="my Photo"
            className="  object-cover  rounded-full "
          ></img>
        </div>

        <div className="grid  grid-cols-1 grid-rows h-screen pt-10 mr-20  ">
          <div className="text-[#1ae7f6] grid text-4xl font-arvo justify-center">
            <p>Darshani Pathiranage</p>
          </div>
          
          
          <div className=" text-[#8ac7d5] font-sans pt-6  grid justify-center">
          {/* <div className="absolute left-[44.5%] -ml-16 w-1 h-96 rounded-lg bg-[#b0c9ca] "></div> */}
            <p className="text-justify ">
              Hello! I'm Darshani Pathiranage, an enthusiastic and
              self-motivated IT undergraduate student currently studying at the
              Sri Lanka Institute of Information Technology (SLIIT). With a
              passion for technology and a keen interest in exploring how things
              work, I am constantly driven to learn and innovate. I am currently
              seeking opportunities as an intern to further enhance my knowledge
              and gain practical experience in the IT field. If you're looking
              for a dedicated and skilled individual to join your team, I would
              love to connect with you!
            </p>
          </div>
          <div className=" text-[#8ac7d5] grid font-sans justify-center pt-16">
            <p>
              (Bsc.(Hons) in Information Technology - Specialization in Information
              Technology) <br></br>Sri Lanka Institute of Information Technology (SLIIT)<br></br>
              Current Undergraduate Student (2021 - 2025)
            </p>
          </div>
          <div className=" text-zinc-300 grid justify-center">
            
          </div>
          <div className=" text-zinc-300 grid justify-center"></div>
        </div>
      </div>
    </div>
  );
}
