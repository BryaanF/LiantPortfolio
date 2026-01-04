import React from "react";
import { motion } from "framer-motion";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";

export default function Achievement() {
  if (!achievementSection.display) {
    return null;
  }

  // Variabel Animasi untuk Container (Induk)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Jeda antar kartu
        delayChildren: 0.2,
      },
    },
  };

  // Variabel Animasi untuk Kartu (Anak)
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 } 
    },
  };

  return (
    <motion.section
      className="main py-20 px-4 md:px-10"
      id="achievements"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="achievement-main-div max-w-[1400px] mx-auto">
        {/* Header Section */}
        <motion.div 
          className="achievement-header mb-12 text-center md:text-left"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <h1 className="heading achievement-heading text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-4">
            {achievementSection.title}
          </h1>
          <p className="subTitle achievement-subtitle text-[var(--text-secondary)] opacity-80 uppercase tracking-widest font-semibold">
            {achievementSection.subtitle}
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="achievement-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementSection.achievementsCards.map((card, i) => (
            <motion.div key={i} variants={cardVariants} className="h-full">
              <AchievementCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}