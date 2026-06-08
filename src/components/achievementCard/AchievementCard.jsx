import React, {useContext} from "react";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../utils/translations";

export default function AchievementCard({cardInfo}) {
  const {lang} = useContext(LanguageContext);
  // Function untuk buka link
  function openUrlInNewTab(url) {
    if (!url) return;
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    // Pastikan classivenya "achievement-card" agar CSS grid dan warnanya masuk
    <div className="achievement-card">
      <div className="achievement-card-image">
        <img src={cardInfo.image} alt={cardInfo.imageAlt} />
      </div>
      <div className="achievement-card-detail">
        <h5 className="card-title">{cardInfo.title}</h5>
        <p className="card-subtitle">
          {getTranslation(cardInfo.description, lang)}
        </p>
      </div>
      <div className="card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <button
              key={i}
              className="secondary-btn"
              onClick={() => openUrlInNewTab(v.url)}
            >
              {v.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
