import {motion} from "framer-motion";
import ExperienceCard from "../../components/experience-card/ExperienceCard";
import SectionHeader from "../../components/section-header/SectionHeader";
import {workExperiences} from "../../data";
import {useTranslation} from "../../hooks/useTranslation";

const container = {
  hidden: {},
  visible: {transition: {staggerChildren: 0.15}}
};

const fadeUp = {
  hidden: {opacity: 0, y: 24},
  visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}}
};

export default function WorkExperience() {
  const t = useTranslation();

  if (!workExperiences.display) return null;

  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-4 py-24">
      <SectionHeader
        title={t(workExperiences.title)}
        subtitle={t(workExperiences.subtitle)}
        emoji="💼"
        align="center"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {workExperiences.experience.map(item => (
          <motion.div
            key={`${item.company}-${item.role}`}
            variants={fadeUp}
            className="h-full"
          >
            <ExperienceCard cardInfo={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
