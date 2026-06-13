import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {achievementSection} from "../../portfolio";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../utils/translations";

export default function Achievement() {
  const {lang} = useContext(LanguageContext);
  if (!achievementSection.display) {
    return null;
  }

  const cardVariants = {
    hidden: {opacity: 0, scale: 0.85, y: 20},
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {type: "spring", stiffness: 260, damping: 20}
    }
  };

  return (
    <section className="main py-20 px-4 md:px-10" id="achievements">
      <div className="achievement-main-div max-w-[1400px] mx-auto">
        <SectionHeader
          title={getTranslation(achievementSection.title, lang)}
          subtitle={getTranslation(achievementSection.subtitle, lang)}
          emoji="🏆"
        />

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
                  mediaGallery: card.mediaGallery || [],
                  footer: card.footerLink
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
