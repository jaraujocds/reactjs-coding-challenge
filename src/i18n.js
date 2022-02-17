import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import strings from "./utils/strings.json";

const preferredLang = window.localStorage.getItem("preferredLang");

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: strings,
    lng: preferredLang,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
