import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./Podcast.scss";
import { podcastSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const { isDark } = useContext(StyleContext);

  if (!podcastSection) {
    console.error("podcastSection object for Podcast section is missing");
    return null;
  }

  if (!podcastSection.display) {
    return null;
  }

  // Variabel Animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Memberikan jeda antar iframe agar tidak berat saat loading bareng
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="main py-10"
      id="podcast"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="podcast-header">
        <h1 className="podcast-header-title">{podcastSection.title}</h1>
        <p
          className={`podcast-header-subtitle ${
            isDark ? "dark-mode" : "subTitle"
          }`}
        >
          {podcastSection.subtitle}
        </p>
      </div>

      <div className="podcast-main-div mt-8">
        {podcastSection.podcast.map((podcastLink, i) => {
          if (!podcastLink) {
            console.warn(`Podcast link at index ${i} is missing`);
            return null;
          }

          return (
            <motion.div key={i} variants={itemVariants} className="podcast-wrapper">
              <iframe
                className="podcast-iframe rounded-xl shadow-lg"
                src={podcastLink}
                frameBorder="0"
                scrolling="no"
                title={`Podcast-${i}`}
                loading="lazy" // Optimasi performa: Iframe hanya diload saat mendekati viewport
              ></iframe>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}