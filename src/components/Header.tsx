"use client";
import Image from "next/image";

const Header = () => (
  <header className="sticky top-0 z-30 bg-[#1e2a45] w-full flex items-center justify-between px-6 md:px-12 py-4 h-16">
    <a href="/" className="flex items-center gap-2">
      <Image src="/assets/img/NewUI/KoinbxLogo.svg" alt="KoinBX Logo" width={130} height={28} className="h-7 w-auto" priority />
    </a>
    
    {/* Desktop Navigation */}
    <nav className="hidden lg:flex items-center gap-1">
      <div className="flex items-center bg-[#2a3a5c] rounded-lg p-1">
        <div className="grid grid-cols-3 gap-1 p-1">
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
        </div>
      </div>
      <a href="#" className="px-4 py-2 text-white font-medium text-sm hover:text-[#31c4d8] transition-colors">Markets</a>
      <a href="#" className="px-4 py-2 text-white font-medium text-sm hover:text-[#31c4d8] transition-colors">Fees</a>
      <a href="#" className="px-4 py-2 text-white font-medium text-sm hover:text-[#31c4d8] transition-colors">Trade</a>
      <a href="#" className="px-4 py-2 text-white font-medium text-sm hover:text-[#31c4d8] transition-colors">List Your Crypto</a>
      <a href="#" className="px-4 py-2 text-white font-medium text-sm hover:text-[#31c4d8] transition-colors">Earnings</a>
    </nav>
    
    <div className="flex items-center gap-3">
      <a href="#" className="px-4 py-2 text-white font-medium text-sm hover:text-[#31c4d8] transition-colors">Login</a>
      <a href="#" className="px-6 py-2 bg-[#31c4d8] text-white rounded-lg font-semibold text-sm hover:bg-[#2bb3d6] transition-colors">Register</a>
      
      {/* Theme toggle */}
      <button className="p-2 text-white/60 hover:text-white transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
      </button>
      
      {/* Download button */}
      <button className="p-2 text-white/60 hover:text-white transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 16l-4-4h3V4h2v8h3l-4 4zm-8 2h16v2H4v-2z"/>
        </svg>
      </button>
    </div>
  </header>
);

export default Header;
