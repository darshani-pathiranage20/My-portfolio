import React from "react";

export default function SkillCard({ image, title, description }) {
  return (
    <div className="bg-[#FFFFFF] p-4 w-52 h-72 mb-4 rounded-lg">
      <div className="w-[30%]">
        <img className="" src={image} alt="work item" />
      </div>
      <div className="text-sm py-2 font-bold">{title}</div>
      <div className="text-left text-xs text-stone-700">{description}</div>
    </div>
  );
}