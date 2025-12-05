// src/locales/config.ts

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { defaultNS, fallbackLng, resources, supportedLngs } from "./index";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,
    defaultNS,
    supportedLngs,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

// Optional but nice for RTL in future, currently all LTR:
i18n.on("languageChanged", () => {
  document.documentElement.dir = "ltr";
});

export default i18n;
