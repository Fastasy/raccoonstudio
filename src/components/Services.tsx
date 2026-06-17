import { useEffect, useRef } from 'react';
import { Pen, RotateCcw, Minimize2, Circle, Zap } from 'lucide-react';

const services = [
  {
    icon: Pen,
    title: 'Custom Tattoos',
    description: 'One-of-a-kind designs crafted to tell your unique story.',
  },
  {
    icon: RotateCcw,
    title: 'Cover-Up Tattoos',
    description: 'Transform old or unwanted ink into something beautiful.',
  },
  {
    icon: Minimize2,
    title: 'Fine Line Tattoos',
    description: 'Delicate, precise linework for a subtle, elegant aesthetic.',
  },
  {
    icon: Circle,
    title: 'Piercing Services',
    description: 'Professional piercings with sterile, high-quality jewellery.',
  },
  {
    icon: Zap,
    title: 'Touch-Ups',
    description: 'Refresh faded tattoos and keep your ink looking its best.',
  },
];

export default function Services() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={(el) => { refs.current[0] = el; }}
          className="animate-fade-in text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-3">What We Do</p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#F5F5F5]">OUR SERVICES</h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mt-4" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => { refs.current[i + 1] = el; }}
                className={`animate-fade-in animate-fade-in-delay-${i + 1} group relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 lg:p-8 hover:border-[#C9A84C] hover:shadow-[0_0_30px_rgba(201,168,76,0.12)] transition-all duration-400 cursor-default`}
              >
                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#C9A84C]/0 group-hover:border-[#C9A84C]/60 transition-all duration-400 rounded-tr-sm" />
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-5 group-hover:bg-[#C9A84C]/20 transition-colors duration-300">
                  <Icon size={22} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-display text-2xl text-[#F5F5F5] mb-2 tracking-wide">{service.title}</h3>
                <p className="text-[#999999] text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
