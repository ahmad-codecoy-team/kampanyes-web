// src/components/LanguageSwitcher.tsx

import { useTranslation } from "react-i18next";
import i18n from "@/locales/config";
import { Globe } from "lucide-react";
import { useState } from "react";
import type { AppLanguage } from "@/locales";

type Language = {
  code: AppLanguage;
  labelKey: string;      // key under language.*
  shortLabel: string;    // short code
};

const LANGUAGES: Language[] = [
  { code: "en", labelKey: "language.english", shortLabel: "EN" },
  { code: "de", labelKey: "language.german", shortLabel: "DE" },
  { code: "nl", labelKey: "language.dutch", shortLabel: "NL" }
];

export function LanguageSwitcher() {
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = (i18n.language || "en").split("-")[0] as AppLanguage;
  const active = LANGUAGES.find((l) => l.code === currentLang) ?? LANGUAGES[0];

  const handleChangeLanguage = (code: AppLanguage) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger button */}
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs md:text-sm font-lexend text-foreground shadow-sm hover:border-brand hover:text-brand transition-colors"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{t(active.labelKey)}</span>
        <span className="sm:hidden font-semibold">{active.shortLabel}</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl border border-slate-200 bg-white/95 shadow-lg shadow-slate-900/10 z-50">
          <ul className="py-1" role="listbox">
            {LANGUAGES.map((lang) => {
              const isActive = lang.code === active.code;
              return (
                <li key={lang.code}>
                  <button
                    type="button"
                    onClick={() => handleChangeLanguage(lang.code)}
                    className={`flex w-full items-center justify-between px-3 py-2 text-xs md:text-sm text-left font-lexend transition-colors ${
                      isActive
                        ? "bg-slate-100 text-brand font-semibold"
                        : "text-foreground hover:bg-slate-50 hover:text-brand"
                    }`}
                    role="option"
                    aria-selected={isActive}
                  >
                    <span>{t(lang.labelKey)}</span>
                    <span className="text-[11px] uppercase opacity-70">
                      {lang.shortLabel}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
