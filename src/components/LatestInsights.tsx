"use client";
import Image from "next/image";
import { useState } from "react";
import { LeftArrow } from "../../public/assets/img/NewUI/leftarrow";
import { RightArrow } from "../../public/assets/img/NewUI/righticon";

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
      <div className="blog-card-bg bg-white dark:bg-[#131932] py-8">
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
                className="slick-arrow slick-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                style={{ display: 'block' }}
              >
            <LeftArrow />
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
                      style={{ width: '591px', marginRight: index !== slides.length - 1 ? '24px' : '0' }}
                    >
                      <div className="w-full inline-block">
                        <a href={slide.href} target="_blank" rel="noopener noreferrer">
                          <Image 
                            src={slide.img}
                            className="img-fluid w-full h-full object-cover rounded-lg"
                            alt={slide.alt}
                            width={591}
                            height={332.44}
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
                className="slick-arrow slick-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                style={{ display: 'block' }}
              >
                <RightArrow />
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestInsights;
