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
    <fieldset style={{ border: "none", padding: 0, margin: "0 0 4px 0" }} aria-label={t("language")}>
      <div
        role="radiogroup"
        aria-label={t("language")}
        style={{
          display: "inline-flex",
          borderRadius: 10,
          overflow: "hidden",
          border: "1px solid var(--lang-border)",
          width: "100%",
          background: "var(--lang-bg)",
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
                background: selected
                  ? "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))"
                  : "transparent",
                border: "none",
                padding: "7px 10px",
                cursor: "pointer",
                lineHeight: 1.2,
                borderLeft: idx === 0 ? "none" : "1px solid var(--lang-divider)",
                width: "33.33%",
                borderRadius: 0,
                color: selected ? "#fff" : "var(--lang-unselected)",
                transition: "all 0.2s ease",
                fontWeight: selected ? 600 : 400,
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
