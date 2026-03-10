import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Star, Trophy, Medal } from "lucide-react";

const awardImg = "https://images.unsplash.com/photo-1597509560792-796c8682d017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBjbHViJTIwYXdhcmQlMjB0cm9waHklMjBjZXJlbW9ueXxlbnwxfHx8fDE3NzMwNjgxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const ribbonImg = "https://images.unsplash.com/photo-1557674535-46bcc4ef6c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZG9nJTIwc2hvdyUyMHdpbm5lciUyMHJpYmJvbnxlbnwxfHx8fDE3NzMwNjgxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const showImg = "https://images.unsplash.com/photo-1646124827940-275c917c7e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBzaG93JTIwY29tcGV0aXRpb24lMjBjaGFtcGlvbnNoaXB8ZW58MXx8fHwxNzczMDY4MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080";

const awardsData = [
  {
    category: "Best of Breed",
    year: 2025,
    dog: "CH Shenandoah's Golden Pride",
    owner: "Margaret & William Holloway",
    handler: "Thomas R. Ashford",
    show: "NVBC Annual Specialty Show",
    icon: Trophy,
  },
  {
    category: "Best of Opposite Sex",
    year: 2025,
    dog: "GCH Virginia's Lady Elara",
    owner: "Patricia & James Merritt",
    handler: "Diana Chen",
    show: "NVBC Annual Specialty Show",
    icon: Star,
  },
  {
    category: "Best in Field",
    year: 2025,
    dog: "FC Loudoun's Copper Arrow",
    owner: "Robert & Susan Sullivan",
    handler: "James Whitfield",
    show: "NVBC Fall Field Trial Championship",
    icon: Award,
  },
  {
    category: "Dual Champion",
    year: 2025,
    dog: "DC Blue Ridge Maverick",
    owner: "Andrew & Carol Reynolds",
    handler: "Self-handled",
    show: "Multiple Events",
    icon: Medal,
  },
  {
    category: "Best of Winners",
    year: 2025,
    dog: "Fairfax Summit's Bright Star",
    owner: "Carolyn Murphy",
    handler: "Emily Davis",
    show: "NVBC Spring Specialty",
    icon: Trophy,
  },
  {
    category: "AKC Hunt Test Master Hunter",
    year: 2025,
    dog: "MH Shenandoah's Scout",
    owner: "David & Helen Porter",
    handler: "David Porter",
    show: "NVBC Hunt Test Weekend",
    icon: Award,
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
    <div style={{ background: "#080c18", paddingTop: "100px" }}>
      {/* Page Header */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "50vh", display: "flex", alignItems: "center" }}
      >
        <div className="absolute inset-0">
          <ImageWithFallback src={ribbonImg} alt="Awards" className="w-full h-full object-cover" style={{ objectPosition: "center" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,12,24,0.93) 0%, rgba(8,12,24,0.7) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.3em", marginBottom: "16px" }}>
            RECOGNITION
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
            Awards & Champions
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Playfair Display', serif", fontSize: "18px", maxWidth: "550px", lineHeight: "1.7" }}>
            Celebrating the extraordinary dogs and dedicated owners who represent the very best of the Brittany breed.
          </p>
        </div>
      </section>

      {/* 2025 Award Winners */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "12px" }}>
            2025 SEASON
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(28px, 4vw, 46px)", lineHeight: "1.2" }}>
            Annual Award Winners
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsData.map(({ category, year, dog, owner, handler, show, icon: Icon }, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, rgba(15,22,45,0.8), rgba(10,14,26,0.8))",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "12px",
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.4)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 60px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.15)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* BG decoration */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
                }}
              />

              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C9A84C",
                  marginBottom: "20px",
                }}
              >
                <Icon size={22} />
              </div>

              <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "10px", letterSpacing: "0.2em", marginBottom: "8px" }}>
                {category}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "18px", lineHeight: "1.3", marginBottom: "16px" }}>
                {dog}
              </h3>

              <div style={{ height: "1px", background: "rgba(201,168,76,0.12)", marginBottom: "16px" }} />

              <div className="flex flex-col gap-2">
                {[
                  { label: "Owner", val: owner },
                  { label: "Handler", val: handler },
                  { label: "Show", val: show },
                ].map(({ label, val }) => (
                  <div key={label} className="flex gap-2">
                    <span style={{ fontFamily: "'Cinzel', serif", color: "rgba(201,168,76,0.6)", fontSize: "9px", letterSpacing: "0.1em", minWidth: "55px", paddingTop: "1px" }}>
                      {label}
                    </span>
                    <span style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "12px" }}>{val}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
                  color: "#080c18",
                  padding: "3px 10px",
                  borderRadius: "2px",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  fontWeight: 700,
                }}
              >
                {year}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hall of Fame */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a0e1a, #0d1424)",
          padding: "80px 0",
          borderTop: "1px solid rgba(201,168,76,0.1)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "12px" }}>
              LEGACY
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(28px, 4vw, 46px)", lineHeight: "1.2" }}>
              NVBC Hall of Fame
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", fontSize: "15px", maxWidth: "550px", margin: "16px auto 0", lineHeight: "1.7" }}>
              These extraordinary dogs have left an indelible mark on the Brittany breed and the NVBC legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {hallOfFame.map(({ dog, year, titles, desc }, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02))",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "10px",
                  padding: "32px",
                  display: "flex",
                  gap: "20px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.2)";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 6px 20px rgba(201,168,76,0.4)",
                  }}
                >
                  <Trophy size={22} style={{ color: "#080c18" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "9px", letterSpacing: "0.15em", marginBottom: "6px" }}>
                    INDUCTED {year} · {titles}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "19px", marginBottom: "10px" }}>{dog}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif", fontSize: "13px", lineHeight: "1.7" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award Process */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 30px 70px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.15)" }}>
            <ImageWithFallback src={awardImg} alt="Award Ceremony" className="w-full object-cover" style={{ height: "460px" }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "16px" }}>
              NOMINATIONS
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(26px, 3vw, 42px)", lineHeight: "1.3", marginBottom: "24px" }}>
              How Our Awards Work
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.9", marginBottom: "20px", fontFamily: "'Inter', sans-serif", fontSize: "15px" }}>
              NVBC awards are presented at our Annual Awards Banquet each January. Nominations are accepted from all active club members throughout the year.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { step: "01", title: "Submit Nomination", desc: "Any NVBC member may nominate a dog or member for recognition by the December 1 deadline." },
                { step: "02", title: "Committee Review", desc: "Our Awards Committee evaluates all nominations based on accomplishments, sportsmanship, and breed contributions." },
                { step: "03", title: "Member Vote", desc: "Select awards are voted on by the general membership for transparency and community engagement." },
                { step: "04", title: "Annual Banquet", desc: "Winners are announced and honored at our prestigious Annual Awards Banquet in January." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "22px", fontWeight: 700, minWidth: "36px" }}>{step}</div>
                  <div>
                    <div style={{ fontFamily: "'Cinzel', serif", color: "#ffffff", fontSize: "13px", letterSpacing: "0.05em", marginBottom: "4px" }}>{title}</div>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", fontSize: "13px", lineHeight: "1.6" }}>{desc}</p>
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
