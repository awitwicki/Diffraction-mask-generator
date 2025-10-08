import React from "react";
import { availableLanguages, useI18n } from "./i18n";

export default function LanguageSelector() {
  const { lang, setLanguage, t } = useI18n();

  const handleKeyDown = (e, idx) => {
    if (e.key === "ArrowRight") {
      const next = (idx + 1) % availableLanguages.length;
      setLanguage(availableLanguages[next].code);
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      const prev = (idx - 1 + availableLanguages.length) % availableLanguages.length;
      setLanguage(availableLanguages[prev].code);
      e.preventDefault();
    }
  };

  return (
    <fieldset style={{ border: "none", padding: 0, margin: "8px 0" }} aria-label={t("language")}>
      <div
        role="radiogroup"
        aria-label={t("language")}
        style={{
          display: "inline-flex",
          borderRadius: 8,
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.2)",
          width: "100%"
        }}
      >
        {availableLanguages.map((l, idx) => {
          const selected = lang === l.code;
          return (
            <button
              key={l.code}
              type="button"
              role="radio"
              aria-checked={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => setLanguage(l.code)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              title={t ? t(`lang.${l.code}`) : l.code}
              style={{
                background: selected ? "#2693e6" : "transparent",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer",
                lineHeight: 1.2,
                borderLeft: idx === 0 ? "none" : "1px solid rgba(0,0,0,0.2)",
                width: "33.33%",
                  borderRadius: idx === 0
                      ? "8px 0 0 8px"
                      : idx === 2
                          ? "0 8px 8px 0"
                          : "0",
              }}
            >
              <span aria-hidden="true" style={{ fontSize: "1.1rem" }}>{l.flag}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
