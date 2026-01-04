import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
// Hapus import Lottie yang tidak perlu
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio"; // illustration tidak lagi dibutuhkan disini jika hardcode gambar
import StyleContext from "../../contexts/StyleContext";
import profilePic from "../../assets/images/liant-profile-picture.png";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "light-mode greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                {greeting.resumeLink && (
                  <a
                    href="/resume.pdf"
                    download="Liant_Resume.pdf"
                    className="download-link-button notranslate"
                  >
                    <Button text="📄 Resume / CV" />
                  </a>
                )}
                <Button text="💵 Estimate Project Cost" href="#pricing" />
                <Button text="🤝 Build a Project" href="#contact" />
              </div>
            </div>
          </div>
          
          {/* Bagian Image Refactor */}
          <div className="greeting-image-div">
             <img
                alt="Profile Avatar"
                // Ganti path ini sesuai lokasi foto Anda
                src={profilePic} 
                className="profile-avatar"
             />
          </div>
        </div>
      </div>
    </Fade>
  );
}