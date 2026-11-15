import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {skillsSection} from "../../data";

export default function SoftwareSkill() {
  return (
    <div className="my-3 md:my-5">
      <ul className="flex flex-wrap justify-center gap-6 md:gap-8 p-0 list-none text-center">
        {skillsSection.softwareSkills.map((skill, i) => (
          <li
            key={skill.skillName || i}
            className="group flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-1 notranslate"
            name={skill.skillName}
          >
            <div className="text-4xl md:text-5xl text-[var(--text-secondary)] transition-colors duration-200 group-hover:text-[#645beb]">
              <FontAwesomeIcon icon={skill.icon} />
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] mt-2 transition-colors duration-200 group-hover:text-[#645beb]">
              {skill.skillName}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
