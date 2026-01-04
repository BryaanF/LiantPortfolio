import React, {useContext} from "react";
import {motion} from "framer-motion";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  // Animasi Variabel (Clean & Reusable)
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {staggerChildren: 0.2}
    }
  };

  const leftSideVariants = {
    hidden: {opacity: 0, x: -50},
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.8, ease: "easeOut"}
    }
  };

  const rightSideVariants = {
    hidden: {opacity: 0, x: 50},
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.8, ease: "easeOut"}
    }
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 10},
    visible: {opacity: 1, y: 0}
  };

  return (
    <section id="skills" className="w-full py-16 lg:py-24 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, margin: "-100px"}}
        variants={containerVariants}
      >
        {/* Lottie / Image Side - Order 2 di mobile agar teks muncul duluan */}
        <motion.div
          className="w-full lg:w-1/2 order-2 lg:order-1"
          variants={leftSideVariants}
        >
          <div className="max-w-md md:max-w-lg mx-auto">
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

        {/* Text / Skills Side */}
        <motion.div
          className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left"
          variants={rightSideVariants}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight mb-4">
            {skillsSection.title}
          </h1>

          <p className="text-lg md:text-xl font-medium text-[var(--text-secondary)] opacity-80 tracking-widest mb-8">
            {skillsSection.subTitle}
          </p>

          <div className="mb-8 flex justify-center lg:justify-start">
            <SoftwareSkill />
          </div>

          {/* List Skill Deskripsi dengan Stagger effect */}
          <div className="space-y-4">
            {skillsSection.skills.map((skill, i) => (
              <motion.p
                key={i}
                variants={itemVariants}
                className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed flex items-start gap-3"
              >
                <span className="text-[var(--btn-primary-bg)] mt-1">⚡</span>
                <span className="flex-1">{skill}</span>
              </motion.p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
