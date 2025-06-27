import React from "react";

export default function SkillCard({ image, title, description, color,  }) {
  return (
    <div className={`p-4 w-96 h-44 mb-4 rounded-lg `} style={{ backgroundColor: color || "#FFFFFF" }}>
      <div className="w-[15%]">
        <img className="" src={image} alt="work item" />
      </div>
      <div className="text-sm py-2 font-bold">{title}</div>
      <div className="text-left text-xs text-stone-700">{description}</div>
    </div>
  );
}