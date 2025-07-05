import React from "react";
import "./skillcard.css";

export default function SkillCard({ image, title, description, color }) {
  return (
    <div className="skill-card" style={{ backgroundColor: color || "#FFFFFF" }}>
      <div className="skill-card-image">
        <img src={image} alt="work item" />
      </div>
      <div className="skill-card-title">{title}</div>
      <div className="skill-card-description">{description}</div>
    </div>
  );
}
