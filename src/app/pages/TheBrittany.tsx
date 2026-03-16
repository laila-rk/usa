import React from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

// LOCAL ASSET IMPORTS (Based on your folder structure)
const brittanyPortrait = "/src/assets/images/why a brittany/brittanyPortrait.jpg";
const huntingImg = "/src/assets/images/why a brittany/huntingImg.jpg";
const outdoorImg = "/src/assets/images/why a brittany/outdoorImg.jpg";
const puppyImg = "/src/assets/images/why a brittany/puppyImg.jpg";
const runningImg = "/src/assets/images/why a brittany/runningImg.jpg";
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
    <div style={{ background: "#ffffff" }}>
      
      {/* SECTION 1: HERO HEADER (Centered) */}
      <section
        className="relative overflow-hidden"
        style={{ 
          height: "100vh", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          background: "#06080B" 
        }}
      >
        <div className="absolute inset-0">
          <ImageWithFallback 
            src={brittanyPortrait} 
            alt="Brittany Spaniel" 
            className="w-full h-full object-cover" 
            style={{ objectPosition: "center 25%", opacity: 0.55 }} 
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,8,11,0.95) 0%, rgba(6,8,11,0.4) 50%, rgba(6,8,11,0.95) 100%)" }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 flex flex-col items-center text-center">
          {/* Gold Liner */}
          <div style={{ width: "60px", height: "1px", background: "#C9A84C", marginBottom: "32px" }} />
          
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "12px", letterSpacing: "0.4em", marginBottom: "16px", fontWeight: 800 }}>
            BREED INFORMATION
          </div>
          
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#ffffff",
              fontSize: "clamp(48px, 8vw, 90px)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: "1.1",
              marginBottom: "30px",
            }}
          >
            Why a Brittany
          </h1>
          
          <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter', sans-serif", fontSize: "20px", maxWidth: "650px", lineHeight: "1.7", fontWeight: 300 }}>
            Versatile. Spirited. Devoted. The perfect partnership between field champion and beloved companion.
          </p>
        </div>
      </section>

      {/* SECTION 2: BREED PROFILE (Left Aligned Content) */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            {/* Gold Liner */}
            <div style={{ width: "40px", height: "1px", background: "#8B6914", marginBottom: "24px" }} />
            
            <div style={{ fontFamily: "'Cinzel', serif", color: "#8B6914", fontSize: "18px", letterSpacing: "0.2em", marginBottom: "16px", fontWeight: 800 }}>
              BREED PROFILE
            </div>
            
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#111111", fontSize: "clamp(32px, 4vw, 48px)", lineHeight: "1.2", marginBottom: "28px", fontWeight: 700 }}>
              AKC Breed Standard Overview
            </h2>
            
            <p style={{ color: "rgba(0,0,0,0.65)", lineHeight: "1.9", marginBottom: "40px", fontFamily: "'Inter', sans-serif", fontSize: "16px" }}>
              The Brittany is a compact, closely-knit dog of medium size, a leggy dog having the appearance and qualifications of a capable bird dog with a keen, intelligent expression.
            </p>

            {/* Characteristics Grid with Gold Top Border */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {characteristics.map(({ label, value }, i) => (
                <div
                  key={i}
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.06)",
                    borderTop: "3px solid #C9A84C", // Gold Top Border
                    borderRadius: "2px",
                    padding: "24px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.02)"
                  }}
                >
                  <div style={{ fontFamily: "'Cinzel', serif", color: "#8B6914", fontSize: "10px", fontWeight: 800, letterSpacing: "0.1em", marginBottom: "6px" }}>
                    {label}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", color: "#111111", fontSize: "15px", fontWeight: 500 }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block" style={{ perspective: "1500px" }}>
            <div style={{ position: "absolute", inset: 0, transform: "rotateY(-5deg)", borderRadius: "4px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.12)" }}>
              <ImageWithFallback src={huntingImg} alt="Brittany Hunting" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRAITS (Gold Background) */}
      <section style={{ background: "#f8de91", padding: "120px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Gold Liner */}
              <div style={{ width: "40px", height: "1px", background: "#644c10", marginBottom: "24px" }} />
              
              <div style={{ fontFamily: "'Cinzel', serif", color: "#644c10", fontSize: "18px", letterSpacing: "0.25em", marginBottom: "16px", fontWeight: 800 }}>
                TEMPERAMENT & TRAITS
              </div>
              
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#111111", fontSize: "clamp(32px, 4vw, 42px)", lineHeight: "1.3", marginBottom: "32px", fontWeight: 700 }}>
                What Makes the Brittany Unique
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                {traits.map((trait, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle size={18} style={{ color: "#8B6914", flexShrink: 0 }} />
                    <span style={{ color: "#333333", fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 500 }}>{trait}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to="/become-a-member"
                className="inline-flex items-center gap-2 mt-12"
                style={{
                  background: "#111111",
                  color: "#ffffff",
                  padding: "16px 36px",
                  borderRadius: "2px",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  fontWeight: 800,
                }}
              >
                JOIN THE CLUB <ArrowRight size={14} />
              </Link>
            </div>
            
            <div style={{ borderRadius: "2px", overflow: "hidden", border: "8px solid #ffffff", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
              <ImageWithFallback src={outdoorImg} alt="Brittany Outdoors" className="w-full object-cover" style={{ height: "550px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HISTORY (Centered Header + Gold Top Border Cards) */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20 flex flex-col items-center">
          {/* Centered Gold Liner */}
          <div style={{ width: "40px", height: "1px", background: "#8B6914", marginBottom: "24px" }} />
          
          <div style={{ fontFamily: "'Cinzel', serif", color: "#8B6914", fontSize: "18px", letterSpacing: "0.3em", marginBottom: "12px", fontWeight: 800 }}>
            HERITAGE
          </div>
          
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#111111", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700 }}>
            A Rich Breed History
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {breedHistory.map(({ title, desc }, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.06)",
                borderTop: "4px solid #C9A84C", // Gold Top Border
                padding: "45px",
                borderRadius: "2px",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "18px", fontWeight: 800, marginBottom: "20px" }}>
                0{i + 1}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#111111", fontSize: "26px", marginBottom: "18px", fontWeight: 700 }}>
                {title}
              </h3>
              <p style={{ color: "rgba(0,0,0,0.6)", fontFamily: "'Inter', sans-serif", fontSize: "16px", lineHeight: "1.8" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CTA (Centered Footer) */}
      <section
        className="relative overflow-hidden py-32"
        style={{ background: "#080c18" }}
      >
        <div className="absolute inset-0">
          <ImageWithFallback src={puppyImg} alt="Brittany Puppies" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center, transparent 0%, #080c18 100%)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <div style={{ width: "50px", height: "1px", background: "#C9A84C", marginBottom: "32px" }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(32px, 5vw, 56px)", marginBottom: "24px", lineHeight: "1.2", fontStyle: "italic" }}>
            Looking for a Brittany Puppy?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter', sans-serif", fontSize: "18px", lineHeight: "1.8", marginBottom: "48px", fontWeight: 300 }}>
            Contact us to be connected with ethical, health-tested breeders who prioritize temperament and breed standard.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "linear-gradient(135deg, #F7B80B, #E8C97E)",
              color: "#080c18",
              padding: "20px 52px",
              borderRadius: "2px",
              fontFamily: "'Cinzel', serif",
              fontSize: "12px",
              letterSpacing: "0.2em",
              fontWeight: 800,
              boxShadow: "0 10px 40px rgba(247, 184, 11, 0.4)",
            }}
          >
            CONTACT US <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}