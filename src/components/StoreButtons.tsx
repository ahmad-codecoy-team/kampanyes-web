import { useTranslation } from "react-i18next";
import appleLogo from "@/assets/apple-logo-svgrepo-com.svg";
import googlePlayLogo from "@/assets/google-play-svgrepo-com.svg";

const linkBase =
  "inline-flex w-full sm:w-auto items-center justify-center rounded-md " +
  "transition-transform hover:scale-[1.03] focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

const badgeBox =
  "w-56 h-16 flex items-center justify-start overflow-hidden " +
  "rounded-md bg-black text-white px-4 gap-2.5";

function StoreButtons() {
  const { t } = useTranslation("home");

  return (
    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
      {/* App Store */}
      <a href="#" className={linkBase}>
        <div className={badgeBox}>
          <img
            src={appleLogo}
            alt={t("store_buttons.app_store_logo_alt")}
            className="w-9 h-9 flex-shrink-0"
            draggable={false}
          />
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] uppercase tracking-[0.12em]">
              {t("store_buttons.app_store_top")}
            </span>
            <span className="text-base font-semibold -mt-0.5">
              {t("store_buttons.app_store_bottom")}
            </span>
          </div>
        </div>
      </a>

      {/* Google Play */}
      <a href="#" className={linkBase}>
        <div className={badgeBox}>
          <img
            src={googlePlayLogo}
            alt={t("store_buttons.play_store_logo_alt")}
            className="w-9 h-9 flex-shrink-0"
            draggable={false}
          />
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] uppercase tracking-[0.12em]">
              {t("store_buttons.play_store_top")}
            </span>
            <span className="text-base font-semibold -mt-0.5">
              {t("store_buttons.play_store_bottom")}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default StoreButtons;
