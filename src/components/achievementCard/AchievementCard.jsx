import React, {useContext, useState} from "react";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../utils/translations";
import ImageLightbox from "../imageLightbox/ImageLightbox";
import ProjectShowcase from "../projectShowcase/ProjectShowcase";

export default function AchievementCard({cardInfo}) {
  const {lang} = useContext(LanguageContext);
  const [showcaseData, setShowcaseData] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  // Resolve media gallery (if any)
  const mediaGallery = (cardInfo.mediaGallery || []).map(m => ({
    ...m,
    caption: getTranslation(m.caption || "", lang)
  }));
  const footerLinks = (cardInfo.footer || []).map(f => ({
    name: f.name,
    url: f.url
  }));

  const firstExternalUrl = footerLinks.length > 0 ? footerLinks[0].url : "";

  const openShowcase = () => {
    if (mediaGallery.length > 0) {
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
    <div className="flex h-full flex-col rounded-xl border border-[var(--border-light)] bg-[var(--bg-card)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Logo */}
      <img
        src={cardInfo.image}
        alt={cardInfo.imageAlt}
        className="mb-5 h-[60px] w-auto object-contain"
        style={{cursor: mediaGallery.length > 0 ? "pointer" : "default"}}
        onClick={mediaGallery.length > 0 ? openShowcase : undefined}
      />

      {/* Title */}
      <h5 className="mb-2.5 text-xl font-bold text-[var(--text-primary)]">
        {cardInfo.title}
      </h5>

      {/* Description */}
      <p className="mb-6 flex-1 text-base leading-relaxed text-[var(--text-secondary)]">
        {getTranslation(cardInfo.description, lang)}
      </p>

      {/* Footer Buttons */}
      {footerLinks.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-3">
          {footerLinks.map((v, i) => {
            const isPrimary = i === 0;

            const handleClick = () => {
              if (i === 0 && mediaGallery.length > 0) {
                // Single image → use lightweight ImageLightbox
                if (mediaGallery.length === 1) {
                  setLightbox({
                    src: mediaGallery[0].url,
                    alt: mediaGallery[0].caption
                  });
                } else {
                  // Multiple images → use ProjectShowcase with gallery grid
                  openShowcase();
                }
              } else {
                openUrlInNewTab(v.url);
              }
            };

            return (
              <button
                key={i}
                onClick={handleClick}
                className={`rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 ${
                  isPrimary
                    ? "bg-[var(--btn-primary-bg)] text-white hover:brightness-110"
                    : "border border-[var(--border-light)] bg-transparent text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {v.name}
              </button>
            );
          })}
        </div>
      )}

      {/* ImageLightbox — stable, lightweight, for single image */}
      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* ProjectShowcase — for multi-image gallery */}
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
