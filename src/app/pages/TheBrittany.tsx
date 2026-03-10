import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";

const brittanyPortrait = "https://images.unsplash.com/photo-1765817345131-fc0c44f1b89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcml0dGFueSUyMHNwYW5pZWwlMjBkb2clMjBwb3J0cmFpdCUyMGVsZWdhbnR8ZW58MXx8fHwxNzczMDY4MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const huntingImg = "https://images.unsplash.com/photo-1772814356222-a81ede5102b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjB3aGl0ZSUyMGh1bnRpbmclMjBkb2clMjBiaXJkJTIwZmllbGR8ZW58MXx8fHwxNzczMDY4MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080";
const runningImg = "https://images.unsplash.com/photo-1595130066344-fc1d365ab904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaWVsJTIwZG9nJTIwcnVubmluZyUyMGZpZWxkJTIwZ29sZGVuJTIwaG91cnxlbnwxfHx8fDE3NzMwNjgxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080";
const puppyImg = "https://images.unsplash.com/photo-1767457107942-4a7c5dd99cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBwdXBweSUyMGN1dGUlMjBmYW1pbHl8ZW58MXx8fHwxNzczMDY4MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080";
const outdoorImg = "https://images.unsplash.com/photo-1762445332687-59c092b43d4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBvdXRkb29yJTIwbmF0dXJlJTIwdHJhaWwlMjBhdXR1bW58ZW58MXx8fHwxNzczMDY4MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080";

const characteristics = [
  { label: "Height", value: "17.5 – 20.5 inches" },
  { label: "Weight", value: "30 – 40 pounds" },
  { label: "Life Expectancy", value: "12 – 14 years" },
  { label: "Coat Type", value: "Dense, flat or wavy" },
  { label: "Colors", value: "Orange & White, Liver & White, Roan" },
  { label: "Group", value: "AKC Sporting Group" },
  { label: "Temperament", value: "Eager, Intelligent, Quick" },
  { label: "Exercise Needs", value: "High — 2+ hours daily" },
];

const traits = [
  "Exceptional hunting instincts and nose",
  "Naturally versatile in field and show ring",
  "Affectionate and gentle with family",
  "Highly trainable and eager to please",
  "Good with children and other pets",
  "Alert and energetic — loves the outdoors",
  "Compact and athletic build",
  "Minimal grooming required",
];

const breedHistory = [
  {
    title: "Origins in France",
    desc: "The Brittany originated in the Brittany province of France, likely in the 17th century. Early paintings and tapestries depict orange-and-white dogs resembling today's Brittany, hunting alongside falconers.",
  },
  {
    title: "Development in the 1800s",
    desc: "Systematic breeding began in earnest, with crosses to Welsh and English Spaniels improving the breed's working ability. The name 'Brittany Spaniel' became common, though 'Spaniel' was later dropped by the AKC.",
  },
  {
    title: "AKC Recognition",
    desc: "The American Kennel Club recognized the Brittany in 1934. The breed quickly rose to prominence in the U.S., appreciated for its versatility as both a bird dog and a conformation show competitor.",
  },
  {
    title: "Today's Champion",
    desc: "The modern Brittany is the only sporting breed that can earn dual championships in both field and conformation — a testament to the breed's extraordinary versatility and balanced temperament.",
  },
];

export default function WhyBrittany() {
  return (
    <div style={{ background: "#080c18", paddingTop: "100px" }}>
      {/* Page Header */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}
      >
        <div className="absolute inset-0">
          <ImageWithFallback src={brittanyPortrait} alt="Brittany Spaniel" className="w-full h-full object-cover" style={{ objectPosition: "center 25%" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,12,24,0.92) 0%, rgba(8,12,24,0.65) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.3em", marginBottom: "16px" }}>
            BREED INFORMATION
          </div>
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#ffffff",
              fontSize: "clamp(40px, 6vw, 80px)",
              fontWeight: 700,
              lineHeight: "1.1",
              marginBottom: "20px",
            }}
          >
            The Brittany
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Playfair Display', serif", fontSize: "20px", maxWidth: "600px", lineHeight: "1.7" }}>
            Versatile. Spirited. Devoted. The perfect partnership between field champion and beloved companion.
          </p>
        </div>
      </section>

      {/* Breed Standard Summary */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "16px" }}>
              BREED PROFILE
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(26px, 3vw, 42px)", lineHeight: "1.3", marginBottom: "24px" }}>
              AKC Breed Standard Overview
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.9", marginBottom: "20px", fontFamily: "'Inter', sans-serif" }}>
              The Brittany is a compact, closely-knit dog of medium size, a leggy dog having the appearance and qualifications of a capable bird dog with a keen, intelligent expression. Energetic, quick of movement but not without style, and having the vigor of the hunting dog.
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.9", marginBottom: "36px", fontFamily: "'Inter', sans-serif" }}>
              The coat should be dense, flat, or wavy (never curly) and should not be so fine as to require excessive grooming. The Brittany should never appear heavy, fat, or clumsy.
            </p>

            {/* Characteristics Grid */}
            <div className="grid grid-cols-2 gap-3">
              {characteristics.map(({ label, value }, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(201,168,76,0.05)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    borderRadius: "6px",
                    padding: "14px 16px",
                  }}
                >
                  <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "9px", letterSpacing: "0.15em", marginBottom: "4px" }}>
                    {label}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", color: "#ffffff", fontSize: "13px" }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Stack of images */}
          <div className="relative" style={{ height: "550px", perspective: "1000px" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "40px",
                right: 0,
                height: "400px",
                transform: "rotateY(-8deg) rotateX(4deg)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.2)",
              }}
            >
              <ImageWithFallback src={huntingImg} alt="Brittany Hunting" className="w-full h-full object-cover" />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "0px",
                left: "0",
                width: "220px",
                transform: "rotateY(6deg) rotateX(-3deg)",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,168,76,0.25)",
                border: "2px solid rgba(201,168,76,0.3)",
              }}
            >
              <ImageWithFallback src={runningImg} alt="Brittany Running" className="w-full object-cover" style={{ height: "200px" }} />
              <div style={{ background: "linear-gradient(135deg, #0a0e1a, #111828)", padding: "12px 16px", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
                <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "9px", letterSpacing: "0.15em" }}>FIELD EXCELLENCE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breed Traits */}
      <section style={{ background: "linear-gradient(135deg, #0a0e1a, #0d1424)", padding: "80px 0", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "16px" }}>
                TEMPERAMENT & TRAITS
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(26px, 3vw, 42px)", lineHeight: "1.3", marginBottom: "32px" }}>
                What Makes the Brittany Unique
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {traits.map((trait, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: "#C9A84C", flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter', sans-serif", fontSize: "14px" }}>{trait}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/become-a-member"
                className="inline-flex items-center gap-2 mt-10"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
                  color: "#080c18",
                  padding: "14px 32px",
                  borderRadius: "2px",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  fontWeight: 700,
                  boxShadow: "0 6px 24px rgba(201,168,76,0.4)",
                }}
              >
                JOIN THE CLUB <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 30px 70px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.15)" }}>
              <ImageWithFallback src={outdoorImg} alt="Brittany Outdoors" className="w-full object-cover" style={{ height: "500px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Breed History */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "12px" }}>
            HERITAGE
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(26px, 3vw, 40px)" }}>
            A Rich Breed History
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {breedHistory.map(({ title, desc }, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, rgba(15,22,45,0.6), rgba(10,14,26,0.6))",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "10px",
                padding: "32px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.35)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.15)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.15em", marginBottom: "10px" }}>
                0{i + 1}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "20px", marginBottom: "14px" }}>{title}</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "1.8" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Puppy section */}
      <section
        className="relative overflow-hidden py-24"
        style={{ borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}
      >
        <div className="absolute inset-0">
          <ImageWithFallback src={puppyImg} alt="Brittany Puppies" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(8,12,24,0.82)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "12px" }}>
            FIND YOUR COMPANION
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(28px, 4vw, 50px)", marginBottom: "20px", lineHeight: "1.2" }}>
            Looking for a Brittany Puppy?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter', sans-serif", fontSize: "16px", lineHeight: "1.8", marginBottom: "36px" }}>
            NVBC members include some of the most respected Brittany breeders on the East Coast. Contact us to be connected with ethical, health-tested breeders who prioritize temperament and breed standard.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
              color: "#080c18",
              padding: "16px 40px",
              borderRadius: "2px",
              fontFamily: "'Cinzel', serif",
              fontSize: "12px",
              letterSpacing: "0.15em",
              fontWeight: 700,
              boxShadow: "0 8px 30px rgba(201,168,76,0.4)",
            }}
          >
            CONTACT US <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
