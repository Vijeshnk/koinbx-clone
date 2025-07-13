import Image from "next/image";

const Community = () => (
  <div className="w-full bg-[#101426] py-0">
    <div className="max-w-7xl mx-auto px-4 pt-10 pb-0">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-left mb-4">Join Our Community</h2>
      <p className="text-base text-[#8F9194] text-left mb-10 max-w-3xl">
        Discover the vibrant world of cryptos by joining the <span className="text-[#00C5F6] font-bold">KoinBX</span> social community!
      </p>
      <div className="flex flex-wrap gap-4 mb-20">
        {[
          { href: "https://twitter.com/KoinBX", icon: "/assets/img/NewUI/Twitter.svg", alt: "koinbx-twitter" },
          { href: "https://t.me/koinbx_announcement", icon: "/assets/img/NewUI/TeleNew.svg", alt: "koinbx-telegram-announcement" },
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
          <div key={idx} className="bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors" style={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

    {/* Newsletter Section */}
    <div className="w-full bg-[#101426] py-0">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between pt-2 pb-10">
        <div className="flex-1 min-w-0">
          <h2 className="text-5xl font-extrabold text-white mb-2">
            KoinBX <span className="text-[#00C5F6]">Newsletter</span>!
          </h2>
          <p className="text-base text-[#8F9194] mb-0">
            Join the <span className="text-[#00C5F6] font-bold">KoinBX</span> newsletter and stay ahead in the world of digital assets!
          </p>
        </div>
        <form className="flex-1 flex justify-end mt-6 md:mt-0">
          <div className="flex w-full max-w-xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C5F6]"
              style={{ minWidth: 0 }}
            />
            <button
              type="submit"
              className="bg-[#00C5F6] hover:bg-[#00b5e6] text-white rounded-r-lg px-4 flex items-center justify-center transition-colors"
              style={{ minWidth: 44 }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Community;
