import {useEffect, useState, useContext} from "react";
import "./Top.scss";
import LanguageContext from "../../contexts/LanguageContext";

export default function Top() {
  const {lang} = useContext(LanguageContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(
        document.body.scrollTop > 30 || document.documentElement.scrollTop > 30
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <button
      id="topButton"
      title={lang === "id" ? "Kembali ke atas" : "Go to top"}
      onClick={scrollToTop}
      style={{display: visible ? "block" : "none"}}
      aria-label={lang === "id" ? "Kembali ke atas" : "Back to top"}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="12 19 12 5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
