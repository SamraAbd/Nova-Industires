import { useState, useEffect, useRef } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const articles = [
  {
    id: 1, category: "Technology", date: "10/02/2026", featured: false,
    title: "Smart Factory Phase 2: AI-Driven Quality Control Goes Live",
    excerpt: "Our second-generation computer vision quality inspection system has been deployed across the primary assembly line, reducing defect escape rate by 94%.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    readTime: "5 min read", tags: ["Technology", "AI", "Manufacturing"],
  },
  {
    id: 2, category: "Research", date: "05/01/2026", featured: false,
    title: "Digital Twin Technology: Simulating the Factory of the Future",
    excerpt: "Our R&D team has published findings on the Digital Twin initiative — a virtual replica of the Smart Factory enabling real-time process simulation before physical deployment.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: "6 min read", tags: ["Research", "Digital Twin"],
  },
  {
    id: 3, category: "Milestone", date: "20/12/2025", featured: false,
    title: "Virtus Robotic Arm Completes First Fully Autonomous Assembly Run",
    excerpt: "The Virtus robotic arm successfully completed a 72-hour unattended assembly run, marking a major milestone for autonomous industrial manufacturing.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    readTime: "4 min read", tags: ["Milestone", "Autonomous"],
  },
];

const categories = ["All", "Official Statement", "Technology", "Research", "Milestone"];

// ── Hook ──────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function EyebrowTag({ children }) {
  return <p className="text-[11px] tracking-[0.28em] uppercase font-bold mb-4" style={{ color: "#2dd4c4" }}>{children}</p>;
}

function GridBg() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
      style={{ backgroundImage: "linear-gradient(#2dd4c4 1px,transparent 1px),linear-gradient(90deg,#2dd4c4 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
  );
}

function CategoryBadge({ label }) {
  return (
    <span className="inline-block text-[10px] tracking-[0.18em] uppercase font-bold px-2 py-1"
      style={{ background: "rgba(45,212,196,0.12)", color: "#2dd4c4" }}>{label}</span>
  );
}

// ── Sections ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg,#020d0f 0%,#041a1f 60%,#061e24 100%)" }}>
      <GridBg />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle,#2dd4c4 0%,transparent 65%)", transform: "translate(30%,-30%)" }} />
      <div className="relative z-10 w-full px-6 md:px-14 pb-20 pt-32">
        <EyebrowTag>Nova Industries · News & Media</EyebrowTag>
        <h1 className="uppercase font-black leading-none mb-8 text-white"
          style={{ fontFamily: "'Arial Black','Helvetica Neue',sans-serif", fontSize: "clamp(3rem,9vw,7rem)", letterSpacing: "-0.02em", lineHeight: 0.9 }}>
          Catch up with<br />the <span style={{ color: "#2dd4c4" }}>Latest News</span><br />from Nova
        </h1>
        <p className="text-white/50 max-w-xl text-lg leading-relaxed" style={{ fontFamily: "Georgia,'Times New Roman',serif" }}>
          Stay up to date with our latest partnerships, product milestones, official statements, and research from the Nova Industries team.
        </p>
      </div>
    </section>
  );
}

// function FeaturedArticle() {
//   const feat = articles.find(a => a.featured);
//   const [ref, visible] = useInView();
//   return (
//     <section ref={ref} className="py-16 px-6 md:px-14 lg:px-20" style={{ background: "#041a1f" }}>
//       <div className="max-w-screen-xl mx-auto">
//         <EyebrowTag>Featured Story</EyebrowTag>
//         <a href="#"
//           className="group grid grid-cols-1 lg:grid-cols-2 border overflow-hidden hover:border-[#2dd4c4]/40 transition-all duration-300"
//           style={{ borderColor: "rgba(255,255,255,0.08)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
//           {/* Image */}
//           <div className="relative overflow-hidden" style={{ minHeight: "360px" }}>
//             <img src={feat.image} alt={feat.title}
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//             <div className="absolute inset-0" style={{ background: "linear-gradient(to right,transparent 50%,rgba(4,26,31,0.9) 100%)" }} />
//           </div>
//           {/* Content */}
//           <div className="p-8 md:p-12 flex flex-col justify-between"
//             style={{ background: "linear-gradient(135deg,rgba(45,212,196,0.05) 0%,rgba(4,26,31,0.98) 100%)" }}>
//             <div>
//               <div className="flex items-center gap-3 mb-5">
//                 <CategoryBadge label={feat.category} />
//                 <span className="text-white/30 text-xs">{feat.date}</span>
//                 <span className="text-white/30 text-xs">·</span>
//                 <span className="text-white/30 text-xs">{feat.readTime}</span>
//               </div>
//               <h2 className="text-white font-black uppercase leading-tight mb-5 group-hover:text-[#2dd4c4] transition-colors"
//                 style={{ fontFamily: "'Arial Black',sans-serif", fontSize: "clamp(1.2rem,2.5vw,1.7rem)" }}>
//                 {feat.title}
//               </h2>
//               <div className="w-10 h-px mb-5" style={{ background: "#2dd4c4" }} />
//               <p className="text-white/55 text-sm leading-relaxed" style={{ fontFamily: "Georgia,serif" }}>{feat.excerpt}</p>
//             </div>
//             <div className="flex flex-wrap gap-2 mt-8">
//               {feat.tags.map(t => (
//                 <span key={t} className="text-[10px] tracking-[0.15em] uppercase border px-2 py-1 text-white/40"
//                   style={{ borderColor: "rgba(255,255,255,0.1)" }}>{t}</span>
//               ))}
//             </div>
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// }

function StatementThumb({ bg }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3" style={{ background: bg, minHeight: "180px" }}>
      {/* Nova logo mark */}
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <polygon points="24,4 44,42 4,42" stroke="#2dd4c4" strokeWidth="3" fill="none" />
        <polygon points="24,16 36,40 12,40" fill="#2dd4c4" opacity="0.7" />
      </svg>
      <div className="text-center">
        <p className="font-black uppercase tracking-wide text-lg leading-none" style={{ color: "#2dd4c4", fontFamily: "'Arial Black',sans-serif" }}>Official</p>
        <p className="font-black uppercase tracking-wide text-lg leading-none" style={{ color: "#2dd4c4", fontFamily: "'Arial Black',sans-serif" }}>Statement</p>
        <p className="text-[10px] tracking-[0.25em] uppercase mt-1.5" style={{ color: "rgba(45,212,196,0.5)" }}>Nova Industries</p>
      </div>
    </div>
  );
}

function ArticleCard({ article, delay, visible }) {
  const { category, date, title, excerpt, image, bg, readTime, tags } = article;
  return (
    <a href="#"
      className="group flex flex-col border overflow-hidden hover:border-[#2dd4c4]/40 transition-all duration-300"
      style={{ borderColor: "rgba(255,255,255,0.08)", background: bg || "#041a1f", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease ${delay}ms` }}>
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {image
          ? <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          : <StatementThumb bg={bg} />
        }
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/40 to-transparent">
          <CategoryBadge label={category} />
          <span className="text-white/50 text-[10px] tracking-wide">{date}</span>
        </div>
      </div>
      {/* Body */}
      <div className="p-5 flex flex-col flex-1" style={{ background: "rgba(4,26,31,0.95)" }}>
        <h3 className="text-white font-black uppercase text-sm leading-tight mb-3 group-hover:text-[#2dd4c4] transition-colors"
          style={{ fontFamily: "'Arial Black',sans-serif" }}>{title}</h3>
        <p className="text-white/45 text-xs leading-relaxed flex-1 mb-4" style={{ fontFamily: "Georgia,serif" }}>{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-white/30 tracking-wide">{readTime}</span>
          <span className="text-xs font-semibold group-hover:underline" style={{ color: "#2dd4c4" }}>Read →</span>
        </div>
      </div>
    </a>
  );
}

function NewsGrid() {
  const [filter, setFilter] = useState("All");
  const [ref, visible] = useInView(0.05);
  const nonFeatured = articles.filter(a => !a.featured);
  const filtered = filter === "All" ? nonFeatured : nonFeatured.filter(a => a.category === filter);

  return (
    <section ref={ref} className="py-20 px-6 md:px-14 lg:px-20 relative overflow-hidden" style={{ background: "#020d0f" }}>
      <GridBg />
      <div className="relative z-10 max-w-screen-xl mx-auto">
        <EyebrowTag>All Articles</EyebrowTag>
        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className="px-4 py-2 text-[11px] tracking-[0.15em] uppercase font-bold border transition-all duration-200"
              style={{
                background: filter === cat ? "#2dd4c4" : "transparent",
                color: filter === cat ? "#020d0f" : "rgba(255,255,255,0.4)",
                borderColor: filter === cat ? "#2dd4c4" : "rgba(255,255,255,0.12)",
              }}>
              {cat}
            </button>
          ))}
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, i) => (
            <ArticleCard key={article.id} article={article} delay={i * 80} visible={visible} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/30 text-sm tracking-widest uppercase">No articles in this category</p>
          </div>
        )}
      </div>
    </section>
  );
}

// function NewsletterCTA() {
//   return (
//     <section className="py-20 px-6 md:px-14 lg:px-20 border-t"
//       style={{ background: "#041a1f", borderColor: "rgba(45,212,196,0.12)" }}>
//       <div className="max-w-screen-xl mx-auto text-center">
//         <EyebrowTag>Stay in the Loop</EyebrowTag>
//         <h3 className="text-white font-black uppercase text-2xl md:text-4xl mb-4 leading-tight"
//           style={{ fontFamily: "'Arial Black',sans-serif" }}>
//           Stay Connected <span style={{ color: "#2dd4c4" }}>With Nova</span>
//         </h3>
//         <p className="text-white/40 max-w-md mx-auto text-sm mb-8" style={{ fontFamily: "Georgia,serif" }}>
//           Get the latest news, research updates, and milestone announcements from Nova Industries directly to your inbox.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
//           <input type="email" placeholder="your@email.com"
//             className="flex-1 px-4 py-3 text-sm text-white bg-transparent border focus:outline-none focus:border-[#2dd4c4]"
//             style={{ borderColor: "rgba(45,212,196,0.3)" }} />
//           <button className="px-6 py-3 text-xs tracking-[0.15em] uppercase font-bold flex-shrink-0 transition-opacity hover:opacity-90"
//             style={{ background: "#2dd4c4", color: "#020d0f" }}>
//             Subscribe
//           </button>
//         </div>
//         <p className="text-white/25 text-[11px] mt-4">
//           nova.industries.contact@gmail.com · www.reallygreatsite.com
//         </p>
//       </div>
//     </section>
//   );
// }

export default function NewsPage() {
  return (
    <div style={{ background: "#020d0f" }}>
      <Hero />
      {/* <FeaturedArticle /> */}
      <NewsGrid />
      {/* <NewsletterCTA /> */}
    </div>
  );
}