"use client";
import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    img: "/assets/img/NewUI/caro1.jpg",
    alt: "banner-blog",
    href: "https://koinbx.com/trade/KSN-INR"
  },
  {
    img: "/assets/img/NewUI/caro2.jpg",
    alt: "banner-blog",
    href: "https://koinbx.com/blog/125000-shib-giveaway?utm_source=website_125000_shib_giveaway_june&utm_medium=social_125000_shib_giveaway_june&utm_campaign=125000_shib_giveaway_june"
  },
  {
    img: "/assets/img/NewUI/caro3.jpg",
    alt: "banner-blog",
    href: "https://koinbx.com/blog/koinbx-achieves-top-100-exchanges-coinmarketcap"
  }
];

const LatestInsights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="MuiBox-root">
      <div className="blog-card-bg bg-white dark:bg-gray-900 py-8">
        <div className="blog-card-container max-w-6xl mx-auto px-4">
          <div className="blog-card-container-head mb-6">
            <p className="blog-card-title text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Latest Insights
            </p>
          </div>
          
          <div className="blog-card-container-slidedv relative">
            <div className="slick-slider relative">
              {/* Previous Arrow */}
              <button
                onClick={prevSlide}
                className="slick-arrow slick-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                style={{ display: 'block' }}
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.75 13.7496H8.925L13.4625 8.29961C13.6747 8.04434 13.7768 7.71524 13.7463 7.38471C13.7158 7.05417 13.5553 6.74929 13.3 6.53711C13.0447 6.32494 12.7156 6.22286 12.3851 6.25334C12.0546 6.28381 11.7497 6.44434 11.5375 6.69961L5.2875 14.1996C5.24545 14.2593 5.20785 14.3219 5.175 14.3871C5.175 14.4496 5.175 14.4871 5.0875 14.5496C5.03084 14.6929 5.00118 14.8455 5 14.9996C5.00118 15.1537 5.03084 15.3063 5.0875 15.4496C5.0875 15.5121 5.0875 15.5496 5.175 15.6121C5.20785 15.6773 5.24545 15.74 5.2875 15.7996L11.5375 23.2996C11.655 23.4407 11.8022 23.5542 11.9686 23.632C12.1349 23.7097 12.3164 23.7499 12.5 23.7496C12.7921 23.7502 13.0751 23.6485 13.3 23.4621C13.4266 23.3572 13.5312 23.2283 13.6079 23.0829C13.6846 22.9374 13.7318 22.7783 13.7469 22.6146C13.762 22.4509 13.7447 22.2858 13.6959 22.1288C13.6471 21.9718 13.5678 21.8259 13.4625 21.6996L8.925 16.2496H23.75C24.0815 16.2496 24.3995 16.1179 24.6339 15.8835C24.8683 15.6491 25 15.3311 25 14.9996C25 14.6681 24.8683 14.3501 24.6339 14.1157C24.3995 13.8813 24.0815 13.7496 23.75 13.7496Z" fill="#8F9194"/>
                </svg>
              </button>

              {/* Slider Container */}
              <div className="slick-list overflow-hidden mx-12" style={{ height: '230px' }}>
                <div 
                  className="slick-track flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translate3d(-${currentSlide * 419}px, 0px, 0px)`,
                    width: `${slides.length * 419}px`
                  }}
                >
                  {slides.map((slide, index) => (
                    <div 
                      key={index}
                      className={`slick-slide ${index === currentSlide ? 'slick-active slick-current' : ''}`}
                      style={{ width: '419px' }}
                    >
                      <div className="w-full inline-block">
                        <a href={slide.href} target="_blank" rel="noopener noreferrer">
                          <Image 
                            src={slide.img}
                            className="img-fluid w-full h-full object-cover rounded-lg"
                            alt={slide.alt}
                            width={419}
                            height={230}
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Arrow */}
              <button
                onClick={nextSlide}
                className="slick-arrow slick-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                style={{ display: 'block' }}
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Arrow">
                    <path id="Vector" d="M6.25 13.7496H21.075L16.5375 8.29961C16.3253 8.04434 16.2232 7.71524 16.2537 7.38471C16.2842 7.05417 16.4447 6.74929 16.7 6.53711C16.9553 6.32494 17.2844 6.22286 17.6149 6.25334C17.9454 6.28381 18.2503 6.44434 18.4625 6.69961L24.7125 14.1996C24.7545 14.2593 24.7922 14.3219 24.825 14.3871C24.825 14.4496 24.825 14.4871 24.9125 14.5496C24.9692 14.6929 24.9988 14.8455 25 14.9996C24.9988 15.1537 24.9692 15.3063 24.9125 15.4496C24.9125 15.5121 24.9125 15.5496 24.825 15.6121C24.7922 15.6773 24.7545 15.74 24.7125 15.7996L18.4625 23.2996C18.345 23.4407 18.1978 23.5542 18.0314 23.632C17.8651 23.7097 17.6836 23.7499 17.5 23.7496C17.2079 23.7502 16.9249 23.6485 16.7 23.4621C16.5734 23.3572 16.4688 23.2283 16.3921 23.0829C16.3154 22.9374 16.2682 22.7783 16.2531 22.6146C16.238 22.4509 16.2553 22.2858 16.3041 22.1288C16.3529 21.9718 16.4322 21.8259 16.5375 21.6996L21.075 16.2496H6.25C5.91848 16.2496 5.60054 16.1179 5.36612 15.8835C5.13169 15.6491 5 15.3311 5 14.9996C5 14.6681 5.13169 14.3501 5.36612 14.1157C5.60054 13.8813 5.91848 13.7496 6.25 13.7496Z" fill="#1E2329"/>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestInsights;
