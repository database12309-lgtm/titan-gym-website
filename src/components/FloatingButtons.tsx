import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 md:hidden">
      <a
        href="tel:+1234567890"
        className="w-14 h-14 bg-titan-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-titan-primary/30 hover:scale-110 active:scale-95 transition-transform"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
