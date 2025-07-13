import Image from "next/image";

const features = [
  {
    icon: "/assets/img/newui/Robust-Security.svg",
    title: "Robust Security",
    desc: "Institutional-grade tech stack & 95% assets held in cold wallets.",
  },
  {
    icon: "/assets/img/newui/Diversified-ic.svg",
    title: "Diversified assets",
    desc: "200+ trading pairs with BTC, USDT, INR including emerging altcoins.",
  },
  {
    icon: "/assets/img/newui/Competitive-ic.svg",
    title: "Competitive Fees",
    desc: "Low costs for spot & P2P trades, with industry-best pricing.",
  },
  {
    icon: "/assets/img/newui/Fastest-Customer.svg",
    title: "Fast Support",
    desc: "24/7 customer service team available to quickly solve your queries.",
  },
];

const Features = () => (
  <section className="py-16 px-4 md:px-0 bg-[#212b41] w-full">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 text-center drop-shadow">Why KoinBX?</h2>
      <p className="text-base md:text-lg text-[#dbe8eb] mb-10 text-center max-w-xl">Engineered for high security, deep liquidity and best pricing for every Indian crypto investor.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
        {features.map((f) => (
          <div key={f.title} className="bg-gradient-to-br from-[#242d44] to-[#202940] border border-[#2d3957] rounded-2xl p-8 shadow-lg flex flex-col items-center text-center ring-1 ring-[#25304b]">
            <div className="bg-[#162032]/70 rounded-full w-16 h-16 flex items-center justify-center mb-3 shadow-md">
              <Image src={f.icon} alt={f.title} width={36} height={36} className="w-9 h-9" />
            </div>
            <div className="text-lg font-bold text-[#31c4d8] mb-2">{f.title}</div>
            <div className="text-[#d4d7e2] text-base leading-snug">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
