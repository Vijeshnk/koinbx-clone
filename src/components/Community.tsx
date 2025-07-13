import Image from "next/image";

const Community = () => (
  <div className="MuiBox-root jss10 bg-[#2d3748] py-16">
    <div className="clscontainer max-w-7xl mx-auto px-4">
      <div className="social-media-container text-center">
        <div className="mb-8">
          <h2 className="social-media-text text-white text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="keep-up-text text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the vibrant world of cryptos by joining the{" "}
            <span className="koinbx-bold-text text-[#4FD1C7] font-bold">KoinBX</span> social community!
          </p>
        </div>
        <div className="d-flex w-100 social-flex-div flex flex-wrap justify-center items-center gap-4">
          <div className="bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <a href="https://twitter.com/KoinBX" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/img/NewUI/Twitter.svg" 
                alt="koinbx-twitter" 
                loading="lazy"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <a href="https://t.me/koinbx_announcement" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/img/NewUI/TeleNew.svg" 
                alt="koinbx-telegram-announcement" 
                loading="lazy"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <a href="https://t.me/koinbx_discussion" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/img/NewUI/Tele.svg" 
                alt="koinbx-telegram-discussion" 
                loading="lazy"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <a href="https://coinmarketcap.com/exchanges/koinbx/" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/img/NewUI/CMC.svg" 
                alt="koinbx-coinmarketcap" 
                loading="lazy"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <a href="https://www.youtube.com/@KoinBX?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/img/NewUI/Youtube.svg" 
                alt="koinbx-youtube" 
                loading="lazy"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <a href="https://www.instagram.com/koinbx/" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/img/NewUI/Insta.svg" 
                alt="koinbx-instagram" 
                loading="lazy"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <a href="https://www.linkedin.com/company/koinbx" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/img/NewUI/Linkedin.svg" 
                alt="koinbx-linkedin" 
                loading="lazy"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <a href="https://www.facebook.com/KoinBX/" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/img/NewUI/Fb.svg" 
                alt="koinbx-facebook" 
                loading="lazy"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <a href="https://www.threads.net/@koinbx" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/img/NewUI/Thread.svg" 
                alt="koinbx-threads" 
                loading="lazy"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <a href="https://medium.com/@koinbx" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/img/NewUI/Medium.svg" 
                alt="koinbx-medium" 
                loading="lazy"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <a href="https://in.pinterest.com/koinbx/" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/img/NewUI/Pinterest.svg" 
                alt="koinbx-pinterest" 
                loading="lazy"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors">
            <a href="https://vk.com/koinbx" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/img/NewUI/VK.svg" 
                alt="koinbx-vk" 
                loading="lazy"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Community;
