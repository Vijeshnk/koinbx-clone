"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500; // 2.5 seconds
    const steps = 60; // 60 steps for smooth animation
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(target, increment * step);
      setCount(current);

      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  const formatNumber = (num: number) => {
    // Handle decimal numbers (like 1.5)
    if (target % 1 !== 0) {
      return num.toFixed(1);
    }
    return Math.floor(num).toString();
  };

  // Calculate the expected width to prevent layout shift
  const getExpectedWidth = () => {
    const fullText = `${prefix}${target % 1 !== 0 ? target.toFixed(1) : target}${suffix}`;
    return fullText.length;
  };

  return (
    <span 
      ref={elementRef} 
      className="counter inline-block"
      style={{ minWidth: `${getExpectedWidth() * 0.6}em` }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

const Banner = () => {
  return (
    <div className="MuiBox-root bg-white dark:bg-[#131932]">
      <div className="bg-banner-background dark:bg-[#141932]">
        <div className="container banner-container">
          {/* Top announcement */}
          <p className="top100-text mt-16">
            <a
              href="https://koinbx.com/blog/fiu-registered-compliant-indian-regulations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#222] dark:text-[#b6eaff] hover:text-[#00c5f6] transition-colors underline"
            >
              We are <strong className="text-[#00c5f6]">FIU registered & 100% compliant</strong> with Indian regulations.
            </a>
          </p>

          {/* Top 100 announcement */}
          <div className="topp100div flex items-center justify-center gap-2 mb-6">
            <span className="w-[22px] h-[22px] flex-shrink-0">
              <Image
                src="/assets/img/NewUI/growth.svg"
                alt="flight-img"
                loading="eager"
                width={22}
                height={22}
                style={{ 
                  filter: 'brightness(0) saturate(100%) invert(77%) sepia(13%) saturate(7492%) hue-rotate(157deg) brightness(102%) contrast(101%)',
                  width: '22px',
                  height: '22px'
                }}
              />
            </span>
            <span className="top100-text cursor-pointer">
              <a
                href="https://koinbx.com/blog/koinbx-achieves-top-100-exchanges-coinmarketcap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#222] dark:text-[#b6eaff] hover:text-[#00c5f6] transition-colors underline"
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
                  <span className="block w-[100px] h-[50px] mx-auto">
                    <Image 
                      src="/assets/img/NewUI/GroupBanner6.svg" 
                      width={100} 
                      height={50} 
                      className="banner-milestone-img mx-auto" 
                      alt="milestone-img"
                      priority
                      style={{ width: '100px', height: '50px' }}
                    />
                  </span>
                </p>
                <p className="sub-text-banner text-sm text-gray-300">Exciting Milestones Ahead</p>
              </div>
              <div>
                <p className="bold-text-banner text-2xl font-bold mb-2 text-[#222] dark:text-white">
                  <AnimatedCounter target={1.5} suffix=" M+" />
                </p>
                <p className="sub-text-banner text-sm text-[#222] dark:text-gray-300">Userbase</p>
              </div>
              <div>
                <p className="bold-text-banner text-2xl font-bold mb-2 text-[#222] dark:text-white">
                  <AnimatedCounter target={225} suffix="+" />
                </p>
                <p className="sub-text-banner text-sm text-[#222] dark:text-gray-300">Active Pairs</p>
              </div>
              <div>
                <p className="bold-text-banner text-2xl font-bold mb-2 text-[#222] dark:text-white">
                  <AnimatedCounter target={38} prefix="$" suffix=" Billion+" />
                </p>
                <p className="sub-text-banner text-sm text-[#222] dark:text-gray-300">Traded so far</p>
              </div>
              <div>
                <p className="bold-text-banner text-2xl font-bold mb-2 text-[#222] dark:text-white">
                  <AnimatedCounter target={200} suffix="+" />
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
              <div className="marquee-img w-[30px] h-[30px] flex-shrink-0">
                <Image 
                  src="/assets/img/NewUI/megaphone.svg" 
                  alt="megaphn-img" 
                  loading="eager" 
                  width={30} 
                  height={30}
                  style={{ width: '30px', height: '30px' }}
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
        .counter {
          display: inline-block;
          transition: transform 0.1s ease-in-out;
          font-variant-numeric: tabular-nums;
          text-align: center;
        }
        .counter:hover {
          transform: scale(1.05);
        }
        .bold-text-banner {
          min-height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
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
