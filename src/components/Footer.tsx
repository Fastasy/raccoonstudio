import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C9A84C]">
                <img
                  src="/images/505453118_17890461912262432_9162495639546984153_n.jpg"
                  alt="The Raccoon Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display text-2xl text-[#F5F5F5] tracking-widest">THE RACCOON STUDIO</span>
            </div>
            <p className="text-[#666666] text-sm leading-relaxed max-w-xs">
              Port Elizabeth's premier tattoo and piercing studio. Custom art, professional artists, sterile environment.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/the_raccoon_studio_ec"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] text-[#999999] transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/27686539911"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center hover:border-[#25D366] hover:text-[#25D366] text-[#999999] transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg text-[#F5F5F5] tracking-wider mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#666666] hover:text-[#C9A84C] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-lg text-[#F5F5F5] tracking-wider mb-4">FIND US</h4>
            <address className="not-italic space-y-2">
              <p className="text-[#666666] text-sm">Shop L41</p>
              <p className="text-[#666666] text-sm">Boardwalk Mall</p>
              <p className="text-[#666666] text-sm">Port Elizabeth</p>
              <p className="text-[#666666] text-sm">Eastern Cape, 6001</p>
              <a href="tel:0686539911" className="text-[#C9A84C] text-sm hover:underline block mt-3">
                068 653 9911
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2a2a2a] mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#444444] text-xs text-center sm:text-left">
            &copy; {year} The Raccoon Studio &middot; Boardwalk Mall, Port Elizabeth
          </p>
          <p className="text-[#444444] text-xs">
            Website by{' '}
            <span className="text-[#666666]">Your Agency Name</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
