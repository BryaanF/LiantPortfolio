import React, {useContext} from "react";
import {motion} from "framer-motion";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {illustration, skillsSection} from "../../portfolio";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../utils/translations";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const {lang} = useContext(LanguageContext);

  if (!skillsSection.display) return null;

  const itemVariants = {
    hidden: {opacity: 0, y: 12},
    visible: {opacity: 1, y: 0, transition: {duration: 0.4}}
  };

  return (
    <section
      id="skills"
      className="w-full py-20 lg:py-28 overflow-hidden"
      style={{backgroundColor: "var(--bg-body)"}}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          title={getTranslation(skillsSection.title, lang)}
          subtitle={getTranslation(skillsSection.subTitle, lang)}
          emoji="💡"
        />

        {/* Lottie Animation — large, central focal point */}
        <motion.div
          initial={{opacity: 0, scale: 0.92}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true}}
          transition={{duration: 0.7, delay: 0.2}}
          className="flex justify-center mb-12 md:mb-16"
        >
          <div className="w-full max-w-lg md:max-w-xl">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Developer Activity"
                src={require("../../assets/images/developerActivity.svg")}
                className="w-full h-auto drop-shadow-xl"
              />
            )}
          </div>
        </motion.div>

        {/* Software Skills Bar */}
        <motion.div
          initial={{opacity: 0, y: 12}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.4}}
          className="flex justify-center mb-12"
        >
          <SoftwareSkill />
        </motion.div>

        {/* Skill Descriptions — compact 2-column grid */}
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.5}}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto"
        >
          {skillsSection.skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex items-start gap-3 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed p-3 rounded-lg transition-colors hover:bg-[var(--border-light)]/30"
            >
              <span className="text-[var(--btn-primary-bg)] mt-0.5 shrink-0 text-lg leading-none">
                ▸
              </span>
              <span>{getTranslation(skill, lang)}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
