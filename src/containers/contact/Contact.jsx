import React, {useContext, useMemo} from "react";
import {motion} from "framer-motion";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import emailLottie from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faSquareEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const {isDark} = useContext(StyleContext);

  const onlyNumbers = useMemo(() => contactInfo.number.replace(/\D/g, ""), []);
  const onlyEmail = useMemo(() => contactInfo.email_address.trim(), []);

  const containerVariants = {
    hidden: {opacity: 0, y: 30},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {opacity: 0, x: -20},
    visible: {opacity: 1, x: 0}
  };

  return (
    <motion.section
      id="contact"
      className="max-w-7xl mx-auto my-auto py-16 px-6 md:px-10 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-100px"}}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Konten Teks */}
        <div className="flex flex-col text-center lg:text-left">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight"
            variants={itemVariants}
          >
            {contactInfo.title}
          </motion.h1>

          <motion.p
            className={`mt-4 text-lg md:text-xl font-medium uppercase tracking-wider ${
              isDark ? "text-[var(--text-secondary)]" : "text-gray-600"
            }`}
            variants={itemVariants}
          >
            {contactInfo.subtitle}
          </motion.p>

          <motion.div className="mt-8 space-y-4" variants={itemVariants}>
            {contactInfo.number && (
              <div className="flex justify-center lg:justify-start">
                <a
                  className="group flex items-center text-xl md:text-2xl text-[var(--text-secondary)] no-underline transition-all duration-300 hover:text-green-500"
                  href={`https://wa.me/${onlyNumbers}?text=${encodeURIComponent(
                    "Halo Liant, Saya tertarik untuk bekerja sama terkait ..."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faSquareWhatsapp}
                    className="mr-4 text-3xl transition-transform group-hover:scale-110"
                  />
                  <span className="group-hover:translate-x-1 transition-transform">
                    {contactInfo.number}
                  </span>
                </a>
              </div>
            )}

            <div className="flex justify-center lg:justify-start">
              <a
                className="group flex items-center text-xl md:text-2xl text-[var(--text-secondary)] no-underline transition-all duration-300 hover:text-blue-500"
                href={`mailto:${onlyEmail}`}
              >
                <FontAwesomeIcon
                  icon={faSquareEnvelope}
                  className="mr-4 text-3xl transition-transform group-hover:scale-110"
                />
                <span className="group-hover:translate-x-1 transition-transform">
                  {contactInfo.email_address}
                </span>
              </a>
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <SocialMedia />
            </div>
          </motion.div>
        </div>

        {/* Ilustrasi (Hidden on Mobile for cleaner UX) */}
        <motion.div
          className="hidden lg:block w-full max-w-md mx-auto"
          initial={{opacity: 0, scale: 0.8}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.8}}
        >
          {illustration.animated ? (
            <div className="transform scale-110">
              <DisplayLottie animationData={emailLottie} />
            </div>
          ) : (
            <img
              alt="Contact Illustration"
              src={require("../../assets/images/contactMailDark.svg")}
              className="w-full h-auto drop-shadow-2xl"
            />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
