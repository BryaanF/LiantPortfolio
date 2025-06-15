import React, {useEffect} from "react";
import "./LanguageSelector.scss";

function LanguageSelector() {
  useEffect(() => {
    const interval = setInterval(() => {
      const iframe = document.querySelector("iframe.goog-te-menu-frame");
      if (iframe) {
        const unwanted = document.querySelector(".goog-te-banner-frame");
        if (unwanted) unwanted.remove();
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleLanguageChange = e => {
    const value = e.target.value;
    const frame = document.querySelector("iframe.goog-te-menu-frame");
    if (frame) {
      const innerDoc = frame.contentDocument || frame.contentWindow.document;
      const langOption = Array.from(
        innerDoc.querySelectorAll(".goog-te-menu2-item span.text")
      ).find(el => el.innerText.toLowerCase().includes(value));
      if (langOption) langOption.click();
    }
  };

  return (
    <select className="language-dropdown" onChange={handleLanguageChange}>
      <option value="">🌐 Language</option>
      <option value="english">English</option>
      <option value="indonesia">Indonesia</option>
      <option value="japanese">Japanese</option>
    </select>
  );
}

export default LanguageSelector;
