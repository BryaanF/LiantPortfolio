import {useContext} from "react";
import LanguageContext from "../contexts/LanguageContext";
import {getTranslation} from "../utils/translations";

/* Hook that returns a translation function bound to the current language. */
export const useTranslation = () => {
  const {lang} = useContext(LanguageContext);
  return obj => getTranslation(obj, lang);
};
