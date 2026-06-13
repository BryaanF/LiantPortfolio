import React, {useContext} from "react";
import {motion} from "framer-motion";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../utils/translations";

export default function ExperienceCard({cardInfo}) {
  const {lang} = useContext(LanguageContext);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[var(--border-light)] bg-[var(--bg-card)] transition-all hover:-translate-y-1 hover:shadow-xl">
      {/* BANNER */}
      <div className="relative flex h-44 items-end justify-center bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900">
        <span className="absolute top-4 text-center text-lg font-bold text-neutral-800 dark:text-white">
          {cardInfo.company}
        </span>

        <img
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          className="absolute -bottom-10 h-24 w-24 rounded-full border-4 border-[var(--bg-card)] bg-white object-contain shadow-lg"
          loading="lazy"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-14 text-center">
        <motion.h3
          initial={{opacity: 0, y: 12}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.4, ease: "easeOut"}}
          viewport={{once: true}}
          className="text-lg font-bold text-[var(--text-primary)]"
        >
          {cardInfo.role}
        </motion.h3>

        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] opacity-70">
          {cardInfo.date}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-[var(--text-primary)] text-left">
          {getTranslation(cardInfo.desc, lang)}
        </p>

        {/* BULLETS */}
        {cardInfo.descBullets?.length > 0 && (
          <ul className="mt-4 space-y-2 text-left text-sm text-[var(--text-secondary)]">
            {cardInfo.descBullets.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--btn-primary-bg)]" />
                <span className="leading-relaxed">
                  {getTranslation(item, lang)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
