import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({ cardInfo, isDark }) {
  // Logic ColorThief DIHAPUS agar tidak merusak tema Dark & Gold

  return (
    <div className={`experience-card ${isDark ? "dark-mode" : ""}`}>
      {/* Banner Section */}
      <div className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          loading="lazy"
        />
      </div>

      {/* Text Details Section */}
      <div className="experience-text-details">
        <h5 className="experience-text-role">
          {cardInfo.role}
        </h5>
        <h5 className="experience-text-date">
          {cardInfo.date}
        </h5>
        <p className="subTitle experience-text-desc">
          {cardInfo.desc}
        </p>

        {/* Render Bullets Inline */}
        {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
          <ul className="experience-bullets">
            {cardInfo.descBullets.map((item, i) => (
              <li key={i} className="subTitle">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}