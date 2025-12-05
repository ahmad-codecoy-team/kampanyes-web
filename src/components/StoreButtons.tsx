import { useTranslation } from "react-i18next";
import appleBadge from "@/assets/apple-badge.svg";
import playBadge from "@/assets/English.svg";

const linkBase =
  "inline-flex w-full sm:w-auto items-center justify-center rounded-md " +
  "transition-transform hover:scale-[1.03] focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

const badgeBox =
  "w-56 h-16 flex items-center justify-center overflow-hidden";

function StoreButtons() {
  const { t } = useTranslation("home");

  return (
    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
      {/* App Store */}
      <a href="#" className={linkBase}>
        <div className={badgeBox}>
          <img
            src={appleBadge}
            alt={t("store_buttons.app_store_alt")}
            className="w-full h-full object-contain scale-[1.18]"
            draggable={false}
          />
        </div>
      </a>

      {/* Google Play */}
      <a href="#" className={linkBase}>
        <div className={badgeBox}>
          <img
            src={playBadge}
            alt={t("store_buttons.play_store_alt")}
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>
      </a>
    </div>
  );
}

export default StoreButtons;
