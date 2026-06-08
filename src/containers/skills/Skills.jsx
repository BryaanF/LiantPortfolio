import React, {useContext} from "react";
import {motion} from "framer-motion";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
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
        {/* Header — centered, compact */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-3">
            {getTranslation(skillsSection.title, lang)}
          </h2>
          <p
            className="text-sm md:text-base uppercase tracking-[0.2em] font-semibold max-w-xl mx-auto"
            style={{color: "var(--text-secondary)"}}
          >
            {getTranslation(skillsSection.subTitle, lang)}
          </p>
        </motion.div>

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
