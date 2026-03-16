import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Star, Trophy, Medal } from "lucide-react";

/* ─── Assets ─────────────────────────────────────────────────────── */
const awardImg = "https://images.unsplash.com/photo-1597509560792-796c8682d017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBjbHViJTIwYXdhcmQlMjB0cm9waHklMjBjZXJlbW9ueXxlbnwxfHx8fDE3NzMwNjgxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080";
import awards from "../../assets/images/annual-awards/awards.jpg";

/* ─── Design Tokens (Synced with Events Page) ────────────────────── */
const C = {
  white: "#ffffff",
  offwhite: "#FAF7F0",
  navy: "#080c18",
  charcoal: "#111111",
  textBody: "#666666",
  gold: "#C9A84C",
  goldLight: "#E8C97E",
  border: "rgba(0,0,0,0.08)",
  accentBlue: "#2563eb",
};

/* ─── Data ───────────────────────────────────────────────────────── */
const awardsData = [
  {
    category: "Best of Breed",
    year: 2025,
    dog: "CH Shenandoah's Golden Pride",
    owner: "Margaret & William Holloway",
    handler: "Thomas R. Ashford",
    show: "NVBC Annual Specialty Show",
    icon: Trophy,
    color: "#C9A84C",
  },
  {
    category: "Best of Opposite Sex",
    year: 2025,
    dog: "GCH Virginia's Lady Elara",
    owner: "Patricia & James Merritt",
    handler: "Diana Chen",
    show: "NVBC Annual Specialty Show",
    icon: Star,
    color: "#2563EB",
  },
  {
    category: "Best in Field",
    year: 2025,
    dog: "FC Loudoun's Copper Arrow",
    owner: "Robert & Susan Sullivan",
    handler: "James Whitfield",
    show: "NVBC Fall Field Trial Championship",
    icon: Award,
    color: "#16A34A",
  },
  {
    category: "Dual Champion",
    year: 2025,
    dog: "DC Blue Ridge Maverick",
    owner: "Andrew & Carol Reynolds",
    handler: "Self-handled",
    show: "Multiple Events",
    icon: Medal,
    color: "#DC2626",
  },
  {
    category: "Best of Winners",
    year: 2025,
    dog: "Fairfax Summit's Bright Star",
    owner: "Carolyn Murphy",
    handler: "Emily Davis",
    show: "NVBC Spring Specialty",
    icon: Trophy,
    color: "#7C3AED",
  },
  {
    category: "AKC Hunt Test Master Hunter",
    year: 2025,
    dog: "MH Shenandoah's Scout",
    owner: "David & Helen Porter",
    handler: "David Porter",
    show: "NVBC Hunt Test Weekend",
    icon: Award,
    color: "#F59E0B",
  },
];
const hallOfFame = [
  { dog: "DC Tri-Color Mountain King", year: "2018", titles: "DC, AFC, BROM", desc: "First dual champion produced by NVBC to win National Field Champion." },
  { dog: "GCH Tidewater's Royal Amber", year: "2019", titles: "GCH, BROM", desc: "Won Best of Breed at the National Specialty Show. Dam of 12 champions." },
  { dog: "FC Virginia's Iron Will", year: "2021", titles: "FC, NFC", desc: "National Field Champion. Dominated the field trial circuit for three consecutive years." },
  { dog: "CH Old Dominion's Ivory Grace", year: "2023", titles: "CH, ROM", desc: "Top-ranked Brittany in AKC conformation standings for 2022–2023." },
];

export default function Awards() {
  return (
    <div style={{ background: C.white, minHeight: "100vh" }}>
      {/* --- FULL PAGE HERO SECTION --- */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: "100vh", width: "100%", background: C.navy }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${awards})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(8,12,24,0.6) 0%, transparent 50%, rgba(8,12,24,0.8) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              color: C.gold,
              fontSize: "14px",
              letterSpacing: "0.5em",
              marginBottom: "24px",
              fontWeight: 100,
            }}

          >
            <div
              style={{
                margin: "0 auto 20px auto",
                width: "80px",
                height: "4px",
                background: C.gold
              }}
            />
            RECOGNITION
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: C.white,
              fontSize: "clamp(45px, 9vw, 95px)",
              fontWeight: 700,
              lineHeight: "1.1",
              marginBottom: "32px",
              fontStyle: "italic" // ITALICIZED PER REQUEST
            }}
          >
            Awards &<br />Champions
          </h1>
          <div className="flex justify-center">
          </div>
        </div>
      </section>

      {/* --- 2025 AWARD WINNERS --- */}

      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-center mb-16">
          </div>
          <div

          >
            <div
              style={{
                margin: "0 auto 20px auto",
                width: "80px",
                height: "4px",
                background: C.gold
              }} />
            2025 SEASON
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: C.charcoal,
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700
            }}
          >
            Annual Award Winners
          </h2>



        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsData.map(({ category, year, dog, owner, handler, show, icon: Icon, color }, i) => (
            <div
              key={i}
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                padding: "40px 32px",
                position: "relative",
                transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 30px 60px rgba(0,0,0,0.08)";
                (e.currentTarget as HTMLDivElement).style.borderColor = C.gold;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.03)";
                (e.currentTarget as HTMLDivElement).style.borderColor = C.border;
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: `${color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: color,
                  marginBottom: "24px",
                  borderRadius: "4px",
                }}
              >
                <Icon size={24} />
              </div>

              <div style={{ fontFamily: "'Cinzel', serif", color: C.gold, fontSize: "10px", letterSpacing: "0.2em", marginBottom: "8px", fontWeight: 800 }}>
                {category}
              </div>

              <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.charcoal, fontSize: "22px", lineHeight: "1.3", marginBottom: "20px", fontWeight: 700 }}>
                {dog}
              </h3>

              <div style={{ height: "1px", background: C.border, marginBottom: "20px" }} />

              <div className="flex flex-col gap-3">
                {[
                  { label: "Owner", val: owner },
                  { label: "Handler", val: handler },
                  { label: "Show", val: show },
                ].map(({ label, val }) => (
                  <div key={label} className="flex flex-col">
                    <span style={{ fontFamily: "'Cinzel', serif", color: C.gold, fontSize: "9px", letterSpacing: "0.1em", fontWeight: 700, marginBottom: "2px" }}>
                      {label}
                    </span>
                    <span style={{ fontFamily: "'Inter', sans-serif", color: C.textBody, fontSize: "14px" }}>{val}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "32px",
                  right: "32px",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "18px",
                  fontStyle: "italic",
                  color: C.border,
                  fontWeight: 700,
                }}
              >
                {year}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- HALL OF FAME --- */}
      <section
        style={{
          background: C.goldLight,
          padding: "100px 0",
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div style={{ fontFamily: "'Cinzel', serif", color: C.charcoal, fontSize: "20px", letterSpacing: "0.1em", marginBottom: "12px", fontWeight: 800 }}>
              LEGACY
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.charcoal, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700 }}>
              NVBC Hall of Fame
            </h2>
            <div className="mt-6 flex justify-center">
              <div style={{ width: "100px", height: "7px", background: C.gold }} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {hallOfFame.map(({ dog, year, titles, desc }, i) => (
              <div
                key={i}
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  padding: "40px",
                  display: "flex",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: C.gold,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 10px 20px rgba(201,168,76,0.2)",
                  }}
                >
                  <Trophy size={24} color={C.white} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Cinzel', serif", color: C.gold, fontSize: "10px", letterSpacing: "0.15em", marginBottom: "8px", fontWeight: 800 }}>
                    INDUCTED {year} • {titles}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.charcoal, fontSize: "24px", marginBottom: "12px", fontWeight: 700 }}>{dog}</h3>
                  <p style={{ color: C.textBody, fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "1.7" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AWARD PROCESS --- */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              right: '20px',
              bottom: '20px',
              border: `1px solid ${C.gold}`,
              zIndex: 0
            }} />
            <div style={{ position: 'relative', zIndex: 1, boxShadow: "0 40px 80px rgba(0,0,0,0.1)" }}>
              <ImageWithFallback src={awardImg} alt="Award Ceremony" className="w-full object-cover" style={{ height: "550px" }} />
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'Cinzel', serif", color: C.gold, fontSize: "12px", letterSpacing: "0.25em", marginBottom: "16px", fontWeight: 800 }}>
              NOMINATIONS
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: C.charcoal, fontSize: "clamp(32px, 3.5vw, 44px)", lineHeight: "1.2", marginBottom: "28px", fontWeight: 700 }}>
              The Selection<br />Process
            </h2>
            <p style={{ color: C.textBody, lineHeight: "1.8", marginBottom: "40px", fontFamily: "'Inter', sans-serif", fontSize: "16px" }}>
              Our awards recognize excellence across conformation, field performance, and club service. We follow a rigorous evaluation process to ensure every recipient reflects the highest standards of the NVBC.
            </p>

            <div className="flex flex-col gap-8">
              {[
                { step: "01", title: "Submit Nomination", desc: "Any NVBC member may nominate a dog or member for recognition by the December 1 deadline." },
                { step: "02", title: "Committee Review", desc: "Our Awards Committee evaluates all nominations based on accomplishments, sportsmanship, and breed contributions." },
                { step: "03", title: "Member Vote", desc: "Select awards are voted on by the general membership for transparency and community engagement." },
                { step: "04", title: "Annual Banquet", desc: "Winners are announced and honored at our prestigious Annual Awards Banquet in January." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-6">
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    color: C.gold,
                    fontSize: "28px",
                    fontWeight: 700,
                    minWidth: "40px",
                    lineHeight: 1
                  }}>
                    {step}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Cinzel', serif", color: C.charcoal, fontSize: "14px", letterSpacing: "0.05em", marginBottom: "6px", fontWeight: 800 }}>
                      {title}
                    </div>
                    <p style={{ color: C.textBody, fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "1.6" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}