import React, { useContext } from "react";
import { motion } from "framer-motion";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import profilePic from "../../assets/images/liant-profile-picture.png";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  // Variabel Animasi Container (Stagger effect untuk teks & tombol)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animasi untuk Foto Profil
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <motion.section
      className="greet-main px-4 md:px-10"
      id="greeting"
      initial="hidden"
      animate="visible"
    >
      <div className="greeting-main flex flex-col md:flex-row items-center justify-between">

        {/* Kolom Teks */}
        <motion.div className="greeting-text-div w-full md:w-3/5" variants={containerVariants}>
          <div>
            <motion.h1
              variants={itemVariants}
              className={`greeting-text text-4xl md:text-6xl font-bold ${isDark ? "dark-mode" : "light-mode"}`}
            >
              {greeting.title}
              <motion.span
                className="wave-emoji inline-block ml-2"
                animate={{ rotate: [0, 20, 0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              >
                {emoji("👋")}
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`greeting-text-p text-lg md:text-xl mt-4 ${isDark ? "dark-mode" : "subTitle"}`}
            >
              {greeting.subTitle}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-6">
              <SocialMedia />
            </motion.div>

            <motion.div variants={itemVariants} className="button-greeting-div flex flex-wrap gap-4 mt-8">
              {greeting.resumeLink && (
                <Button
                  text="📄 Resume / CV"
                  href="/resume.pdf"
                  newTab={true} // If your component supports it
                />
              )}
              <Button text="💵 Estimate Project Cost" href="#pricing" />
              <Button text="🤝 Build a Project" href="#contact" />
            </motion.div>
          </div>
        </motion.div>

        {/* Kolom Image dengan Animasi Floating */}
        <motion.div
          className="greeting-image-div w-full md:w-2/5 flex justify-center mt-12 md:mt-0"
          variants={imageVariants}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative"
          >
            <img
              alt="Profile Avatar"
              src={profilePic}
              className="profile-avatar w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[var(--brand-gold)] shadow-2xl"
            />
            {/* Dekorasi Abstract (Opsional) */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[var(--brand-gold)] rounded-full -z-10 opacity-20 blur-xl"></div>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}