import {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import IntroVideo from "./intro-video/IntroVideo";
import Skills from "./skills/Skills";
import SkillProgress from "./skill-progress/SkillProgress";
import Education from "./education/Education";
import WorkExperience from "./work-experience/WorkExperience";
import BigProject from "./big-projects/BigProject";
import Achievement from "./achievements/Achievement";
import Pricing from "./pricing/Pricing";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "./top-button/Top";
import SplashScreen from "./splash-screen/SplashScreen";
import {splashScreen} from "../data";
import {StyleProvider} from "../contexts/StyleContext";
import {LanguageProvider} from "../contexts/LanguageContext";
import {useLocalStorage} from "../hooks/useLocalStorage";

const Main = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);
  const [lang, setLang] = useLocalStorage("lang", "en");
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const changeLang = () => {
    setLang(prev => (prev === "id" ? "en" : "id"));
  };

  return (
    <div
      className={`${
        isDark ? "dark-mode" : "light-mode"
      } min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] transition-colors duration-300`}
    >
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <LanguageProvider value={{lang: lang, changeLang: changeLang}}>
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <>
              <Header />
              <Greeting />
              <IntroVideo />
              <Skills />
              <SkillProgress />
              <Education />
              <WorkExperience />
              <BigProject />
              <Achievement />
              <Pricing />
              <Contact />
              <Footer />
              <ScrollToTopButton />
            </>
          )}
        </LanguageProvider>
      </StyleProvider>
    </div>
  );
};

export default Main;
