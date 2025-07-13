import Image from "next/image";

const BoostVisibility = () => (
  <section className="w-full py-16 px-4 md:px-0 bg-[#182031]">
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-[#1a2844] to-[#222946] rounded-2xl overflow-hidden shadow-2xl border border-[#25304b] relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/assets/img/newui/world-dots-placeholder.png')] opacity-10"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-white font-extrabold text-3xl md:text-4xl mb-4">
              BOOST VISIBILITY
            </h2>
            <p className="text-white font-bold text-xl md:text-2xl mb-2">
              LIST YOUR CRYPTO ON
            </p>
            <p className="text-[#31c4d8] font-extrabold text-2xl md:text-3xl mb-6">
              KOINBX
            </p>
            <p className="text-[#c8d1d5] text-base mb-8 max-w-lg">
              Expand your reach and connect with millions of crypto enthusiasts. List your cryptocurrency on KoinBX and boost your project's visibility.
            </p>
            <a 
              href="#" 
              className="inline-block px-8 py-3 bg-gradient-to-l from-[#31c4d8] to-[#2f80ed] text-white font-bold rounded-lg hover:from-[#2f80ed] hover:to-[#31c4d8] transition-colors"
            >
              Get Started
            </a>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-[#31c4d8]/20 to-[#2f80ed]/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-[#31c4d8]/30 to-[#2f80ed]/30 rounded-full flex items-center justify-center">
                  <div className="text-white/60 text-center">
                    <div className="text-6xl mb-2">🚀</div>
                    <div className="font-semibold">Boost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BoostVisibility;
