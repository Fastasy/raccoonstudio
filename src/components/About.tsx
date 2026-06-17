import { useEffect, useRef } from 'react';
import { Users, Shield, Award, Star } from 'lucide-react';

const badges = [
  { icon: Users, label: 'Walk-ins Welcome' },
  { icon: Shield, label: 'Sterile Equipment' },
  { icon: Award, label: 'Professional Artists' },
  { icon: Star, label: "PE's #1 Rated Studio" },
];

export default function About() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-b from-[#0d0d0d] to-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — logo / image block */}
          <div
            ref={(el) => { refs.current[0] = el; }}
            className="animate-fade-in flex flex-col items-center lg:items-start gap-8"
          >
            {/* Large logo */}
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[#C9A84C] shadow-[0_0_60px_rgba(201,168,76,0.25)]">
                <img
                  src="/images/505453118_17890461912262432_9162495639546984153_n.jpg"
                  alt="The Raccoon Studio Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Orbiting decoration */}
              <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-[#C9A84C] flex items-center justify-center shadow-lg">
                <Star size={18} fill="#0d0d0d" className="text-[#0d0d0d]" />
              </div>
            </div>

            {/* Studio image */}
            <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-xl">
              <img
                src="https://images.pexels.com/photos/3997369/pexels-photo-3997369.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tattoo studio interior"
                className="w-full object-cover h-48 sm:h-64"
              />
            </div>
          </div>

          {/* Right — text content */}
          <div
            ref={(el) => { refs.current[1] = el; }}
            className="animate-fade-in animate-fade-in-delay-2"
          >
            <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Our Story</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F5] leading-none mb-6">
              SAME TEAM.
              <br />
              SAME QUALITY.
              <br />
              <span className="text-[#C9A84C]">STILL AT BOARDWALK.</span>
            </h2>
            <p className="text-[#999999] text-base leading-relaxed mb-4">
              Since 2015, The Raccoon Studio has been Port Elizabeth's go-to destination for world-class tattoo and piercing services. Nestled inside Boardwalk Mall, our studio combines a welcoming atmosphere with uncompromising artistry — whether you're walking in for your first tattoo or adding to a full sleeve.
            </p>
            <p className="text-[#999999] text-base leading-relaxed mb-10">
              Our team of dedicated artists brings a shared passion for quality and creativity to every piece. We work across all styles — from hyper-realistic portraits to delicate fine-line florals — and take every project seriously, no matter the size.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {badges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    ref={(el) => { refs.current[i + 2] = el; }}
                    className={`animate-fade-in animate-fade-in-delay-${i + 1} flex items-center gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3`}
                  >
                    <Icon size={18} className="text-[#C9A84C] flex-shrink-0" />
                    <span className="text-[#F5F5F5] text-sm font-medium">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
