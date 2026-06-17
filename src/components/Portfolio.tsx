import { useState, useEffect, useRef } from 'react';
import { Instagram, ArrowRight } from 'lucide-react';

type Style = 'All' | 'Realism' | 'Fine Line' | 'Blackwork' | 'Traditional' | 'Geometric' | 'Tribal';

interface PortfolioItem {
  src: string;
  alt: string;
  style: Exclude<Style, 'All'>;
  tall?: boolean;
}

const items: PortfolioItem[] = [
  {
    src: '/images/download_(5).jpg',
    alt: 'Traditional colour chest piece — battleship, eagle & roses',
    style: 'Traditional',
    tall: true,
  },
  {
    src: '/images/503733017_17889846447262432_6244183153682324235_n.jpg',
    alt: 'Tribal half sleeve — shoulder & upper arm',
    style: 'Tribal',
    tall: true,
  },
  {
    src: '/images/download_(4).jpg',
    alt: 'All-seeing eye & Masonic symbols — blackwork forearm',
    style: 'Blackwork',
  },
  {
    src: '/images/download_(8).jpg',
    alt: '"Noah" memorial realism — shoulder piece',
    style: 'Realism',
  },
  {
    src: '/images/480262009_122107290122760852_1122567164820796572_n.jpg',
    alt: 'Wolf blackwork — forearm',
    style: 'Blackwork',
    tall: true,
  },
  {
    src: '/images/download_(7).jpg',
    alt: 'Geometric tree of life — fine line calf',
    style: 'Geometric',
  },
  {
    src: '/images/480358220_122108689964760852_4820922115565362615_n.jpg',
    alt: 'Anchor & compass — fine line forearm',
    style: 'Fine Line',
  },
  {
    src: '/images/499363944_17886859581262432_4050869101960653293_n.webp',
    alt: 'Custom blackwork piece',
    style: 'Blackwork',
  },
  {
    src: '/images/535565284_17897894070262432_2002418885421092168_n.webp',
    alt: 'Custom traditional piece',
    style: 'Traditional',
  },
];

const STYLE_COLORS: Record<Exclude<Style, 'All'>, string> = {
  Realism: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Fine Line': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  Blackwork: 'bg-zinc-500/20 text-zinc-300 border-zinc-500/30',
  Traditional: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  Geometric: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  Tribal: 'bg-[#C9A84C]/20 text-[#C9A84C] border-[#C9A84C]/30',
};

const FILTERS: Style[] = ['All', 'Blackwork', 'Traditional', 'Realism', 'Fine Line', 'Geometric', 'Tribal'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Style>('All');
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === 'All' ? items : items.filter((i) => i.style === activeFilter);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Straight From the Studio</p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#F5F5F5]">OUR WORK</h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mt-4 mb-5" />
          <p className="text-[#999999] text-sm">
            Follow us{' '}
            <a
              href="https://www.instagram.com/the_raccoon_studio_ec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A84C] hover:underline"
            >
              @the_raccoon_studio_ec
            </a>{' '}
            for the full gallery
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase border transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-[#C9A84C] text-[#0d0d0d] border-[#C9A84C] shadow-[0_0_16px_rgba(201,168,76,0.4)]'
                  : 'bg-transparent text-[#999999] border-[#2a2a2a] hover:border-[#C9A84C]/50 hover:text-[#C9A84C]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div
          className={`columns-2 sm:columns-3 gap-3 space-y-3 transition-all duration-700 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {filtered.map((item, i) => (
            <div
              key={`${item.src}-${i}`}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#C9A84C]/60 hover:shadow-[0_0_30px_rgba(201,168,76,0.12)] transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content on hover */}
              <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Style badge */}
                <div className="flex justify-end">
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm ${STYLE_COLORS[item.style]}`}>
                    {item.style}
                  </span>
                </div>
                {/* Label + CTA */}
                <div>
                  <p className="text-white text-xs sm:text-sm font-medium leading-snug mb-2">{item.alt}</p>
                  <a
                    href="https://wa.me/27686539911"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[#C9A84C] text-[10px] font-bold tracking-widest uppercase hover:underline"
                  >
                    Book this style <ArrowRight size={10} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More on Instagram nudge */}
        <div
          className={`mt-10 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div>
            <p className="font-display text-2xl sm:text-3xl text-[#F5F5F5]">WANT TO SEE MORE?</p>
            <p className="text-[#999999] text-sm mt-1">We post every fresh piece on Instagram — 248+ posts and counting.</p>
          </div>
          <a
            href="https://www.instagram.com/the_raccoon_studio_ec"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-[#C9A84C] text-[#C9A84C] font-bold text-sm tracking-wider uppercase hover:bg-[#C9A84C]/10 hover:shadow-[0_0_20px_rgba(201,168,76,0.25)] active:scale-95 transition-all duration-300"
          >
            <Instagram size={18} />
            @the_raccoon_studio_ec
          </a>
        </div>
      </div>
    </section>
  );
}
