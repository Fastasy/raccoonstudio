import { useState, useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

const SIZES = ['Small (up to 5cm)', 'Medium (5–15cm)', 'Large (15–25cm)', 'Full Sleeve'];
const PLACEMENTS = ['Arm', 'Leg', 'Back', 'Chest', 'Neck', 'Other'];
const STYLES = ['Realism', 'Traditional', 'Fine Line', 'Blackwork', 'Geometric'];

const BASE_PRICES: Record<string, [number, number]> = {
  'Small (up to 5cm)': [600, 1200],
  'Medium (5–15cm)': [1200, 2800],
  'Large (15–25cm)': [2800, 5500],
  'Full Sleeve': [7000, 18000],
};

const PLACEMENT_MULT: Record<string, number> = {
  Neck: 1.2,
  Chest: 1.15,
  Back: 1.1,
  Arm: 1.0,
  Leg: 1.0,
  Other: 1.0,
};

const STYLE_MULT: Record<string, number> = {
  Realism: 1.3,
  Traditional: 1.0,
  'Fine Line': 1.15,
  Blackwork: 1.1,
  Geometric: 1.1,
};

function fmt(n: number) {
  return `R${Math.round(n).toLocaleString('en-ZA')}`;
}

export default function QuoteCalculator() {
  const [size, setSize] = useState(SIZES[0]);
  const [placement, setPlacement] = useState(PLACEMENTS[0]);
  const [style, setStyle] = useState(STYLES[0]);
  const [colour, setColour] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const [lo, hi] = BASE_PRICES[size];
  const pm = PLACEMENT_MULT[placement];
  const sm = STYLE_MULT[style];
  const cm = colour ? 1.15 : 1.0;
  const low = fmt(lo * pm * sm * cm);
  const high = fmt(hi * pm * sm * cm);

  const whatsappText = encodeURIComponent(
    `Hi The Raccoon Studio! I just used your quote calculator and got an estimate:\n\n` +
    `• Size: ${size}\n• Placement: ${placement}\n• Style: ${style}\n• Colour: ${colour ? 'Yes' : 'No (Black & Grey)'}\n\nEstimated range: ${low} – ${high}\n\nI'd love to book a consultation!`
  );

  const selectClass =
    'w-full bg-[#0d0d0d] border border-[#2a2a2a] text-[#F5F5F5] text-sm rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-[#C9A84C] transition-colors cursor-pointer hover:border-[#C9A84C]/50';

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-[#0d0d0d]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="animate-fade-in text-center mb-12">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Instant Estimate</p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#F5F5F5]">QUOTE CALCULATOR</h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mt-4" />
          <p className="text-[#999999] text-sm mt-4 max-w-md mx-auto">Get a rough price estimate before your consultation. Final quotes are confirmed in studio.</p>
        </div>

        {/* Card */}
        <div className="bg-[#1a1a1a] border-2 border-[#C9A84C]/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_60px_rgba(201,168,76,0.08)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            {/* Size */}
            <div>
              <label className="block text-[#999999] text-xs font-semibold tracking-widest uppercase mb-2">Tattoo Size</label>
              <div className="relative">
                <select value={size} onChange={(e) => setSize(e.target.value)} className={selectClass}>
                  {SIZES.map((s) => <option key={s}>{s}</option>)}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#C9A84C]">▾</div>
              </div>
            </div>
            {/* Placement */}
            <div>
              <label className="block text-[#999999] text-xs font-semibold tracking-widest uppercase mb-2">Placement</label>
              <div className="relative">
                <select value={placement} onChange={(e) => setPlacement(e.target.value)} className={selectClass}>
                  {PLACEMENTS.map((p) => <option key={p}>{p}</option>)}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#C9A84C]">▾</div>
              </div>
            </div>
            {/* Style */}
            <div>
              <label className="block text-[#999999] text-xs font-semibold tracking-widest uppercase mb-2">Style</label>
              <div className="relative">
                <select value={style} onChange={(e) => setStyle(e.target.value)} className={selectClass}>
                  {STYLES.map((s) => <option key={s}>{s}</option>)}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#C9A84C]">▾</div>
              </div>
            </div>
            {/* Colour toggle */}
            <div className="flex items-end">
              <label className="w-full flex items-center justify-between bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg px-4 py-3 cursor-pointer hover:border-[#C9A84C]/50 transition-colors">
                <span className="text-[#F5F5F5] text-sm">Add Colour?</span>
                <button
                  role="switch"
                  aria-checked={colour}
                  onClick={() => setColour(!colour)}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${colour ? 'bg-[#C9A84C]' : 'bg-[#2a2a2a]'}`}
                >
                  <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${colour ? 'translate-x-7' : 'translate-x-1'}`} />
                </button>
              </label>
            </div>
          </div>

          {/* Price output */}
          <div className="bg-[#0d0d0d] border border-[#C9A84C]/30 rounded-2xl p-6 text-center mb-6">
            <p className="text-[#999999] text-xs tracking-widest uppercase mb-2">Estimated Price Range</p>
            <p className="font-display text-4xl sm:text-5xl text-[#C9A84C]">
              {low} &ndash; {high}
            </p>
            <p className="text-[#666666] text-xs mt-2">Prices in South African Rand (ZAR) · Subject to artist consultation</p>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/27686539911?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20c05c] text-white font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_24px_rgba(37,211,102,0.4)] active:scale-95 transition-all duration-300"
          >
            <MessageCircle size={18} />
            WhatsApp This Quote
          </a>
        </div>
      </div>
    </section>
  );
}
