import { useRef } from "react";
import { Link } from "react-router";
import bgVideo from "../public/bgVideo.mp4"

export default function HeroSection() {
  const videoRef = useRef(null);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Video Background — replace src with your actual video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 lg:pb-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5 md:mb-7 sm:hidden ">
            <span className="block w-8 md:w-12 h-px bg-white/70" />
            <span className="text-white/70 text-xs tracking-[0.25em] uppercase  font-semibold ">
              Robotics & Automation
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-white uppercase leading-none tracking-tight mb-6 md:mb-8"
            style={{
              fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(2.8rem, 9vw, 7rem)",
              fontWeight: 900,
              letterSpacing: "-0.01em",
              lineHeight: 0.95,
            }}
          >
            AI-Driven
            <br />
            Industrial
            <br />
            Automation
          </h1>

          {/* Subheading */}
          <p
            className="text-white/85 uppercase tracking-[0.18em] font-semibold"
            style={{ fontSize: "clamp(0.7rem, 2vw, 1rem)" }}
          >
            Intelligent Automation.&nbsp;&nbsp;Real-Time Precision.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
            <Link
              to="/systems"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-xs tracking-[0.2em] uppercase font-bold hover:bg-gray-200 transition-colors duration-200"
            >
              Our Technology
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/mission"
              className="inline-flex items-center gap-2 border border-white/60 text-white px-6 py-3 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Our Vision
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-[0.6rem] tracking-[0.2em] uppercase rotate-90 origin-center mb-4">
          Scroll
        </span>
        <div className="w-px h-10 bg-white/50 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-white animate-bounce"
            style={{ height: "40%", animationDuration: "1.5s" }}
          />
        </div>
      </div>
    </section>
  );
}
