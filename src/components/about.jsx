import React from "react";
import phote from "../assets/portfolio.jpg"

export default function About() {
  return (
    <div className=" ">
      <div className=" grid mx-20 grid-cols-[40%_60%] gap-10 mb-10 hover:shadow-[#025a62]  shadow-md rounded-3xl ">
        <div className=" px-28  my-20  flex items-center justify-center  ">
          <img
            src="../src/assets/portfolio.jpg"
            alt="my Photo"
            className="  object-cover  rounded-full "
          ></img>
        </div>

        <div className="grid  grid-cols-1 grid-rows h-screen pt-10 mr-20  ">
          <div className="text-zinc-300 grid text-3xl font-arvo justify-center">
            <p>Darshani Pathiranage</p>
          </div>
          <div className=" text-zinc-300 font-sans  grid justify-center">
            <p>
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
          <div className=" text-zinc-300 grid font-sans justify-center">
            <p>
              (Bsc.(Hons) in Information Technology Specialization: Information
              Technology) Sri Lanka Institute of Information Technology(SLIIT)
              Current Undergraduate Student
            </p>
          </div>
          <div className=" text-zinc-300 grid justify-center">
            <p>
              (Bsc.(Hons) in Information Technology Specialization: Information
              Technology) Sri Lanka Institute of Information Technology(SLIIT)
              Current Undergraduate Student
            </p>
          </div>
          <div className=" text-zinc-300 grid justify-center"></div>
        </div>
      </div>
    </div>
  );
}
