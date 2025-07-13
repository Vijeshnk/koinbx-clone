import Image from "next/image";

const Community = () => (
  <div className="w-full bg-white dark:bg-[#101426] py-0">
    <div className="max-w-7xl mx-auto px-4 pt-10 pb-0">
      <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white text-left mb-4">Join Our Community</h2>
      <p className="text-base text-[#232323] dark:text-[#8F9194] text-left mb-10 max-w-3xl">
        Discover the vibrant world of cryptos by joining the <span className="text-[#00C5F6] font-bold">KoinBX</span> social community!
      </p>
      <div className="flex justify-center md:justify-start">
        <div className="grid grid-cols-5 gap-4 mb-20 md:flex md:flex-wrap">
          {[
            { href: "https://twitter.com/KoinBX", icon: "/assets/img/NewUI/Twitter.svg", alt: "koinbx-twitter" },
            { href: "https://t.me/koinbx_announcement", icon: "/assets/img/NewUI/Tele.svg", alt: "koinbx-telegram-announcement" },
            { href: "https://t.me/koinbx_discussion", icon: "/assets/img/NewUI/Tele.svg", alt: "koinbx-telegram-discussion" },
            { href: "https://coinmarketcap.com/exchanges/koinbx/", icon: "/assets/img/NewUI/CMC.svg", alt: "koinbx-coinmarketcap" },
            { href: "https://www.youtube.com/@KoinBX?sub_confirmation=1", icon: "/assets/img/NewUI/Youtube.svg", alt: "koinbx-youtube" },
            { href: "https://www.instagram.com/koinbx/", icon: "/assets/img/NewUI/Insta.svg", alt: "koinbx-instagram" },
            { href: "https://www.linkedin.com/company/koinbx", icon: "/assets/img/NewUI/Linkedin.svg", alt: "koinbx-linkedin" },
            { href: "https://www.facebook.com/KoinBX/", icon: "/assets/img/NewUI/Fb.svg", alt: "koinbx-facebook" },
            { href: "https://www.threads.net/@koinbx", icon: "/assets/img/NewUI/Thread.svg", alt: "koinbx-threads" },
            { href: "https://medium.com/@koinbx", icon: "/assets/img/NewUI/Medium.svg", alt: "koinbx-medium" },
            { href: "https://in.pinterest.com/koinbx/", icon: "/assets/img/NewUI/Pinterest.svg", alt: "koinbx-pinterest" },
            { href: "https://vk.com/koinbx", icon: "/assets/img/NewUI/VK.svg", alt: "koinbx-vk" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1a213d] rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-[#232b4a] transition-colors" style={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  loading="lazy"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Newsletter Section removed for extraction as separate component */}
  </div>
);

export default Community;
