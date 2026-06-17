import { ArrowRight, Eye } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden"
    >
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/60 via-[#0d0d0d]/30 to-[#0d0d0d]" />

      {/* Decorative gold orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />

      {/* Thin gold horizontal rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Pre-heading pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase mb-8 animate-fade-in visible">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
          Walk-ins Welcome Today
        </div>

        {/* Main headline */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-9xl text-[#F5F5F5] leading-none mb-6 animate-fade-in visible">
          PORT ELIZABETH'S{' '}
          <span className="text-[#C9A84C]">FAVOURITE</span>
          <br />
          TATTOO &amp; PIERCING
          <br />
          STUDIO
        </h1>

        {/* Subheading */}
        <p className="text-[#999999] text-base sm:text-lg tracking-widest uppercase mb-10 animate-fade-in visible animate-fade-in-delay-2">
          Walk-ins welcome · Boardwalk Mall · Est. 2015
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in visible animate-fade-in-delay-3">
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-[#0d0d0d] font-bold text-sm tracking-[0.15em] uppercase hover:bg-[#e0bc5a] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] active:scale-95 transition-all duration-300"
          >
            Book a Consultation
            <ArrowRight size={16} />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#C9A84C] text-[#C9A84C] font-bold text-sm tracking-[0.15em] uppercase hover:bg-[#C9A84C]/10 hover:shadow-[0_0_20px_rgba(201,168,76,0.2)] active:scale-95 transition-all duration-300"
          >
            <Eye size={16} />
            View Our Work
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 sm:mt-24 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto animate-fade-in visible animate-fade-in-delay-4">
          {[
            { value: '10+', label: 'Years of Craft' },
            { value: '2,479', label: 'Instagram Followers' },
            { value: '248+', label: 'Posts Shared' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl text-[#C9A84C]">{stat.value}</div>
              <div className="text-[#666666] text-xs tracking-wider uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent pointer-events-none" />

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[#999999] text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#C9A84C] to-transparent" />
      </div>
    </section>
  );
}
