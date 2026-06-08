import React, {useContext} from "react";
import LanguageContext from "../../contexts/LanguageContext";

export default function LanguageToggle() {
  const {lang, changeLang} = useContext(LanguageContext);

  return (
    <button
      onClick={changeLang}
      className="lang-toggle-btn"
      aria-label="Toggle language"
      title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
    >
      {lang === "id" ? "🇮🇩 ID" : "🇬🇧 EN"}
    </button>
  );
}
