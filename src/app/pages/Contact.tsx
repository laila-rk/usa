import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const countryImg = "https://images.unsplash.com/photo-1560979290-aedae3a87139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY291bnRyeSUyMGVzdGF0ZSUyMGxhbmRzY2FwZSUyMHZpcmdpbmlhfGVufDF8fHx8MTc3MzA2ODE3N3ww&ixlib=rb-4.1.0&q=80&w=1080";

const contactInfo = [
  { Icon: Mail, label: "Email", value: "info@nvbc.org", sub: "We respond within 48 hours" },
  { Icon: Phone, label: "Phone", value: "+1 (703) 555-0192", sub: "Mon–Fri, 9am–5pm EST" },
  { Icon: MapPin, label: "Location", value: "Northern Virginia, VA", sub: "United States" },
  { Icon: Clock, label: "Office Hours", value: "Mon–Fri: 9am – 5pm", sub: "Weekend: By appointment" },
];

const departments = [
  "General Inquiry",
  "Membership",
  "Events & Entries",
  "Breeder Referral",
  "Media & Press",
  "Awards & Recognition",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "General Inquiry",
    subject: "",
    message: "",
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
  };

  const labelStyle = {
    fontFamily: "'Cinzel', serif",
    color: "rgba(255,255,255,0.6)",
    fontSize: "10px",
    letterSpacing: "0.15em",
    display: "block",
    marginBottom: "8px",
  };

  return (
    <div style={{ background: "#080c18", paddingTop: "100px" }}>
      {/* Page Header */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #111828 100%)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${countryImg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08 }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.3em", marginBottom: "16px" }}>
            GET IN TOUCH
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
            Contact Us
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Playfair Display', serif", fontSize: "18px", maxWidth: "550px", margin: "0 auto", lineHeight: "1.7" }}>
            We'd love to hear from you. Reach out with questions, membership inquiries, or just to share your love of Brittanys.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map(({ Icon, label, value, sub }, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, rgba(15,22,45,0.7), rgba(10,14,26,0.7))",
                border: "1px solid rgba(201,168,76,0.12)",
                borderRadius: "10px",
                padding: "28px",
                textAlign: "center",
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
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C9A84C",
                  margin: "0 auto 16px",
                }}
              >
                <Icon size={20} />
              </div>
              <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "9px", letterSpacing: "0.2em", marginBottom: "8px" }}>
                {label}
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "14px", marginBottom: "4px" }}>{value}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif", fontSize: "11px" }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* Contact Form + Map */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div>
            <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "24px" }}>
              SEND US A MESSAGE
            </div>

            {submitted ? (
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.03))",
                  border: "1px solid rgba(201,168,76,0.4)",
                  borderRadius: "12px",
                  padding: "60px 40px",
                  textAlign: "center",
                }}
              >
                <CheckCircle size={56} style={{ color: "#C9A84C", margin: "0 auto 20px" }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "24px", marginBottom: "12px" }}>
                  Message Sent!
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}>
                  Thank you for reaching out. We'll get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    background: "linear-gradient(135deg, rgba(15,22,45,0.7), rgba(10,14,26,0.7))",
                    border: "1px solid rgba(201,168,76,0.12)",
                    borderRadius: "12px",
                    padding: "36px",
                  }}
                >
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange} style={inputStyle} placeholder="Your full name" />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} style={inputStyle} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label style={labelStyle}>Phone (Optional)</label>
                      <input name="phone" value={form.phone} onChange={handleChange} style={inputStyle} placeholder="(703) 555-0100" />
                    </div>
                    <div>
                      <label style={labelStyle}>Department</label>
                      <select name="department" value={form.department} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                        {departments.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label style={labelStyle}>Subject *</label>
                    <input name="subject" required value={form.subject} onChange={handleChange} style={inputStyle} placeholder="What's this about?" />
                  </div>
                  <div className="mb-6">
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      style={{ ...inputStyle, resize: "vertical" }}
                      placeholder="Write your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
                      color: "#080c18",
                      padding: "15px",
                      borderRadius: "4px",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      boxShadow: "0 6px 24px rgba(201,168,76,0.4)",
                    }}
                  >
                    SEND MESSAGE <Send size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <div>
            <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "24px" }}>
              MEET US
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.15)", marginBottom: "24px" }}>
              <ImageWithFallback src={countryImg} alt="Northern Virginia" className="w-full object-cover" style={{ height: "260px" }} />
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, rgba(15,22,45,0.7), rgba(10,14,26,0.7))",
                border: "1px solid rgba(201,168,76,0.12)",
                borderRadius: "12px",
                padding: "28px",
              }}
            >
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "20px", marginBottom: "16px" }}>
                Club Meetings
              </h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif", fontSize: "13px", lineHeight: "1.8", marginBottom: "16px" }}>
                NVBC holds monthly general membership meetings on the third Tuesday of each month. Locations vary — check your member newsletter or contact us for the current meeting location.
              </p>
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "16px 0" }} />
              <div className="flex flex-col gap-3">
                {[
                  { label: "Meeting Day", val: "3rd Tuesday of each month" },
                  { label: "Time", val: "7:00 PM EST" },
                  { label: "Location", val: "Varies — See Newsletter" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex justify-between">
                    <span style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "9px", letterSpacing: "0.12em" }}>{label}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "12px" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: "20px",
                background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "10px",
                padding: "20px 24px",
              }}
            >
              <p style={{ fontFamily: "'Playfair Display', serif", color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.7", fontStyle: "italic" }}>
                "The best conversations happen between people who share a love of Brittanys. We're always happy to talk dogs."
              </p>
              <p style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "9px", letterSpacing: "0.15em", marginTop: "12px" }}>
                — MARGARET HOLLOWAY, NVBC PRESIDENT
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
