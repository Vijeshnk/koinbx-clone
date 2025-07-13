import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    img: "/assets/img/newui/ksn-banner.png", // Add this placeholder if screenshot asset not present
    alt: "KISSAN KSN Enabled Now",
  },
  {
    img: "/assets/img/newui/shib-banner.png", // Add this placeholder if screenshot asset not present
    alt: "1,25,000 SHIB Giveaway",
  },
];

const LatestInsights = () => (
  <section className="w-full px-4 md:px-0 py-16 bg-[#17213B] flex flex-col items-center">
    <h2 className="text-white font-extrabold text-3xl md:text-5xl mb-10 w-full max-w-6xl">Latest Insights</h2>
    <div className="w-full max-w-6xl flex items-center justify-between gap-4">
      <button className="rounded-full bg-[#1d2c47] p-2 group hover:bg-[#193159] border border-[#2c3753] transition"><ChevronLeft className="w-7 h-7 text-white group-hover:text-[#31c4d8]" /></button>
      <div className="flex-1 flex flex-row gap-10 overflow-x-auto scrollbar-hide px-2">
        {cards.map((c, i) => (
          <div key={i} className="min-w-[360px] md:min-w-[430px] bg-[#1b2336] rounded-2xl overflow-hidden shadow-xl border border-[#25304b] flex items-center justify-center ">
            <Image src={c.img} alt={c.alt} width={410} height={230} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <button className="rounded-full bg-[#1d2c47] p-2 group hover:bg-[#193159] border border-[#2c3753] transition"><ChevronRight className="w-7 h-7 text-white group-hover:text-[#31c4d8]" /></button>
    </div>
  </section>
);

export default LatestInsights;
