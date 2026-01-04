import React, { useContext } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  if (!workExperiences.display) {
    return null;
  }

  return (
    <div id="experience" className="experience-section">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="workExperience">
          {/* Header Section */}
          <div className="experience-header">
            <h1 className="experience-heading">{workExperiences.title}</h1>
            <p className="subTitle experience-subtitle">
              {workExperiences.subtitle}
            </p>
          </div>

          {/* Cards Grid Section */}
          <div className="experience-cards-div">
            {workExperiences.experience.map((card, i) => {
              return (
                <ExperienceCard
                  key={i}
                  isDark={isDark}
                  cardInfo={card}
                />
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}