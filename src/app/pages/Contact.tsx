import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import countryImg from "../../assets/images/contact-us/country.jpg";

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
  const [showPassword, setShowPassword] = useState(false); // Added for password toggle
  const [form, setForm] = useState({
    username: "", // Added
    password: "", // Added
    confirmPassword: "", // Added
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
    background: "#ffffff",
    border: "1px solid rgba(154, 123, 44, 0.2)",
    borderRadius: "0px",
    color: "#1a1a1a",
    padding: "12px 16px",
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    outline: "none",
  };

  const labelStyle = {
    fontFamily: "'Cinzel', serif",
    color: "#9A7B2C",
    fontSize: "10px",
    letterSpacing: "0.15em",
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
  };

  return (
   <div style={{ background: "#FAF9F6", minHeight: "100vh" }}>
      {/* Page Header */}
      <section
  className="relative h-screen overflow-hidden flex items-center justify-center"
>
       
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${countryImg})`, backgroundSize: "cover", backgroundPosition: "center",  }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
        <div className="relative max-w-9xl mx-auto px-6 lg:px-8 text-center">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#9A7B2C", fontSize: "25px", letterSpacing: "0.3em", marginBottom: "26px" }}>
            GET IN TOUCH
          </div>
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#ffffff",
textShadow: "0 4px 25px rgba(0,0,0,0.8)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: "1.15",
              marginBottom: "20px",
            }}
          >
            Contact <span style={{ color: "#9A7B2C" }}>Us</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Playfair Display', serif", fontSize: "18px", maxWidth: "550px", margin: "0 auto", lineHeight: "1.7" }}>
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
                background: "#ffffff",
                border: "1px solid rgba(154, 123, 44, 0.12)",
                borderRadius: "0px",
                padding: "28px",
                textAlign: "center",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "rgba(154, 123, 44, 0.05)",
                  border: "1px solid rgba(154, 123, 44, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9A7B2C",
                  margin: "0 auto 16px",
                }}
              >
                <Icon size={20} />
              </div>
              <div style={{ fontFamily: "'Cinzel', serif", color: "#9A7B2C", fontSize: "9px", letterSpacing: "0.2em", marginBottom: "8px" }}>
                {label}
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "14px", marginBottom: "4px", fontWeight: "bold" }}>{value}</div>
              <div style={{ color: "rgba(0,0,0,0.4)", fontFamily: "'Inter', sans-serif", fontSize: "11px" }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* Contact Form + Sidebar */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div style={{ background: "#ffffff", padding: "40px", borderTop: "4px solid #9A7B2C", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}>
            <div style={{ fontFamily: "'Cinzel', serif", color: "#9A7B2C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "32px" }}>
              SEND US A MESSAGE
            </div>

            {submitted ? (
              <div className="text-center py-20">
                <CheckCircle size={56} style={{ color: "#9A7B2C", margin: "0 auto 20px" }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "24px" }}>Message Sent!</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Account Section */}
                <div className="mb-10 border-b border-gray-100 pb-8">
                  <div className="mb-4">
                    <label style={labelStyle}>Username *</label>
                    <input name="username" required value={form.username} onChange={handleChange} style={inputStyle} placeholder="Your username" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <label style={labelStyle}>Password *</label>
                      <input name="password" type={showPassword ? "text" : "password"} required value={form.password} onChange={handleChange} style={inputStyle} />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 bottom-3 text-gray-400">
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    <div>
                      <label style={labelStyle}>Confirm Password *</label>
                      <input name="confirmPassword" type={showPassword ? "text" : "password"} required value={form.confirmPassword} onChange={handleChange} style={inputStyle} />
                    </div>
                  </div>
                </div>

                {/* Personal Section */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} style={inputStyle} placeholder="Full Name" />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} style={inputStyle} placeholder="email@address.com" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={labelStyle}>Phone (Optional)</label>
                    <input name="phone" value={form.phone} onChange={handleChange} style={inputStyle} placeholder="(000) 000-0000" />
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
                  <input name="subject" required value={form.subject} onChange={handleChange} style={inputStyle} />
                </div>
                <div className="mb-6">
                  <label style={labelStyle}>Message *</label>
                  <textarea name="message" required value={form.message} onChange={handleChange} rows={6} style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "#9A7B2C",
                    color: "#ffffff",
                    padding: "15px",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  SEND MESSAGE <Send size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div style={{ fontFamily: "'Cinzel', serif", color: "#9A7B2C", fontSize: "11px", letterSpacing: "0.25em", marginBottom: "24px" }}>
              MEET US
            </div>
            <div style={{ border: "1px solid rgba(154,123,44,0.15)", overflow: "hidden", marginBottom: "24px", background: "#ffffff", padding: "8px" }}>
              <ImageWithFallback src={countryImg} alt="Northern Virginia" className="w-full object-cover" style={{ height: "260px" }} />
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(154,123,44,0.12)", padding: "28px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "20px", marginBottom: "16px" }}>
                Club Meetings
              </h3>
              <p style={{ color: "rgba(0,0,0,0.5)", fontFamily: "'Inter', sans-serif", fontSize: "13px", lineHeight: "1.8", marginBottom: "16px" }}>
                NVBC holds monthly general membership meetings on the third Tuesday of each month. Locations vary — check your member newsletter.
              </p>
              <div style={{ height: "1px", background: "rgba(0,0,0,0.05)", margin: "16px 0" }} />
              <div className="flex flex-col gap-3">
                {[
                  { label: "Meeting Day", val: "3rd Tuesday / Month" },
                  { label: "Time", val: "7:00 PM EST" },
                  { label: "Location", val: "Varies" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex justify-between">
                    <span style={{ fontFamily: "'Cinzel', serif", color: "#9A7B2C", fontSize: "9px", letterSpacing: "0.12em" }}>{label}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", color: "rgba(0,0,0,0.5)", fontSize: "12px" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "20px", background: "#F3EEE0", borderLeft: "4px solid #9A7B2C", padding: "24px" }}>
              <p style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "14px", lineHeight: "1.7", fontStyle: "italic" }}>
                "The best conversations happen between people who share a love of Brittanys. We're always happy to talk dogs."
              </p>
              <p style={{ fontFamily: "'Cinzel', serif", color: "#9A7B2C", fontSize: "9px", letterSpacing: "0.15em", marginTop: "12px", fontWeight: "bold" }}>
                — MARGARET HOLLOWAY, PRESIDENT
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}