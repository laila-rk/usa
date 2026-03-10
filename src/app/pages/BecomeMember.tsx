import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CheckCircle, Star, ArrowRight, Users, Award, Calendar, BookOpen } from "lucide-react";
import { useState } from "react";

const memberImg = "https://images.unsplash.com/photo-1655848117690-74fb13fdd993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBicmVlZCUyMGNsdWIlMjBtZW1iZXJzaGlwJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MzA2ODE3NXww&ixlib=rb-4.1.0&q=80&w=1080";
const showImg = "https://images.unsplash.com/photo-1646124827940-275c917c7e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBzaG93JTIwY29tcGV0aXRpb24lMjBjaGFtcGlvbnNoaXB8ZW58MXx8fHwxNzczMDY4MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080";

const tiers = [
  {
    name: "Individual",
    price: "$35",
    period: "per year",
    color: "#3a4a6b",
    accent: "#6b8ec4",
    features: [
      "NVBC quarterly newsletter",
      "Access to member-only events",
      "Voting rights at general meetings",
      "Discounted entry fees at NVBC events",
      "Online member directory access",
    ],
    cta: "Join as Individual",
    popular: false,
  },
  {
    name: "Family",
    price: "$50",
    period: "per year",
    color: "#C9A84C",
    accent: "#E8C97E",
    features: [
      "Everything in Individual",
      "Covers all family members",
      "Priority event registration",
      "Access to breeder referral list",
      "Annual awards banquet admission",
      "Mentorship program access",
    ],
    cta: "Join as Family",
    popular: true,
  },
  {
    name: "Junior",
    price: "$10",
    period: "per year (under 18)",
    color: "#3a5a4a",
    accent: "#5a9a6a",
    features: [
      "NVBC quarterly newsletter",
      "Youth show program access",
      "Junior handler mentorship",
      "Educational workshops",
      "Youth award eligibility",
    ],
    cta: "Join as Junior",
    popular: false,
  },
];

const benefits = [
  { Icon: Users, title: "Community", desc: "Connect with 300+ passionate Brittany lovers across Northern Virginia and beyond." },
  { Icon: Award, title: "Exclusive Events", desc: "Priority access to specialty shows, field trials, hunt tests, and social gatherings." },
  { Icon: Calendar, title: "Club Activities", desc: "Year-round calendar of events, seminars, and educational opportunities." },
  { Icon: BookOpen, title: "Resources", desc: "Access to our breed library, health database, and breeder referral program." },
  { Icon: Star, title: "Recognition", desc: "Eligibility for NVBC awards, Hall of Fame nominations, and member spotlights." },
  { Icon: CheckCircle, title: "Support", desc: "Expert guidance from experienced breeders, trainers, and veterinary advisors." },
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  membershipType: string;
  brittanyOwner: string;
  dogName: string;
  comments: string;
};

export default function BecomeMember() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    membershipType: "Family",
    brittanyOwner: "yes",
    dogName: "",
    comments: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "4px",
    color: "#ffffff",
    padding: "12px 16px",
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle = {
    fontFamily: "'Cinzel', serif",
    color: "rgba(255,255,255,0.7)",
    fontSize: "10px",
    letterSpacing: "0.15em",
    display: "block",
    marginBottom: "8px",
  };

  return (
    <div style={{ background: "#080c18", paddingTop: "100px" }}>
      {/* Page Header */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "50vh", display: "flex", alignItems: "center" }}
      >
        <div className="absolute inset-0">
          <ImageWithFallback src={memberImg} alt="NVBC Members" className="w-full h-full object-cover" style={{ objectPosition: "center" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,12,24,0.93) 0%, rgba(8,12,24,0.7) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.3em", marginBottom: "16px" }}>
            JOIN US
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
            Become a Member
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Playfair Display', serif", fontSize: "18px", maxWidth: "550px", lineHeight: "1.7" }}>
            Join a community of dedicated Brittany enthusiasts and be part of something truly special.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "12px" }}>
            MEMBER BENEFITS
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(26px, 3vw, 42px)" }}>
            Why Join NVBC?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, rgba(15,22,45,0.6), rgba(10,14,26,0.6))",
                border: "1px solid rgba(201,168,76,0.12)",
                borderRadius: "10px",
                padding: "28px",
                display: "flex",
                gap: "16px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.35)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.12)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ color: "#C9A84C", flexShrink: 0, marginTop: "2px" }}>
                <Icon size={22} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Cinzel', serif", color: "#ffffff", fontSize: "13px", letterSpacing: "0.05em", marginBottom: "8px" }}>{title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", fontSize: "13px", lineHeight: "1.7" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Membership Tiers */}
        <div className="text-center mb-14">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "12px" }}>
            MEMBERSHIP PLANS
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(26px, 3vw, 42px)" }}>
            Choose Your Membership
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {tiers.map(({ name, price, period, color, accent, features, cta, popular }, i) => (
            <div
              key={i}
              style={{
                background: popular
                  ? "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.04))"
                  : "linear-gradient(135deg, rgba(15,22,45,0.7), rgba(10,14,26,0.7))",
                border: popular ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "36px 28px",
                position: "relative",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
                    color: "#080c18",
                    padding: "4px 20px",
                    borderRadius: "2px",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  MOST POPULAR
                </div>
              )}
              <div style={{ fontFamily: "'Cinzel', serif", color: popular ? "#C9A84C" : "rgba(255,255,255,0.6)", fontSize: "12px", letterSpacing: "0.2em", marginBottom: "16px" }}>
                {name.toUpperCase()}
              </div>
              <div className="flex items-end gap-2 mb-6">
                <span style={{ fontFamily: "'Cinzel', serif", color: "#ffffff", fontSize: "48px", fontWeight: 700, lineHeight: 1 }}>{price}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif", fontSize: "12px", paddingBottom: "6px" }}>{period}</span>
              </div>
              <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "20px" }} />
              <ul className="flex flex-col gap-3 mb-8">
                {features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <CheckCircle size={15} style={{ color: "#C9A84C", flexShrink: 0, marginTop: "1px" }} />
                    <span style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter', sans-serif", fontSize: "13px" }}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                style={{
                  width: "100%",
                  background: popular ? "linear-gradient(135deg, #C9A84C, #E8C97E)" : "transparent",
                  color: popular ? "#080c18" : "#C9A84C",
                  border: popular ? "none" : "1px solid rgba(201,168,76,0.4)",
                  padding: "14px",
                  borderRadius: "4px",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  cursor: "pointer",
                  fontWeight: popular ? 700 : 400,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.2s ease",
                }}
              >
                {cta} <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section
        style={{ background: "linear-gradient(135deg, #0a0e1a, #0d1424)", borderTop: "1px solid rgba(201,168,76,0.15)", padding: "80px 0" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "12px" }}>
              APPLICATION
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(26px, 3vw, 42px)" }}>
              Membership Application
            </h2>
          </div>

          {submitted ? (
            <div
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.03))",
                border: "1px solid rgba(201,168,76,0.4)",
                borderRadius: "12px",
                padding: "60px",
                textAlign: "center",
              }}
            >
              <CheckCircle size={60} style={{ color: "#C9A84C", margin: "0 auto 24px" }} />
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "28px", marginBottom: "16px" }}>
                Application Received!
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "1.8", maxWidth: "400px", margin: "0 auto" }}>
                Thank you for applying to join NVBC! Our membership committee will review your application and contact you within 5–7 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(15,22,45,0.7), rgba(10,14,26,0.7))",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "12px",
                  padding: "40px",
                }}
              >
                {/* Personal Info */}
                <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "10px", letterSpacing: "0.2em", marginBottom: "20px" }}>
                  PERSONAL INFORMATION
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={labelStyle}>First Name *</label>
                    <input name="firstName" required value={form.firstName} onChange={handleChange} style={inputStyle} placeholder="Jane" />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name *</label>
                    <input name="lastName" required value={form.lastName} onChange={handleChange} style={inputStyle} placeholder="Doe" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} style={inputStyle} placeholder="jane@email.com" />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} style={inputStyle} placeholder="(703) 555-0100" />
                  </div>
                </div>
                <div className="mb-4">
                  <label style={labelStyle}>Street Address</label>
                  <input name="address" value={form.address} onChange={handleChange} style={inputStyle} placeholder="123 Main Street" />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div>
                    <label style={labelStyle}>City</label>
                    <input name="city" value={form.city} onChange={handleChange} style={inputStyle} placeholder="Fairfax" />
                  </div>
                  <div>
                    <label style={labelStyle}>State</label>
                    <input name="state" value={form.state} onChange={handleChange} style={inputStyle} placeholder="VA" />
                  </div>
                  <div>
                    <label style={labelStyle}>ZIP Code</label>
                    <input name="zip" value={form.zip} onChange={handleChange} style={inputStyle} placeholder="22030" />
                  </div>
                </div>

                {/* Membership */}
                <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }} />
                <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "10px", letterSpacing: "0.2em", marginBottom: "20px" }}>
                  MEMBERSHIP DETAILS
                </div>
                <div className="mb-4">
                  <label style={labelStyle}>Membership Type *</label>
                  <select name="membershipType" value={form.membershipType} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="Individual">Individual — $35/year</option>
                    <option value="Family">Family — $50/year</option>
                    <option value="Junior">Junior (under 18) — $10/year</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label style={labelStyle}>Do you own a Brittany?</label>
                  <select name="brittanyOwner" value={form.brittanyOwner} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="yes">Yes</option>
                    <option value="no">No — interested in the breed</option>
                    <option value="planning">Planning to get one</option>
                  </select>
                </div>
                {form.brittanyOwner === "yes" && (
                  <div className="mb-4">
                    <label style={labelStyle}>Dog's Name & AKC Registration (if applicable)</label>
                    <input name="dogName" value={form.dogName} onChange={handleChange} style={inputStyle} placeholder="e.g. Copper Ridge's Lucky Star, AKC #HP123456" />
                  </div>
                )}
                <div className="mb-8">
                  <label style={labelStyle}>Additional Comments</label>
                  <textarea
                    name="comments"
                    value={form.comments}
                    onChange={handleChange}
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" }}
                    placeholder="Tell us about yourself, your dogs, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
                    color: "#080c18",
                    padding: "16px",
                    borderRadius: "4px",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    boxShadow: "0 8px 30px rgba(201,168,76,0.4)",
                  }}
                >
                  SUBMIT APPLICATION <ArrowRight size={15} />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
