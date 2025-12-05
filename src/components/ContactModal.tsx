// import { X } from "lucide-react";
// import { useTranslation } from "react-i18next";

// interface ContactModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export function ContactModal({ isOpen, onClose }: ContactModalProps) {
//   const { t } = useTranslation("common");

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="relative w-[92%] max-w-md rounded-2xl bg-white px-6 py-6 shadow-xl animate-in fade-in zoom-in-95">
        
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
//           aria-label="Close"
//         >
//           <X className="w-5 h-5" />
//         </button>

//         {/* Title */}
//         <h2 className="text-center text-lg font-semibold mb-5">
//           {t("contact.title", "Contact us")}
//         </h2>

//         {/* Form */}
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder={t("contact.name", "Name")}
//             className="w-full border-b border-muted bg-transparent py-2 text-sm outline-none focus:border-brand transition-colors"
//           />

//           <input
//             type="email"
//             placeholder={t("contact.email", "Email")}
//             className="w-full border-b border-muted bg-transparent py-2 text-sm outline-none focus:border-brand transition-colors"
//           />

//           <textarea
//             placeholder={t("contact.message", "Message")}
//             rows={3}
//             className="w-full resize-none border-b border-muted bg-transparent py-2 text-sm outline-none focus:border-brand transition-colors"
//           />

//           {/* Submit */}
//           <button
//             type="submit"
//             className="mt-4 w-full rounded-xl bg-brand py-3 text-white text-sm font-medium shadow-md hover:opacity-90 transition"
//           >
//             {t("contact.submit", "Submit")}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


// src/components/ContactModal.tsx

import { useEffect } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useTranslation("common");

  // ✅ Disable body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-[92%] max-w-md rounded-2xl bg-white px-7 py-6 shadow-xl animate-in fade-in zoom-in-95">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Title */}
        <h2 className="mb-6 text-center text-lg font-semibold">
          {t("contact.title", "Contact us")}
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <input
            type="text"
            placeholder={t("contact.name", "Name")}
            className="w-full border-b border-muted bg-transparent pb-2 text-sm outline-none focus:border-brand transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder={t("contact.email", "Email")}
            className="w-full border-b border-muted bg-transparent pb-2 text-sm outline-none focus:border-brand transition"
          />

          {/* Message — SAME style, fixed height, scrollable */}
          <textarea
            placeholder={t("contact.message", "Message")}
            rows={2}
            className="
              w-full
              resize-none
              overflow-y-auto
              border-b
              border-muted
              bg-transparent
              pb-2
              text-sm
              outline-none
              focus:border-brand
              transition
            "
          />

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-brand py-3 text-sm font-medium text-white shadow-lg hover:opacity-90 transition"
          >
            {t("contact.submit", "Submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
