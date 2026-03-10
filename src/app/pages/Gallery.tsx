import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { X, ZoomIn } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1765817345131-fc0c44f1b89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcml0dGFueSUyMHNwYW5pZWwlMjBkb2clMjBwb3J0cmFpdCUyMGVsZWdhbnR8ZW58MXx8fHwxNzczMDY4MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Brittany Portrait",
    cat: "Portraits",
  },
  {
    src: "https://images.unsplash.com/photo-1646124827940-275c917c7e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBzaG93JTIwY29tcGV0aXRpb24lMjBjaGFtcGlvbnNoaXB8ZW58MXx8fHwxNzczMDY4MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Championship Show",
    cat: "Shows",
  },
  {
    src: "https://images.unsplash.com/photo-1762445332687-59c092b43d4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBvdXRkb29yJTIwbmF0dXJlJTIwdHJhaWwlMjBhdXR1bW58ZW58MXx8fHwxNzczMDY4MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Autumn Trail",
    cat: "Field",
  },
  {
    src: "https://images.unsplash.com/photo-1595130066344-fc1d365ab904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaWVsJTIwZG9nJTIwcnVubmluZyUyMGZpZWxkJTIwZ29sZGVuJTIwaG91cnxlbnwxfHx8fDE3NzMwNjgxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Golden Hour Run",
    cat: "Field",
  },
  {
    src: "https://images.unsplash.com/photo-1655848117690-74fb13fdd993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBicmVlZCUyMGNsdWIlMjBtZW1iZXJzaGlwJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MzA2ODE3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Club Members",
    cat: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1701342724111-156975f48f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkb2clMjBicmVlZCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc3MzA2ODE3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Studio Portrait",
    cat: "Portraits",
  },
  {
    src: "https://images.unsplash.com/photo-1597509560792-796c8682d017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBjbHViJTIwYXdhcmQlMjB0cm9waHklMjBjZXJlbW9ueXxlbnwxfHx8fDE3NzMwNjgxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Award Ceremony",
    cat: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1557674535-46bcc4ef6c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZG9nJTIwc2hvdyUyMHdpbm5lciUyMHJpYmJvbnxlbnwxfHx8fDE3NzMwNjgxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Blue Ribbon",
    cat: "Shows",
  },
  {
    src: "https://images.unsplash.com/photo-1604182969927-7cdb799fce1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBhZ2lsaXR5JTIwZXZlbnQlMjBvdXRkb29yJTIwc3BvcnRzfGVufDF8fHx8MTc3MzA2ODE3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Agility Action",
    cat: "Field",
  },
  {
    src: "https://images.unsplash.com/photo-1560979290-aedae3a87139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY291bnRyeSUyMGVzdGF0ZSUyMGxhbmRzY2FwZSUyMHZpcmdpbmlhfGVufDF8fHx8MTc3MzA2ODE3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Virginia Estate",
    cat: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1691594392312-3523566cd24b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkb2clMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzMwNjgxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Elegant Portrait",
    cat: "Portraits",
  },
  {
    src: "https://images.unsplash.com/photo-1772814356222-a81ede5102b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjB3aGl0ZSUyMGh1bnRpbmclMjBkb2clMjBiaXJkJTIwZmllbGR8ZW58MXx8fHwxNzczMDY4MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Hunting Field",
    cat: "Field",
  },
  {
    src: "https://images.unsplash.com/photo-1767457107942-4a7c5dd99cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBwdXBweSUyMGN1dGUlMjBmYW1pbHl8ZW58MXx8fHwxNzczMDY4MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Puppy Joy",
    cat: "Portraits",
  },
  {
    src: "https://images.unsplash.com/photo-1762957044542-583a86b753a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBwaG90byUyMGdhbGxlcnklMjB3YWxsJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NzMwNjgxODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Gallery Collection",
    cat: "Events",
  },
];

const categories = ["All", "Portraits", "Field", "Shows", "Events"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<null | (typeof images)[0]>(null);

  const filtered = activeCategory === "All" ? images : images.filter((img) => img.cat === activeCategory);

  return (
    <div style={{ background: "#080c18", paddingTop: "100px" }}>
      {/* Page Header */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #111828 100%)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.3em", marginBottom: "16px" }}>
            PHOTO COLLECTION
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
            Gallery
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Playfair Display', serif", fontSize: "18px", maxWidth: "550px", margin: "0 auto", lineHeight: "1.7" }}>
            A visual celebration of Brittany excellence — from field to ring and everything in between.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? "linear-gradient(135deg, #C9A84C, #E8C97E)" : "transparent",
                color: activeCategory === cat ? "#080c18" : "rgba(255,255,255,0.6)",
                border: activeCategory === cat ? "none" : "1px solid rgba(255,255,255,0.15)",
                padding: "10px 26px",
                borderRadius: "2px",
                fontFamily: "'Cinzel', serif",
                fontSize: "11px",
                letterSpacing: "0.15em",
                cursor: "pointer",
                transition: "all 0.25s ease",
                fontWeight: activeCategory === cat ? 700 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div
          style={{
            columns: "3",
            columnGap: "12px",
          }}
          className="sm:columns-2 lg:columns-3 xl:columns-4"
        >
          {filtered.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden group cursor-pointer mb-3"
              style={{
                borderRadius: "8px",
                breakInside: "avoid",
                border: "1px solid rgba(201,168,76,0.08)",
                transition: "all 0.3s ease",
              }}
              onClick={() => setLightboxImg(img)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.08)";
              }}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ display: "block" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2"
                style={{ background: "rgba(8,12,24,0.75)" }}
              >
                <ZoomIn size={28} style={{ color: "#C9A84C" }} />
                <span style={{ fontFamily: "'Cinzel', serif", color: "#ffffff", fontSize: "11px", letterSpacing: "0.15em" }}>
                  {img.title}
                </span>
                <span style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "9px", letterSpacing: "0.2em" }}>
                  {img.cat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{ background: "rgba(5,8,16,0.95)" }}
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-6 right-6"
            style={{ color: "#C9A84C", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "50%", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            onClick={() => setLightboxImg(null)}
          >
            <X size={20} />
          </button>
          <div
            style={{ maxWidth: "900px", width: "100%", borderRadius: "12px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,168,76,0.25)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback src={lightboxImg.src} alt={lightboxImg.title} className="w-full object-cover" style={{ maxHeight: "80vh" }} />
            <div style={{ background: "linear-gradient(135deg, #0a0e1a, #111828)", padding: "16px 24px", borderTop: "1px solid rgba(201,168,76,0.2)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "16px" }}>{lightboxImg.title}</span>
              <span style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", fontSize: "9px", letterSpacing: "0.2em" }}>{lightboxImg.cat}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
