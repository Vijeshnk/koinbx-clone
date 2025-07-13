"use client";
import Image from "next/image";
import { useState } from "react";

const hotCoins = [
  { icon: "/assets/img/newui/btc.png", pair: "BTC/INR", price: "10474876.79", change: "-0.18%", up: false },
  { icon: "/assets/img/newui/eth.png", pair: "ETH/INR", price: "263711.76", change: "-1.02%", up: false },
  { icon: "/assets/img/newui/uvcx.png", pair: "UVCX/INR", price: "5.334", change: "-20.86%", up: false },
  { icon: "/assets/img/newui/trx.png", pair: "TRX/INR", price: "27.05654", change: "+3.00%", up: true },
  { icon: "/assets/img/newui/sol.png", pair: "SOL/INR", price: "14414.48", change: "-1.07%", up: false },
];
const newListing = [
  { icon: "/assets/img/newui/btc.png", pair: "KSN/INR", price: "23.32", change: "+8.10%", up: true },
  { icon: "/assets/img/newui/eth.png", pair: "XYZ/INR", price: "9.61", change: "-0.23%", up: false },
];
const gainers = [
  { icon: "/assets/img/newui/trx.png", pair: "TRX/INR", price: "27.05654", change: "+3.00%" },
  { icon: "/assets/img/newui/tlos.png", pair: "TLOS/INR", price: "6.48", change: "+2.53%" },
  { icon: "/assets/img/newui/doge.png", pair: "DOGE/INR", price: "17.9522427", change: "+2.05%" },
];
const losers = [
  { icon: "/assets/img/newui/btc.png", pair: "BCH/INR", price: "12726.03", change: "-55.77%" },
  { icon: "/assets/img/newui/ton.png", pair: "TON/INR", price: "382.001", change: "-29.40%" },
  { icon: "/assets/img/newui/jasmy.png", pair: "JASMY/INR", price: "0.6535", change: "-21.90%" },
];

const MarketTickerSection = () => {
  const [tab, setTab] = useState<'hot'|'new'>('hot');
  return (
    <section className="w-full py-16 px-4 md:px-0 bg-[#17213B]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white font-extrabold text-3xl md:text-4xl mb-10">Catch Your Next Trading Opportunity</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Hot Coins/New Listing tab panel */}
          <div className="flex-1 bg-[#222946] rounded-2xl shadow-xl px-4 pb-6 pt-1 min-w-[310px]">
            <div className="flex mb-4 mt-5 border-b-2 border-[#283058] w-[290px] md:w-[370px]">
              <button onClick={() => setTab('hot')} className={`px-4 py-2 font-bold text-base ${tab==='hot' ? 'text-[#31c4d8] border-b-4 border-[#31c4d8]' : 'text-white/60 border-b-4 border-transparent'}`}>HOT COINS</button>
              <button onClick={() => setTab('new')} className={`px-4 py-2 font-bold text-base ${tab==='new' ? 'text-[#31c4d8] border-b-4 border-[#31c4d8]' : 'text-white/60 border-b-4 border-transparent'}`}>NEW LISTING</button>
            </div>
            {(tab==='hot'?hotCoins:newListing).map(c => (
              <div key={c.pair} className="flex items-center justify-between py-4 border-b border-[#29325c]/60 last:border-none">
                <div className="flex items-center gap-3">
                  <Image src={c.icon} alt={c.pair} width={32} height={32} className="w-8 h-8 rounded-full bg-white/10" />
                  <span className="font-bold text-white text-base">{c.pair}</span>
                </div>
                <div className="text-white font-mono text-base tabular-nums">{c.price}</div>
                <div className={`font-semibold text-[15px] ${c.up ? 'text-[#3de692]' : 'text-[#ff688d]'}`}>{c.change}</div>
                <button className="bg-transparent border border-[#04d0fb] text-[#04d0fb] px-4 py-1 rounded-2xl font-bold ml-2 hover:bg-[#052738]/30 transition">Trade</button>
              </div>
            ))}
          </div>
          {/* Right: Top Gainers / Losers (side by side color cards) */}
          <div className="flex flex-col mt-2 md:mt-0 md:w-[380px] gap-4">
            {/* Gainers */}
            <div className="bg-[#144841] rounded-2xl shadow-lg p-4 mb-2">
              <div className="text-white font-extrabold text-lg mb-3 flex items-center gap-3"><span className="text-[#3de692]">TOP GAINERS</span> <span className="text-[20px]">📈</span></div>
              {gainers.map(c => (
                <div key={c.pair} className="flex items-center justify-between py-3 border-b border-[#295d52]/60 last:border-none">
                  <div className="flex items-center gap-3">
                    <Image src={c.icon} alt={c.pair} width={25} height={25} className="w-6 h-6" />
                    <span className="font-semibold text-white text-sm">{c.pair}</span>
                  </div>
                  <div className="text-white text-sm font-mono tabular-nums">{c.price}</div>
                  <div className={`font-bold text-[#3de692] text-sm`}>{c.change}</div>
                </div>
              ))}
            </div>
            {/* Losers */}
            <div className="bg-[#4a2226] rounded-2xl shadow-lg p-4">
              <div className="text-white font-extrabold text-lg mb-3 flex items-center gap-3"><span className="text-[#ff688d]">TOP LOSERS</span> <span className="text-[20px]">📉</span></div>
              {losers.map(c => (
                <div key={c.pair} className="flex items-center justify-between py-3 border-b border-[#605252]/60 last:border-none">
                  <div className="flex items-center gap-3">
                    <Image src={c.icon} alt={c.pair} width={25} height={25} className="w-6 h-6" />
                    <span className="font-semibold text-white text-sm">{c.pair}</span>
                  </div>
                  <div className="text-white text-sm font-mono tabular-nums">{c.price}</div>
                  <div className={`font-bold text-[#ff688d] text-sm`}>{c.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketTickerSection;
