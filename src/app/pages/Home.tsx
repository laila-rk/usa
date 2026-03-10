import { Link } from "react-router";
import { ArrowRight, Award, Users, Calendar, ChevronRight, Star, Shield, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
const heroImg = new URL("../../assets/images/americanbrittany.jpg", import.meta.url).href;
const dogShowImg = new URL("../../assets/images/dog1.jpg", import.meta.url).href;
const outdoorDog = new URL("../../assets/images/playing.jpg", import.meta.url).href;
const spanielRunImg = new URL("../../assets/images/dog3.jpg", import.meta.url).href;
const membershipImg = new URL("../../assets/images/dog4.jpg", import.meta.url).href;
const awardImg = new URL("../../assets/images/dog5.jpg", import.meta.url).href;
const luxuryDogImg = new URL("../../assets/images/outdoorDog.jpg", import.meta.url).href;

/* ─── Design tokens ─────────────────────────────────────────────────── */
const C = {
  white: "#ffffff",
  offwhite: "#f7f7f7",
  lightgrey: "#f2f2f2",
  divider: "rgba(0,0,0,0.08)",
  navy: "#080c18",
  charcoal: "#111111",
  textBody: "#444444",
  textSoft: "#888888",
  gold: "#C9A84C",
  goldLight: "#E8C97E",
  goldBorder: "rgba(201,168,76,0.3)",
  goldHover: "rgba(201,168,76,0.6)",
};

const goldGrad = `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`;

/* ─── Data ──────────────────────────────────────────────────────────── */
const stats = [
  { value: "55+", label: "Years of Excellence" },
  { value: "300+", label: "Active Members" },
  { value: "120+", label: "Champions Produced" },
  { value: "40+", label: "Annual Events" },
];

const features = [
  {
    Icon: Shield,
    title: "Breed Preservation",
    desc: "Upholding the highest standards of the Brittany breed through careful breeding programs and education.",
  },
  {
    Icon: Award,
    title: "Championship Events",
    desc: "Hosting prestigious field trials, conformation shows, and hunting tests throughout the year.",
  },
  {
    Icon: Users,
    title: "Vibrant Community",
    desc: "A welcoming network of passionate Brittany owners, breeders, and enthusiasts across Northern Virginia.",
  },
  {
    Icon: Heart,
    title: "Health & Welfare",
    desc: "Committed to advancing health research and promoting responsible ownership for every Brittany.",
  },
];

const upcomingEvents = [
  { date: "APR 12", month: "2026", title: "Spring Field Trial", location: "Shenandoah Valley, VA", type: "Field Trial" },
  { date: "MAY 08", month: "2026", title: "Conformation Specialty", location: "Fairfax County Fairgrounds", type: "Dog Show" },
  { date: "JUN 22", month: "2026", title: "Hunt Test Weekend", location: "Culpeper, VA", type: "Hunt Test" },
];

/* ─── Component ─────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div style={{ background: C.white, fontFamily: "'Inter', sans-serif", color: C.charcoal }}>

      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        {/* BG image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImg}
            alt="Brittany Spaniel"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 25%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(8,12,24,0.93) 0%, rgba(8,12,24,0.74) 50%, rgba(8,12,24,0.32) 100%)",
            }}
          />
          {/* Gold particle overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 40%)",
            }}
          />
        </div>

        {/* 3D floating card accent */}
        <div
          className="absolute right-8 top-1/2 hidden lg:block"
          style={{
            transform: "translateY(-50%) perspective(800px) rotateY(-12deg) rotateX(4deg)",
            width: "380px",
          }}
        >
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow:
                "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            <ImageWithFallback
              src={spanielRunImg}
              alt="Brittany in field"
              className="w-full object-cover"
              style={{ height: "480px" }}
            />
            <div
              style={{
                background: "linear-gradient(135deg, rgba(10,14,26,0.97), rgba(15,22,45,0.97))",
                padding: "20px 24px",
                borderTop: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: C.gold,
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  marginBottom: "4px",
                }}
              >
                AKC CHAMPION 2025
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f8f5ef",
                  fontSize: "16px",
                }}
              >
                CH Shenandoah's Golden Pride
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "2px",
                padding: "6px 16px",
                marginBottom: "28px",
              }}
            >
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.gold }} />
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: C.gold,
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                }}
              >
                NORTHERN VIRGINIA BRITTANY CLUB
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#f8f5ef",
                fontSize: "clamp(38px, 6vw, 76px)",
                lineHeight: "1.1",
                marginBottom: "8px",
                fontWeight: 700,
              }}
            >
              Where Excellence
            </h1>
            <h1
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(38px, 6vw, 76px)",
                lineHeight: "1.1",
                marginBottom: "28px",
                fontWeight: 700,
                background: goldGrad,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Meets Passion
            </h1>

            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "rgba(248,245,239,0.78)",
                fontSize: "18px",
                lineHeight: "1.8",
                marginBottom: "44px",
                maxWidth: "520px",
              }}
            >
              The premier organization dedicated to celebrating, preserving, and advancing the magnificent Brittany breed in Northern Virginia since 1973.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/become-a-member"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: goldGrad,
                  color: C.navy,
                  padding: "16px 36px",
                  borderRadius: "2px",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  fontWeight: 700,
                  boxShadow: "0 8px 30px rgba(201,168,76,0.4)",
                  transition: "all 0.3s ease",
                }}
              >
                BECOME A MEMBER <ArrowRight size={15} />
              </Link>
              <Link
                to="/the-brittany"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  border: "1px solid rgba(201,168,76,0.5)",
                  color: C.gold,
                  padding: "16px 36px",
                  borderRadius: "2px",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  transition: "all 0.3s ease",
                }}
              >
                DISCOVER THE BREED <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div
            style={{
              width: "1px",
              height: "40px",
              background: `linear-gradient(180deg, transparent, ${C.gold})`,
            }}
          />
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: C.gold,
            }}
          />
        </div>
      </section>

      {/* ── STATS BAND ─────────────────────────────────── */}
      <section
        style={{
          background: C.lightgrey,
          borderTop: `1px solid ${C.divider}`,
          borderBottom: `1px solid ${C.divider}`,
          padding: "48px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center"
                style={{
                  borderRight: i < 3 ? `1px solid ${C.divider}` : "none",
                  paddingRight: i < 3 ? "16px" : "0",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "clamp(32px, 4vw, 48px)",
                    fontWeight: 700,
                    background: goldGrad,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    color: C.textSoft,
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ──────────────────────────────── */}
      <section
        style={{ background: C.white }}
        className="py-28 px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* 3D image block */}
            <div className="relative" style={{ perspective: "1000px" }}>
              <div
                style={{
                  transform: "rotateY(6deg) rotateX(-3deg)",
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "0 30px 70px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
                }}
              >
                <ImageWithFallback
                  src={outdoorDog}
                  alt="NVBC Dog Show"
                  className="w-full object-cover"
                  style={{ height: "500px" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 60%, rgba(8,12,24,0.55))" }}
                />
              </div>
              {/* floating badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  right: "-24px",
                  background: goldGrad,
                  borderRadius: "4px",
                  padding: "20px 24px",
                  boxShadow: "0 16px 40px rgba(201,168,76,0.4)",
                  transform: "perspective(600px) rotateY(-8deg)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: C.navy,
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    marginBottom: "4px",
                  }}
                >
                  ESTABLISHED
                </div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: C.navy,
                    fontSize: "36px",
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  1973
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              {/* Gold rule */}
              <div
                style={{
                  width: "48px",
                  height: "3px",
                  background: goldGrad,
                  marginBottom: "20px",
                  borderRadius: "20px",
                }}
              />
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#8B6914",
                  fontSize: "19px",
                  letterSpacing: "0.1em",
                  marginBottom: "16px",
                  fontWeight: 800,
                  textShadow: "0 0 20px rgba(139,105,20,0.5)",
                }}
              >
                ABOUT NVBC
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: C.charcoal,
                  fontSize: "clamp(28px, 4vw, 48px)",
                  lineHeight: "1.2",
                  marginBottom: "24px",
                  fontWeight: 700,
                }}
              >
                A Legacy of Championship Excellence
              </h2>
              <p
                style={{
                  color: C.textBody,
                  lineHeight: "1.9",
                  marginBottom: "16px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                }}
              >
                The Northern Virginia Brittany Club (NVBC) has been at the forefront of Brittany breed stewardship for over five decades. Founded by passionate enthusiasts, our club has grown into one of the most respected breed organizations on the East Coast.
              </p>
              <p
                style={{
                  color: C.textBody,
                  lineHeight: "1.9",
                  marginBottom: "36px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                }}
              >
                From field trials to conformation shows, hunt tests to educational seminars, NVBC provides opportunities for every Brittany lover to celebrate and advance this remarkable breed.
              </p>
              <Link
                to="/about"
                
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "linear-gradient(135deg, #8B6914, #B8920F)",
                  border: "none",
                  color: "#ffffff",
                  padding: "14px 30px",
                  borderRadius: "4px",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  fontWeight: 700,
                  boxShadow: "0 4px 16px rgba(139,105,20,0.4)",
                  transition: "all 0.3s ease",
                }}
              >
                READ OUR STORY <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────── */}
      <section
        style={{
          background: C.offwhite,
          padding: "88px 0",
          borderTop: `1px solid ${C.divider}`,
          borderBottom: `1px solid ${C.divider}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              style={{
                width: "48px",
                height: "3px",
                background: goldGrad,
                borderRadius: "10px",
                margin: "0 auto 20px",
              }}
            />
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#8B6914",
                fontSize: "18px",
                letterSpacing: "0.1em",
                marginBottom: "12px",
                fontWeight: 800,
                textShadow: "0 0 20px rgba(139,105,20,0.6)",
              }}
            >
              WHAT WE STAND FOR
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: C.charcoal,
                fontSize: "clamp(30px, 4vw, 30px)",
                lineHeight: "1.2",
                fontWeight: 800,
                letterSpacing: "0.02em",
              }}
            >
              Our Core Commitments
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                style={{
                  background: C.white,
                  border: `1px solid ${C.divider}`,
                  borderRadius: "4px",
                  padding: "36px 28px",
                  transition: "all 0.35s ease",
                  cursor: "default",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  borderTop: `3px solid transparent`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = C.goldBorder;
                  el.style.borderTop = `3px solid ${C.gold}`;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 20px 48px rgba(0,0,0,0.10)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = C.divider;
                  el.style.borderTop = `3px solid transparent`;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                }}
              >
                <div
                  style={{

                    width: "64px",
                    height: "64px",
                    borderRadius: "4px",
                    background: "linear-gradient(135deg, #8B6914, #B8920F)",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    marginBottom: "20px",
                    boxShadow: "0 8px 24px rgba(139,105,20,0.4)",
                  }}
                >
                  <Icon size={24} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#1a1608",
                    fontSize: "14px",
                    letterSpacing: "0.08em",
                    marginBottom: "12px",
                    fontWeight: 800,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    color: "#333333",
                    fontSize: "14px",
                    lineHeight: "1.9",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS PREVIEW ──────────────────────────────── */}
      <section style={{ background: C.white }} className="py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-14">
            <div>
              <div
                style={{
                  width: "48px",
                  height: "3px",
                  background: goldGrad,
                  borderRadius: "2px",
                  marginBottom: "20px",
                }}
              />
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#8B6914",
                  fontSize: "15px",
                  letterSpacing: "0.2em",
                  marginBottom: "10px",
                  fontWeight: 800,
                  textShadow: "0 0 20px rgba(139,105,20,0.5)",
                }}
              >
                UPCOMING
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: C.charcoal,
                  fontSize: "clamp(24px, 3vw, 30px)",
                  fontWeight: 700,
                }}
              >
                Featured Events
              </h2>
            </div>
            <Link
              to="/events"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                color: "#ffffff",
                fontFamily: "'Cinzel', serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                fontWeight: 700,
                background: "linear-gradient(135deg, #8B6914, #B8920F)",
                padding: "12px 24px",
                borderRadius: "4px",
                boxShadow: "0 4px 16px rgba(139,105,20,0.4)",
              }}
            >
              VIEW ALL EVENTS <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((ev, i) => (
              <div
                key={i}
                style={{
                  background: C.white,
                  border: `1px solid ${C.divider}`,
                  borderRadius: "4px",
                  overflow: "hidden",
                  transition: "all 0.35s ease",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = C.goldBorder;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 24px 56px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = C.divider;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)";
                }}
              >
                {/* Gold top bar */}
                <div style={{ height: "4px", background: goldGrad }} />

                <div style={{ padding: "28px 28px 22px" }}>
                  {/* Date + type row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        background: "linear-gradient(135deg, #8B6914, #B8920F)",
                        borderRadius: "4px",
                        padding: "10px 14px",
                        textAlign: "center",
                        minWidth: "64px",
                        boxShadow: "0 4px 14px rgba(139,105,20,0.35)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Cinzel', serif",
                          color: C.navy,
                          fontSize: "18px",
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                      >
                        {ev.date.split(" ")[0]}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Cinzel', serif",
                          color: "rgba(8,12,24,0.65)",
                          fontSize: "9px",
                          letterSpacing: "0.1em",
                          marginTop: "3px",
                        }}
                      >
                        {ev.date.split(" ")[1]}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, #8B6914, #B8920F)",
                        border: "none",
                        borderRadius: "4px",
                        padding: "6px 14px",
                        fontFamily: "'Cinzel', serif",
                        color: "#ffffff",
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        fontWeight: 700,
                        boxShadow: "0 2px 8px rgba(139,105,20,0.4)",
                      }}
                    >
                      {ev.type}
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: C.charcoal,
                      fontSize: "20px",
                      lineHeight: "1.3",
                      marginBottom: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {ev.title}
                  </h3>

                  <div
                    style={{
                      color: "#444444",
                      fontSize: "13px",
                      fontFamily: "'Inter', sans-serif",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ color: "#8B6914" }}>📍</span>
                    {ev.location}
                  </div>
                </div>

                <div
                  style={{
                    borderTop: `1px solid ${C.divider}`,
                    padding: "14px 28px",
                    background: C.offwhite,
                  }}
                >
                  <Link
                    to="/events"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#8B6914",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontWeight: 800,
                      textShadow: "0 0 12px rgba(139,105,20,0.4)",
                    }}
                  >
                    REGISTER NOW <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE BRITTANY HIGHLIGHT ─────────────────────── */}
      <section
        className="relative overflow-hidden py-32"
        style={{
          background: C.white,
          borderTop: `1px solid ${C.divider}`,
          borderBottom: `1px solid ${C.divider}`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${outdoorDog})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.80, //image outdoor lighter
          }}
        />
        {/* White gradient overlay to protect text */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.6) 100%)",
          }}

        />
        {/* subtle radial fade */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 30%, rgba(247,247,247,0.7) 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div
            style={{
              width: "48px",
              height: "3px",
              background: goldGrad,
              borderRadius: "2px",
              margin: "0 auto 20px",
            }}
          />
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#161615",
              fontSize: "17px",
              letterSpacing: "0.2em",
              marginBottom: "16px",
              fontWeight: 800,
              textShadow: "0 2px 12px rgba(24, 24, 24, 0.8), 0 0 30px rgba(23, 23, 22, 0.91)",
              background: "rgba(246, 248, 241, 0.5)",
              padding: "4px 16px",
              borderRadius: "2px",
              display: "inline-block",
            }}
          >
            THE BRITTANY BREED
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: C.charcoal,
              fontSize: "clamp(32px, 5vw, 60px)",
              lineHeight: "1.2",
              marginBottom: "24px",
              fontWeight: 700,
            }}
          >
            Versatile. Intelligent. <em>Magnificent.</em>
          </h2>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1a1608",
              fontSize: "18px",
              lineHeight: "1.9",
              maxWidth: "700px",
              margin: "0 auto 44px",
              fontWeight: 500,
              textShadow: "0 1px 8px rgba(255,255,255,0.8)",
              letterSpacing: "0.01em",
            }}
          >
            Known for their boundless energy, keen nose, and affectionate nature, Brittanys are the perfect blend of working dog and family companion. Discover what makes them truly exceptional.
          </p>
          <Link
            to="/the-brittany"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: goldGrad,
              color: C.navy,
              padding: "18px 44px",
              borderRadius: "2px",
              fontFamily: "'Cinzel', serif",
              fontSize: "12px",
              letterSpacing: "0.15em",
              fontWeight: 700,
              boxShadow: "0 8px 40px rgba(201,168,76,0.35)",
            }}
          >
            EXPLORE THE BREED <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ─────────────────────────────── */}
      <section style={{ background: C.white }} className="py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-14">
            <div>
              <div
                style={{
                  width: "48px",
                  height: "3px",
                  background: goldGrad,
                  borderRadius: "2px",
                  marginBottom: "20px",
                }}
              />
              <div style={{ fontFamily: "'Cinzel', serif", color: C.gold, fontSize: "15px", letterSpacing: "0.25em", marginBottom: "17px", fontWeight: 800, textShadow: "0 0 20px rgba(201,168,76,0.5)" }}>
                PHOTO GALLERY
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.charcoal, fontSize: "clamp(25px, 3vw, 28px)", fontWeight: 800, letterSpacing: "0.02em" }}>
                Captured Moments
              </h2>
            </div>
            <Link
              to="/gallery"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                color: C.navy,
                fontFamily: "'Cinzel', serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                fontWeight: 700,
                background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
                padding: "12px 24px",
                borderRadius: "2px",
                boxShadow: "0 4px 16px rgba(201,168,76,0.4)",
                transition: "all 0.3s ease",
              }}
            >
              VIEW FULL GALLERY <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: awardImg, label: "Championships", span: "md:col-span-2 md:row-span-2" },
              { src: dogShowImg, label: "Community" },
              { src: luxuryDogImg, label: "Portraits" },
              { src: outdoorDog, label: "Dog Shows", span: "md:col-span-2" },
            ].map(({ src, label, span }, i) => (
              <div
                key={i}
                className={`relative overflow-hidden cursor-pointer group ${span || ""}`}
                style={{
                  height: span?.includes("row-span") ? "auto" : "200px",
                  minHeight: "200px",
                  borderRadius: "4px",
                }}
              >
                <ImageWithFallback
                  src={src}
                  alt={label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
                  style={{ background: "linear-gradient(180deg, transparent 40%, rgba(8,12,24,0.78))" }}
                >
                  <span
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: C.goldLight,
                      fontSize: "12px",
                      letterSpacing: "0.2em",
                    }}
                  >
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP CTA ─────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #d4b05a, #ecd48a, #d4b05a)",
          padding: "88px 0",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div

            style={{
              fontFamily: "'Cinzel', serif",
              color: "#1a1608",
              fontSize: "13px",
              letterSpacing: "0.2em",
              marginBottom: "14px",
              fontWeight: 800,
            }}
          >
            JOIN OUR COMMUNITY
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: C.navy,
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: "1.2",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            Become a Member of NVBC
          </h2>
          <p
            style={{
              color: "rgba(8,12,24,0.65)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              lineHeight: "1.85",
              maxWidth: "560px",
              margin: "0 auto 36px",
            }}
          >
            Join hundreds of passionate Brittany enthusiasts and gain access to exclusive events, resources, and a lifelong community of dog lovers.
          </p>
          <Link
            to="/become-a-member"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: C.navy,
              color: C.gold,
              padding: "18px 48px",
              borderRadius: "2px",
              fontFamily: "'Cinzel', serif",
              fontSize: "12px",
              letterSpacing: "0.15em",
              fontWeight: 700,
              boxShadow: "0 8px 30px rgba(0,0,0,0.28)",
            }}
          >
            JOIN NOW <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  );
}