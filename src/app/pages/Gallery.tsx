import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { X, ZoomIn } from "lucide-react";
import { GalleryImage } from "../../types/gallery";
import portrait from "../../assets/images/gallery/Brittany-Portrait.jpg";
/* ─── Assets ─────────────────────────────────────────────────────── */

const images: GalleryImage[] = [
  {
    src: portrait,
    title: "Brittany-Portrait",
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
    src: "https://images.unsplash.com/photo-1655848117690-74fb13fdd993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBicmVlZCUyMGNsdWIlMjBtZW1iZXJzaGlwJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MzA2ODE3NXww",
    title: "Club Members",
    cat: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1701342724111-156975f48f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkb2clMjBicmVlZCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc3MzA2ODE3MXww",
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
    src: "https://images.unsplash.com/photo-1604182969927-7cdb799fce1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBhZ2lsaXR5JTIwZXZlbnQlMjBvdXRkb29yJTIwc3BvcnRzfGVufDF8fHx8MTc3MzA2ODE3N3ww",
    title: "Agility Action",
    cat: "Field",
  },
  {
    src: "https://images.unsplash.com/photo-1560979290-aedae3a87139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY291bnRyeSUyMGVzdGF0ZSUyMGxhbmRzY2FwZSUyMHZpcmdpbmlhfGVufDF8fHx8MTc3MzA2ODE3N3ww",
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

/* ─── Design Tokens ──────────────────────────────────────────────── */
const C = {
  white: "#ffffff",
  offwhite: "#FAF7F0",
  navy: "#080c18",
  gold: "#C9A84C",
  charcoal: "#111111",
  textBody: "#666666",
  border: "rgba(0,0,0,0.08)",
};

const categories = ["All", "Portraits", "Field", "Shows", "Events"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<GalleryImage | null>(null);

  const filtered = activeCategory === "All" ? images : images.filter((img) => img.cat === activeCategory);

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
            backgroundImage: `url(${images[0].src})`, // Using the Portrait as hero background
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(8,12,24,0.6) 0%, transparent 50%, rgba(8,12,24,0.9) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div 
            style={{ 
              margin: "0 auto 28px auto", 
              width: "120px", 
              height: "6px", 
              background: C.gold 
            }} 
          />
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              color: C.gold,
              fontSize: "14px",
              letterSpacing: "0.5em",
              marginBottom: "32px",
              fontWeight: 700,
            }}
          >
            VISUAL ARCHIVE
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: C.white,
              fontSize: "clamp(45px, 9vw, 110px)",
              fontWeight: 700,
              lineHeight: "1",
              marginBottom: "40px",
              fontStyle: "italic"
            }}
          >
            The Photographic<br />Gallery
          </h1>

          {/* Centered Gold Divider Inside Hero */}
          
        </div>
      </section>

      {/* --- MAIN GALLERY SECTION --- */}
      <section className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="text-center mb-16">
          <div 
            style={{ 
              margin: "0 auto 28px auto", 
              width: "120px", 
              height: "6px", 
              background: C.gold 
            }} 
          />
          <div style={{ 
            fontFamily: "'Cinzel', serif", 
            color: C.gold, 
            fontSize: "38px", 
            letterSpacing: "0.2em", 
            marginBottom: "16px", 
            fontWeight: 800 
          }}>
            COLLECTIONS
          </div>
          <h2 style={{ 
            fontFamily: "'Playfair Display', serif", 
            color: C.charcoal, 
            fontSize: "clamp(32px, 4vw, 48px)", 
            fontWeight: 700 
          }}>
            Explore Our Heritage
          </h2>
          <p style={{ 
            maxWidth: "600px", 
            margin: "24px auto 0", 
            color: C.textBody, 
            fontFamily: "'Inter', sans-serif", 
            lineHeight: "1.8" 
          }}>
            A visual celebration of Brittany excellence — from professional field trials to championship conformation rings and intimate portraits.
          </p>
        </div>

        {/* Category Filter - Luxury Style */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? C.gold : "transparent",
                color: activeCategory === cat ? C.white : C.charcoal,
                border: `1px solid ${activeCategory === cat ? C.gold : C.border}`,
                padding: "12px 32px",
                borderRadius: "0px",
                fontFamily: "'Cinzel', serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                fontWeight: activeCategory === cat ? 700 : 500,
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = C.gold;
                    e.currentTarget.style.color = C.gold;
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.color = C.charcoal;
                }
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Masonry-style grid with premium spacing */}
        <div
          style={{
            columns: "3",
            columnGap: "24px",
          }}
          className="sm:columns-2 lg:columns-3 xl:columns-4"
        >
          {filtered.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden group cursor-pointer mb-6"
              style={{
                breakInside: "avoid",
                transition: "all 0.5s ease",
              }}
              onClick={() => setLightboxImg(img)}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <ImageWithFallback
                  src={img.src}
                  alt={img.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ display: "block" }}
                />
                
                {/* Luxury Hover Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center"
                  style={{ background: "rgba(8,12,24,0.85)" }}
                >
                  <div style={{ 
                      transform: 'translateY(20px)', 
                      transition: 'transform 0.5s ease' 
                  }} className="group-hover:translate-y-0 flex flex-col items-center">
                    <ZoomIn size={32} style={{ color: C.gold, marginBottom: '16px' }} />
                    <span style={{ 
                        fontFamily: "'Playfair Display', serif", 
                        color: C.white, 
                        fontSize: "20px", 
                        fontStyle: 'italic',
                        marginBottom: '8px' 
                    }}>
                      {img.title}
                    </span>
                    <div style={{ width: '40px', height: '1px', background: C.gold, marginBottom: '12px' }} />
                    <span style={{ 
                        fontFamily: "'Cinzel', serif", 
                        color: C.gold, 
                        fontSize: "10px", 
                        letterSpacing: "0.2em" 
                    }}>
                      {img.cat}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- LIGHTBOX (MODAL) --- */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12"
          style={{ background: "rgba(5,8,16,0.98)" }}
          onClick={() => setLightboxImg(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 transition-transform hover:rotate-90 duration-300"
            style={{ 
                color: C.gold, 
                background: "transparent", 
                border: "none", 
                cursor: "pointer" 
            }}
            onClick={() => setLightboxImg(null)}
          >
            <X size={40} strokeWidth={1} />
          </button>

          <div
            style={{ 
                maxWidth: "1100px", 
                width: "100%", 
                position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback 
                src={lightboxImg.src} 
                alt={lightboxImg.title} 
                className="w-full h-auto object-contain" 
                style={{ maxHeight: "75vh", boxShadow: "0 50px 100px rgba(0,0,0,0.9)" }} 
            />
            
            <div style={{ 
                padding: "32px 0", 
                borderTop: `1px solid rgba(201,168,76,0.2)`, 
                display: "flex", 
                flexDirection: 'column',
                alignItems: "center",
                textAlign: 'center'
            }}>
              <h3 style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  color: C.white, 
                  fontSize: "28px", 
                  marginBottom: "8px",
                  fontStyle: 'italic'
              }}>
                {lightboxImg.title}
              </h3>
              <span style={{ 
                  fontFamily: "'Cinzel', serif", 
                  color: C.gold, 
                  fontSize: "12px", 
                  letterSpacing: "0.3em" 
              }}>
                {lightboxImg.cat}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}