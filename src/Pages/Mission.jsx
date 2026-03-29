import { useState, useEffect, useRef } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const problems = [
  {
    icon: "⚠",
    title: "Manual Quality Inspection",
    impact: "Errors & Inefficiency",
    desc: "Human-dependent inspection introduces inconsistencies, fatigue-driven mistakes, and slows throughput across production lines.",
  },
  {
    icon: "⛓",
    title: "Lack of System Integration",
    impact: "Fragmented Processes",
    desc: "Siloed tools and disconnected workflows prevent real-time visibility and force manual handoffs between systems.",
  },
  {
    icon: "⏱",
    title: "Unexpected Delays",
    impact: "Low Productivity",
    desc: "Unplanned downtime and reactive maintenance cycles reduce output and inflate operational costs.",
  },
  {
    icon: "⚡",
    title: "High Energy Consumption",
    impact: "Increased Costs & Carbon Footprint",
    desc: "Unoptimized energy usage across machinery and HVAC drives unnecessary expenses and environmental impact.",
  },
];

const futureItems = [
  "Virtual model of the factory for real-time simulation",
  "Test and optimize processes before real implementation",
  "Predict failures and reduce operational risks",
  "Improve efficiency using data-driven insights",
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Tag({ children }) {
  return (
    <span className="inline-block text-[11px] tracking-[0.22em] uppercase font-semibold text-[#0ff8e0]/70 mb-4">
      {children}
    </span>
  );
}

// ── Sections ──────────────────────────────────────────────────────────────────

function HeroMission() {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#020d0f]">
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(#0ff8e0 1px, transparent 1px), linear-gradient(90deg, #0ff8e0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,230,200,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 w-full px-6 md:px-14 pb-20 pt-32">
        <Tag>Nova Industries · Mission</Tag>
        <h1
          className="text-white font-black uppercase leading-none mb-6"
          style={{
            fontFamily: "'Arial Black', sans-serif",
            fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 0.92,
          }}
        >
          Innovating the Future
          <br />
          <span style={{ color: "#0ff8e0" }}>With Robotics &</span>
          <br />
          Automation
        </h1>
        <p className="text-white/50 text-base md:text-lg max-w-xl mt-6 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
          Building an intelligent Smart Factory where AI and robotics converge to redefine efficiency, accuracy, and industrial automation.
        </p>
      </div>
    </section>
  );
}

function VisionMission() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} className="bg-[#030f11] py-24 px-6 md:px-14">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {[
          {
            label: "Our Vision",
            heading: "Smart Factory Intelligence",
            body: "To build an intelligent Smart Factory where robotics and AI work together to improve efficiency, accuracy, and automation — creating a self-optimizing industrial ecosystem.",
            accent: "#0ff8e0",
          },
          {
            label: "Our Mission",
            heading: "Integrated Automation",
            body: "To develop an integrated system that automates production, quality control, and decision-making using AI and robotics — eliminating manual bottlenecks and enabling data-driven operations.",
            accent: "#0ff8e0",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2 h-2 rounded-full" style={{ background: item.accent }} />
              <Tag>{item.label}</Tag>
            </div>
            <h2
              className="text-white font-black uppercase leading-tight mb-4"
              style={{
                fontFamily: "'Arial Black', sans-serif",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
              }}
            >
              {item.heading}
            </h2>
            <div className="w-12 h-px mb-5" style={{ background: item.accent }} />
            <p className="text-white/60 leading-relaxed text-base" style={{ fontFamily: "Georgia, serif" }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProblemStatement() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} className="bg-[#020a0c] py-24 px-6 md:px-14">
      <div className="max-w-screen-xl mx-auto">
        <Tag>Problem Statement</Tag>
        <h2
          className="text-white font-black uppercase leading-none mb-16"
          style={{
            fontFamily: "'Arial Black', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
          }}
        >
          Modern Factories Face
          <br />
          <span style={{ color: "#0ff8e0" }}>Critical Challenges</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="border border-white/10 p-6 md:p-8 hover:border-[#0ff8e0]/40 transition-all duration-300 group"
              style={{
                background: "linear-gradient(135deg, rgba(0,255,224,0.03) 0%, transparent 60%)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.6s ease",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl mt-0.5">{p.icon}</span>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wide">{p.title}</p>
                  <p className="text-xs mt-1 font-semibold" style={{ color: "#0ff8e0" }}>→ {p.impact}</p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FutureWork() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} className="bg-[#030f11] py-24 px-6 md:px-14">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "all 0.8s ease",
            }}
          >
            <Tag>Future Work</Tag>
            <h2
              className="text-white font-black uppercase leading-none mb-3"
              style={{ fontFamily: "'Arial Black', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Digital Twin
            </h2>
            <p className="text-sm font-semibold mb-8 tracking-widest uppercase" style={{ color: "#0ff8e0" }}>
              Virtual Factory Simulation
            </p>
            <div className="space-y-4">
              {futureItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="mt-1 w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 text-[10px] font-bold"
                    style={{ borderColor: "#0ff8e0", color: "#0ff8e0" }}>
                    {i + 1}
                  </span>
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            {/* Decorative box */}
            <div className="border border-[#0ff8e0]/20 p-8 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(0,255,224,0.05) 0%, rgba(2,13,15,0.9) 100%)" }}>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10"
                style={{ background: "radial-gradient(circle, #0ff8e0 0%, transparent 70%)" }} />
              <p className="text-[#0ff8e0] text-xs tracking-[0.2em] uppercase font-bold mb-4">Core Objective</p>
              <p className="text-white font-black uppercase text-xl leading-tight mb-6"
                style={{ fontFamily: "'Arial Black', sans-serif" }}>
                Automate.<br />Optimize.<br />Evolve.
              </p>
              <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
                Nova Industries is building the next generation of intelligent manufacturing — a factory that thinks, adapts, and continuously improves itself through AI-driven automation and real-time data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MissionPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <HeroMission />
      <VisionMission />
      <ProblemStatement />
      <FutureWork />
    </div>
  );
}