import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/27686539911"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:bg-[#20c05c] active:scale-95 transition-all duration-300 px-5 py-3.5 lg:px-6 lg:py-4"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
