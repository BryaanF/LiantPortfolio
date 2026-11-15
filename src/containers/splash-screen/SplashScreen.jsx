import {useContext} from "react";
import DisplayLottie from "../../components/display-lottie/DisplayLottie";
import {greeting, splashScreen} from "../../data";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isDark ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="h-[50vh] flex items-center justify-center">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="text-3xl md:text-4xl select-none flex items-center font-bold">
        <span className="text-[var(--text-secondary)] font-mono"> &lt;</span>
        <span className="font-agustina px-5 notranslate text-[var(--text-primary)]">
          {greeting.username}
        </span>
        <span className="text-[var(--text-secondary)] font-mono">/&gt;</span>
      </div>
    </div>
  );
}
