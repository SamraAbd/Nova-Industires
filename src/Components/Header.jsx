import { useState, useEffect } from "react";
import logoIcon from '../assets/logoIcon.png'
import { Link, useLocation } from "react-router";

const navLinks = [
  { label: "Mission", to: "/mission" },
  { label: "Systems", to: "/systems" },
  { label: "News", to: "/news" }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-16 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-black/40 backdrop-blur-md border-b border-white/10"
            : "py-5 md:py-7 bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-white tracking-[0.25em] text-base md:text-lg font-black uppercase select-none z-50 flex items-center"
          style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif" }}
        >
          <img className="md:w-12 md:h-12 w-10 h-10" src={logoIcon} alt="" />
          <p className="font-nova">Nova Industries</p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link 
              key={item.label} to={item.to}
              className="text-white/80 hover:text-white text-xs tracking-[0.18em] uppercase font-semibold transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#"
            className="text-white/70 hover:text-white text-xs tracking-[0.15em] uppercase font-semibold flex items-center gap-1 transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round" />
            </svg>
            EN
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-xs tracking-[0.2em] uppercase font-bold z-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            "MENU"
          )}
        </button>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.label} to={item.to}
            onClick={() => setMenuOpen(false)}
            className="text-white text-4xl tracking-[0.12em] uppercase font-black hover:text-white/50 transition-colors"
            style={{ fontFamily: "'Arial Black', sans-serif" }}
          >
            {item.label}
          </Link>
        ))}
        <a
          href="#"
          className="text-white/50 text-sm tracking-[0.2em] uppercase font-semibold mt-4"
        >
          🌐 EN
        </a>
      </div>
    </>
  );
}
