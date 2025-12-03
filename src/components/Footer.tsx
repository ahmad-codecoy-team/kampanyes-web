// src/components/layout/Footer.tsx
import { Copyright } from "lucide-react";
import logo from "@/assets/logo.png";

function Footer() {
  return (
    <footer className="bg-black text-footer">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 pt-10 pb-8 lg:pb-12">
        {/* Top content */}
        <div className="grid gap-10 md:grid-cols-2 items-start md:w-[70%]">
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
              Explore organized folders, follow your favorite stores, and never
              miss new updates or limited-time discounts again.
            </p>
          </div>

          {/* Legal links */}
          <div className="md:text-right">
            <h3 className="text-white text-lg md:text-xl mb-2">Legal</h3>
            <ul className="space-y-1.5 text-xs md:text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Policy
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
          <span>2025 KampanYES. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
