import React, {useMemo} from "react";
import {motion} from "framer-motion"; // Ganti react-reveal
import "./GithubProfileCard.scss";
import SocialMedia from "../socialMedia/SocialMedia";
import {contactInfo, isHireable} from "../../portfolio";
import emoji from "react-easy-emoji";

const LocationIcon = () => (
  <svg
    viewBox="-0.5 -2 20 19"
    version="1.1"
    width="22"
    height="16"
    aria-hidden="true"
    stroke="currentColor"
    className="location-svg"
  >
    <path
      fillRule="evenodd"
      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
    />
  </svg>
);

export default function GithubProfileCard({prof}) {
  const hireableStatus = useMemo(() => (isHireable ? "Yes" : "No"), []);
  const parsedBio = useMemo(() => emoji(String(prof?.bio || "")), [prof?.bio]);

  // Definisi varian animasi untuk kebersihan kode (Clean Code)
  const containerVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        // Stagger children bisa digunakan jika ingin konten muncul berurutan
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section
      id="contact"
      className="main"
      initial="hidden"
      whileInView="visible" // Animasi jalan saat elemen masuk viewport
      viewport={{once: true, margin: "-100px"}} // Jalan sekali saja
      variants={containerVariants}
    >
      <h1 className="prof-title">Connect with me / hire me!</h1>

      <div className="row">
        <div className="main-content-profile">
          <header className="blog-header">
            <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
          </header>

          <h2 className="bio-text">"{parsedBio}"</h2>

          {prof?.location && (
            <div className="location-div">
              <span className="desc-prof">
                <LocationIcon />
                {prof.location}
              </span>
            </div>
          )}

          <div className="opp-div">
            <span className="desc-prof">
              <strong>Open for opportunities:</strong> {hireableStatus}
            </span>
          </div>

          <SocialMedia />
        </div>

        <motion.aside
          className="image-content-profile"
          whileHover={{scale: 1.05}} // Interaktivitas tambahan
          transition={{type: "spring", stiffness: 300}}
        >
          <img
            src={prof?.avatarUrl}
            alt={`${prof?.name || "Profile"} Avatar`}
            className="profile-image"
            loading="lazy"
          />
        </motion.aside>
      </div>
    </motion.section>
  );
}
