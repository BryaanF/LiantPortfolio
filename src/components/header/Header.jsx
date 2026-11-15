import {useContext, useState} from "react";
import Headroom from "react-headroom";
import ToggleSwitch from "../toggle-switch/ToggleSwitch";
import LanguageToggle from "../language-toggle/LanguageToggle";
import LanguageContext from "../../contexts/LanguageContext";
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
  const {lang} = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const viewExperience = workExperiences.display;
  const viewEducation = educationInfo.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewResume = resumeSection.display;
  const viewPricing = pricingSection.display;
  const viewIntroVideo = introVideo.display && introVideo.videoUrl;

  const navLinks = [
    viewIntroVideo && {
      href: "#intro-video",
      label: lang === "id" ? "Perkenalan" : "Intro"
    },
    viewSkills && {
      href: "#skills",
      label: lang === "id" ? "Kemampuan" : "Skills"
    },
    viewEducation && {
      href: "#education",
      label: lang === "id" ? "Pendidikan" : "Education"
    },
    viewExperience && {
      href: "#experience",
      label: lang === "id" ? "Pengalaman" : "Work Experience"
    },
    viewResume && {
      href: "#projects",
      label: lang === "id" ? "Proyek" : "Projects"
    },
    viewAchievement && {
      href: "#achievements",
      label: lang === "id" ? "Sertifikasi" : "Certification"
    },
    viewPricing && {
      href: "#pricing",
      label: lang === "id" ? "Harga" : "Pricing"
    }
  ].filter(Boolean);

  return (
    <Headroom style={{zIndex: 50}}>
      <header className="w-full px-5 md:px-10 py-3.5 mx-auto flex items-center justify-between relative bg-[var(--bg-header)] border-b border-[var(--border-light)] transition-colors duration-300">
        {/* Logo */}
        <a
          href="/"
          className="text-xl md:text-2xl font-bold flex items-center z-20 text-[var(--text-primary)] no-underline"
        >
          <span className="text-[var(--text-secondary)] font-mono">&lt;</span>
          <span className="font-agustina px-2 font-bold notranslate text-[var(--text-primary)]">
            {greeting.username}
          </span>
          <span className="text-[var(--text-secondary)] font-mono">/&gt;</span>
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-30 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Navigation Menu */}
        <ul
          className={`${
            menuOpen
              ? "flex flex-col absolute top-full left-0 w-full bg-[var(--bg-header)] border-b border-[var(--border-light)] py-4 px-6 gap-2 shadow-lg"
              : "hidden"
          } md:flex md:static md:flex-row md:items-center md:gap-2 lg:gap-3 md:p-0 md:bg-transparent md:border-none md:shadow-none list-none m-0`}
        >
          {navLinks.map(link => (
            <li key={link.href} className="w-full md:w-auto text-center md:text-left">
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-1.5 text-sm font-medium rounded-md text-[var(--text-primary)] hover:bg-[var(--btn-primary-bg)] hover:text-white transition-colors duration-200 no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Language Toggle */}
          <li className="flex items-center justify-center pt-2 md:pt-0">
            <LanguageToggle />
          </li>

          {/* Theme Toggle */}
          <li className="flex items-center justify-center pt-2 md:pt-0 md:pl-3 md:ml-1 md:border-l md:border-[var(--border-light)]">
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
