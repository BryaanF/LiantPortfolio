import {motion} from "framer-motion";
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
      className="w-[90%] max-w-7xl mx-auto my-8 py-5 px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
      variants={containerVariants}
    >
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)]">
          Proficiency 🎯
        </h1>

        {techStack.experience.map((exp, i) => (
          <div key={exp.Stack || i} className="mb-5">
            <p className="text-sm md:text-base font-semibold text-[var(--text-primary)] mb-2">
              {exp.Stack}
            </p>
            <div className="h-4 relative bg-[var(--border-light)] rounded-full overflow-hidden">
              <motion.span
                className="h-full rounded-full bg-[#aaa5ff] block"
                variants={progressVariants(exp.progressPercentage)}
              />
            </div>
          </div>
        ))}
      </div>

      <motion.div
        className="hidden md:flex flex-1 justify-center items-center"
        initial={{opacity: 0, scale: 0.8}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.8}}
      >
        {illustration.animated ? (
          <DisplayLottie animationData={Build} />
        ) : (
          <img
            alt="Skills"
            src={skillSvg}
            className="ml-10 max-w-[90%] h-auto"
          />
        )}
      </motion.div>
    </motion.section>
  );
}
