import {useContext} from "react";
import {motion} from "framer-motion";
import SocialMedia from "../../components/social-media/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../data";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../utils/translations";
import profilePic from "../../assets/images/liant-profile-picture.png";

export default function Greeting() {
  const {lang} = useContext(LanguageContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  // Variabel Animasi Container (Stagger effect untuk teks & tombol)
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.6, ease: "easeOut"}
    }
  };

  // Animasi untuk Foto Profil
  const imageVariants = {
    hidden: {opacity: 0, scale: 0.8, rotate: -5},
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {duration: 0.8, ease: "easeOut", delay: 0.5}
    }
  };

  return (
    <motion.section
      className="w-[90%] max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-8 mt-4 md:mt-8"
      id="greeting"
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Kolom Teks */}
        <motion.div
          className="w-full md:w-3/5 text-center md:text-left"
          variants={containerVariants}
        >
          <div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold leading-tight text-[var(--text-primary)]"
            >
              {getTranslation(greeting.title, lang)}
              <motion.span
                className="inline-block ml-2 select-none"
                animate={{rotate: [0, 20, 0, 20, 0]}}
                transition={{repeat: Infinity, duration: 2, delay: 1}}
              >
                👋
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mt-4 text-[var(--text-secondary)] leading-relaxed"
            >
              {getTranslation(greeting.subTitle, lang)}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex justify-center md:justify-start"
            >
              <SocialMedia />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
            >
              {greeting.resumeLink && (
                <Button
                  text="📄 Resume / CV"
                  href={greeting.resumeLink}
                  newTab={true}
                />
              )}
              <Button
                text={
                  lang === "id"
                    ? "🤝 Bangun Proyek dengan Saya"
                    : "🤝 Build a Project with Me"
                }
                href="#pricing"
              />
            </motion.div>

            {greeting.stats && greeting.stats.display && (
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 max-w-md mx-auto md:mx-0 mt-10 pt-6 border-t border-[var(--border-light)]/50"
              >
                {greeting.stats.items.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-3xl font-black text-[var(--btn-primary-bg)]">
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs uppercase tracking-widest text-[var(--text-secondary)] mt-1">
                      {getTranslation(stat.label, lang)}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Kolom Image dengan Animasi Floating */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center mt-6 md:mt-0"
          variants={imageVariants}
        >
          <motion.div
            animate={{y: [0, -15, 0]}}
            transition={{repeat: Infinity, duration: 4, ease: "easeInOut"}}
            className="relative"
          >
            <img
              alt="Profile Avatar"
              src={profilePic}
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-brand-gold shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
            {/* Dekorasi Abstract */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-gold rounded-full -z-10 opacity-20 blur-xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
