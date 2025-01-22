import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import config from "../config.js";

i18n
  .use(Backend)
  .use(initReactI18next) // Intègre i18next avec React
  .init({
    lng: config.locale,
    fallbackLng: "en", // Langue par défaut si la traduction est manquante
    debug: true,
    react: {
      useSuspense: true, // Active React Suspense pour le chargement
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
