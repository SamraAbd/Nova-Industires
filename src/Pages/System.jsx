import { useState, useEffect, useRef } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const capabilities = [
  { icon: "🤖", title: "Automates Product Handling and Sorting", desc: "Robotic arms and conveyor systems automatically pick, place, and route products based on AI classification — eliminating manual sorting entirely." },
  { icon: "🔎", title: "Real-Time Quality Inspection", desc: "USB camera paired with OpenCV and a trained CNN model performs frame-by-frame defect detection at production-line speed." },
  { icon: "📦", title: "Inventory & Production Monitoring", desc: "RZ60 sensors and system logs feed a live dashboard that tracks inventory levels, production rates, and throughput in real time." },
  { icon: "📊", title: "AI Demand & Delay Prediction", desc: "Machine learning models trained on historical data forecast demand fluctuations, supply delays, and cost overruns before they occur." },
  { icon: "⚡", title: "Energy Optimization", desc: "Adaptive load balancing and schedule-aware power management continuously reduce energy consumption across all connected machinery." },
];

const mechanicalGroups = [
  { cat: "Actuators / Motion", items: ["DC motor (x2)", "PDI-6225MG servo (x4)", "SG90 micro servo (x1)"] },
  { cat: "Control & Interface", items: ["Arduino Nano", "Driver (L298N)", "PWM extender (PCA9685)", "ON/OFF Switch", "Power supply"] },
  { cat: "Sensing & Vision", items: ["USB camera (1080p+)", "RZ60 sensor"] },
];

const aiPipeline = [
  { step: "01", title: "Image Capture", desc: "High-resolution USB camera captures product frames at 30fps+ feeding directly into the processing pipeline." },
  { step: "02", title: "OpenCV Processing", desc: "Frame-by-frame edge detection, segmentation, and feature extraction using OpenCV image processing library." },
  { step: "03", title: "AI Model — Defect Detection", desc: "CNN-based classifier detects surface defects and product type with high precision, flagging anomalies in real time." },
  { step: "04", title: "ML Classification", desc: "Trained classification models categorize products as defective vs normal and route them accordingly downstream." },
  { step: "05", title: "Predictive Analytics", desc: "Regression and forecasting models predict demand, production delays, and energy usage from historical data streams." },
];

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

// ── Sections ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-[80vh]  flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg,#020d0f 0%,#041a1f 60%,#061e24 100%)" }}>
      <GridBg />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle,#2dd4c4 0%,transparent 65%)", transform: "translate(-30%,30%)" }} />
      <div className="relative z-10 w-full px-6 md:px-14 pb-20 pt-32">
        <EyebrowTag>Nova Industries · Smart Factory Systems</EyebrowTag>
        <h1 className="uppercase font-black leading-none mb-8 text-white"
          style={{ fontFamily: "'Arial Black','Helvetica Neue',sans-serif", fontSize: "clamp(3rem,9vw,7.5rem)", letterSpacing: "-0.02em", lineHeight: 0.9 }}>
          Revolutionizing<br />
          <span style={{ color: "#2dd4c4" }}>Industries</span><br />
          with Robotics
        </h1>
        <p className="text-white/55 max-w-2xl text-lg leading-relaxed" style={{ fontFamily: "Georgia,'Times New Roman',serif" }}>
          Our system combines robotics, AI, and automation to transform traditional manufacturing into an intelligent and efficient process — enabling real-time monitoring, accurate decision-making, and optimized production performance.
        </p>
      </div>
    </section>
  );
}

function ProjectOverview() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} className="py-24 px-6 md:px-14 lg:px-20" style={{ background: "#041a1f" }}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)", transition: "all 0.8s ease" }}>
          <EyebrowTag>Project Overview</EyebrowTag>
          <h2 className="text-white font-black uppercase leading-none mb-6"
            style={{ fontFamily: "'Arial Black',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
            Empowering Tomorrow<br /><span style={{ color: "#2dd4c4" }}>with Smart Robotics</span>
          </h2>
          <div className="w-12 h-px mb-6" style={{ background: "#2dd4c4" }} />
          <p className="text-white/60 text-sm leading-relaxed mb-6" style={{ fontFamily: "Georgia,serif" }}>
            Our Smart Factory project integrates robotics, AI, and mechanical systems into one unified platform. It automates production, performs real-time quality inspection, and optimizes operations using data-driven insights.
          </p>
          <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "Georgia,serif" }}>
            We develop intelligent robotic systems that automate industrial processes, improve efficiency, and enable smarter decision-making in modern factories.
          </p>
        </div>
        {/* Quote box */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)", transition: "all 0.8s ease 0.2s" }}>
          <div className="p-8 relative overflow-hidden"
            style={{ background: "rgba(45,212,196,0.08)", border: "1px solid rgba(45,212,196,0.25)" }}>
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle,rgba(45,212,196,0.2) 0%,transparent 70%)" }} />
            <p className="text-white/80 text-lg leading-relaxed italic mb-6" style={{ fontFamily: "Georgia,serif" }}>
              "We develop intelligent robotic systems that automate industrial processes, improve efficiency, and enable smarter decision-making in modern factories."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px" style={{ background: "#2dd4c4" }} />
              <p className="text-xs tracking-[0.18em] uppercase font-bold" style={{ color: "#2dd4c4" }}>
                Fidan Allahverdiyeva · Lead Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} className="py-24 px-6 md:px-14 lg:px-20 relative overflow-hidden" style={{ background: "#020d0f" }}>
      <GridBg />
      <div className="relative z-10 max-w-screen-xl mx-auto">
        <EyebrowTag>What Our System Does</EyebrowTag>
        <h2 className="text-white font-black uppercase leading-none mb-16"
          style={{ fontFamily: "'Arial Black',sans-serif", fontSize: "clamp(1.8rem,4vw,3rem)" }}>
          Core <span style={{ color: "#2dd4c4" }}>Capabilities</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <div key={i}
              className="p-6 border hover:border-[#2dd4c4]/50 group transition-all duration-300"
              style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(45,212,196,0.03)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease ${i * 80}ms` }}>
              <span className="text-2xl mb-4 block">{cap.icon}</span>
              <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-3 group-hover:text-[#2dd4c4] transition-colors leading-snug">{cap.title}</h3>
              <p className="text-white/45 text-xs leading-relaxed" style={{ fontFamily: "Georgia,serif" }}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MechanicalDesign() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} className="py-24 px-6 md:px-14 lg:px-20" style={{ background: "#041a1f" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: content */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)", transition: "all 0.8s ease" }}>
            <EyebrowTag>Hardware</EyebrowTag>
            <h2 className="text-white font-black uppercase leading-none mb-3"
              style={{ fontFamily: "'Arial Black',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              Mechanical<br /><span style={{ color: "#2dd4c4" }}>System Design</span>
            </h2>
            <div className="w-12 h-px mb-8" style={{ background: "#2dd4c4" }} />
            <div className="space-y-8">
              {mechanicalGroups.map((group, i) => (
                <div key={i}
                  style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-20px)", transition: `all 0.6s ease ${i * 120 + 200}ms` }}>
                  <p className="text-[11px] tracking-[0.25em] uppercase font-semibold mb-3" style={{ color: "#2dd4c4" }}>{group.cat}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 px-3 py-2.5 border"
                        style={{ borderColor: "rgba(45,212,196,0.15)", background: "rgba(45,212,196,0.04)" }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#2dd4c4" }} />
                        <span className="text-white/65 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: image */}
          <div
            className="relative overflow-hidden"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)", transition: "all 0.8s ease 0.2s", minHeight: "460px" }}>
            <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=80"
              alt="Mechanical system" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,transparent 40%,rgba(4,26,31,0.85) 100%)" }} />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: "#2dd4c4" }}>Smart Factory Hardware Platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIVision() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} className="py-24 px-6 md:px-14 lg:px-20 relative overflow-hidden" style={{ background: "#020d0f" }}>
      <GridBg />
      <div className="relative z-10 max-w-screen-xl mx-auto">
        <EyebrowTag>Intelligence Layer</EyebrowTag>
        <h2 className="text-white font-black uppercase leading-none mb-4"
          style={{ fontFamily: "'Arial Black',sans-serif", fontSize: "clamp(1.8rem,4vw,3rem)" }}>
          AI and <span style={{ color: "#2dd4c4" }}>Computer Vision</span>
        </h2>
        <p className="text-white/50 text-base max-w-2xl mb-16 leading-relaxed" style={{ fontFamily: "Georgia,serif" }}>
          The AI layer combines OpenCV image processing with machine learning models — enabling real-time defect detection, product classification, and predictive analytics across the entire production line.
        </p>
        {/* Pipeline steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[26px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom,#2dd4c4,rgba(45,212,196,0.1))" }} />
          <div className="space-y-6">
            {aiPipeline.map((step, i) => (
              <div key={i} className="flex items-start gap-6 group"
                style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-20px)", transition: `all 0.6s ease ${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-sm font-black z-10"
                  style={{ borderColor: "#2dd4c4", color: "#2dd4c4", background: "#020d0f", fontFamily: "'Arial Black',sans-serif" }}>
                  {step.step}
                </div>
                <div className="flex-1 p-5 border hover:border-[#2dd4c4]/40 transition-all duration-300"
                  style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(45,212,196,0.03)" }}>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-2 group-hover:text-[#2dd4c4] transition-colors">{step.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed" style={{ fontFamily: "Georgia,serif" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SystemsPage() {
  return (
    <div style={{ background: "#020d0f" }}>
      <Hero />
      <ProjectOverview />
      <Capabilities />
      <MechanicalDesign />
      <AIVision />
    </div>
  );
}