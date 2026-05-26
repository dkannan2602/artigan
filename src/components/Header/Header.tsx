"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 py-3 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-white rounded-full px-5 sm:px-6 py-2.5 shadow-md border border-gray-200">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 border-2 border-black rounded-lg flex items-center justify-center shrink-0 bg-white">
            <span className="font-black text-base text-black leading-none">a</span>
          </div>
          <div className="leading-tight">
            <div className="font-black text-base sm:text-lg tracking-tight text-black">artigan</div>
            <div className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-gray-500 font-medium">
              Branding · Studio
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden sm:block bg-orange-400 hover:bg-orange-500 active:bg-orange-600 text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-colors">
            Grow With Us
          </button>
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-400 hover:bg-orange-500 active:bg-orange-600 rounded-full flex items-center justify-center transition-colors shrink-0"
          >
            {menuOpen ? (
              /* X icon when open */
              <span className="relative w-[14px] h-[14px] flex items-center justify-center">
                <span className="absolute block w-[14px] h-[2px] bg-white rounded-full rotate-45" />
                <span className="absolute block w-[14px] h-[2px] bg-white rounded-full -rotate-45" />
              </span>
            ) : (
              /* Hamburger icon */
              <span className="flex flex-col gap-[4px] items-center justify-center">
                <span className="block w-[14px] h-[2px] bg-white rounded-full" />
                <span className="block w-[14px] h-[2px] bg-white rounded-full" />
                <span className="block w-[10px] h-[2px] bg-white rounded-full self-start ml-[2px]" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden max-w-6xl mx-auto mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-5 flex flex-col gap-4">
          <nav className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-wider text-black">
            <a href="#" className="hover:text-orange-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Service</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Works</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Careers</a>
          </nav>
          <button className="w-full bg-orange-400 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-widest py-3 rounded-full transition-colors">
            Grow With Us
          </button>
        </div>
      )}
    </header>
  );
}
