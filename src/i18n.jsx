import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const availableLanguages = [
    { code: "en", flag: "🇬🇧" },
    { code: "pl", flag: "🇵🇱" },
    { code: "uk", flag: "🇺🇦" },
];

const translations = {
  uk: {
    appTitle: "Генератор маски Бахтінова",
    modelType: "Тип моделі",
    attachment: "насадка",
    flat: "пласка",
    maskThickness: "Товщина маски (мм):",
    focalLength: "Фокусна відстань (мм):",
    innerDiameter: "Внутрішній діаметр",
    outerDiameter: "Зовнішній діаметр",
    tube: "труби",
    aperture: "Апертура (мм):",
    rimHeight: "Висота обідка (мм):",
    rimThickness: "Товщина обідка (мм):",
    exportSTL: "Експорт в STL",
    mm: "мм",
    filePrefix: "бахтiнов",
  },
  pl: {
    appTitle: "Generator maski Bahtinova",
    modelType: "Typ modelu",
    attachment: "nasadka",
    flat: "płaska",
    maskThickness: "Grubość maski (mm):",
    focalLength: "Ogniskowa (mm):",
    innerDiameter: "Wewnętrzna średnica",
    outerDiameter: "Zewnętrzna średnica",
    tube: "rury",
    aperture: "Apertura (mm):",
    rimHeight: "Wysokość kołnierza (mm):",
    rimThickness: "Grubość kołnierza (mm):",
    exportSTL: "Eksport do STL",
    mm: "mm",
    filePrefix: "bahtinow",
  },
  en: {
    appTitle: "Bahtinov Mask Generator",
    modelType: "Model type",
    attachment: "cover",
    flat: "flat",
    maskThickness: "Mask thickness (mm):",
    focalLength: "Focal length (mm):",
    innerDiameter: "Inner diameter",
    outerDiameter: "Outer diameter",
    tube: "tube",
    aperture: "Aperture (mm):",
    rimHeight: "Rim height (mm):",
    rimThickness: "Rim thickness (mm):",
    exportSTL: "Export to STL",
    mm: "mm",
    filePrefix: "bahtinov",
  },
};

const I18nContext = createContext({
  lang: "en",
  setLanguage: () => {},
  t: (k) => k,
});

async function detectLanguage() {
  try {
      console.log('detectLanguage');
    const nav = (navigator?.language || navigator?.languages?.[0] || "").toLowerCase();
    
    console.log(nav);
    if (nav.startsWith("uk")) return "uk";
    if (nav.startsWith("pl")) return "pl";
    if (nav.startsWith("en")) return "en";
  } catch (_) {
    // ignore
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    let mounted = true;
    
    detectLanguage().then((detected) => {
      if (mounted && translations[detected]) {
        setLang(detected);
        try {
          window.localStorage.setItem("preferredLang", detected);
        } catch (_) {}
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const setLanguage = (code) => {
    if (translations[code]) {
      setLang(code);
    }
  };

  const t = useMemo(() => {
    return (key) => {
      const table = translations[lang] || translations.en;
      return table[key] ?? key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLanguage, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
