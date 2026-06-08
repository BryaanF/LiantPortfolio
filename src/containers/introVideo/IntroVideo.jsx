import React, {useContext} from "react";
import {motion} from "framer-motion";
import {introVideo} from "../../portfolio";
import LanguageContext from "../../contexts/LanguageContext";
import StyleContext from "../../contexts/StyleContext";
import {getTranslation} from "../../utils/translations";

export default function IntroVideo() {
  const {lang} = useContext(LanguageContext);
  const {isDark} = useContext(StyleContext);

  if (!introVideo.display || !introVideo.videoUrl) {
    return null; // Jangan render jika URL belum diisi atau display: false
  }

  const title = getTranslation(introVideo.title, lang);
  const subtitle = getTranslation(introVideo.subtitle, lang);

  // Extract YouTube video ID from URL
  const getYoutubeId = url => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeId =
    introVideo.videoType === "youtube"
      ? getYoutubeId(introVideo.videoUrl)
      : null;

  return (
    <section id="intro-video" className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-4">
            {title}
          </h2>
          <p
            className="text-sm md:text-base max-w-2xl mx-auto"
            style={{color: "var(--text-secondary)"}}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{opacity: 0, scale: 0.95}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.2}}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-light)]"
          style={{
            aspectRatio: "16/9",
            backgroundColor: "#000"
          }}
        >
          {introVideo.videoType === "youtube" && youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
              title={title}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : introVideo.videoType === "direct" ? (
            <video
              src={introVideo.videoUrl}
              poster={introVideo.thumbnail || undefined}
              className="absolute inset-0 w-full h-full object-cover"
              controls
              playsInline
            />
          ) : (
            /* Placeholder jika videoUrl kosong — section ini sudah return null di atas,
               tapi sebagai fallback tampilkan placeholder */
            <div
              className="absolute inset-0 flex flex-col items-center justify-center"
              style={{backgroundColor: isDark ? "#111" : "#e8e4df"}}
            >
              <span className="text-5xl mb-4 opacity-30">🎬</span>
              <p
                className="text-sm opacity-50"
                style={{color: "var(--text-secondary)"}}
              >
                {lang === "id"
                  ? "Video perkenalan akan hadir di sini."
                  : "Introduction video coming soon."}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
