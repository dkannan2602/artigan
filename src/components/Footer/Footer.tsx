import { Globe, Send, MessageCircle, Rss } from "lucide-react";

const socialLinks = [
  { icon: Globe, label: "Website" },
  { icon: Send, label: "Telegram" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Rss, label: "Blog" },
];

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 py-6 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-5 sm:p-8 md:p-10 shadow-sm border border-gray-100">

        {/* ── Top: logo row + social row (stacked on mobile, single row on sm+) ── */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 border-2 border-black rounded-lg flex items-center justify-center shrink-0 bg-white">
              <span className="font-black text-base text-black leading-none">a</span>
            </div>
            <div className="leading-tight">
              <div className="font-black text-base sm:text-xl tracking-tight text-black">artigan</div>
              <div className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-gray-500 font-medium">
                Branding · Studio
              </div>
            </div>
          </div>

          {/* Social icons — own row on mobile so they never overlap the logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            {socialLinks.map(({ icon: Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shrink-0"
              >
                <Icon size={14} className="text-white" strokeWidth={2} />
              </button>
            ))}
          </div>
        </div>

        {/* ── Nav grid ──────────────────────────────────────────────────────────
            Mobile  : 2 cols — col1 & col2 side by side, col3 & col4 below
            md+     : 4 equal cols
            Text is kept small (text-[11px]) so long items like "Growth Marketing"
            never wrap on a 320 px screen.
        ──────────────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-7 mb-8 sm:mb-10">

          {/* Col 1 — pages */}
          <ul className="space-y-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-black">
            <li className="cursor-pointer hover:text-orange-400 transition-colors">About Us</li>
            <li className="cursor-pointer hover:text-orange-400 transition-colors">Service</li>
            <li className="cursor-pointer hover:text-orange-400 transition-colors">Works</li>
            <li className="cursor-pointer hover:text-orange-400 transition-colors">Careers</li>
          </ul>

          {/* Col 2 — services A */}
          <ul className="space-y-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-black">
            <li className="cursor-pointer hover:text-orange-400 transition-colors">Branding</li>
            <li className="cursor-pointer hover:text-orange-400 transition-colors leading-tight">Growth Marketing</li>
            <li className="cursor-pointer hover:text-orange-400 transition-colors">Advertising</li>
            <li className="cursor-pointer hover:text-orange-400 transition-colors leading-tight">Package Design</li>
          </ul>

          {/* Col 3 — services B */}
          <ul className="space-y-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-black">
            <li className="cursor-pointer hover:text-orange-400 transition-colors">Logo Design</li>
            <li className="cursor-pointer hover:text-orange-400 transition-colors leading-tight">Creatives Design</li>
            <li className="cursor-pointer hover:text-orange-400 transition-colors">Ad Shoot</li>
            <li className="cursor-pointer hover:text-orange-400 transition-colors leading-tight">Print Products</li>
          </ul>

          {/* Col 4 — Get in touch: spans both cols on mobile, 1 col on md+ */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-black mb-3">
              Get In Touch
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-black transition-colors mb-3"
            />
            <p className="text-[11px] sm:text-xs text-gray-400">
              All Rights Reserved. Artigan Branding Studio.
            </p>
          </div>
        </div>

        {/* ── Bottom contact buttons — stack on mobile, row on sm+ ─────────── */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-black text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest px-6 py-3.5 sm:py-4 rounded-full flex-1 hover:bg-gray-900 transition-colors">
            Phone Number
          </button>
          <button className="bg-black text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest px-6 py-3.5 sm:py-4 rounded-full flex-1 hover:bg-gray-900 transition-colors">
            Email
          </button>
          <button className="bg-black text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest px-6 py-3.5 sm:py-4 rounded-full sm:flex-2 hover:bg-gray-900 transition-colors">
            Address
          </button>
        </div>

      </div>
    </footer>
  );
}
