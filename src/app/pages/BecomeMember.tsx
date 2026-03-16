import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Award,
  Calendar,
  BookOpen,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import React, { useState } from "react";

/* ─── DESIGN SYSTEM ───────────────── */

const C = {
  gold: "#C9A84C",
  offWhite: "#FAF9F6",
  border: "rgba(201,168,76,0.25)",
};

import member from "../../assets/images/become-member/member.jpg";

/* ─── BENEFITS WITH COLORS ───────────────── */

const benefits = [
  {
    Icon: Users,
    title: "Community",
    desc: "Connect with Brittany enthusiasts across Northern Virginia.",
    color: "#C9A84C",
  },
  {
    Icon: Award,
    title: "Events",
    desc: "Access specialty shows and club gatherings.",
    color: "#E67E22",
  },
  {
    Icon: Calendar,
    title: "Activities",
    desc: "Year-round events and training opportunities.",
    color: "#3498DB",
  },
  {
    Icon: BookOpen,
    title: "Resources",
    desc: "Breed library and breeder referrals.",
    color: "#8E44AD",
  },
  {
    Icon: Star,
    title: "Recognition",
    desc: "Eligibility for awards and club spotlight.",
    color: "#2ECC71",
  },
  {
    Icon: CheckCircle,
    title: "Support",
    desc: "Advice from experienced breeders and trainers.",
    color: "#E74C3C",
  },
];

/* ─── MEMBERSHIP TIERS ───────────────── */

const tiers = [
  {
    name: "Full Member",
    price: "$50",
    period: "per year",
    description: "Perfect for enthusiasts dedicated to the Brittany breed.",
    features: [
      "Club communications",
      "Participation in events",
      "American Brittany Club membership",
      "ABC Magazine subscription",
    ],
    cta: "Join ",
  },
  {
    name: "Affiliate Member",
    price: "$25",
    period: "per year ",
    description: "For  members interested in Brittany events.",
    features: [
      "included in all Club communications",
      "Participation in all social events",
    ],
    cta: "Join",
  },
];

/* ─── FORM STYLES ───────────────── */

const inputStyle: React.CSSProperties = {
  border: "1px solid rgba(201,168,76,0.3)",
  borderRadius: "6px",
  padding: "14px",
  width: "100%",
};

const labelStyle: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  marginBottom: "10px",
  display: "block",
};

/* ─── COMPONENT ───────────────── */

export default function BecomeMember() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ background: C.offWhite, minHeight: "100vh" }}>
      
      
      {/* HERO */}

      <section className="relative h-screen flex items-center overflow-hidden">

        <ImageWithFallback
          src={member}
          alt="NVBC"
          className="absolute inset-0 w-full h-full object-cover"
        />

      <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
  Join the <span style={{ color: "#C9A84C" }}>Legacy</span>
</h1>

         <p className="mb-10 text-lg text-white/80 max-w-xl mx-auto">
            Become part of an elite community dedicated to the Brittany breed.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("application-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-4 bg-[#C9A84C] text-black uppercase text-xs tracking-widest hover:bg-white transition"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* BENEFITS SECTION */}

      <section className="py-32 bg-white">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-10 rounded-2xl hover:-translate-y-3 transition-all duration-500"
              style={{
                background: "linear-gradient(135deg,#fff9e6,#f7e6b1)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl mb-6"
                style={{ background: `${b.color}20` }}
              >
                <b.Icon size={26} style={{ color: b.color }} />
              </div>

              <h3 className="text-xl font-bold mb-3">{b.title}</h3>

              <p className="text-gray-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}

      <section className="py-32 max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-20">
          Membership Plans
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {tiers.map((tier, i) => (
            <div
              key={i}
              className="p-14 bg-white rounded-xl hover:-translate-y-2 transition-all shadow-lg"
            >
              <h3
                className="uppercase tracking-widest text-sm mb-4"
                style={{ color: C.gold }}
              >
                {tier.name}
              </h3>

              <p className="text-gray-400 mb-8">{tier.description}</p>

              <div className="text-6xl font-bold mb-10">{tier.price}</div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-3">
                    <ShieldCheck size={16} className="text-[#C9A84C]" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 border uppercase text-xs tracking-widest hover:bg-black hover:text-white transition">
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / APPLICATION FORM */}

<section
  id="application-form"
  className="py-32"
  style={{
    background: "linear-gradient(180deg, #E8CC80 0%, #CFAE63 100%)"
  }}
>
  <div className="max-w-4xl mx-auto px-6 text-center mb-16">

    <h2 className="text-5xl font-bold mb-6 text-black">
      Contact & Membership Application
    </h2>

    <p className="text-gray-800 max-w-xl mx-auto">
      Interested in joining the Northern Virginia Brittany Club? Complete the form
      below and our committee will review your membership request.
    </p>

  </div>

  <div className="max-w-3xl mx-auto px-6">

    <div className="bg-white rounded-xl shadow-xl p-12">

      <form className="space-y-8">

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              First Name
            </label>

            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:border-[#C9A84C] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Last Name
            </label>

            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:border-[#C9A84C] focus:outline-none"
            />
          </div>

        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Email
          </label>

          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:border-[#C9A84C] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Comments
          </label>

          <textarea
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:border-[#C9A84C] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-5 bg-black text-white uppercase tracking-widest rounded-lg hover:bg-[#C9A84C] hover:text-black transition-all duration-300"
        >
          Submit Application
        </button>

      </form>

    </div>

  </div>
</section>

      {/* FOOTER */}

      <footer className="py-20 bg-[#FAF9F6] text-center">

        <div className="text-3xl font-bold mb-6 text-[#C9A84C]">
          NVBC
        </div>

        <div className="flex justify-center gap-8 text-sm text-gray-400">

          <a href="#" className="hover:text-[#C9A84C]">
            Instagram
          </a>

          <a href="#" className="hover:text-[#C9A84C]">
            Facebook
          </a>

          <a href="#" className="hover:text-[#C9A84C]">
            Twitter
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          © 2026 Northern Virginia Brittany Club
        </p>
      </footer>
    </div>
  );
}