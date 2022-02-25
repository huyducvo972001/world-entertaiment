import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./Locales/en/translationEN.json";
import translationPT from "./Locales/kr/translationKR.json";

const resources = {
  en: {
    translation: translationEN,
  },
  kr: {
    translation: translationPT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
