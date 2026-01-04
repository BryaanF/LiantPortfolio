import React from "react"; // Hapus useContext dan StyleContext karena tidak dipakai lagi di sini
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Achievement() {
  // Pengecekan display section
  if (!achievementSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1 className="heading achievement-heading">
              {achievementSection.title}
            </h1>
            <p className="subTitle achievement-subtitle">
              {achievementSection.subtitle}
            </p>
          </div>

          <div className="achievement-cards-container">
            {achievementSection.achievementsCards.map((card, i) => (
              <AchievementCard
                key={i}
                // BARIS INI DIHAPUS: isDark={isDark} 
                // Karena variabel isDark tidak ada, dan CSS variables sudah menangani warnanya.
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}