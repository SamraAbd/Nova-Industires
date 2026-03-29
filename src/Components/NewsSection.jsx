const news = [
  {
    category: "Update",
    date: "03/2026",
    image: "/card1.webp",
    title: "Development of AI-Based Quality Inspection System",
    href: "#",
  },
  {
    category: "Milestone",
    date: "02/2026",
    image: "/card2.jpg",
    // bg: "#0f0f0f",
    // isStatement: true,
    // dark: true,
    title: "Smart Factory Prototype Successfully Designed",
    href: "#",
  },
  {
    category: "Research",
    date: "02/2026",
    image: "/card3.webp",
    // bg: "#d6d6d6",
    // isStatement: true,
    // dark: false,
    title: "Future Work: Digital Twin Integration",
    href: "#",
  },
];

function StarkLogo({ dark }) {
  const color = dark ? "white" : "#111";
  return (
    <svg viewBox="0 0 60 60" className="w-12 h-12" fill="none">
      <polygon points="30,4 54,50 6,50" stroke={color} strokeWidth="3.5" fill="none" />
      <polygon points="30,18 44,44 16,44" fill={color} />
      <polygon points="30,56 54,10 6,10" stroke={color} strokeWidth="3.5" fill="none" opacity="0.35" />
    </svg>
  );
}

function StatementCard({ dark }) {
  const color = dark ? "white" : "#111";
  const mutedColor = dark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.4)";
  return (
    <div className="flex items-center justify-center gap-6 w-full h-full py-10">
      <StarkLogo dark={dark} />
      <div className="flex flex-col gap-1">
        <span
          className="font-black uppercase leading-none"
          style={{
            fontFamily: "'Arial Black', sans-serif",
            fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
            color,
            letterSpacing: "-0.01em",
          }}
        >
          Official
          <br />
          Statement
        </span>
        <span
          className="text-xs tracking-[0.22em] uppercase font-semibold mt-1 font-nova"
          style={{ color: mutedColor }}
        >
          Nova Industries
        </span>
      </div>
    </div>
  );
}

function NewsCard({ card }) {
  const { category, date, image, bg, isStatement, dark, title, href } = card;
  const tagColor = dark === false ? "#111" : "white";
  const tagMuted = dark === false ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.6)";

  return (
    <a href={href} className="group flex flex-col overflow-hidden" style={{ background: bg || "#000" }}>
      {/* Image / statement area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {isStatement && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: bg }}>
            <StatementCard dark={dark} />
          </div>
        )}

        {/* Tag bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3">
          <span className="text-xs font-semibold tracking-[0.12em] uppercase" style={{ color: tagColor }}>
            {category}
          </span>
          <span className="text-xs font-medium tracking-[0.08em]" style={{ color: tagMuted }}>
            {date}
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="py-4 bg-[#e8e8e8]">
        <h3
          className="text-black uppercase font-black leading-tight group-hover:underline underline-offset-2 transition-all"
          style={{
            fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
            fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)",
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </h3>
      </div>
    </a>
  );
}

export default function NewsSection() {
  return (
    <section id="news" className="w-full bg-[#e8e8e8] py-14 md:py-20 px-6 md:px-10 lg:px-14">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12 md:mb-16">
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-black/60 md:pt-2" style={{ fontFamily: "monospace" }}>
            Updates &amp; Progress
          </span>
          <h2
            className="text-black uppercase font-black leading-none md:text-right"
            style={{
              fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(1.6rem, 4.5vw, 3.4rem)",
              letterSpacing: "-0.02em",
              maxWidth: "680px",
            }}
          >
            Latest developments 
            <br />
            at Nova Industries
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {news.map((card) => (
            <NewsCard key={card.title} card={card} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-black/30 bg-white text-black text-xs tracking-[0.18em] uppercase font-bold px-6 py-3 hover:bg-black hover:text-white transition-colors duration-200"
          >
            View All Updates
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
