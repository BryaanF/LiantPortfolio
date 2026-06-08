import React, {useContext} from "react";
import {motion} from "framer-motion";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../utils/translations";

export default function EducationCard({school}) {
  const {isDark} = useContext(StyleContext);
  const {lang} = useContext(LanguageContext);

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: "-50px"}}
      transition={{duration: 0.6}}
      className="group relative isolate w-full bg-[var(--bg-card)]/30 border border-[var(--border-light)] hover:border-[var(--btn-primary-bg)]/50 p-6 md:p-8 rounded-[2rem] transition-all duration-500 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10">
        {/* Logo Section */}
        {school.logo && (
          <div className="shrink-0 relative">
            <div className="absolute inset-0 bg-[var(--btn-primary-bg)] rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

            <img
              className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-full bg-white p-2 shadow-lg border-2 border-[var(--border-light)] group-hover:border-[var(--btn-primary-bg)] transition-all duration-500 relative z-10"
              src={school.logo}
              alt={school.schoolName}
              loading="lazy"
            />
          </div>
        )}

        {/* Info Section */}
        <div className="flex-1 text-center lg:text-left">
          <h5 className="text-xl md:text-2xl font-black text-[var(--text-primary)] leading-tight">
            {school.schoolName}
          </h5>

          <div className="mt-2 space-y-2">
            <h6
              className={`text-base md:text-lg font-bold ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {getTranslation(school.subHeader, lang)}
            </h6>

            <div className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.2em] text-[var(--btn-primary-bg)] bg-[var(--btn-primary-bg)]/10 rounded-full uppercase">
              {school.duration}
            </div>

            <p className="mt-6 text-sm md:text-base text-[var(--text-secondary)] italic leading-relaxed opacity-90 max-w-4xl mx-auto lg:mx-0">
              "{getTranslation(school.desc, lang)}"
            </p>

            {school.descBullets && (
              <ul className="mt-6 space-y-3 list-none p-0">
                {school.descBullets.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start justify-center lg:justify-start gap-3 text-sm md:text-base text-[var(--text-secondary)]"
                  >
                    <span className="text-[var(--btn-primary-bg)] mt-1.5 shrink-0 text-[8px] transform group-hover:scale-125 transition-transform">
                      ▶
                    </span>
                    <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                      {getTranslation(item, lang)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--btn-primary-bg)] to-transparent opacity-0 group-hover:opacity-40 transition-all duration-700" />
    </motion.div>
  );
}
