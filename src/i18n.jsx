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
    exportSVG: "Експорт в SVG",
    mm: "мм",
    filePrefix: "бахтiнов",
    // SEO Content sections
    seoWhatTitle: "Що таке маска Бахтінова?",
    seoWhatText: "Маска Бахтінова — це допоміжний засіб для фокусування, який використовують астрофотографи та власники телескопів для досягнення точного фокусу. Маска розміщується над апертурою телескопа і створює характерну дифракційну картину з трьох променів при наведенні на яскраву зірку. Коли центральний промінь ідеально розташований між двома іншими, телескоп сфокусований. Цей метод значно точніший, ніж фокусування на око, особливо для довготривалої фотографії глибокого космосу. Патерн маски названий на честь російського астронома-аматора Павла Бахтінова, який популяризував цей дизайн. Кути щілин розраховуються на основі фокусної відстані вашого телескопа для отримання найчіткіших дифракційних променів.",
    seoHowTitle: "Як користуватися генератором",
    seoHowText: "Введіть фокусну відстань та діаметр апертури вашого телескопа, щоб створити індивідуальну маску Бахтінова. 3D-попередній перегляд оновлюється в реальному часі при зміні параметрів. Оберіть плаский режим для простої дискової маски або перейдіть у режим насадки, щоб додати циліндричний обідок, який надівається на трубу телескопа. Коли дизайн вас влаштовує, експортуйте його як STL-файл для 3D-друку або як SVG-файл для лазерного різання. SVG-експорт виконується в масштабі 1:1, готовий для безпосереднього виготовлення.",
    seoFaqTitle: "Часті запитання",
    seoFaq1Q: "Яку фокусну відстань вказати?",
    seoFaq1A: "Використовуйте фокусну відстань вашого телескопа, яка зазвичай надрукована на оптичній трубі або вказана в характеристиках. Типові значення — від 400 мм для невеликих рефракторів до 2000 мм і більше для телескопів Шмідта-Кассегрена. Генератор розрахує оптимальну ширину щілин на основі цього значення.",
    seoFaq2Q: "Яка різниця між пласким режимом і режимом насадки?",
    seoFaq2A: "Плаский режим створює просту дископодібну маску, яку можна тримати або приклеїти до телескопа. Режим насадки додає циліндричний обідок, який щільно надівається на трубу телескопа, забезпечуючи надійне кріплення під час фокусування.",
    seoFaq3Q: "Чи можна надрукувати цю маску на 3D-принтері?",
    seoFaq3A: "Так. Експортуйте маску як STL-файл і друкуйте на будь-якому FDM 3D-принтері. Використовуйте темний філамент (чорний PLA добре підходить) для мінімізації розсіювання світла. Рекомендується висота шару 0,2 мм та 100% заповнення для структурної жорсткості.",
    seoFaq4Q: "Чи можна вирізати цю маску лазером?",
    seoFaq4A: "Так. Експортуйте маску як SVG-файл і використовуйте з лазерним різаком. Тонкий картон, акрил або фанера підходять добре. SVG містить правильні розміри щілин у масштабі 1:1.",
    seoFaq5Q: "Який діаметр труби телескопа вказати?",
    seoFaq5A: "У пласкому режимі введіть внутрішній діаметр труби телескопа — отвір, який маска буде закривати. У режимі насадки введіть зовнішній діаметр, щоб обідок щільно сів зовні. Для найкращого результату вимірюйте штангенциркулем.",
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
    exportSVG: "Eksport do SVG",
    mm: "mm",
    filePrefix: "bahtinow",
    // SEO Content sections
    seoWhatTitle: "Czym jest maska Bahtinova?",
    seoWhatText: "Maska Bahtinova to narzędzie do precyzyjnego ustawiania ostrości, stosowane przez astrofotografów i użytkowników teleskopów. Maskę umieszcza się nad aperturą teleskopu — tworzy ona charakterystyczny wzór dyfrakcyjny trzech promieni przy skierowaniu na jasną gwiazdę. Gdy centralny promień znajduje się dokładnie między dwoma pozostałymi, teleskop jest prawidłowo zogniskowany. Metoda ta jest znacznie dokładniejsza niż ogniskowanie na oko, szczególnie przy długich ekspozycjach głębokiego nieba. Wzór maski został nazwany na cześć rosyjskiego astronoma-amatora Pawła Bahtinowa, który spopularyzował ten projekt. Kąty szczelin obliczane są na podstawie ogniskowej teleskopu, aby uzyskać jak najwyraźniejsze promienie dyfrakcyjne.",
    seoHowTitle: "Jak korzystać z generatora",
    seoHowText: "Wprowadź ogniskową i średnicę apertury teleskopu, aby wygenerować indywidualną maskę Bahtinova. Podgląd 3D aktualizuje się w czasie rzeczywistym podczas zmiany parametrów. Wybierz tryb płaski dla prostej maski dyskowej lub przełącz na tryb nasadki, aby dodać cylindryczny kołnierz nakładany na rurę teleskopu. Gdy projekt będzie gotowy, wyeksportuj go jako plik STL do druku 3D lub jako plik SVG do cięcia laserowego. Eksport SVG jest w skali 1:1, gotowy do bezpośredniej produkcji.",
    seoFaqTitle: "Często zadawane pytania",
    seoFaq1Q: "Jaką ogniskową podać?",
    seoFaq1A: "Użyj ogniskowej teleskopu, która jest zwykle wydrukowana na rurze optycznej lub podana w specyfikacji. Typowe wartości to od 400 mm dla małych refraktorów do 2000 mm i więcej dla teleskopów Schmidta-Cassegraina. Generator oblicza optymalną szerokość szczelin na tej podstawie.",
    seoFaq2Q: "Jaka jest różnica między trybem płaskim a nasadką?",
    seoFaq2A: "Tryb płaski tworzy prostą maskę dyskową, którą można trzymać lub przykleić do teleskopu. Tryb nasadki dodaje cylindryczny kołnierz, który ciasno pasuje na rurę teleskopu, zapewniając pewne mocowanie podczas ogniskowania.",
    seoFaq3Q: "Czy mogę wydrukować tę maskę na drukarce 3D?",
    seoFaq3A: "Tak. Wyeksportuj maskę jako plik STL i wydrukuj na dowolnej drukarce FDM 3D. Użyj ciemnego filamentu (czarny PLA działa dobrze), aby zminimalizować rozpraszanie światła. Zalecana wysokość warstwy to 0,2 mm i 100% wypełnienia dla sztywności strukturalnej.",
    seoFaq4Q: "Czy mogę wyciąć tę maskę laserem?",
    seoFaq4A: "Tak. Wyeksportuj maskę jako plik SVG i użyj z wycinarką laserową. Cienki karton, akryl lub sklejka dobrze się sprawdzają. SVG zawiera prawidłowe wymiary szczelin w skali 1:1.",
    seoFaq5Q: "Jaką średnicę rury teleskopu podać?",
    seoFaq5A: "W trybie płaskim podaj wewnętrzną średnicę rury teleskopu — otwór, który maska będzie zasłaniać. W trybie nasadki podaj średnicę zewnętrzną, aby kołnierz ciasno pasował na zewnątrz. Dla najlepszego dopasowania zmierz suwmiarką.",
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
    exportSVG: "Export to SVG",
    mm: "mm",
    filePrefix: "bahtinov",
    // SEO Content sections
    seoWhatTitle: "What is a Bahtinov Mask?",
    seoWhatText: "A Bahtinov mask is a focusing aid used by astrophotographers and telescope users to achieve precise focus. The mask is placed over the telescope aperture and creates a distinctive diffraction pattern of three spikes when aimed at a bright star. When the central spike is perfectly centered between the other two, the telescope is in focus. This method is far more accurate than focusing by eye alone, especially for long-exposure deep-sky photography. The mask pattern is named after Russian amateur astronomer Pavel Bahtinov, who popularized the design. The angled slits are calculated from your telescope's focal length to produce the clearest possible diffraction spikes.",
    seoHowTitle: "How to Use This Generator",
    seoHowText: "Enter your telescope's focal length and aperture diameter to generate a custom Bahtinov mask. The 3D preview updates in real time as you adjust parameters. Choose flat mode for a simple disc mask, or switch to attachment mode to add a cylindrical rim that fits over your telescope tube. When you're happy with the design, export it as an STL file for 3D printing or as an SVG file for laser cutting. The SVG export is at 1:1 scale, ready for direct fabrication.",
    seoFaqTitle: "Frequently Asked Questions",
    seoFaq1Q: "What focal length should I use?",
    seoFaq1A: "Use your telescope's focal length, which is usually printed on the optical tube or listed in the specs. Common values range from 400 mm for small refractors to 2000 mm or more for Schmidt-Cassegrain telescopes. The generator calculates the optimal slit width from this value.",
    seoFaq2Q: "What is the difference between flat and attachment mode?",
    seoFaq2A: "Flat mode generates a simple disc-shaped mask you can hold or tape over your telescope. Attachment mode adds a cylindrical rim that friction-fits onto your telescope tube, making it easier to mount securely during focusing sessions.",
    seoFaq3Q: "Can I 3D print this mask?",
    seoFaq3A: "Yes. Export the mask as an STL file and print it on any FDM 3D printer. Use a dark filament (black PLA works well) to minimize light scatter. A layer height of 0.2 mm and 100% infill is recommended for structural rigidity.",
    seoFaq4Q: "Can I laser cut this mask?",
    seoFaq4A: "Yes. Export the mask as an SVG file and use it with a laser cutter. Thin cardboard, acrylic, or plywood all work well. The SVG includes the correct slit dimensions at 1:1 scale.",
    seoFaq5Q: "What telescope tube diameter should I enter?",
    seoFaq5A: "In flat mode, enter the inner diameter of your telescope tube — the opening the mask will cover. In attachment mode, enter the outer diameter so the rim fits snugly around the outside. Measure with calipers for the best fit.",
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
