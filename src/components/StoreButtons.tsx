// src/components/StoreButtons.tsx
import { Apple, Play } from "lucide-react";

function StoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10">
      {/* App Store */}
      <button className="inline-flex items-center gap-3 rounded-md bg-black text-white px-6 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
        <div className="flex h-10 w-10 items-center justify-center">
          <Apple className="h-8 w-8" strokeWidth={1.7} />
        </div>
        <span className="text-left text-sm leading-tight">
          <span className="block text-[0.7rem]">Download on the</span>
          <span className="block text-base font-semibold">App Store</span>
        </span>
      </button>

      {/* Google Play */}
      <button className="inline-flex items-center gap-3 rounded-md bg-black text-white px-6 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
        <div className="flex h-10 w-10 items-center justify-center">
          <Play className="h-8 w-8" strokeWidth={1.7} />
        </div>
        <span className="text-left text-sm leading-tight uppercase">
          <span className="block text-[0.7rem] normal-case">Get it on</span>
          <span className="block text-base font-semibold">Google Play</span>
        </span>
      </button>
    </div>
  );
}

export default StoreButtons;
