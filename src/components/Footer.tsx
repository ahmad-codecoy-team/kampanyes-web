// src/components/Footer.tsx

import { Copyright } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

function Footer() {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-footer">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 pt-10 pb-8 lg:pb-12">
        {/* Top content */}
        <div className="grid gap-10 md:grid-cols-3 items-start">
          {/* Brand + description */}
          <div>
            <div className="inline-flex items-center bg-brand px-5 py-3">
              <img
                src={logo}
                alt="KampanYES logo"
                className="h-8 w-auto object-contain"
              />
            </div>

            <p className="mt-5 text-sm md:text-base leading-relaxed max-w-lg">
              {t("footer.brand_description")}
            </p>
          </div>

          {/* Legal links (right-aligned on md+) */}
          <div className="md:text-center">
            <h3 className="text-white text-lg md:text-xl mb-2">
              {t("footer.legal_title")}
            </h3>
            <ul className="space-y-1.5 text-xs md:text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.legal_about")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.legal_terms")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.legal_policy")}
                </a>
              </li>
            </ul>
          </div>

          {/* Help and Services */}
          <div className="md:text-left">
            <h3 className="text-white text-lg md:text-xl mb-2">
              {t("footer.help_title")}
            </h3>
            <ul className="space-y-1.5 text-xs md:text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.help_contact")}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kampanyes.com"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.help_email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-footer/50" />

        {/* Bottom row: copyright */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs md:text-sm">
          <Copyright className="h-4 w-4" />
          <span>{t("footer.copyright", { year })}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
