import { useEffect, useState } from "react";
import { Link } from "react-router";
import logo from "@/assets/logo.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur transition-shadow ${
        isScrolled ? "shadow-[0_1px_9px_rgba(0,0,0,0.25)]" : "shadow-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8 h-18 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="KampanYES logo"
            className="h-10 md:h-11 w-auto object-contain"
          />
        </Link>

        {/* Nav - desktop */}
        <nav className="hidden md:flex">
          <div className="flex items-center gap-8 border border-brand rounded-xl bg-white px-7 py-2">
            <Link
              to="/help"
              className="font-lexend text-sm text-foreground hover:text-brand transition-colors"
            >
              Help
            </Link>
            <Link
              to="/about"
              className="font-lexend text-sm text-foreground hover:text-brand transition-colors"
            >
              About us
            </Link>
            <Link
              to="/policy"
              className="font-lexend text-sm text-foreground hover:text-brand transition-colors"
            >
              Policy
            </Link>
            <button className="font-lexend text-sm text-foreground hover:bg-brand hover:text-white rounded-lg px-4 py-1 transition-colors">
              Login
            </button>
          </div>
        </nav>

        {/* Mobile nav placeholder */}
        <nav className="flex md:hidden">
          <button className="font-lexend text-xs border border-brand rounded-lg px-3 py-1 bg-white">
            Menu
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
