import { MapPin, Clock, ArrowRight, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

/* ------------------ Images ------------------ */

import agility from "../../assets/images/calender-events/agility.jpg";

const showImg =
  "https://images.unsplash.com/photo-1646124827940-275c917c7e29?w=1200";

const outdoorImg =
  "https://images.unsplash.com/photo-1762445332687-59c092b43d4f?w=1200";

const runImg =
  "https://images.unsplash.com/photo-1595130066344-fc1d365ab904?w=1200";

/* ------------------ Colors ------------------ */

const C = {
  white: "#ffffff",
  navy: "#080c18",
  charcoal: "#111111",
  textBody: "#666666",
  gold: "#C9A84C",
  goldLight: "#E8C97E",
  border: "rgba(0,0,0,0.08)",
};

/* ------------------ Event Data ------------------ */

const allEvents = [
  {
    id: 1,
    day: 12,
    month: "April",
    year: "2026",
    title: "Spring Field Trial",
    type: "Field Trial",
    location: "Shenandoah Valley, VA",
    time: "7:00 AM – 5:00 PM",
    img: runImg,
  },
  {
    id: 2,
    day: 8,
    month: "May",
    year: "2026",
    title: "Conformation Specialty Show",
    type: "Dog Show",
    location: "Fairfax County Fairgrounds, VA",
    time: "9:00 AM – 4:00 PM",
    img: showImg,
  },
  {
    id: 3,
    day: 22,
    month: "June",
    year: "2026",
    title: "Hunt Test Weekend",
    type: "Hunt Test",
    location: "Culpeper, VA",
    time: "6:30 AM – 3:00 PM",
    img: outdoorImg,
  },
  {
    id: 4,
    day: 19,
    month: "July",
    year: "2026",
    title: "Summer Agility Fun Match",
    type: "Agility",
    location: "Prince William County, VA",
    time: "8:00 AM – 2:00 PM",
    img: agility,
  },
];

const types = ["All", "Field Trial", "Dog Show", "Hunt Test", "Agility"];

/* ------------------ Component ------------------ */

export default function Events() {
  const [activeType, setActiveType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("List");

  /* -------- Filter Logic -------- */

  const filtered = useMemo(() => {
    return allEvents.filter((e) => {
      const typeMatch = activeType === "All" || e.type === activeType;

      const searchMatch = e.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return typeMatch && searchMatch;
    });
  }, [activeType, searchQuery]);

  return (
    <div style={{ background: "#FAF7F0", minHeight: "100vh" }}>

      {/* HERO */}

      <section
        style={{
          height: "100vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${agility})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Playfair Display",
            fontSize: "72px",
            color: "white",
            fontWeight: 700,
          }}
        >
          Events & Activities
        </h1>
      </section>
      {/* SEARCH BAR */}

      <section
        style={{
          background: "white",
          maxWidth: "1100px",
          margin: "auto",
          marginTop: "-40px",
          padding: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Search size={20} />

        <input
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            flex: 1,
            fontSize: "16px",
          }}
        />

        <button
          style={{
            background: C.charcoal,
            color: "white",
            padding: "12px 28px",
            border: "none",
            cursor: "pointer",
          }}
        >
          FIND EVENTS
        </button>

        {/* VIEW MODE */}

        {["List", "Month", "Day"].map((mode) => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            style={{
              background: "none",
              border: "none",
              fontWeight: viewMode === mode ? 700 : 400,
              cursor: "pointer",
            }}
          >
            {mode}
          </button>
        ))}
      </section>

      {/* FILTER */}

      <section
        style={{
          maxWidth: "1100px",
          margin: "auto",
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            fontFamily: "Playfair Display",
            fontSize: "30px",
            marginBottom: "20px",
          }}
        >
          Filter By Category
        </h2>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              style={{
                padding: "10px 20px",
                border:
                  activeType === t
                    ? `1px solid ${C.gold}`
                    : `1px solid ${C.border}`,
                background: activeType === t ? C.gold : "white",
                color: activeType === t ? "white" : C.charcoal,
                cursor: "pointer",
                fontFamily: "Inter",
                fontWeight: 600,
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* VIEW MODE LABEL */}

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontFamily: "Playfair Display",
              color: C.charcoal,
              margin: 0,
            }}
          >
            Upcoming Events
          </h3>

          <span
            style={{
              background: "#f5f5f5",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: 600,
              color: C.textBody,
            }}
          >
            Viewing: {viewMode}
          </span>
        </div>

        {/* EVENTS LIST */}

        <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {filtered.map((ev) => (
            <div
              key={ev.id}
              style={{
                background: "white",
                display: "grid",
                gridTemplateColumns: "120px 1fr 200px",
                border: `1px solid ${C.border}`,
              }}
            >
              {/* DATE */}

              <div
                style={{
                  background: C.gold,
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontSize: "36px", fontWeight: 700 }}>
                  {ev.day}
                </div>
                <div style={{ fontSize: "14px" }}>{ev.month}</div>
              </div>

              {/* INFO */}

              <div style={{ padding: "20px" }}>
                <div style={{ fontSize: "12px", color: C.gold }}>
                  {ev.type} • {ev.year}
                </div>

                <h3
                  style={{
                    fontFamily: "Playfair Display",
                    fontSize: "24px",
                  }}
                >
                  {ev.title}
                </h3>

                <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
                  <span style={{ display: "flex", gap: "6px" }}>
                    <MapPin size={16} /> {ev.location}
                  </span>

                  <span style={{ display: "flex", gap: "6px" }}>
                    <Clock size={16} /> {ev.time}
                  </span>
                </div>
              </div>

              {/* BUTTON */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link to={`/events/${ev.id}`}>
                  <button
                    style={{
                      background: C.gold,
                      color: "white",
                      border: "none",
                      padding: "14px 26px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    VIEW DETAILS <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}