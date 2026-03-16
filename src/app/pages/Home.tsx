import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Calendar, ChevronRight, Star, Shield, Heart, X, Trophy, Zap, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/* trial popup photos */
import specialty1 from "../../assets/images/trials/specialty1.jpg";
import specialty2 from "../../assets/images/trials/specialty2.jpg";
import specialty3 from "../../assets/images/trials/specialty3.jpg";
import specialty4 from "../../assets/images/trials/specialty4.jpg";
import purejoy1 from "../../assets/images/trials/purejoy1.jpg";
import purejoy2 from "../../assets/images/trials/purejoy2.jpg";
import purejoy3 from "../../assets/images/trials/purejoy3.jpg";
import purejoy4 from "../../assets/images/trials/purejoy4.jpg";
import field1 from "../../assets/images/trials/field1.jpg";
import field2 from "../../assets/images/trials/field2.jpg";
import field3 from "../../assets/images/trials/field3.jpg";
import field4 from "../../assets/images/trials/field4.jpg";
import agility1 from "../../assets/images/trials/agility1.jpg";
import agility2 from "../../assets/images/trials/agility2.jpg";
import agility3 from "../../assets/images/trials/agility3.jpg";
import agility4 from "../../assets/images/trials/agility4.jpg";
import highlightsBanner from "../../assets/highlights2024.jpg";

import heroImg from "../../assets/images/americanbrittany.jpg";
import dogShowImg from "../../assets/images/playing.jpg";
import outdoorDogImg from "../../assets/images/playingg.jpg";
import spanielRunImg from "../../assets/images/dog3.jpeg";
import membershipImg from "../../assets/images/dog4.jpg";
import awardImg from "../../assets/images/dog5.jpg";
import luxuryDogImg from "../../assets/images/outdoorDog.jpg";
/* Homepage gallery images */
import gallery1 from "../../assets/images/homepagegallery/gallery1.jpg";
import gallery2 from "../../assets/images/homepagegallery/gallery2.jpg";
import gallery3 from "../../assets/images/homepagegallery/gallery3.jpg";
import gallery4 from "../../assets/images/homepagegallery/gallery4.jpg";


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
  { value: "53+", label: "Years of Excellence" },
  { value: "52+", label: "Active Members" },
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

const trials = [
  {
    Icon: Trophy,
    title: "Specialty Shows",
    subtitle: "Conformation Excellence",
    accentColor: "#8B6914",
    paragraphs: [
      "Specialty Shows are breed-specific conformation events where Brittanys are evaluated against the AKC breed standard by qualified judges. Unlike all-breed shows, these events focus exclusively on the Brittany, attracting top breeders and owners from across the East Coast.",
      "Judges assess structure, movement, coat quality, and temperament. Winning a Specialty is one of the highest honors in the breed world — titles earned here carry tremendous prestige and validate a dog's quality as a breeding prospect.",
      "NVBC hosts both independent specialties and cluster specialties in conjunction with all-breed shows throughout the year, giving members multiple opportunities to compete at the highest level.",
    ],
    photos: [
      { src: specialty1, caption: "Best of Breed lineup at the 2024 NVBC Specialty" },
      { src: specialty2, caption: "Judge evaluating movement in the ring" },
      { src: specialty3, caption: "Award presentation — Best in Specialty" },
      { src: specialty4, caption: "Young handlers competing in the Bred-By class" },
    ],
  },
  {
    Icon: Heart,
    title: "Pure Joy",
    subtitle: "Community & Celebration",
    accentColor: "#7a3b8c",
    paragraphs: [
      "Pure Joy events are NVBC's signature community gatherings — informal fun days where Brittany owners bring their dogs together for bonding, games, and celebration of the breed. No judges, no pressure, just the pure joy of Brittanys doing what they love.",
      "These events include dock diving demos, lure coursing fun runs, trick competitions, and picnic socials. They are perfect for new members, puppies experiencing their first events, and experienced owners who want a relaxed day out.",
      "Pure Joy events rotate through member properties and local parks, making them accessible across Northern Virginia. Every event ends with a group photo — a beloved NVBC tradition since 1985.",
    ],
    photos: [
      { src: purejoy1, caption: "Brittanys racing in the open field fun run" },
      { src: purejoy2, caption: "Dock diving event at member's property" },
      { src: purejoy3, caption: "Annual group picnic with the whole club family" },
      { src: purejoy4, caption: "Trick competition — crowd favorite every year" },
    ],
  },
  {
    Icon: Target,
    title: "Field Tests",
    subtitle: "Natural Hunting Ability",
    accentColor: "#2d6e3e",
    paragraphs: [
      "Field Tests evaluate the Brittany's natural hunting instincts and trainability in the field. Unlike competitive field trials, tests are non-competitive — dogs are judged against a standard, not each other, making them ideal for hunters and hunters-turned-showdogs alike.",
      "NVBC offers AKC Junior Hunter (JH), Senior Hunter (SH), and Master Hunter (MH) tests. Dogs must demonstrate bird-finding ability, pointing, backing, and, in higher levels, steady-to-wing-and-shot and retrieving skills.",
      "Our test grounds in Culpeper and Shenandoah Valley provide ideal conditions. NVBC test secretaries and judges are among the most experienced in the Mid-Atlantic region, and our events routinely attract entries from five or more states.",
    ],
    photos: [
      { src: field1, caption: "Brittany on point during a Senior Hunter test" },
      { src: field2, caption: "Handler and dog working a bird field in Culpeper" },
      { src: field3, caption: "Master Hunter — retrieving to hand" },
      { src: field4, caption: "Junior Hunter test — young dog's first birds" },
    ],
  },
  {
    Icon: Zap,
    title: "Agility Trials",
    subtitle: "Speed, Focus & Teamwork",
    accentColor: "#1a4a8a",
    paragraphs: [
      "Agility Trials showcase the Brittany's athleticism, trainability, and desire to work with their handler. Dogs navigate a timed obstacle course including jumps, tunnels, weave poles, an A-frame, dog walk, and teeter — with handler communication being the key to a clean, fast run.",
      "NVBC sanctions both AKC and NADAC agility events. Our trials draw competitors from the entire Mid-Atlantic region and are known for excellent course design, smooth logistics, and a welcoming atmosphere for both novice and experienced teams.",
      "Brittanys excel at agility thanks to their compact build, keen intelligence, and boundless energy. Many NVBC members hold MACH (Master Agility Champion) titles — a testament to the breed's versatility beyond the field and show ring.",
    ],
    photos: [
      { src: agility1, caption: "Brittany flying through the weave poles" },
      { src: agility2, caption: "Clean run over the double jump sequence" },
      { src: agility3, caption: "Handler guiding dog through the tunnel" },
      { src: agility4, caption: "Award ceremony — MACH title celebration" },
    ],
  },
];

const upcomingEvents = [
  { date: "APR 12", month: "2026", title: "Spring Field Trial", location: "Shenandoah Valley, VA", type: "Field Trial" },
  { date: "MAY 08", month: "2026", title: "Conformation Specialty", location: "Fairfax County Fairgrounds", type: "Dog Show" },
  { date: "JUN 22", month: "2026", title: "Hunt Test Weekend", location: "Culpeper, VA", type: "Hunt Test" },
];

/* ─── Component ─────────────────────────────────────────────────────── */
export default function Home() {
  const [activeTrial, setActiveTrial] = useState<number | null>(null);

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
              The premier organization dedicated to celebrating, preserving, and advancing the magnificent Brittany breed in Northern Virginia since 1978.
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
                to="/why-a-brittany"
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
        className="pt-28 pb-0 px-6 lg:px-8"
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
                  src={dogShowImg}
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
                  boxShadow: "0 16px 40px rgba(66, 41, 5, 0.4)",
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
                to="/about-nvbc"
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

      {/* ── TRIALS OF THE CLUB ──────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #d4b05a, #ecd48a, #d4b05a)",
          padding: "96px 0",
          borderTop: "1px solid rgba(201,168,76,0.3)",
          borderBottom: "1px solid rgba(201,168,76,0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section heading */}
          <div className="text-center mb-16">
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
                color: "#1a1608",
                fontSize: "13px",
                letterSpacing: "0.35em",
                fontWeight: 800,
                marginBottom: "12px",
              }}
            >
              WHAT WE SERVE
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#1a1608",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              The Trials of the Club
            </h2>
            <p
              style={{
                color: "rgba(26,22,8,0.65)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                maxWidth: "540px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              From the show ring to the open field, NVBC offers world-class competitive events for every Brittany enthusiast. Click any card to learn more.
            </p>
          </div>

          {/* Trial cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trials.map((trial, i) => (
              <button
                key={i}
                onClick={() => setActiveTrial(i)}
                style={{
                  background: "rgba(255,255,255,0.45)",
                  border: "1px solid rgba(26,22,8,0.15)",
                  borderTop: `3px solid ${trial.accentColor}`,
                  borderRadius: "4px",
                  padding: "36px 28px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  width: "100%",
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(255,255,255,0.75)";
                  el.style.transform = "translateY(-8px)";
                  el.style.boxShadow = "0 24px 48px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(255,255,255,0.45)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "4px",
                    background: trial.accentColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    marginBottom: "20px",
                    boxShadow: `0 8px 24px ${trial.accentColor}66`,
                  }}
                >
                  <trial.Icon size={26} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#1a1608",
                    fontSize: "14px",
                    letterSpacing: "0.08em",
                    marginBottom: "6px",
                    fontWeight: 800,
                  }}
                >
                  {trial.title}
                </h3>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#1a1608",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    marginBottom: "14px",
                    fontWeight: 500,
                  }}
                >
                  {trial.subtitle}
                </div>
                <p
                  style={{
                    color: "rgba(26,22,8,0.6)",
                    fontSize: "13px",
                    lineHeight: "1.8",
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: "20px",
                  }}
                >
                  {trial.paragraphs[0].slice(0, 90)}…
                </p>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#1a1608",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  LEARN MORE <ChevronRight size={11} />
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ── TRIAL POPUP MODAL ────────────────────────────── */}
      {activeTrial !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.80)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={() => setActiveTrial(null)}
        >
          <div
            style={{
              background: C.white,
              borderRadius: "8px",
              maxWidth: "860px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              style={{
                background: C.navy,
                padding: "32px 40px",
                borderRadius: "8px 8px 0 0",
                borderBottom: `3px solid ${trials[activeTrial].accentColor}`,
                position: "relative",
              }}
            >
              <button
                onClick={() => setActiveTrial(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: C.gold,
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  marginBottom: "8px",
                }}
              >
                THE TRIALS OF THE CLUB
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f8f5ef",
                  fontSize: "clamp(24px, 4vw, 36px)",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                {trials[activeTrial].title}
              </h2>
              <div
                style={{
                  color: "rgba(248,245,239,0.55)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                }}
              >
                {trials[activeTrial].subtitle}
              </div>
            </div>

            {/* Modal body */}
            <div style={{ padding: "40px" }}>
              {trials[activeTrial].paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: C.textBody,
                    fontSize: "15px",
                    lineHeight: "1.9",
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: "18px",
                  }}
                >
                  {para}
                </p>
              ))}

              {/* Photo grid */}
              <div
                style={{
                  marginTop: "36px",
                  borderTop: `1px solid ${C.divider}`,
                  paddingTop: "32px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#8B6914",
                    fontSize: "11px",
                    letterSpacing: "0.3em",
                    fontWeight: 800,
                    marginBottom: "20px",
                  }}
                >
                  PHOTO GALLERY
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {trials[activeTrial].photos.map((photo, i) => (
                    <div
                      key={i}
                      style={{
                        borderRadius: "4px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <ImageWithFallback
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full object-cover"
                        style={{ height: "180px" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: "linear-gradient(transparent, rgba(0,0,0,0.72))",
                          padding: "20px 12px 10px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            color: "#ffffff",
                            fontSize: "11px",
                            lineHeight: "1.4",
                          }}
                        >
                          {photo.caption}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

          {/* Section heading */}
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

          {/* Feature cards */}
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

          {/* ── QUICK LINKS — inside same offwhite section, below features ── */}
          <div
            style={{
              borderTop: `1px solid ${C.divider}`,
              paddingTop: "64px",
              marginTop: "64px",
            }}
          >
            <div className="text-center mb-12">
              <div
                style={{
                  width: "48px",
                  height: "3px",
                  background: goldGrad,
                  borderRadius: "2px",
                  margin: "0 auto 16px",
                }}
              />
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#8B6914",
                  fontSize: "13px",
                  letterSpacing: "0.35em",
                  fontWeight: 800,
                  marginBottom: "8px",
                }}
              >
                QUICK LINKS
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: C.charcoal,
                  fontSize: "clamp(22px, 3vw, 28px)",
                  fontWeight: 700,
                }}
              >
                Explore More
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { Icon: Award, title: "Gallery", desc: "Browse our collection of championship moments and events.", link: "/gallery" },
                { Icon: Calendar, title: "Events Calendar", desc: "Stay updated with upcoming field trials, shows and hunt tests.", link: "/calendar" },
                { Icon: Users, title: "Become a Member", desc: "Join our growing community of Brittany enthusiasts today.", link: "/become-a-member" },
                { Icon: Star, title: "Why Choose Brittany?", desc: "Discover what makes the Brittany breed truly exceptional.", link: "/why-a-brittany" },
              ].map(({ Icon, title, desc, link }, i) => (
                <Link
                  key={i}
                  to={link}
                  style={{
                    background: "linear-gradient(160deg, #ffffff 0%, #fdf9f2 100%)",
                    border: "1px solid rgba(139,105,20,0.2)",
                    borderTop: "3px solid #8B6914",
                    borderRadius: "4px",
                    padding: "32px 24px",
                    display: "block",
                    transition: "all 0.35s ease",
                    boxShadow: "0 4px 20px rgba(139,105,20,0.1)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = "translateY(-8px)";
                    el.style.boxShadow = "0 24px 48px rgba(139,105,20,0.2)";
                    el.style.borderColor = "rgba(139,105,20,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 4px 20px rgba(139,105,20,0.1)";
                    el.style.borderColor = "rgba(139,105,20,0.2)";
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "4px",
                      background: "linear-gradient(135deg, #8B6914, #B8920F)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      marginBottom: "18px",
                      boxShadow: "0 8px 24px rgba(139,105,20,0.35)",
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#1a1608",
                      fontSize: "13px",
                      letterSpacing: "0.08em",
                      marginBottom: "10px",
                      fontWeight: 800,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      color: "#555555",
                      fontSize: "13px",
                      lineHeight: "1.8",
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "20px",
                    }}
                  >
                    {desc}
                  </p>
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#8B6914",
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      borderTop: "1px solid rgba(139,105,20,0.15)",
                      paddingTop: "14px",
                    }}
                  >
                    EXPLORE <ChevronRight size={11} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── EVENTS PREVIEW ──────────────────────────────── */}
      <section style={{ background: C.white }} className="py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-14">

            {/* Center Title */}
            <div className="text-center mb-8">
              <div
                style={{
                  width: "48px",
                  height: "3px",
                  background: goldGrad,
                  borderRadius: "2px",
                  margin: "0 auto 20px auto",
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

            {/* Button Right */}
            <div className="flex justify-end">
              <Link
                to="/calendar"
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

          </div>

          {/* EVENTS GRID */}
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

                  {/* Date + Type */}
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

                {/* Register Button */}
                <div
                  style={{
                    borderTop: `1px solid ${C.divider}`,
                    padding: "14px 28px",
                    background: C.offwhite,
                  }}
                >
                  <Link
                   to="/calendar"
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
            backgroundImage: `url(${outdoorDogImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.80,
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
           to="/why-a-brittany"
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
      <section style={{ background: C.white }} className="pt-28 pb-0 px-6 lg:px-8">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
            {[
              { src: gallery1, label: "Championships", span: "md:col-span-2 md:row-span-2" },
              { src: gallery2, label: "Community" },
              { src: gallery3, label: "Portraits" },
              { src: gallery4, label: "Dog Shows", span: "md:col-span-2" }
            ].map(({ src, label, span }, i) => (

              <Link
                to="/gallery"
                key={i}
                className={`relative overflow-hidden cursor-pointer group block ${span || ""}`}
                style={{ borderRadius: "4px" }}
              >
                <ImageWithFallback
                  src={src}
                  alt={label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(8,12,24,0.78))",
                  }}
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
              </Link>
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
              background: "#1a1608",
              color: "#ffffff",
              padding: "18px 48px",
              borderRadius: "2px",
              fontFamily: "'Cinzel', serif",
              fontSize: "12px",
              letterSpacing: "0.15em",
              fontWeight: 700,
              boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
            }}
          >
            JOIN NOW <ArrowRight size={15} />
          </Link>
        </div>
      </section>
      <section className="w-full">
 <div className="w-full">
    <img
      src={highlightsBanner}
      alt="NVBC 2024 Highlights"
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "6px",
        boxShadow: "0 25px 60px rgba(0,0,0,0.5)"
      }}
    />
  </div>
</section>

    </div>
  );
}