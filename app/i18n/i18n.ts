import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      language: {
        en: "English",
        de: "German",
      },
      topbar: {
        searchPlaceholder: "Search students, transactions...",
      },
    },
  },
  de: {
    translation: {
      language: {
        en: "Englisch",
        de: "Deutsch",
      },
      topbar: {
        searchPlaceholder: "Suche Studenten, Transaktionen...",
      },
    },
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;

