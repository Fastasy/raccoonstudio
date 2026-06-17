import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d0d0d]/95 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-[#C9A84C] group-hover:shadow-[0_0_12px_rgba(201,168,76,0.5)] transition-all duration-300">
              <img
                src="/images/505453118_17890461912262432_9162495639546984153_n.jpg"
                alt="The Raccoon Studio Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display text-xl lg:text-2xl text-[#F5F5F5] tracking-widest leading-none">
              THE RACCOON STUDIO
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#999999] hover:text-[#C9A84C] text-sm font-medium tracking-wider uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-[#C9A84C] text-[#0d0d0d] text-sm font-bold tracking-wider uppercase hover:bg-[#e0bc5a] hover:shadow-[0_0_16px_rgba(201,168,76,0.5)] transition-all duration-300"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[#F5F5F5] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#111111]/98 backdrop-blur-md border-t border-[#2a2a2a]`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#F5F5F5] font-medium text-lg tracking-wider uppercase hover:text-[#C9A84C] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
