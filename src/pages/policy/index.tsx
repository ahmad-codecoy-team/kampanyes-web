import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

function PolicyPage() {
  const { t } = useTranslation("policy");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("title")}
          </h1>

          <p className="text-sm text-muted mb-8">
            {t("last_updated", { date: "January 1, 2025" })}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.introduction.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed">
                {t("sections.introduction.body")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.information_we_collect.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed mb-4">
                {t("sections.information_we_collect.body")}
              </p>
              <ul className="space-y-2 text-base text-muted ml-6">
                <li className="list-disc">
                  <strong className="text-foreground">
                    {t(
                      "sections.information_we_collect.items.identity.label"
                    )}
                  </strong>{" "}
                  {t("sections.information_we_collect.items.identity.text")}
                </li>
                <li className="list-disc">
                  <strong className="text-foreground">
                    {t(
                      "sections.information_we_collect.items.contact.label"
                    )}
                  </strong>{" "}
                  {t("sections.information_we_collect.items.contact.text")}
                </li>
                <li className="list-disc">
                  <strong className="text-foreground">
                    {t(
                      "sections.information_we_collect.items.technical.label"
                    )}
                  </strong>{" "}
                  {t("sections.information_we_collect.items.technical.text")}
                </li>
                <li className="list-disc">
                  <strong className="text-foreground">
                    {t("sections.information_we_collect.items.usage.label")}
                  </strong>{" "}
                  {t("sections.information_we_collect.items.usage.text")}
                </li>
                <li className="list-disc">
                  <strong className="text-foreground">
                    {t(
                      "sections.information_we_collect.items.marketing.label"
                    )}
                  </strong>{" "}
                  {t("sections.information_we_collect.items.marketing.text")}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.how_we_use.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed mb-4">
                {t("sections.how_we_use.body")}
              </p>
              <ul className="space-y-2 text-base text-muted ml-6">
                <li className="list-disc">
                  {t("sections.how_we_use.items.item1")}
                </li>
                <li className="list-disc">
                  {t("sections.how_we_use.items.item2")}
                </li>
                <li className="list-disc">
                  {t("sections.how_we_use.items.item3")}
                </li>
                <li className="list-disc">
                  {t("sections.how_we_use.items.item4")}
                </li>
                <li className="list-disc">
                  {t("sections.how_we_use.items.item5")}
                </li>
                <li className="list-disc">
                  {t("sections.how_we_use.items.item6")}
                </li>
                <li className="list-disc">
                  {t("sections.how_we_use.items.item7")}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.data_security.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed">
                {t("sections.data_security.body")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.data_retention.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed">
                {t("sections.data_retention.body")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.your_rights.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed mb-4">
                {t("sections.your_rights.body")}
              </p>
              <ul className="space-y-2 text-base text-muted ml-6">
                <li className="list-disc">
                  {t("sections.your_rights.items.item1")}
                </li>
                <li className="list-disc">
                  {t("sections.your_rights.items.item2")}
                </li>
                <li className="list-disc">
                  {t("sections.your_rights.items.item3")}
                </li>
                <li className="list-disc">
                  {t("sections.your_rights.items.item4")}
                </li>
                <li className="list-disc">
                  {t("sections.your_rights.items.item5")}
                </li>
                <li className="list-disc">
                  {t("sections.your_rights.items.item6")}
                </li>
                <li className="list-disc">
                  {t("sections.your_rights.items.item7")}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.third_party_links.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed">
                {t("sections.third_party_links.body")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.cookies.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed">
                {t("sections.cookies.body")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.changes.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed">
                {t("sections.changes.body")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.contact.title")}
              </h2>
              <p className="text-base text-muted leading-relaxed">
                {t("sections.contact.body")}{" "}
                <a
                  href="mailto:privacy@kampanyes.com"
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

export default PolicyPage;
