import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import BigProject from "./BigProjects/BigProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import Pricing from "./pricing/Pricing";
import IntroVideo from "./introVideo/IntroVideo";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {LanguageProvider} from "../contexts/LanguageContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
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

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const changeLang = () => {
    setLang(prev => (prev === "id" ? "en" : "id"));
  };

  return (
    <div className={isDark ? "dark-mode" : "light-mode"}>
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
              <StackProgress />
              <Education />
              <WorkExperience />
              <Projects />
              <BigProject />
              <Achievement />
              <Blogs />
              <Talks />
              <Podcast />
              <Pricing />
              <Profile />
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
