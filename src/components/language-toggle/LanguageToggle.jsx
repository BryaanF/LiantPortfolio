import {useContext} from "react";
import LanguageContext from "../../contexts/LanguageContext";

export default function LanguageToggle() {
  const {lang, changeLang} = useContext(LanguageContext);

  return (
    <button
      onClick={changeLang}
      className="bg-transparent border border-[var(--border-light)] text-[var(--text-primary)] px-2.5 py-1 rounded-md cursor-pointer text-xs font-semibold transition-all duration-200 hover:bg-[var(--btn-primary-bg)] hover:text-white hover:border-[var(--btn-primary-bg)] focus:outline-none"
      aria-label="Toggle language"
      title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
    >
      {lang === "id" ? "🌐 ID" : "🌐 EN"}
    </button>
  );
}
