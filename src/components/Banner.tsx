"use client";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="MuiBox-root bg-white dark:bg-[#141932]">
      <div className="bg-banner-background dark:bg-[#141932]">
        <div className="container banner-container">
          {/* Top announcement */}
          <p className="top100-text">
            <a
              href="https://koinbx.com/blog/fiu-registered-compliant-indian-regulations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#222] dark:text-[#b6eaff] hover:text-[#00c5f6] transition-colors"
            >
              We are <strong className="text-[#00c5f6]">FIU registered & 100% compliant</strong> with Indian regulations.
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
                style={{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(13%) saturate(7492%) hue-rotate(157deg) brightness(102%) contrast(101%)' }}
              />
            </span>
            <span className="top100-text cursor-pointer">
              <a
                href="https://koinbx.com/blog/koinbx-achieves-top-100-exchanges-coinmarketcap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#222] dark:text-[#b6eaff] hover:text-[#00c5f6] transition-colors"
              >
                KoinBX ranks in <strong className="text-[#00c5f6]">Top 100</strong> exchanges on CoinMarketCap.
              </a>
            </span>
          </div>

          {/* Main banner title */}
          <div className="banner-content-title-div mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222] text-center leading-tight dark:text-[#fff]">
              The <span className="font-bold">Most</span> <span className="font-bold text-[#00c5f6]">Trusted</span> and{' '}
              <span className="font-bold">Fastest</span> <span className="font-bold text-[#00c5f6]">Growing</span> Crypto Exchange
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
                <p className="bold-text-banner text-2xl font-bold mb-2 text-[#222] dark:text-white">
                  <span className="counter">1.5</span> M+
                </p>
                <p className="sub-text-banner text-sm text-[#222] dark:text-gray-300">Userbase</p>
              </div>
              <div>
                <p className="bold-text-banner text-2xl font-bold mb-2 text-[#222] dark:text-white">
                  <span className="counter">225</span>+
                </p>
                <p className="sub-text-banner text-sm text-[#222] dark:text-gray-300">Active Pairs</p>
              </div>
              <div>
                <p className="bold-text-banner text-2xl font-bold mb-2 text-[#222] dark:text-white">
                  $<span className="counter">38</span> Billion+
                </p>
                <p className="sub-text-banner text-sm text-[#222] dark:text-gray-300">Traded so far</p>
              </div>
              <div>
                <p className="bold-text-banner text-2xl font-bold mb-2 text-[#222] dark:text-white">
                  <span className="counter">200</span>+
                </p>
                <p className="sub-text-banner text-sm text-[#222] dark:text-gray-300">Cryptos Listed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee section */}
        <div className="banner-marquee-div bg-[#f5f7fa] dark:bg-[#1a213d] py-4 overflow-hidden">
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
                <div className="marquee-inner text-[#222] dark:text-white whitespace-nowrap">
                  <span className="marquee-text-banner marquee-text-animate inline-block">
                    <span className="attetntion-text-banner font-bold">Attention KoinBX Users : </span>
                    KoinBX updated the primary bank to accept INR deposits through IMPS, NEFT, and RTGS.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-inner {
          position: relative;
          overflow: hidden;
        }
        .marquee-text-animate {
          display: inline-block;
          white-space: nowrap;
          animation: marquee-left 18s linear infinite;
        }
        @keyframes marquee-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
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
        .bg-banner-background.bg-white .banner-container {
          background: white !important;
        }
        }
        .bg-banner-background.bg-white .banner-container {
          background: none;
        }
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
