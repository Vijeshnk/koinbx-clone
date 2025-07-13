import Image from "next/image";

const Hero = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[700px] w-full px-4 pt-16 pb-20 bg-[#1e2a45] overflow-hidden">
    {/* Background Image */}
    <Image
      src="/assets/img/NewUI/Background.webp"
      alt="Background"
      fill
      style={{ objectFit: 'cover', zIndex: 0 }}
      className="pointer-events-none select-none"
      priority
    />
    
    {/* Dark overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#1e2a45]/80 via-[#1e2a45]/60 to-[#1e2a45]/80 z-[1]"></div>
    
    {/* Info banners on top */}
    <div className="relative z-10 flex flex-col items-center w-full gap-3 mb-8">
      <div className="flex items-center justify-center text-base font-medium text-white">
        <span>We are <a className="underline text-[#31c4d8] font-bold" href="#">FIU registered & 100% compliant</a> with Indian regulations.</span>
      </div>
      <div className="flex items-center justify-center text-base font-medium text-white gap-2">
        <span className="text-lg">🚀</span>
        <span>KoinBX ranks in <a className="underline text-[#31c4d8] font-bold" href="#">Top 100</a> exchanges on CoinMarketCap.</span>
      </div>
    </div>
    
    {/* Headline */}
    <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
      <h1 className="text-[2.5rem] md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white">
        The Most <span className="text-[#31c4d8]">Trusted</span> and <span className="text-[#31c4d8]">Fastest</span><br/>
        <span className="text-[#31c4d8]">Growing</span> Crypto Exchange
      </h1>
      <a
        href="#"
        className="inline-block px-8 py-3 bg-[#31c4d8] hover:bg-[#2bb3d6] transition-colors rounded-lg text-lg font-semibold text-white shadow-lg"
      >
        Register Now
      </a>
    </div>
    
    {/* Statistics bar bottom */}
    <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-4 bg-white/5 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10">
      {/* Milestone left */}
      <div className="flex flex-col items-center gap-2 min-w-[140px]">
        <Image src="/assets/img/newui/6year.png" alt="6 Years" width={60} height={52} className="mb-1" />
        <span className="text-sm font-semibold text-white text-center">Exciting Milestones Ahead</span>
      </div>
      
      {/* Stat 1 */}
      <div className="flex flex-col items-center gap-1">
        <div className="text-3xl font-bold text-white">1.5 M+</div>
        <div className="text-sm font-medium text-white/80">Userbase</div>
      </div>
      
      {/* Stat 2 */}
      <div className="flex flex-col items-center gap-1">
        <div className="text-3xl font-bold text-white">225+</div>
        <div className="text-sm font-medium text-white/80">Active Pairs</div>
      </div>
      
      {/* Stat 3 */}
      <div className="flex flex-col items-center gap-1">
        <div className="text-3xl font-bold text-white">$38 Billion+</div>
        <div className="text-sm font-medium text-white/80">Traded so far</div>
      </div>
      
      {/* Stat 4 */}
      <div className="flex flex-col items-center gap-1">
        <div className="text-3xl font-bold text-white">200+</div>
        <div className="text-sm font-medium text-white/80">Cryptos Listed</div>
      </div>
    </div>
    
    {/* Bottom info line */}
    <div className="relative z-10 mt-8 flex items-center justify-center text-sm font-medium text-white/90 gap-2">
      <span className="text-[#31c4d8]">📢</span>
      <span>Updated primary bank to accept INR deposits through IMPS, NEFT, and RTGS.</span>
    </div>
  </section>
);

export default Hero;
