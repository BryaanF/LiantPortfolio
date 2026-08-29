import {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../toggle-switch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import LanguageToggle from "../language-toggle/LanguageToggle";
import {
  greeting,
  workExperiences,
  educationInfo,
  skillsSection,
  achievementSection,
  resumeSection,
  pricingSection,
  introVideo
} from "../../data";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewEducation = educationInfo.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewResume = resumeSection.display;
  const viewPricing = pricingSection.display;
  const viewIntroVideo = introVideo.display && introVideo.videoUrl;

  return (
    <Headroom>
      <header className={isDark ? "header dark-menu" : "header light-menu"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        {/* Hapus class utility tailwind, gunakan class semantik */}
        <ul className="menu">
          {viewIntroVideo && (
            <li>
              <a href="#intro-video" className="nav-link">
                Intro
              </a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education" className="nav-link">
                Education
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" className="nav-link">
                Work Experiences
              </a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" className="nav-link">
                Certification
              </a>
            </li>
          )}
          {viewPricing && (
            <li>
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
            </li>
          )}

          <li className="lang-item">
            <LanguageToggle />
          </li>

          {/* Settings Item */}
          <li className="settings-item">
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
