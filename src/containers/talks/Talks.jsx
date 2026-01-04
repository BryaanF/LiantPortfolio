import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import { talkSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const { isDark } = useContext(StyleContext);

  if (!talkSection.display) {
    return null;
  }

  // Variabel animasi untuk stagger effect pada list kartu
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2, // Kartu muncul bergantian
      },
    },
  };

  return (
    <motion.section
      id="talks"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="main py-10"
    >
      <div className="talk-header">
        <h1 className="talk-header-title">{talkSection.title}</h1>
        <p
          className={`talk-header-subtitle ${
            isDark ? "dark-mode" : "subTitle"
          }`}
        >
          {talkSection.subtitle}
        </p>

        <div className="talks-grid-container mt-8">
          {talkSection.talks.map((talk, i) => (
            <TalkCard
              key={i}
              talkDetails={{
                ...talk, // Gunakan spread operator agar lebih ringkas
                isDark,
              }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}