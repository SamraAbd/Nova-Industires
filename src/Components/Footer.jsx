import logoIcon from '../assets/logoIcon.png'

function NovaLogoMark() {
  return (
    <div className="flex items-center gap-2">
      <span
        className="text-black uppercase tracking-[0.22em] font-black text-base font-nova"
      >
        Nova Industries
      </span>
      <span><img className='w-8 h-8' src={logoIcon} alt="" /></span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#d4d4d4]">
      {/* Top: tagline + logo */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 px-6 md:px-10 lg:px-14 pt-14 pb-16 md:pt-16 md:pb-20">
        <h2
          className="text-[#888] uppercase font-black leading-tight"
          style={{
            fontFamily: "'Courier New', 'Courier', monospace",
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            letterSpacing: "0.06em",
            maxWidth: "600px",
          }}
        >
          Automate.{" "}
          <br className="hidden sm:block" />
          Optimize.{" "}
          <br className="hidden sm:block" />
          Evolve.
        </h2>

        <div className="md:pt-1 self-start md:self-auto">
          <NovaLogoMark />
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 md:mx-10 lg:mx-14 border-t border-black/10" />

      {/* Bottom links grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-10 lg:px-14 py-8 md:py-10">
        {/* Contact */}
        <div className="flex flex-col gap-2">
          <span className="text-[0.6rem] tracking-[0.22em] uppercase font-semibold text-black/40">
            Contact
          </span>
          <a
            href="mailto:contact@stark-defence.com"
            className="text-black/70 hover:text-black transition-colors text-sm font-medium"
          >
            nova.industries.contact@gmail.com
          </a>
        </div>

        {/* Press & PR */}
        {/* <div className="flex flex-col gap-2">
          <span className="text-[0.6rem] tracking-[0.22em] uppercase font-semibold text-black/40">
            Press &amp; Public Relations
          </span>
          <a
            href="mailto:media@stark-defence.com"
            className="text-black/70 hover:text-black transition-colors text-sm font-medium"
          >
            media@stark-defence.com
          </a>
        </div> */}

        {/* Legal */}
        <div className="flex flex-col gap-2">
          <span className="text-[0.6rem] tracking-[0.22em] uppercase font-semibold text-black/40">
            Legal
          </span>
          <div className="flex flex-col gap-1">
            <a href="#" className="text-black/60 hover:text-black transition-colors text-xs tracking-[0.1em] uppercase font-semibold">
              Imprint
            </a>
            <a href="#" className="text-black/60 hover:text-black transition-colors text-xs tracking-[0.1em] uppercase font-semibold">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Socials */}
        {/* <div className="flex flex-col gap-2">
          <span className="text-[0.6rem] tracking-[0.22em] uppercase font-semibold text-black/40">
            Socials
          </span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-black font-semibold text-sm hover:underline underline-offset-2 transition-all"
            style={{ fontFamily: "Georgia, serif" }}
          >
            LinkedIn
            <svg className="w-3.5 h-3.5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div> */}
      </div>

      {/* Copyright bar */}
      <div className="border-t border-black/10 px-6 md:px-10 lg:px-14 py-4">
        <p className="text-black/30 text-[0.6rem] tracking-[0.15em] uppercase">
          © {new Date().getFullYear()} Nova Industries. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
