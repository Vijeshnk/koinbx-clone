import Image from "next/image";

const community = [
  { src: "/assets/img/NewUI/Tele.svg", alt: "Telegram" },
  { src: "/assets/img/NewUI/Twitter.svg", alt: "Twitter" },
  { src: "/assets/img/NewUI/Fb.svg", alt: "Facebook" },
  { src: "/assets/img/NewUI/Insta.svg", alt: "Instagram" },
  { src: "/assets/img/NewUI/Youtube.svg", alt: "YouTube" },
  { src: "/assets/img/NewUI/Linkedin.svg", alt: "LinkedIn" },
  { src: "/assets/img/NewUI/Medium.svg", alt: "Medium" },
];

const Community = () => (
  <section className="py-14 px-4 md:px-0 bg-gradient-to-b from-[#212b41] from-80% via-[#222c42] to-[#263a51] text-white w-full">
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Join our Community</h2>
      <p className="max-w-xl mb-6 text-[#bcd7e2] text-base">For insights, tips, and quick support, follow KoinBX on your favorite platforms!</p>
      <div className="flex flex-wrap gap-6 justify-center items-center mt-3 mb-1">
        {community.map((com) => (
          <a href="#" key={com.alt} rel="noopener nofollow" className="flex items-center justify-center rounded-full border-2 border-[#183861] bg-[#25304b] hover:bg-[#31c4d8] hover:border-[#31c4d8] transition p-3">
            <Image src={com.src} alt={com.alt} width={32} height={32} className="w-7 h-7" />
          </a>
        ))}
      </div>
      <a href="#" className="inline-block mt-5 px-7 py-3 bg-gradient-to-l from-[#31c4d8] to-[#2f80ed] text-white text-base font-semibold rounded-lg shadow hover:from-[#2f80ed] hover:to-[#31c4d8] transition-colors">Join Now</a>
    </div>
  </section>
);

export default Community;
