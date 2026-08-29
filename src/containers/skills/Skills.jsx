import {motion} from "framer-motion";
import SoftwareSkill from "../../components/software-skills/SoftwareSkill";
import SectionHeader from "../../components/section-header/SectionHeader";
import {skillsSection, illustration} from "../../data";
import {useTranslation} from "../../hooks/useTranslation";
import codingPerson from "../../assets/lottie/codingPerson";
import developerActivity from "../../assets/images/developerActivity.svg";
import DisplayLottie from "../../components/display-lottie/DisplayLottie";

const itemVariants = {
  hidden: {opacity: 0, y: 12},
  visible: {opacity: 1, y: 0, transition: {duration: 0.4}}
};

export default function Skills() {
  const t = useTranslation();

  if (!skillsSection.display) return null;

  return (
    <section
      id="skills"
      className="w-full py-20 lg:py-28 overflow-hidden"
      style={{backgroundColor: "var(--bg-body)"}}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          title={t(skillsSection.title)}
          subtitle={t(skillsSection.subTitle)}
          emoji="💡"
        />

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
                src={developerActivity}
                className="w-full h-auto drop-shadow-xl"
              />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 12}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.4}}
          className="flex justify-center mb-12"
        >
          <SoftwareSkill />
        </motion.div>

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
              <span>{t(skill)}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
