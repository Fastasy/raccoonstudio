import { useEffect, useRef } from 'react';
import { MessageCircle, Phone, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section
          ref={(el) => { refs.current[0] = el as HTMLElement; }}
          className="animate-fade-in text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#F5F5F5]">BOOK A SESSION</h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mt-4" />
          <p className="text-[#999999] text-sm mt-4 max-w-lg mx-auto">
            Ready to get inked or pierced? Chat to us on WhatsApp to discuss your idea, or walk in to the studio anytime.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — WhatsApp + contact info */}
          <div
            ref={(el) => { refs.current[1] = el as HTMLElement; }}
            className="animate-fade-in flex flex-col gap-6"
          >
            {/* Primary WhatsApp CTA */}
            <a
              href="https://wa.me/27686539911"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-[#25D366] hover:bg-[#20c05c] text-white font-bold text-base tracking-wider uppercase hover:shadow-[0_0_40px_rgba(37,211,102,0.4)] active:scale-95 transition-all duration-300"
            >
              <MessageCircle size={22} />
              Chat to Us on WhatsApp
            </a>

            {/* Contact details card */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 space-y-5">
              <h3 className="font-display text-2xl text-[#F5F5F5] tracking-wide">CONTACT DETAILS</h3>

              <a
                href="tel:0686539911"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-[#666666] text-xs tracking-wider uppercase mb-0.5">Phone</p>
                  <p className="text-[#F5F5F5] font-medium group-hover:text-[#C9A84C] transition-colors">068 653 9911</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-[#666666] text-xs tracking-wider uppercase mb-0.5">Address</p>
                  <p className="text-[#F5F5F5] font-medium">Shop L41, Boardwalk Mall</p>
                  <p className="text-[#999999] text-sm">Port Elizabeth, Eastern Cape, 6001</p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/the_raccoon_studio_ec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                  <Instagram size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-[#666666] text-xs tracking-wider uppercase mb-0.5">Instagram</p>
                  <p className="text-[#F5F5F5] font-medium group-hover:text-[#C9A84C] transition-colors">@the_raccoon_studio_ec</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Map placeholder */}
          <div
            ref={(el) => { refs.current[2] = el as HTMLElement; }}
            className="animate-fade-in animate-fade-in-delay-2"
          >
            <div className="rounded-2xl overflow-hidden border border-[#2a2a2a] h-full min-h-[300px] relative">
              {/* Static map image from Google Maps embed */}
              <iframe
                title="The Raccoon Studio Map"
                src="https://maps.google.com/maps?q=Boardwalk+Mall+Port+Elizabeth&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              />
              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#C9A84C]/30 rounded-xl px-4 py-3 pointer-events-none">
                <p className="font-display text-lg text-[#C9A84C]">THE RACCOON STUDIO</p>
                <p className="text-[#999999] text-xs">Shop L41, Boardwalk Mall · PE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
