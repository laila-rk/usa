import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MapPin, Calendar, Clock, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const agility = "https://images.unsplash.com/photo-1604182969927-7cdb799fce1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBhZ2lsaXR5JTIwZXZlbnQlMjBvdXRkb29yJTIwc3BvcnRzfGVufDF8fHx8MTc3MzA2ODE3N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const showImg = "https://images.unsplash.com/photo-1646124827940-275c917c7e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBzaG93JTIwY29tcGV0aXRpb24lMjBjaGFtcGlvbnNoaXB8ZW58MXx8fHwxNzczMDY4MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080";
const outdoorImg = "https://images.unsplash.com/photo-1762445332687-59c092b43d4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBvdXRkb29yJTIwbmF0dXJlJTIwdHJhaWwlMjBhdXR1bW58ZW58MXx8fHwxNzczMDY4MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const runImg = "https://images.unsplash.com/photo-1595130066344-fc1d365ab904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaWVsJTIwZG9nJTIwcnVubmluZyUyMGZpZWxkJTIwZ29sZGVuJTIwaG91cnxlbnwxfHx8fDE3NzMwNjgxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const allEvents = [
  {
    id: 1,
    date: "April 12",
    year: "2026",
    title: "Spring Field Trial",
    type: "Field Trial",
    location: "Shenandoah Valley, VA",
    time: "7:00 AM – 5:00 PM",
    desc: "Join us for our annual spring field trial on the rolling hills of Shenandoah Valley. Open to all AKC-registered Brittanys. Judges: Richard Harlow & Susan Cleaver.",
    img: runImg,
    featured: true,
  },
  {
    id: 2,
    date: "May 8",
    year: "2026",
    title: "Conformation Specialty Show",
    type: "Dog Show",
    location: "Fairfax County Fairgrounds, VA",
    time: "9:00 AM – 4:00 PM",
    desc: "Our prestigious annual specialty show sanctioned by the AKC. Classes from 6 months through Veterans. Sweepstakes, Best of Breed, and Group competition.",
    img: showImg,
    featured: true,
  },
  {
    id: 3,
    date: "June 22",
    year: "2026",
    title: "Hunt Test Weekend",
    type: "Hunt Test",
    location: "Culpeper, VA",
    time: "6:30 AM – 3:00 PM",
    desc: "Two-day AKC Hunt Test offering Junior, Senior, and Master levels. A great way to earn titles on your Brittany and test their natural hunting instincts.",
    img: outdoorImg,
    featured: false,
  },
  {
    id: 4,
    date: "July 19",
    year: "2026",
    title: "Summer Agility Fun Match",
    type: "Agility",
    location: "Prince William County, VA",
    time: "8:00 AM – 2:00 PM",
    desc: "A fun, informal agility match for dogs of all skill levels. Perfect for practicing before an official trial. Open to all breeds — bring your Brittany and have fun!",
    img: agility,
    featured: false,
  },
  {
    id: 5,
    date: "September 14",
    year: "2026",
    title: "Annual Membership Picnic",
    type: "Social",
    location: "Burke Lake Park, VA",
    time: "11:00 AM – 4:00 PM",
    desc: "Celebrate the season with fellow NVBC members! BBQ, games, costume contest, and the beloved 'Best Brittany Trick' competition. Dogs welcome.",
    img: showImg,
    featured: false,
  },
  {
    id: 6,
    date: "October 3",
    year: "2026",
    title: "Fall Field Trial Championship",
    type: "Field Trial",
    location: "Loudoun County, VA",
    time: "7:00 AM – 6:00 PM",
    desc: "The premiere field event of the year. Championship and Amateur Championship stakes. Points towards national rankings. Early entry required.",
    img: runImg,
    featured: true,
  },
];

const types = ["All", "Field Trial", "Dog Show", "Hunt Test", "Agility", "Social"];

export default function Events() {
  const [activeType, setActiveType] = useState("All");

  const filtered = activeType === "All" ? allEvents : allEvents.filter((e) => e.type === activeType);

  return (
    <div style={{ background: "#080c18", paddingTop: "100px" }}>
      {/* Page Header */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #111828 100%)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${agility})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.1 }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.3em", marginBottom: "16px" }}>
            CALENDAR
          </div>
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#ffffff",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: "1.15",
              marginBottom: "20px",
            }}
          >
            Events & Activities
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Playfair Display', serif", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: "1.7" }}>
            Field trials, specialty shows, hunt tests, and social events — there's always something exciting happening at NVBC.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Featured Events */}
        <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "20px" }}>
          FEATURED EVENTS
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {allEvents.filter((e) => e.featured).slice(0, 2).map((ev) => (
            <div
              key={ev.id}
              style={{
                background: "linear-gradient(135deg, rgba(15,22,45,0.8), rgba(10,14,26,0.8))",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.4)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.2)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                <ImageWithFallback src={ev.img} alt={ev.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(8,12,24,0.9))" }} />
                <div className="absolute top-4 left-4">
                  <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97E)", color: "#080c18", padding: "4px 14px", borderRadius: "2px", fontFamily: "'Cinzel', serif", fontSize: "9px", letterSpacing: "0.15em", fontWeight: 700 }}>
                    {ev.type}
                  </span>
                </div>
              </div>
              <div style={{ padding: "24px 28px" }}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2" style={{ color: "#C9A84C", fontSize: "13px", fontFamily: "'Cinzel', serif" }}>
                    <Calendar size={14} /> {ev.date}, {ev.year}
                  </div>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "22px", marginBottom: "12px", lineHeight: "1.3" }}>
                  {ev.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif", fontSize: "13px", lineHeight: "1.7", marginBottom: "16px" }}>
                  {ev.desc}
                </p>
                <div className="flex flex-wrap gap-4 text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.45)" }}>
                  <span className="flex items-center gap-1"><MapPin size={12} style={{ color: "#C9A84C" }} /> {ev.location}</span>
                  <span className="flex items-center gap-1"><Clock size={12} style={{ color: "#C9A84C" }} /> {ev.time}</span>
                </div>
              </div>
              <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", padding: "16px 28px", display: "flex", justifyContent: "flex-end" }}>
                <button
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
                    color: "#080c18",
                    padding: "10px 24px",
                    borderRadius: "2px",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  REGISTER <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Filter + All Events */}
        <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "20px" }}>
          ALL EVENTS
        </div>
        <div className="flex flex-wrap gap-2 mb-10">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              style={{
                background: activeType === t ? "linear-gradient(135deg, #C9A84C, #E8C97E)" : "rgba(255,255,255,0.05)",
                color: activeType === t ? "#080c18" : "rgba(255,255,255,0.6)",
                border: activeType === t ? "none" : "1px solid rgba(255,255,255,0.1)",
                padding: "8px 20px",
                borderRadius: "2px",
                fontFamily: "'Cinzel', serif",
                fontSize: "10px",
                letterSpacing: "0.12em",
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontWeight: activeType === t ? 700 : 400,
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {filtered.map((ev) => (
            <div
              key={ev.id}
              style={{
                background: "linear-gradient(135deg, rgba(15,22,45,0.7), rgba(10,14,26,0.7))",
                border: "1px solid rgba(201,168,76,0.12)",
                borderRadius: "8px",
                padding: "24px 28px",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: "24px",
                alignItems: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.3)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.12)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
              }}
            >
              {/* Date box */}
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))",
                  border: "1px solid rgba(201,168,76,0.25)",
                  borderRadius: "6px",
                  padding: "12px 16px",
                  textAlign: "center",
                  minWidth: "80px",
                }}
              >
                <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "20px", fontWeight: 700, lineHeight: 1 }}>
                  {ev.date.split(" ")[1]}
                </div>
                <div style={{ fontFamily: "'Cinzel', serif", color: "rgba(201,168,76,0.7)", fontSize: "11px", letterSpacing: "0.1em" }}>
                  {ev.date.split(" ")[0]}
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="flex flex-wrap gap-2 items-center mb-2">
                  <span style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "2px", padding: "2px 10px", fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "9px", letterSpacing: "0.15em" }}>
                    {ev.type}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "18px", marginBottom: "8px" }}>{ev.title}</h3>
                <div className="flex flex-wrap gap-4" style={{ fontSize: "12px", fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.45)" }}>
                  <span className="flex items-center gap-1"><MapPin size={11} style={{ color: "#C9A84C" }} /> {ev.location}</span>
                  <span className="flex items-center gap-1"><Clock size={11} style={{ color: "#C9A84C" }} /> {ev.time}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                style={{
                  border: "1px solid rgba(201,168,76,0.4)",
                  color: "#C9A84C",
                  padding: "10px 20px",
                  borderRadius: "2px",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  background: "transparent",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,168,76,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }}
              >
                DETAILS <ArrowRight size={11} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
