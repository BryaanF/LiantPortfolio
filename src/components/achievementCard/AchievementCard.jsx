import React, {useContext, useState} from "react";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../utils/translations";
import ProjectShowcase from "../projectShowcase/ProjectShowcase";

export default function AchievementCard({cardInfo}) {
  const {lang} = useContext(LanguageContext);
  const [showcaseData, setShowcaseData] = useState(null);

  // Resolve media gallery (if any)
  const mediaGallery = (cardInfo.mediaGallery || []).map(m => ({
    ...m,
    caption: getTranslation(m.caption || "", lang)
  }));
  const footerLinks = (cardInfo.footer || []).map(f => ({
    name: f.name,
    url: f.url
  }));

  // Use first footer URL as externalUrl for ProjectShowcase
  const firstExternalUrl = footerLinks.length > 0 ? footerLinks[0].url : "";

  const openShowcase = () => {
    if (mediaGallery.length > 0 || footerLinks.length > 0) {
      setShowcaseData({
        title: cardInfo.title,
        description: getTranslation(cardInfo.description, lang),
        media: mediaGallery,
        externalUrl: firstExternalUrl
      });
    }
  };

  const openUrlInNewTab = url => {
    if (!url) return;
    const win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <div className="achievement-card">
      <div className="achievement-card-image">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt}
          style={{cursor: mediaGallery.length > 0 ? "pointer" : "default"}}
          onClick={mediaGallery.length > 0 ? openShowcase : undefined}
        />
      </div>
      <div className="achievement-card-detail">
        <h5 className="card-title">{cardInfo.title}</h5>
        <p className="card-subtitle">
          {getTranslation(cardInfo.description, lang)}
        </p>
      </div>
      <div className="card-footer">
        {footerLinks.map((v, i) => {
          const hasGallery = mediaGallery.length > 0;
          return (
            <button
              key={i}
              className="secondary-btn"
              onClick={hasGallery ? openShowcase : () => openUrlInNewTab(v.url)}
            >
              {v.name}
            </button>
          );
        })}
      </div>

      {showcaseData && (
        <ProjectShowcase
          title={showcaseData.title}
          description={showcaseData.description}
          media={showcaseData.media}
          externalUrl={showcaseData.externalUrl}
          onClose={() => setShowcaseData(null)}
        />
      )}
    </div>
  );
}
