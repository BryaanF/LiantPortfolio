import React, {useContext} from "react";
import {motion} from "framer-motion";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {workExperiences} from "../../portfolio";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../utils/translations";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp = {
  hidden: {opacity: 0, y: 24},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.6, ease: "easeOut"}
  }
};

export default function WorkExperience() {
  const {lang} = useContext(LanguageContext);

  if (!workExperiences.display) return null;

  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-4 py-24">
      <SectionHeader
        title={getTranslation(workExperiences.title, lang)}
        subtitle={getTranslation(workExperiences.subtitle, lang)}
        emoji="💼"
        align="center"
      />

      {/* CARDS */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {workExperiences.experience.map((item, i) => (
          <motion.div key={i} variants={fadeUp} className="h-full">
            <ExperienceCard cardInfo={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
