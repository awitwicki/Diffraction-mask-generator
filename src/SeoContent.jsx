import { useI18n } from "./i18n";

function SeoContent() {
  const { t } = useI18n();

  return (
    <div className="seo-content">
      <article className="seo-section">
        <h2>{t("seoWhatTitle")}</h2>
        <p>{t("seoWhatText")}</p>
      </article>

      <section className="seo-section">
        <h2>{t("seoHowTitle")}</h2>
        <p>{t("seoHowText")}</p>
      </section>

      <section className="seo-section seo-faq">
        <h2>{t("seoFaqTitle")}</h2>
        <details>
          <summary><h3>{t("seoFaq1Q")}</h3></summary>
          <p>{t("seoFaq1A")}</p>
        </details>
        <details>
          <summary><h3>{t("seoFaq2Q")}</h3></summary>
          <p>{t("seoFaq2A")}</p>
        </details>
        <details>
          <summary><h3>{t("seoFaq3Q")}</h3></summary>
          <p>{t("seoFaq3A")}</p>
        </details>
        <details>
          <summary><h3>{t("seoFaq4Q")}</h3></summary>
          <p>{t("seoFaq4A")}</p>
        </details>
        <details>
          <summary><h3>{t("seoFaq5Q")}</h3></summary>
          <p>{t("seoFaq5A")}</p>
        </details>
      </section>
    </div>
  );
}

export default SeoContent;
