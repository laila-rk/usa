import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
const imgLogo = new URL("../../assets/nvbc.jpg", import.meta.url).href;

const footerLinks = [
  {
    title: "Quick Links",
    links: [
     { label: "Home", path: "/" },
      { label: "About NVBC", path: "/about-nvbc" },
      { label: "The Brittany", path: "/why-a-brittany" },
      { label: "Events", path: "/calendar" },
    ],
  },
  {
    title: "Club",
    links: [
      { label: "Awards", path: "/awards" },
      { label: "Gallery", path: "/gallery" },
      { label: "Become a Member", path: "/BecomeMember" },
      { label: "Contact", path: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #1a1714 0%, #110f0c 100%)",
        borderTop: "1px solid rgba(201,168,76,0.25)",
      }}
    >
      {/* Gold accent line */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, transparent, #C9A84C, #E8C97E, #C9A84C, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={imgLogo}
                alt="NVBC Logo"
                className="w-14 h-14 object-contain"
                style={{ filter: "drop-shadow(0 0 8px rgba(201,168,76,0.4))" }}
              />
              <div>
                <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.15em" }}>
                  NORTHERN VIRGINIA
                </div>
                <div style={{ fontFamily: "'Cinzel', serif", color: "#ffffff", fontSize: "13px", letterSpacing: "0.1em", fontWeight: 600 }}>
                  BRITTANY CLUB
                </div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", lineHeight: "1.8", fontFamily: "'Inter', sans-serif" }}>
              Dedicated to preserving and promoting the Brittany breed in Northern Virginia and the surrounding region since 1968.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid rgba(201,168,76,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(201,168,76,0.7)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,168,76,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A84C";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(201,168,76,0.7)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.35)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#ffffff",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  marginBottom: "20px",
                  fontWeight: 700,
                }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      style={{
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "13px",
                        fontFamily: "'Inter', sans-serif",
                        transition: "color 0.2s ease",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)";
                      }}
                    >
                      <span style={{ color: "#C9A84C", fontSize: "10px" }}>▶</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#ffffff",
                fontSize: "11px",
                letterSpacing: "0.2em",
                marginBottom: "20px",
                fontWeight: 700,
              }}
            >
              CONTACT US
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { Icon: MapPin, text: "Northern Virginia, VA\nUnited States" },
                { Icon: Mail,   text: "info@nvbc.org"        },
                { Icon: Phone,  text: "+1 (703) 555-0192"    },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "#C9A84C",
                      marginTop: "2px",
                    }}
                  >
                    <Icon size={12} />
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      fontSize: "13px",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: "1.6",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.12)", marginBottom: "24px" }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "12px",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            © 2026 Northern Virginia Brittany Club. All rights reserved.
          </p>
          <p
            style={{
              color: "rgba(201,168,76,0.9)",
              fontSize: "11px",
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.1em",
            }}
          >
            EST. 1973 · EXCELLENCE IN THE BRITTANY BREED
          </p>
        </div>
      </div>
    </footer>
  );
}