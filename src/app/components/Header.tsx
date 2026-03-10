import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import imgLogo from "../../assets/nvbc.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About NVBC", path: "/about" },
  { label: "The Brittany", path: "/the-brittany" },
  { label: "Events", path: "/events" },
  { label: "Awards", path: "/awards" },
  { label: "Gallery", path: "/gallery" },
  { label: "Become a Member", path: "/become-a-member" },
  { label: "Contact", path: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "linear-gradient(135deg, rgba(10,14,26,0.98) 0%, rgba(15,22,45,0.98) 100%)"
          : "linear-gradient(180deg, rgba(10,14,26,0.85) 0%, rgba(10,14,26,0) 100%)",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "none",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="relative"
              style={{
                filter: "drop-shadow(0 0 12px rgba(201,168,76,0.4))",
                transition: "filter 0.3s ease",
              }}
            >
              <img
                src={imgLogo}
                alt="NVBC Logo"
                className="w-14 h-14 lg:w-16 lg:h-16 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#C9A84C",
                  letterSpacing: "0.15em",
                  fontSize: "13px",
                  lineHeight: "1.2",
                }}
              >
                NORTHERN VIRGINIA
              </div>
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#ffffff",
                  letterSpacing: "0.1em",
                  fontSize: "15px",
                  lineHeight: "1.2",
                  fontWeight: 600,
                }}
              >
                BRITTANY CLUB
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    color: isActive ? "#C9A84C" : "rgba(255,255,255,0.85)",
                    padding: "8px 10px",
                    borderRadius: "4px",
                    borderBottom: isActive ? "2px solid #C9A84C" : "2px solid transparent",
                    transition: "all 0.25s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.target as HTMLAnchorElement).style.color = "#C9A84C";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.85)";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button - desktop */}
          <div className="hidden xl:block">
            <Link
              to="/become-a-member"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "11px",
                letterSpacing: "0.12em",
                background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
                color: "#0a0e1a",
                padding: "10px 22px",
                borderRadius: "2px",
                fontWeight: 700,
                boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(201,168,76,0.55)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(201,168,76,0.35)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              JOIN NOW
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="xl:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "#C9A84C" }}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          maxHeight: menuOpen ? "100vh" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
          background: "linear-gradient(135deg, rgba(10,14,26,0.99) 0%, rgba(15,22,45,0.99) 100%)",
          borderTop: menuOpen ? "1px solid rgba(201,168,76,0.2)" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  color: isActive ? "#C9A84C" : "rgba(255,255,255,0.85)",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/become-a-member"
            className="mt-4 text-center py-3"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
              color: "#0a0e1a",
              borderRadius: "2px",
              fontWeight: 700,
            }}
          >
            JOIN NOW
          </Link>
        </div>
      </div>
    </header>
  );
}
