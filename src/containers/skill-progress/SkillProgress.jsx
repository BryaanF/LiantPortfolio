import {motion} from "framer-motion";
import "./Progress.scss";
import {illustration, techStack} from "../../data";
import Build from "../../assets/lottie/build";
import skillSvg from "../../assets/images/skill.svg";
import DisplayLottie from "../../components/display-lottie/DisplayLottie";

const containerVariants = {
  hidden: {opacity: 0},
  visible: {opacity: 1, transition: {staggerChildren: 0.15, delayChildren: 0.2}}
};

const progressVariants = width => ({
  hidden: {width: 0},
  visible: {width: width, transition: {duration: 1.5, ease: "easeOut"}}
});

export default function SkillProgress() {
  if (!techStack.viewSkillBars) return null;

  return (
    <motion.section
      className="skills-container"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
      variants={containerVariants}
    >
      <div className="skills-bar">
        <h1 className="skills-heading">Proficiency 🎯</h1>

        {techStack.experience.map((exp, i) => (
          <div key={exp.Stack || i} className="skill">
            <p className="skill-name">{exp.Stack}</p>
            <div className="meter">
              <motion.span variants={progressVariants(exp.progressPercentage)} />
            </div>
          </div>
        ))}
      </div>

      <motion.div
        className="skills-image"
        initial={{opacity: 0, scale: 0.8}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.8}}
      >
        {illustration.animated ? (
          <DisplayLottie animationData={Build} />
        ) : (
          <img alt="Skills" src={skillSvg} />
        )}
      </motion.div>
    </motion.section>
  );
}
