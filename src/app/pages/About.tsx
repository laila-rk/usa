import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Star, Users, Award, Target,
  Shield, Heart, Zap, Instagram, Mail, X, ChevronRight
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Assets
import dogShowImg from "../../assets/images/about/dogshow.jpg";
import memberImg from "../../assets/images/about/member.jpg";
import countryImg from "../../assets/images/about/country.jpg";

/* ─── Types ──────────────────────────────────────────────────────── */
interface BoardMember {
  name: string;
  role: string;
  article: string;
}

/* ─── Design Tokens ───────────────────────────────────────────────── */
const C = {
  white: "#ffffff",
  offwhite: "#f7f7f7",
  navy: "#080c18",
  charcoal: "#111111",
  textBody: "#444444",
  gold: "#C9A84C",
  goldLight: "#E8C97E",
  goldBorder: "rgba(201,168,76,0.3)",
  divider: "rgba(0,0,0,0.08)",

  fadedGold: "#F9F4E8",
  cardBg: "#F1E7C7",
  iconGold: "#916B22",
  iconPurple: "#7A438E",
  iconGreen: "#2D6A3E",
  iconBlue: "#1B4D8F",
};

const goldGrad = `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`;

/* ─── Content Data ────────────────────────────────────────────────── */
const milestones = [
  { year: "1973", title: "Club Founded", desc: "A group of dedicated Brittany enthusiasts established NVBC in Northern Virginia." },
  { year: "1975", title: "First Specialty Show", desc: "Our inaugural conformation specialty attracted entries from across the East Coast." },
  { year: "1988", title: "AKC Recognition", desc: "NVBC became an official American Kennel Club member club." },
  { year: "2005", title: "Hunt Test Program", desc: "Launched our comprehensive hunting test program, now one of the region's finest." },
  { year: "2015", title: "300th Champion", desc: "Celebrated our 300th AKC Champion produced by NVBC members." },
  { year: "2024", title: "Digital Expansion", desc: "Modernized our outreach with online resources and virtual programming." },
  {year: "2026",title: "Upcoming Initiatives",desc: "NVBC plans to expand its programs with new educational workshops, community events, and enhanced resources for Brittany owners and enthusiasts."
},
];

const boardMembers: BoardMember[] = [
  {
    name: "Margaret Holloway",
    role: "Club President",
    article: "Margaret has been a cornerstone of the Brittany community for over 30 years. Her leadership focuses on maintaining the historical standards of the breed while embracing modern training techniques."
  },
  {
    name: "Thomas R. Ashford",
    role: "Vice President",
    article: "Thomas brings extensive experience in field trial coordination. He is dedicated to ensuring that the working heritage of the Brittany is preserved through rigorous regional competitions."
  },
  {
    name: "Diana Chen",
    role: "Secretary",
    article: "Diana manages the club's communications and official records. Her attention to detail ensures that the history of every NVBC specialty show is preserved for future generations."
  },
  {
    name: "Robert Sullivan",
    role: "Treasurer",
    article: "Robert handles the fiscal health of the NVBC. With a background in finance, he ensures that the club's resources are effectively managed to support our annual events."
  },
  {
    name: "Patricia Merritt",
    role: "Show Chair",
    article: "Patricia is the visionary behind our Conformation Specialty shows. She coordinates with AKC officials and judges to produce events recognized as the premier Brittany showcase."
  },
  {
    name: "James Whitfield",
    role: "Field Trial Chair",
    article: "James leads our hunting tests and field activities. He works closely with handlers and owners to foster the natural hunting instincts of the breed."
  },
];

const values = [
  { Icon: Award, title: "Excellence", color: C.iconGold, desc: "We hold ourselves and our dogs to the highest standards." },
  { Icon: Heart, title: "Community", color: C.iconPurple, desc: "Building lasting friendships among Brittany lovers." },
  { Icon: Target, title: "Heritage", color: C.iconGreen, desc: "Preserving the unique qualities that make the breed exceptional." },
  { Icon: Zap, title: "Education", color: C.iconBlue, desc: "Empowering owners with knowledge to give their dogs the best life." },
];

/* ─── Main Component ─────────────────────────────────────────────── */
export default function About() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedMember]);

  return (
    <div style={{ background: C.white, color: C.charcoal, overflowX: "hidden" }}>

      {/* 1. Page Header */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#06080B" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${countryImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(6,8,11,0.9) 0%, rgba(6,8,11,0.3) 50%, rgba(6,8,11,0.9) 100%)"
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          <div style={{ width: "100px", height: "4px", background: C.gold, marginBottom: "32px" }} />
          <div style={{ fontFamily: "'Cinzel', serif", color: C.gold, fontSize: "18px", letterSpacing: "0.5em", marginBottom: "25px", fontWeight: 900 }}>
            ESTABLISHED 1973
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(48px, 10vw, 92px)", lineHeight: "1.05", fontWeight: 400, fontStyle: "italic", marginBottom: "36px", letterSpacing: "-0.02em" }}>
            About NVBC
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Inter', sans-serif", fontSize: "clamp(18px, 2vw, 22px)", maxWidth: "800px", lineHeight: "1.8", fontWeight: 300, textShadow: "0 2px 15px rgba(0,0,0,0.5)" }}>
            Five decades of devotion to the Brittany breed — our story, our mission, and our people.
          </p>
          <div className="absolute bottom-12 flex flex-col items-center opacity-50">
            <div style={{ width: "1px", height: "60px", background: C.gold }} />
          </div>
        </div>
      </section>

      {/* 2. Mission & Story */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div style={{ width: "600px", height: "4px", background: goldGrad, marginBottom: "20px" }} />
            <div style={{ fontFamily: "'Cinzel', serif", color: "#8B6914", fontSize: "25px", letterSpacing: "0.1em", marginBottom: "16px", fontWeight: 800 }}>OUR MISSION</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.charcoal, fontSize: "clamp(28px, 4vw, 38px)", lineHeight: "1.2", marginBottom: "28px", fontWeight: 700 }}>Preserving Excellence, Building Community</h2>
            <p style={{ color: C.textBody, lineHeight: "1.9", marginBottom: "20px", fontFamily: "'Inter', sans-serif", fontSize: "15px" }}>The Northern Virginia Brittany Club exists to promote the Brittany breed as described in the breed standard, protect the interests of the breed, and educate the public about responsible ownership.</p>
            <p style={{ color: C.textBody, lineHeight: "1.9", fontFamily: "'Inter', sans-serif", fontSize: "15px" }}>Through field trials, conformation events, and hunt tests, NVBC members live the motto: "Work hard. Show beautifully. Love deeply."</p>
          </div>
          <div style={{ perspective: "1000px" }}>
            <div style={{ transform: "rotateY(-6deg) rotateX(2deg)", borderRadius: "4px", overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.15)" }}>
              <ImageWithFallback src={dogShowImg} alt="Dog Show" className="w-full object-cover" style={{ height: "500px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VALUES */}
      <section className="py-32" style={{ background: C.fadedGold }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 flex flex-col items-center">
            <div style={{ width: "100px", height: "5px", background: goldGrad, marginBottom: "30px" }} />
            <div style={{ fontFamily: "'Cinzel', serif", color: "#8B6914", fontSize: "17px", letterSpacing: "0.1em", marginBottom: "12px", fontWeight: 800 }}>OUR VALUES</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.charcoal, fontSize: "clamp(30px, 4vw, 40px)", fontWeight: 800 }}>The NVBC Standard</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map(({ Icon, title, color, desc }, i) => (
              <div key={i} className="transition-all duration-500 hover:-translate-y-3" style={{ background: C.cardBg, borderTop: `4px solid ${color}`, borderRadius: "4px", padding: "48px 32px", display: "flex", flexDirection: "column", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", height: "100%" }}>
                <div style={{ width: "52px", height: "52px", background: color, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px", boxShadow: `0 4px 15px ${color}33` }}>
                  <Icon size={24} color="#FFFFFF" strokeWidth={2.5} />
                </div>
                <h3 style={{ fontFamily: "'Cinzel', serif", color: C.charcoal, fontSize: "16px", fontWeight: 800, marginBottom: "12px" }}>{title}</h3>
                <p style={{ color: C.textBody, fontSize: "14px", lineHeight: "1.7", fontFamily: "'Inter', sans-serif" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline Section */}
      <section style={{ background: "linear-gradient(135deg, #f8ecd0, #ecd48a, #d4b05a)", padding: "120px 0", borderTop: `1px solid ${C.goldBorder}`, borderBottom: `1px solid ${C.goldBorder}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div style={{ fontFamily: "'Cinzel', serif", color: "#1a1608", fontSize: "17px", letterSpacing: "0.2em", fontWeight: 900, marginBottom: "12px" }}>OUR JOURNEY</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1608", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700 }}>Club History & Milestones</h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0" style={{ width: "1px", background: "rgba(26,22,8,0.15)", transform: "translateX(-50%)" }} />
            {/* Timeline Start Marker */}
            <div
              className="hidden md:block absolute left-1/2"
              style={{
                top: "-20px",
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                background: "#C9A84C",
                transform: "translateX(-50%)",
                boxShadow: "0 0 0 6px rgba(201,168,76,0.25)",
                border: "3px solid #1a1608"
              }}
            />
            <div className="flex flex-col gap-12">
              {milestones.map((m, i) => (
                <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div style={{ background: "rgba(255,255,255,0.4)", backdropFilter: "blur(10px)", padding: "32px", borderRadius: "2px", maxWidth: "420px", display: "inline-block", textAlign: "left", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                      <div style={{ fontFamily: "'Cinzel', serif", color: "#1a1608", fontSize: "28px", fontWeight: 900, marginBottom: "4px" }}>{m.year}</div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>{m.title}</h3>
                      <p style={{ color: "rgba(26,22,8,0.7)", fontSize: "14px", lineHeight: "1.8" }}>{m.desc}</p>
                    </div>
                  </div>
                  {/* Timeline End Marker */}
                  <div
                    className="hidden md:block absolute left-1/2"
                    style={{
                      bottom: "-20px",
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: "#C9A84C",
                      transform: "translateX(-50%)",
                      boxShadow: "0 0 0 6px rgba(201,168,76,0.25)",
                      border: "3px solid #1a1608"
                    }}
                  />
                  <div className="hidden md:flex" style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#1a1608", zIndex: 2 }} />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Leadership Board */}
      <section className="py-32 px-6 lg:px-8" style={{ background: C.offwhite }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 flex flex-col items-center">
            <div style={{ width: "100px", height: "3px", background: C.gold, marginBottom: "20px" }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.navy, fontSize: "clamp(32px, 5vw, 35px)", fontWeight: 700 }}>Board of Directors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, i) => (
              <div
                key={i}
                onClick={() => setSelectedMember(member)}
                className="group cursor-pointer transition-all duration-500 hover:shadow-2xl"
                style={{
                  background: C.white,
                  borderRadius: "4px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid rgba(0,0,0,0.05)",
                  borderTop: `4px solid ${C.gold}`,
                }}
              >
                <div className="p-8 pb-12">
                  <div className="mb-8" style={{ width: "56px", height: "56px", background: C.iconGold, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontFamily: "'Cinzel', serif", fontSize: "20px", fontWeight: 800, boxShadow: "0 10px 20px rgba(145, 107, 34, 0.2)" }}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.navy, fontSize: "26px", fontWeight: 700, marginBottom: "12px", letterSpacing: "-0.01em" }}>{member.name}</h3>
                  <div className="flex items-center gap-2">
                    <div style={{ width: "12px", height: "1px", background: C.gold }} />
                    <span style={{ fontFamily: "'Inter', sans-serif", color: C.textBody, fontSize: "10px", fontWeight: 500 }}>NORTHERN VIRGINIA REGION</span>
                  </div>
                </div>
                <div style={{ marginTop: "auto", padding: "20px 32px", borderTop: "1px solid #f0f0f0", background: "#fafafa" }}>
                  <div style={{ fontFamily: "'Cinzel', serif", color: "#8B6914", fontSize: "9px", letterSpacing: "0.1em", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div className="flex items-center gap-2">
                      {member.role.toUpperCase()} <ArrowRight size={14} />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Profile Article Overlay */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          style={{ background: "rgba(8, 12, 24, 0.95)", backdropFilter: "blur(10px)" }}
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white max-h-[90vh] overflow-y-auto"
            style={{ borderRadius: "4px", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setSelectedMember(null)}
            >
              <X size={24} color={C.charcoal} />
            </button>

            <div className="p-8 md:p-16">
              <div style={{ fontFamily: "'Cinzel', serif", color: C.gold, fontSize: "14px", letterSpacing: "0.2em", marginBottom: "16px", fontWeight: 800 }}>
                {selectedMember.role.toUpperCase()}
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 48px)", color: C.navy, marginBottom: "32px", fontWeight: 700 }}>
                {selectedMember.name}
              </h2>
              <div style={{ width: "60px", height: "2px", background: goldGrad, marginBottom: "40px" }} />

              <div className="prose prose-lg">
                <p style={{ fontFamily: "'Inter', sans-serif", color: C.textBody, fontSize: "18px", lineHeight: "1.8", fontWeight: 300 }}>
                  {selectedMember.article}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. Community CTA */}
      <section className="py-32 px-6 lg:px-8 text-center" style={{ background: "#06080B", position: "relative", overflow: "hidden" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${memberImg})`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div style={{ width: "100px", height: "4px", background: C.gold, marginBottom: "24px" }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.white, fontSize: "clamp(36px, 5vw, 56px)", marginBottom: "28px", fontStyle: "italic", fontWeight: 400 }}>Join the Heritage</h2>
          <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "19px", maxWidth: "600px", margin: "0 auto 48px", fontWeight: 300 }}>Whether you are a seasoned field trialer or a first-time Brittany owner, there is a place for you in our club.</p>
          <Link to="/become-a-member" style={{ background: goldGrad, color: "#000", padding: "20px 52px", fontFamily: "'Cinzel', serif", fontSize: "12px", fontWeight: 800, letterSpacing: "0.2em", borderRadius: "2px" }}>BECOME A MEMBER</Link>
        </div>
      </section>
    </div>
  );
}