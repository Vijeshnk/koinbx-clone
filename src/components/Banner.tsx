"use client";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="MuiBox-root">
      <div className="bg-banner-background">
        <div className="container banner-container">
          {/* Top announcement */}
          <p className="top100-text">
            <a 
              href="https://koinbx.com/blog/fiu-registered-compliant-indian-regulations" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              We are <strong>FIU registered & 100% compliant</strong> with Indian regulations.
            </a>
          </p>

          {/* Top 100 announcement */}
          <div className="topp100div flex items-center gap-2 mb-6">
            <span>
              <Image 
                src="/assets/img/NewUI/growth.svg" 
                alt="flight-img" 
                loading="lazy" 
                width={22} 
                height={22} 
              />
            </span>
            <span className="top100-text cursor-pointer">
              <a 
                href="https://koinbx.com/blog/koinbx-achieves-top-100-exchanges-coinmarketcap" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300"
              >
                KoinBX ranks in <strong className="text-[#00C5F6]">Top 100</strong> exchanges on CoinMarketCap.
              </a>
            </span>
          </div>

          {/* Main banner title */}
          <div className="banner-content-title-div mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight">
              The <span>Most</span> <span className="green-text-banner text-green-400">Trusted</span> and{" "}
              <span>Fastest</span> <span className="green-text-banner text-green-400">Growing</span> Crypto Exchange
            </h1>
          </div>

          {/* Register button */}
          <div className="registerbtn-banner-div text-center mb-12">
            <button className="register-btn-banner bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors">
              Register Now
            </button>
          </div>

          {/* Counter section */}
          <div className="margin-counter-banner">
            <div className="clsCounterBannerInner grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-white">
              <div>
                <p className="bold-text-banner mb-2">
                  <span>
                    <Image 
                      src="/assets/img/NewUI/GroupBanner6.svg" 
                      width={100} 
                      height={50} 
                      className="banner-milestone-img mx-auto" 
                      alt="milestone-img" 
                    />
                  </span>
                </p>
                <p className="sub-text-banner text-sm text-gray-300">Exciting Milestones Ahead</p>
              </div>
              <div>
                <p className="bold-text-banner text-2xl font-bold mb-2">
                  <span className="counter">1.5</span> M+
                </p>
                <p className="sub-text-banner text-sm text-gray-300">Userbase</p>
              </div>
              <div>
                <p className="bold-text-banner text-2xl font-bold mb-2">
                  <span className="counter">225</span>+
                </p>
                <p className="sub-text-banner text-sm text-gray-300">Active Pairs</p>
              </div>
              <div>
                <p className="bold-text-banner text-2xl font-bold mb-2">
                  $<span className="counter">38</span> Billion+
                </p>
                <p className="sub-text-banner text-sm text-gray-300">Traded so far</p>
              </div>
              <div>
                <p className="bold-text-banner text-2xl font-bold mb-2">
                  <span className="counter">200</span>+
                </p>
                <p className="sub-text-banner text-sm text-gray-300">Cryptos Listed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee section */}
        <div className="banner-marquee-div bg-blue-900 dark:bg-[#141932] py-4">
          <div className="MuiContainer-root MuiContainer-maxWidthLg max-w-6xl mx-auto px-4">
            <div className="banner-marquee flex items-center gap-4">
              <div className="marquee-img">
                <Image 
                  src="/assets/img/NewUI/megaphone.svg" 
                  alt="megaphn-img" 
                  loading="lazy" 
                  width={30} 
                  height={30} 
                />
              </div>
              <div className="marquee-outer flex-1">
                <div className="marquee-inner text-white">
                  <span className="attetntion-text-banner font-bold">Attention KoinBX Users : </span>
                  <span className="marque-text-banner">
                    KoinBX updated the primary bank to accept INR deposits through IMPS, NEFT, and RTGS.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-banner-background .banner-container {
          background: url(/assets/img/NewUI/Background.webp);
          background-position-x: center;
          background-position-y: 35%;
          background-repeat: no-repeat;
          padding-top: 3%;
          max-width: 990px !important;
          background-size: 100%;
          margin-top: 5rem;
          margin-left: auto;
          margin-right: auto;
          padding: 3% 2rem 2rem;
          border-radius: 1rem;
        }

        @media (min-width: 768px) and (max-width: 1200px) {
          .bg-banner-background .banner-container {
            max-width: 960px;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }

        .top100-text {
          color: white;
          text-align: center;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Banner;
