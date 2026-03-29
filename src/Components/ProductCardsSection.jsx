import image1 from "../public/roboticsAutomation.png"
import image2 from "../public/inspection.jpg"
import image3 from "../public/smartMonitoring.jpg"

const cards = [
  {
    title: "Robotic Automation",
    subtitle: "Automates product handling, sorting, and production processes with intelligent robotics.",
    image: image1,
    href: "#",
  },
  {
    title: "AI Quality Inspection",
    subtitle: "Detects defects and classifies products in real-time using computer vision and AI.",
    image: image2,
    href: "#",
  },
  {
    title: "Smart Monitoring System",
    subtitle: "Tracks inventory, predicts demand and delays, and optimizes energy consumption.",
    image: image3,
    href: "#",
  },
];

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function ProductCard({ title, subtitle, image, href }) {
  return (
    <a
      href={href}
      className="group relative flex flex-col overflow-hidden bg-black"
      style={{ minHeight: "520px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/10" />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col gap-3">
        <h2
          className="text-white uppercase font-black leading-tight"
          style={{
            fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
            fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h2>
        <p
          className="text-white/80 text-sm md:text-base leading-snug"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {subtitle}
        </p>
        <div className="mt-3">
          <span className="inline-flex items-center gap-2 bg-white text-black text-xs tracking-[0.15em] uppercase font-bold px-4 py-2.5 transition-all duration-200 group-hover:bg-gray-100">
            Find out more <ArrowIcon />
          </span>
        </div>
      </div>
    </a>
  );
}

export default function ProductCardsSection() {
  return (
    <section id="systems" className="w-full  my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card) => (
          <ProductCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
