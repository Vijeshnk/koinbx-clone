import Image from "next/image";

const coins = [
  {
    icon: "/assets/img/newui/btc.png",
    pair: "BTC/INR",
    price: "₹2,900,000",
    change: "+1.25%",
    volume: "₹260Cr",
    up: true,
  },
  {
    icon: "/assets/img/newui/eth.png",
    pair: "ETH/INR",
    price: "₹175,000",
    change: "-0.75%",
    volume: "₹95Cr",
    up: false,
  },
  {
    icon: "/assets/img/newui/btc.png", // Using BTC as placeholder for USDT
    pair: "USDT/INR",
    price: "₹83",
    change: "+0.10%",
    volume: "₹54Cr",
    up: true,
  },
  {
    icon: "/assets/img/newui/eth.png", // Using ETH as placeholder for BNB
    pair: "BNB/INR",
    price: "₹20,100",
    change: "+2.01%",
    volume: "₹19Cr",
    up: true,
  },
  {
    icon: "/assets/img/newui/btc.png", // Using BTC as placeholder for ADA
    pair: "ADA/INR",
    price: "₹36",
    change: "-0.90%",
    volume: "₹8Cr",
    up: false,
  },
];

const MarketSection = () => (
  <section className="w-full py-14 px-2 md:px-0 bg-[#182031]">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-xl md:text-2xl text-white font-bold mb-4 text-center">Top Crypto Markets</h2>
      <div className="bg-[#232d45] rounded-2xl overflow-x-auto shadow-lg">
        <table className="w-full text-left min-w-[420px] divide-y divide-[#303753]">
          <thead>
            <tr className="text-xs md:text-sm text-[#c8d1d5] uppercase">
              <th className="p-4">Pair</th>
              <th className="p-4">Price</th>
              <th className="p-4">24h Change</th>
              <th className="p-4">Volume</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((c) => (
              <tr
                key={c.pair}
                className="bg-[#222c42] even:bg-[#1e283f]/80 hover:bg-[#263a51]/80 transition-colors text-white"
              >
                <td className="p-4 flex items-center gap-3 font-semibold">
                  <Image src={c.icon} alt={c.pair} width={28} height={28} className="rounded-full" />
                  {c.pair}
                </td>
                <td className="p-4 text-base">{c.price}</td>
                <td className={`p-4 font-bold ${c.up ? "text-[#4ee0b5]" : "text-[#ff7183]"}`}>{c.change}</td>
                <td className="p-4">{c.volume}</td>
                <td className="p-4 flex gap-2">
                  <button className="px-3 py-1.5 rounded-md bg-[#31c4d8]/90 hover:bg-[#2f80ed] text-white font-bold text-xs shadow transition">BUY</button>
                  <button className="px-3 py-1.5 rounded-md bg-[#2b3146] hover:bg-[#ba3a45] text-[#ff7c90] font-bold text-xs shadow transition">SELL</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default MarketSection;
