import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation("about");

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
                {t("sections.mission.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed mb-4">
                {t("sections.mission.p1")}
              </p>
              <p className="text-base text-muted leading-relaxed">
                {t("sections.mission.p2")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.what_we_do.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed mb-4">
                {t("sections.what_we_do.p1")}
              </p>
              <p className="text-base text-muted leading-relaxed">
                {t("sections.what_we_do.p2")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.why_choose.title")}
              </h2>
              <ul className="space-y-3 text-base text-muted">
                <li className="flex gap-3">
                  <span className="text-brand font-semibold">•</span>
                  <span>
                    <strong className="text-foreground">
                      {t(
                        "sections.why_choose.items.organized_folders.label"
                      )}
                    </strong>{" "}
                    {t("sections.why_choose.items.organized_folders.text")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand font-semibold">•</span>
                  <span>
                    <strong className="text-foreground">
                      {t("sections.why_choose.items.real_time_updates.label")}
                    </strong>{" "}
                    {t("sections.why_choose.items.real_time_updates.text")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand font-semibold">•</span>
                  <span>
                    <strong className="text-foreground">
                      {t("sections.why_choose.items.follow_favorites.label")}
                    </strong>{" "}
                    {t("sections.why_choose.items.follow_favorites.text")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand font-semibold">•</span>
                  <span>
                    <strong className="text-foreground">
                      {t("sections.why_choose.items.easy_sharing.label")}
                    </strong>{" "}
                    {t("sections.why_choose.items.easy_sharing.text")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand font-semibold">•</span>
                  <span>
                    <strong className="text-foreground">
                      {t("sections.why_choose.items.free_use.label")}
                    </strong>{" "}
                    {t("sections.why_choose.items.free_use.text")}
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.team.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed">
                {t("sections.team.p1")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.contact.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed">
                {t("sections.contact.p1")}
              </p>
              <p className="text-base text-muted leading-relaxed mt-4">
                {t("sections.contact.p2")}{" "}
                <a
                  href="mailto:hello@kampanyes.com"
                  className="text-brand hover:underline"
                >
                  hello@kampanyes.com
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

export default AboutPage;
