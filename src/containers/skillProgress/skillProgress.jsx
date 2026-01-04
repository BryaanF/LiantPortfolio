import React from "react";
import { motion } from "framer-motion";
import "./Progress.scss";
import { illustration, techStack } from "../../portfolio";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (!techStack.viewSkillBars) return null;

  // Variabel animasi untuk container (Stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  // Variabel animasi untuk bar pengisi (fill)
  const progressVariants = (width) => ({
    hidden: { width: 0 },
    visible: { 
      width: width, 
      transition: { duration: 1.5, ease: "easeOut" } 
    },
  });

  return (
    <motion.section
      className="skills-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="skills-bar">
        <h1 className="skills-heading">Proficiency 🎯</h1>
        
        {techStack.experience.map((exp, i) => (
          <div key={i} className="skill">
            <p className="skill-name">{exp.Stack}</p>
            <div className="meter">
              <motion.span 
                variants={progressVariants(exp.progressPercentage)}
              />
            </div>
          </div>
        ))}
      </div>

      <motion.div 
        className="skills-image"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {illustration.animated ? (
          <DisplayLottie animationData={Build} />
        ) : (
          <img
            alt="Skills"
            src={require("../../assets/images/skill.svg")}
          />
        )}
      </motion.div>
    </motion.section>
  );
}