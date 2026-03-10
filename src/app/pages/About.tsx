import { Link } from "react-router";
import { ArrowRight, Star, Users, Award, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const dogShowImg = "https://images.unsplash.com/photo-1646124827940-275c917c7e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBzaG93JTIwY29tcGV0aXRpb24lMjBjaGFtcGlvbnNoaXB8ZW58MXx8fHwxNzczMDY4MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080";
const memberImg = "https://images.unsplash.com/photo-1655848117690-74fb13fdd993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBicmVlZCUyMGNsdWIlMjBtZW1iZXJzaGlwJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MzA2ODE3NXww&ixlib=rb-4.1.0&q=80&w=1080";
const countryImg = "https://images.unsplash.com/photo-1560979290-aedae3a87139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY291bnRyeSUyMGVzdGF0ZSUyMGxhbmRzY2FwZSUyMHZpcmdpbmlhfGVufDF8fHx8MTc3MzA2ODE3N3ww&ixlib=rb-4.1.0&q=80&w=1080";

const milestones = [
  { year: "1973", title: "Club Founded", desc: "A group of dedicated Brittany enthusiasts established NVBC in Northern Virginia." },
  { year: "1975", title: "First Specialty Show", desc: "Our inaugural conformation specialty attracted entries from across the East Coast." },
  { year: "1988", title: "AKC Recognition", desc: "NVBC became an official American Kennel Club member club." },
  { year: "2005", title: "Hunt Test Program", desc: "Launched our comprehensive hunting test program, now one of the region's finest." },
  { year: "2015", title: "300th Champion", desc: "Celebrated our 300th AKC Champion produced by NVBC members." },
  { year: "2024", title: "Digital Expansion", desc: "Modernized our outreach with online resources and virtual programming." },
];

const boardMembers = [
  { name: "Margaret Holloway", role: "Club President" },
  { name: "Thomas R. Ashford", role: "Vice President" },
  { name: "Diana Chen", role: "Secretary" },
  { name: "Robert Sullivan", role: "Treasurer" },
  { name: "Patricia Merritt", role: "Show Chair" },
  { name: "James Whitfield", role: "Field Trial Chair" },
];

const values = [
  { Icon: Star, title: "Excellence", desc: "We hold ourselves and our dogs to the highest standards in every endeavor." },
  { Icon: Users, title: "Community", desc: "Building lasting friendships among Brittany lovers across the region." },
  { Icon: Award, title: "Heritage", desc: "Preserving the unique qualities that make the Brittany breed exceptional." },
  { Icon: Target, title: "Education", desc: "Empowering owners with knowledge to give their Brittanys the best life." },
];

export default function About() {
  return (
    <div style={{ background: "#080c18", paddingTop: "100px" }}>
      {/* Page Header */}
      <section
        className="relative overflow-hidden py-24"
        style={{
          background: "linear-gradient(135deg, #0a0e1a 0%, #111828 100%)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${countryImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.3em", marginBottom: "16px" }}>
            ABOUT US
          </div>
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#ffffff",
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: "1.15",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            About NVBC
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Playfair Display', serif", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: "1.7" }}>
            Five decades of devotion to the Brittany breed — our story, our mission, and our people.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "16px" }}>
              OUR MISSION
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#ffffff",
                fontSize: "clamp(26px, 3vw, 42px)",
                lineHeight: "1.3",
                marginBottom: "24px",
              }}
            >
              Preserving Excellence, Building Community
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.9", marginBottom: "20px", fontFamily: "'Inter', sans-serif", fontSize: "15px" }}>
              The Northern Virginia Brittany Club exists to promote the Brittany breed as described in the breed standard, to protect and advance the interests of the breed and its owners, and to educate the public about responsible Brittany ownership.
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.9", marginBottom: "20px", fontFamily: "'Inter', sans-serif", fontSize: "15px" }}>
              We are committed to supporting activities that develop the Brittany's natural working abilities while ensuring our breed exemplifies the ideal companion and show dog. Through field trials, conformation events, hunt tests, and educational programs, NVBC members live the motto: "Work hard. Show beautifully. Love deeply."
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.9", fontFamily: "'Inter', sans-serif", fontSize: "15px" }}>
              We are an AKC member club and affiliate of the American Brittany Club. Our members span from seasoned professionals and breeders to first-time Brittany owners — all united by a love for this remarkable breed.
            </p>
          </div>
          <div
            style={{
              perspective: "1000px",
            }}
          >
            <div
              style={{
                transform: "rotateY(-5deg) rotateX(3deg)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.2)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <ImageWithFallback src={dogShowImg} alt="Dog Show" className="w-full object-cover" style={{ height: "460px" }} />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-14">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "12px" }}>
            OUR VALUES
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(26px, 3vw, 40px)" }}>
            What Drives Us
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, rgba(15,22,45,0.6), rgba(10,14,26,0.6))",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "10px",
                padding: "32px 24px",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.4)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.15)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C9A84C",
                  margin: "0 auto 20px",
                }}
              >
                <Icon size={24} />
              </div>
              <h3 style={{ fontFamily: "'Cinzel', serif", color: "#ffffff", fontSize: "14px", letterSpacing: "0.05em", marginBottom: "12px" }}>
                {title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: "1.7", fontFamily: "'Inter', sans-serif" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "linear-gradient(135deg, #0a0e1a, #0d1424)", padding: "80px 0", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "12px" }}>
              OUR JOURNEY
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(26px, 3vw, 40px)" }}>
              Club History & Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Center line */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0"
              style={{ width: "1px", background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.4), transparent)", transform: "translateX(-50%)" }}
            />

            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div
                      style={{
                        background: "linear-gradient(135deg, rgba(15,22,45,0.8), rgba(10,14,26,0.8))",
                        border: "1px solid rgba(201,168,76,0.15)",
                        borderRadius: "8px",
                        padding: "24px",
                        display: "inline-block",
                        maxWidth: "360px",
                        textAlign: "left",
                      }}
                    >
                      <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "22px", fontWeight: 700, marginBottom: "6px" }}>
                        {m.year}
                      </div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "18px", marginBottom: "8px" }}>{m.title}</h3>
                      <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: "1.7", fontFamily: "'Inter', sans-serif" }}>{m.desc}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div
                    className="hidden md:flex items-center justify-center"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
                      boxShadow: "0 0 20px rgba(201,168,76,0.5)",
                      flexShrink: 0,
                    }}
                  />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "12px" }}>
            LEADERSHIP
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(26px, 3vw, 40px)" }}>
            Board of Directors
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boardMembers.map((member, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, rgba(15,22,45,0.6), rgba(10,14,26,0.6))",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "8px",
                padding: "28px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.15)";
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C9A84C",
                  fontSize: "18px",
                  fontFamily: "'Cinzel', serif",
                  flexShrink: 0,
                }}
              >
                {member.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "15px", marginBottom: "4px" }}>
                  {member.name}
                </div>
                <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "10px", letterSpacing: "0.15em" }}>
                  {member.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
