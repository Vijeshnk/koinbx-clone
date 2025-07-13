import Image from "next/image";

const logos = [
  { src: "/assets/img/newui/CMC.svg", alt: "CMC" },
  { src: "/assets/img/NewUI/CMC.svg", alt: "CMC2" },
  { src: "/assets/img/NewUI/Medium.svg", alt: "Medium" },
  { src: "/assets/img/NewUI/Linkedin.svg", alt: "LinkedIn" },
  { src: "/assets/img/NewUI/Fb.svg", alt: "Facebook" },
  { src: "/assets/img/NewUI/Twitter.svg", alt: "Twitter" },
  { src: "/assets/img/NewUI/Insta.svg", alt: "Instagram" },
  { src: "/assets/img/NewUI/Youtube.svg", alt: "YouTube" },
  { src: "/assets/img/NewUI/Thread.svg", alt: "Threads" },
  { src: "/assets/img/NewUI/Tele.svg", alt: "Telegram" },
];

const TrustedBy = () => (
  <section className="py-14 px-3 md:px-0 bg-[#182031] w-full">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-lg md:text-2xl font-bold text-white mb-4">Trusted By Leading Communities</h2>
      <p className="text-[#9baac7] text-sm mb-7">Join millions who put their trust in KoinBX every day</p>
      <div className="flex flex-row flex-wrap justify-center gap-7 md:gap-12 items-center mt-4">
        {logos.map((logo) => (
          <Image key={logo.alt} src={logo.src} alt={logo.alt} width={42} height={42} className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
