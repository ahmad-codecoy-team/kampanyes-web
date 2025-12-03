import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Help", to: "/help" },
    { label: "About us", to: "/about" },
    { label: "Policy", to: "/policy" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/70 backdrop-blur-md transition-all ${
        isScrolled
          ? "border-slate-200/80 shadow-[0_1px_12px_rgba(15,23,42,0.15)]"
          : "border-transparent shadow-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="KampanYES logo"
              className="h-9 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center justify-end flex-1">
            <div className="flex items-center gap-6 rounded-full border border-brand/40 bg-white/90 px-6 py-2.5 shadow-sm">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="font-lexend text-sm text-foreground hover:text-brand transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile nav trigger */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand bg-white px-3 py-1.5 text-xs font-lexend text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span>Menu</span>
              {isMobileMenuOpen ? (
                <X className="h-4 w-4 text-brand" />
              ) : (
                <Menu className="h-4 w-4 text-brand" />
              )}
            </button>
          </div>

          {/* Mobile dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute inset-x-0 top-full mt-3 md:hidden">
              <div className="mx-1 rounded-2xl border border-slate-200 bg-white/95 shadow-lg shadow-slate-900/10">
                <nav className="flex flex-col px-4 py-3 gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="rounded-lg px-2 py-2 text-sm font-lexend text-foreground hover:bg-slate-50 hover:text-brand transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
