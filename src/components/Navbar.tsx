"use client";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#1e2b47] border-b border-[#2a3a5c]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Image 
                src="/assets/img/NewUI/KoinbxLogo.svg" 
                alt="KoinBX Logo" 
                width={120} 
                height={28} 
                className="h-7 w-auto" 
                priority 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Menu Grid Icon */}
            <div className="flex items-center justify-center w-8 h-8 bg-[#2a3a5c] rounded-md mr-4">
              <div className="grid grid-cols-3 gap-0.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white/60 rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <a 
              href="#" 
              className="px-4 py-2 text-white text-sm font-medium hover:text-[#31c4d8] transition-colors duration-200"
            >
              Markets
            </a>
            <a 
              href="#" 
              className="px-4 py-2 text-white text-sm font-medium hover:text-[#31c4d8] transition-colors duration-200"
            >
              Fees
            </a>
            <a 
              href="#" 
              className="px-4 py-2 text-white text-sm font-medium hover:text-[#31c4d8] transition-colors duration-200"
            >
              Trade
            </a>
            <a 
              href="#" 
              className="px-4 py-2 text-white text-sm font-medium hover:text-[#31c4d8] transition-colors duration-200"
            >
              List Your Crypto
            </a>
            <a 
              href="#" 
              className="px-4 py-2 text-white text-sm font-medium hover:text-[#31c4d8] transition-colors duration-200"
            >
              Earnings
            </a>
          </div>

          {/* Right Side - Auth & Actions */}
          <div className="flex items-center space-x-3">
            {/* Login */}
            <a 
              href="#" 
              className="text-white text-sm font-medium hover:text-[#31c4d8] transition-colors duration-200 px-3 py-2"
            >
              Login
            </a>

            {/* Register Button */}
            <a 
              href="#" 
              className="bg-[#31c4d8] hover:bg-[#2bb3d6] text-white text-sm font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Register
            </a>

            {/* Theme Toggle */}
            <button 
              className="p-2 text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Toggle theme"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            </button>

            {/* Download */}
            <button 
              className="p-2 text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Download app"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 16l-4-4h3V4h2v8h3l-4 4zm-8 2h16v2H4v-2z"/>
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="p-2 text-white hover:text-[#31c4d8] transition-colors duration-200"
              aria-label="Open mobile menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
