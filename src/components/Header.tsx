"use client";
import Image from "next/image";

const Header = () => (
  <header className="sticky top-0 z-30 bg-[#222c42] shadow-md w-full flex items-center justify-between px-6 md:px-12 py-4 h-20 border-b border-[#2c3753]">
    <a href="/" className="flex items-center gap-2">
      <Image src="/assets/img/NewUI/KoinbxLogo.svg" alt="KoinBX Logo" width={170} height={36} className="h-9 w-auto" priority />
    </a>
    <nav className="hidden lg:flex gap-8 text-white font-medium text-base tracking-wide">
      <a href="#" className="hover:text-[#31c4d8] transition-colors">Trade</a>
      <a href="#" className="hover:text-[#31c4d8] transition-colors">Markets</a>
      <a href="#" className="hover:text-[#31c4d8] transition-colors">Academy</a>
      <a href="#" className="hover:text-[#31c4d8] transition-colors">Contact</a>
    </nav>
    <div className="flex items-center gap-3">
      {/* Theme toggle placeholder */}
      <span className="hidden md:inline-block px-3 py-2 text-white/60 text-xs font-mono">[Theme]</span>
      <a href="#" className="px-5 py-2 bg-transparent border border-[#31c4d8] text-[#31c4d8] rounded-lg font-semibold text-sm hover:bg-[#263a51]/80 transition-colors duration-200">Login</a>
      <a href="#" className="ml-2 px-5 py-2 bg-gradient-to-l from-[#31c4d8] to-[#2f80ed] text-white rounded-lg font-semibold text-sm shadow-lg hover:from-[#2f80ed] hover:to-[#31c4d8] transition-colors duration-200">Sign Up</a>
    </div>
  </header>
);

export default Header;
