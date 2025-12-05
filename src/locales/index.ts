// // src/locales/index.ts

// import enCommon from "./en/common.json";
// import deCommon from "./de/common.json";
// import nlCommon from "./nl/common.json";

// export const resources = {
//   en: {
//     common: enCommon,
//   },
//   de: {
//     common: deCommon,
//   },
//   nl: {
//     common: nlCommon,
//   },
// };

// export type AppLanguage = keyof typeof resources; // "en" | "de" | "nl"

// export const defaultNS = "common";
// export const fallbackLng: AppLanguage = "en";
// export const supportedLngs: AppLanguage[] = ["en", "de", "nl"];


// src/locales/index.ts

import enCommon from "./en/common.json";
import enHome from "./en/home.json";
import enAbout from "./en/about.json";
import enHelp from "./en/help.json";
import enPolicy from "./en/policy.json";

import deCommon from "./de/common.json";
import deHome from "./de/home.json";
import deAbout from "./de/about.json";
import deHelp from "./de/help.json";
import dePolicy from "./de/policy.json";

import nlCommon from "./nl/common.json";
import nlHome from "./nl/home.json";
import nlAbout from "./nl/about.json";
import nlHelp from "./nl/help.json";
import nlPolicy from "./nl/policy.json";

export const resources = {
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    help: enHelp,
    policy: enPolicy,
  },
  de: {
    common: deCommon,
    home: deHome,
    about: deAbout,
    help: deHelp,
    policy: dePolicy,
  },
  nl: {
    common: nlCommon,
    home: nlHome,
    about: nlAbout,
    help: nlHelp,
    policy: nlPolicy,
  },
};

export type AppLanguage = keyof typeof resources; // "en" | "de" | "nl"

export const defaultNS = "common";
export const fallbackLng: AppLanguage = "en";
export const supportedLngs: AppLanguage[] = ["en", "de", "nl"];
