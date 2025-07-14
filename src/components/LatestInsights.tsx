"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create looped slides (original + duplicate for seamless loop)
  const loopedSlides = [...slides, ...slides];

  // Auto-slide functionality with infinite loop
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          const nextSlide = prev + 1;
          // When we reach the end of original slides, reset to beginning
          if (nextSlide >= slides.length) {
            setTimeout(() => {
              setIsTransitioning(false);
              setCurrentSlide(0);
              setTimeout(() => setIsTransitioning(true), 50);
            }, 700); // Wait for transition to complete
            return nextSlide;
          }
          return nextSlide;
        });
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const nextSlide = prev + 1;
      if (nextSlide >= slides.length) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(0);
          setTimeout(() => setIsTransitioning(true), 50);
        }, 700);
        return nextSlide;
      }
      return nextSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        setIsTransitioning(false);
        setCurrentSlide(slides.length);
        setTimeout(() => {
          setIsTransitioning(true);
          setCurrentSlide(slides.length - 1);
        }, 50);
        return prev;
      }
      return prev - 1;
    });
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
            <div 
              className="slick-slider relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Previous Arrow */}
              <button
                onClick={prevSlide}
                className="slick-arrow slick-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 opacity-70 hover:opacity-100 transition-opacity"
                style={{ display: 'block' }}
              >
            <LeftArrow />
              </button>

              {/* Slider Container */}
              <div className="slick-list overflow-hidden mx-12" style={{ height: '230px' }}>
                <div 
                  className={`slick-track flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                  style={{ 
                    transform: `translate3d(-${currentSlide * 419}px, 0px, 0px)`,
                    width: `${loopedSlides.length * 419}px`
                  }}
                >
                  {loopedSlides.map((slide, index) => (
                    <div 
                      key={`${slide.img}-${index}`}
                      className={`slick-slide ${index === currentSlide ? 'slick-active slick-current' : ''}`}
                      style={{ width: '591px', marginRight: index !== loopedSlides.length - 1 ? '24px' : '0' }}
                    >
                      <div className="w-full inline-block">
                        <a href={slide.href} target="_blank" rel="noopener noreferrer">
                          <Image 
                            src={slide.img}
                            className="img-fluid w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
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
                className="slick-arrow slick-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 opacity-70 hover:opacity-100 transition-opacity"
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
