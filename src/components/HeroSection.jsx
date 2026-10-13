import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { categories } from '../data/products';

export default function HeroSection({
  onShopNow,
  currentView,
  setCurrentView,
  onSelectCategory
}) {
  const slides = [
    {
      id: 1,
      title: "Reasonable Price",
      subtitle: "10% OFF YOUR FIRST ORDER",
      bgImage: "/images/carousel-2.jpg",
    },
    {
      id: 2,
      title: "Reasonable Price",
      subtitle: "10% OFF YOUR FIRST ORDER",
      bgImage: "/images/carousel-1.jpg",
    },
    {
      id: 3,
      title: "Reasonable Price",
      subtitle: "10% OFF YOUR FIRST ORDER",
      bgImage: "/images/hd/hero_hd.jpg",
    }
  ];

  // Extended slides for infinite seamless looping: [Last, ...Originals, First]
  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0]
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const isSlidingRef = useRef(false);

  // Active original slide index for indicator dots (0 to slides.length - 1)
  const activeRealIndex = (currentIndex - 1 + slides.length) % slides.length;

  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      handleNext();
    } else if (touchStartX - touchEndX < -50) {
      handlePrev();
    }
  };

  const handleNext = () => {
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleDotClick = (i) => {
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex(i + 1);
  };

  // When transition completes, handle seamless wrap-around without visible animation
  const handleTransitionEnd = () => {
    isSlidingRef.current = false;
    if (currentIndex === extendedSlides.length - 1) {
      // Reached clone of first slide -> seamlessly snap to real first slide
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // Reached clone of last slide -> seamlessly snap to real last slide
      setIsTransitioning(false);
      setCurrentIndex(slides.length);
    }
  };

  // Re-enable smooth transition right after zero-time snap
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          isSlidingRef.current = false;
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Auto-play: Automatically transitions every 3 seconds (3000ms), infinite loop
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'detail', label: 'Shop Detail' },
    { id: 'pages', label: 'Pages', hasDropdown: true },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <section className="pt-2 pb-8 bg-white">
      <div className="container mx-auto">
        
        {/* TOP BLOCK: Categories Sidebar on Left + (Nav Links + Main Banner) on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          {/* LEFT: Categories Sidebar (Always visible on Desktop) */}
          <div className="hidden lg:block lg:col-span-1">
            {/* Categories Header */}
            <div className="bg-brand-900 text-white font-semibold py-3 px-5 flex items-center justify-between shadow-sm select-none">
              <span className="text-sm font-bold tracking-wide">Categories</span>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>

            {/* Categories List (10 Items matching Figma exactly) */}
            <div className="border border-gray-200 border-t-0 bg-white">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectCategory && onSelectCategory(cat)}
                  className="w-full text-left px-5 py-2.5 text-xs text-gray-700 hover:text-brand-900 hover:bg-purple-50/50 flex items-center justify-between border-b border-gray-100 last:border-0 transition-colors"
                >
                  <span className="font-normal">{cat}</span>
                  {idx === 0 && <ChevronDown className="w-3.5 h-3.5 text-gray-400" />}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Top Nav Links + Main Hero Carousel Banner */}
          <div className="lg:col-span-3 flex flex-col">
            
            {/* Top Navigation Bar */}
            <div className="hidden lg:flex items-center justify-between pb-3 text-sm">
              {/* Nav links */}
              <div className="flex items-center space-x-7">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      if (link.id === 'shop') {
                        setCurrentView('shop');
                      } else if (link.id === 'detail') {
                        setCurrentView('detail');
                      } else {
                        setCurrentView('home');
                      }
                    }}
                    className={`font-normal transition-colors flex items-center gap-1 cursor-pointer ${
                      currentView === link.id
                        ? 'text-[#d17b7b] font-medium'
                        : 'text-gray-700 hover:text-brand-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && <ChevronDown className="w-3 h-3 text-gray-400" />}
                  </button>
                ))}
              </div>

              {/* Login / Register */}
              <div className="flex items-center space-x-4 text-gray-700 text-sm">
                <button className="hover:text-brand-900 transition-colors">Login</button>
                <button className="hover:text-brand-900 transition-colors">Register</button>
              </div>
            </div>

            {/* Main Banner: 3s Autoplay Infinite Sliding Track Carousel with Touch Swipe */}
            <div 
              className="relative rounded overflow-hidden shadow-sm h-[260px] sm:h-[340px] md:h-[380px] lg:h-[415px] group bg-black/10 select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Seamless Sliding Carousel Track */}
              <div 
                className={`flex h-full w-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedSlides.map((slide, idx) => (
                  <div 
                    key={idx}
                    className="w-full h-full flex-shrink-0 relative overflow-hidden flex items-center justify-center"
                  >
                    {/* Background Image */}
                    <img
                      src={slide.bgImage}
                      alt={`${slide.subtitle} - ${slide.title}`}
                      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                      loading={idx === 1 ? 'eager' : 'lazy'}
                    />

                    {/* Overlay with Sharp Vector Typography */}
                    <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-center p-4 sm:p-6 select-none z-10 pointer-events-none">
                      <span className="text-white text-[11px] sm:text-sm md:text-base font-semibold tracking-widest uppercase mb-1 drop-shadow-md">
                        {slide.subtitle}
                      </span>
                      <h2 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-5 drop-shadow-lg">
                        {slide.title}
                      </h2>
                      <div className="pointer-events-auto">
                        <button
                          onClick={() => onShopNow("Reasonable Price")}
                          className="bg-white hover:bg-gray-100 text-gray-900 text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2 sm:py-2.5 shadow-md transition-all active:scale-95 cursor-pointer"
                        >
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Left Nav Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              {/* Right Nav Button */}
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Carousel Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeRealIndex === i 
                        ? 'w-6 bg-white shadow-md' 
                        : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM BLOCK: 2 High Resolution Promo Banners Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          
          {/* Left Promo Banner */}
          <div 
            onClick={() => onShopNow("Winter Collection")}
            className="relative rounded overflow-hidden shadow-sm h-36 sm:h-44 md:h-48 cursor-pointer group bg-[#e8ebeb] border border-gray-200"
          >
            <img
              src="/images/hd/promo_left_duo.png"
              alt="PREFER CUSTOMER 2025 - Winter Collection"
              className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-103 transition-transform duration-500"
            />
            {/* Sharp Typography Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-center items-start p-5 sm:p-7 max-w-[62%] select-none">
              <span className="text-[11px] sm:text-xs font-bold text-gray-600 uppercase tracking-widest">
                PREFER CUSTOMER 2025
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-0.5 mb-3 leading-tight">
                Winter Collection
              </h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onShopNow("Winter Collection");
                }}
                className="border border-[#c5837c] hover:bg-[#c5837c] hover:text-white text-gray-800 text-xs font-medium px-4 py-1.5 transition-colors bg-white/70 backdrop-blur-xs shadow-xs"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Promo Banner */}
          <div 
            onClick={() => onShopNow("Winter Collection")}
            className="relative rounded overflow-hidden shadow-sm h-36 sm:h-44 md:h-48 cursor-pointer group bg-[#4b5e70] border border-gray-200"
          >
            <img
              src="/images/hd/promo_right_clean.png"
              alt="PREFER CUSTOMER 2025 - Winter Collection"
              className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-103 transition-transform duration-500"
            />
            {/* Sharp Typography Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-center items-start p-5 sm:p-7 max-w-[62%] select-none">
              <span className="text-[11px] sm:text-xs font-bold text-gray-200 uppercase tracking-widest">
                PREFER CUSTOMER 2025
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-0.5 mb-3 leading-tight">
                Winter Collection
              </h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onShopNow("Winter Collection");
                }}
                className="border border-[#c5837c] hover:bg-[#c5837c] hover:text-white text-gray-800 text-xs font-medium px-4 py-1.5 transition-colors bg-white/90 backdrop-blur-xs shadow-xs"
              >
                Shop Now
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
