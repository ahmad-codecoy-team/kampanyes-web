import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

function HelpPage() {
  const { t } = useTranslation("help");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("title")}
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.getting_started.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed mb-4">
                {t("sections.getting_started.p1")}
              </p>
              <p className="text-base text-muted leading-relaxed">
                {t("sections.getting_started.p2")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.how_to_use.title")}
              </h2>
              <ul className="space-y-3 text-base text-muted">
                <li className="flex gap-3">
                  <span className="font-semibold text-brand">1.</span>
                  <span>{t("sections.how_to_use.steps.step1")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-brand">2.</span>
                  <span>{t("sections.how_to_use.steps.step2")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-brand">3.</span>
                  <span>{t("sections.how_to_use.steps.step3")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-brand">4.</span>
                  <span>{t("sections.how_to_use.steps.step4")}</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.faq.title")}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("sections.faq.q1.title")}
                  </h3>
                  <p className="text-base text-muted leading-relaxed">
                    {t("sections.faq.q1.body")}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("sections.faq.q2.title")}
                  </h3>
                  <p className="text-base text-muted leading-relaxed">
                    {t("sections.faq.q2.body")}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("sections.faq.q3.title")}
                  </h3>
                  <p className="text-base text-muted leading-relaxed">
                    {t("sections.faq.q3.body")}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.more_help.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed">
                {t("sections.more_help.p1")}{" "}
                <a
                  href="mailto:support@kampanyes.com"
                  className="text-brand hover:underline"
                >
                   info@kampanyes.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HelpPage;
