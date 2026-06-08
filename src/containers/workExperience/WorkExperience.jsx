import React, {useContext} from "react";
import {motion} from "framer-motion";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
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
      {/* HEADER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        variants={fadeUp}
        className="mb-16 text-left"
      >
        <h2 className="flex items-center gap-3 text-4xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-5xl">
          {getTranslation(workExperiences.title, lang)}

          <motion.span
            aria-hidden
            className="inline-flex"
            animate={{x: [0, 6, 0]}}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            💼
          </motion.span>
        </h2>
        <p className="mt-3 max-w-xl text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] opacity-70">
          {getTranslation(workExperiences.subtitle, lang)}
        </p>
      </motion.div>

      {/* CARDS */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {workExperiences.experience.map((item, i) => (
          <motion.div key={i} variants={fadeUp}>
            <ExperienceCard cardInfo={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
