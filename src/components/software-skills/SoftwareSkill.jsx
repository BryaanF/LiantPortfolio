import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../data";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => (
            <li
              key={skill.skillName || i}
              className="software-skill-inline notranslate"
              name={skill.skillName}
            >
              <FontAwesomeIcon icon={skill.icon} />
              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
