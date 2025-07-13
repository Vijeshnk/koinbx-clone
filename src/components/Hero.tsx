import Image from "next/image";

const links = [
  {
    icon: null,
    text: (
      <>
        We are <a className="underline text-[#04d0fb] font-bold" href="#">FIU registered & 100% compliant</a> with Indian regulations.
      </>
    ),
  },
  {
    icon: <span className="inline-block mr-1">🚀</span>,
    text: (
      <>
        KoinBX ranks in <a className="underline text-[#04d0fb] font-bold" href="#">Top 100</a> exchanges on CoinMarketCap.
      </>
    ),
  },
];

const Hero = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[650px] w-full px-4 pt-10 pb-10 dark:bg-[#17213B] bg-[#17213B]">
    {/* world map bg - use SVG/PNG asset or temp faded-dot map */}
    <Image
      src="/assets/img/newui/world-dots-placeholder.png"
      alt="World Map"
      fill
      style={{ objectFit: 'cover', opacity: 0.16, zIndex: 0 }}
      className="pointer-events-none select-none"
      priority
    />
    {/* Info banners on top */}
    <div className="relative z-10 flex flex-col items-center w-full gap-2 mb-7">
      {links.map((l, i) => (
        <div key={i} className="flex items-center justify-center text-base font-medium text-[#fff]">
          {l.icon} <span className="mx-1">{l.text}</span>
        </div>
      ))}
    </div>
    {/* Headline */}
    <div className="relative z-10 max-w-3xl mx-auto text-center mt-4 mb-9">
      <h1 className="text-[2.25rem] md:text-5xl lg:text-6xl font-semibold leading-tight mb-3">
        The <span className="text-white">Most <span className="text-[#04d0fb] font-bold">Trusted</span> and <span className="text-[#17cbfc] font-bold">Fastest</span></span><br/>
        <span className="text-[#04d0fb] font-bold">Growing</span> Crypto Exchange
      </h1>
      <a
        href="#"
        className="inline-block w-[210px] md:w-[250px] bg-[#04d0fb] hover:bg-[#18b3e4] transition-colors py-3 rounded-full text-lg font-semibold mt-6 text-center shadow-lg"
      >
        Register Now
      </a>
    </div>
    {/* 4-stats bar bottom */}
    <div className="relative z-10 mt-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 md:gap-0">
      {/* Milestone left */}
      <div className="flex flex-col items-center gap-1 min-w-[120px]">
        <Image src="/assets/img/newui/6year.png" alt="6 Years" width={62} height={54} className="mb-1" />
        <span className="text-sm md:text-base font-semibold text-[#fff]">Exciting Milestones Ahead</span>
      </div>
      {/* Stat 1 */}
      <div className="flex flex-col items-center gap-1">
        <div className="text-2xl font-extrabold text-[#fff]">1.5 M+</div>
        <div className="text-sm font-semibold text-[#cad4e3]">Userbase</div>
      </div>
      {/* Stat 2 */}
      <div className="flex flex-col items-center gap-1">
        <div className="text-2xl font-extrabold text-[#fff]">225+</div>
        <div className="text-sm font-semibold text-[#cad4e3]">Active Pairs</div>
      </div>
      {/* Stat 3 */}
      <div className="flex flex-col items-center gap-1">
        <div className="text-2xl font-extrabold text-[#fff]">$38 Billion+</div>
        <div className="text-sm font-semibold text-[#cad4e3]">Traded so far</div>
      </div>
      {/* Stat 4 */}
      <div className="flex flex-col items-center gap-1">
        <div className="text-2xl font-extrabold text-[#fff]">200+</div>
        <div className="text-sm font-semibold text-[#cad4e3]">Cryptos Listed</div>
      </div>
    </div>
  </section>
);

export default Hero;
