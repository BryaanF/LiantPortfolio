import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  
  // Best practice: Definisikan tahun di luar return jika ingin lebih bersih, 
  // atau langsung di dalam JSX untuk ringkas.
  const currentYear = new Date().getFullYear();

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className={isDark ? "light-mode footer-div" : "dark-mode footer-div"}>
        <p className="footer-text">
          {/* Menggunakan Template Literal untuk menyisipkan variabel tahun */}
          {emoji(`Made by Liant © ${currentYear}`)}
        </p>
      </div>
    </Fade>
  );
}