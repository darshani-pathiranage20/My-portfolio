import React from "react";
import Photo from "../assets/my Photo.jpg";

export default function About() {
  return (
    <div className=" grid grid-cols-[40%_60%] gap-10 ">
      <div className=" px-24  flex items-center justify-center  ">
        <img
          src={Photo}
          alt="my Photo"
          className="  object-cover  rounded-full "
        ></img>
      </div>

      <div className="grid  grid-cols-1 grid-rows h-screen pt-10 mr-20  ">
        <div className="text-[#1ae7f6] grid text-4xl font-libre justify-center opacity-70">
          <p>Darshani Pathiranage</p>
        </div>
        <div className=" text-[#ffffff] font-sans pt-6 grid justify-center">
          <p className="text-justify text-sm opacity-80 ">
            Hi! I’m Darshani Pathiranage, a final-year undergraduate at the Sri
            Lanka Institute of Information Technology (SLIIT), specializing in
            Information Technology. I'm someone who’s genuinely curious about
            how things work and always eager to find better, smarter ways to
            solve problems.
            {/* <br></br>  */}
            Throughout my academic journey, I’ve gained hands-on experience and
            practical knowledge in areas like full-stack development,
            object-oriented programming, cloud technologies, and IT
            infrastructure. These projects have helped me build a strong
            foundation, not just technically, but also in working effectively
            with others and adapting to challenges.
            {/* <br></br> */}
            Right now, I’m looking for an internship where I can put my skills
            into action, keep learning, and contribute to real-world projects.
            If you're looking for someone who’s motivated, collaborative, and
            ready to grow with your team, I’d love to connect.
          </p>
          <p className="pt-10 text-[#ffffff] font-libre text-3xl">Education</p>
        </div>
        <div className=" text-[#ffffff] grid font-sans text-sm opacity-80 justify-center pt-8">
          <p>
            (Bsc.(Hons) in Information Technology - Specialization in
            Information Technology) <br></br>Sri Lanka Institute of Information
            Technology (SLIIT)<br></br>
            Current Undergraduate Student (2021 - present)
          </p>
        </div>
        <div className=" text-zinc-300 grid justify-center"></div>
        <div className=" text-zinc-300 grid justify-center"></div>
      </div>
    </div>
  );
}
