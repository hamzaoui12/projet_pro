import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enTranslation from "./i18n/en/Home.json"
import frTranslation from "./i18n/fr/Home.json"
import ArTranslation from "./i18n/Ar/Home.json"

const resources = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  Ar: {
    translation: ArTranslation,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
