import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [touchStart, setTouchStart] = useState(0);

  const newsItems = [
    {
      id: 1,
      image: '/images/news/news_card_1.jpg',
      title: '38 New Beauty Products Our Editors Are Loving This December',
    },
    {
      id: 2,
      image: '/images/news/news_card_2.jpg',
      title: '38 New Beauty Products Our Editors Are Loving This December',
    },
    {
      id: 3,
      image: '/images/news/news_card_3.jpg',
      title: '38 New Beauty Products Our Editors Are Loving This December',
    },
    {
      id: 4,
      image: '/images/news/news_card_4.jpg',
      title: '38 New Beauty Products Our Editors Are Loving This December',
    },
  ];

  // Adjust visible card count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlideIndex = Math.max(0, newsItems.length - visibleCount);
  const safeCurrentSlide = Math.min(currentSlide, maxSlideIndex);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlideIndex : prev - 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) {
      handleNext();
    } else if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  const displayedItems = newsItems.slice(safeCurrentSlide, safeCurrentSlide + visibleCount);

  return (
    <section className="py-10 md:py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto">
        
        {/* Header Pill Matching Figma (— Nu Skin In The News —) */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center justify-center px-6 sm:px-12 py-2 sm:py-3 bg-brand-900 text-white font-black text-lg sm:text-2xl rounded-xl shadow-sm">
            <span className="w-4 sm:w-8 h-0.5 bg-white mr-2.5 sm:mr-3"></span>
            <span className="tracking-wide text-center">Nu Skin In The News</span>
            <span className="w-4 sm:w-8 h-0.5 bg-white ml-2.5 sm:ml-3"></span>
          </div>
        </div>

        {/* Main Content: Left Column (View All + Cards + Dots) & Right Column (Image matching full height) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left: News Cards Slider (takes 3 columns out of 4) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            
            {/* View All link directly aligned at top of left column */}
            <div className="flex justify-end pr-2 mb-2 sm:mb-3">
              <a 
                href="#news-all" 
                className="text-xs sm:text-sm font-medium text-gray-700 hover:text-brand-900 underline decoration-1 transition-colors"
              >
                View All &gt;&gt;
              </a>
            </div>

            {/* Slider wrapper with left & right navigation arrows and touch swipe */}
            <div 
              className="relative flex items-center flex-1"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              
              {/* Left Arrow Button with dedicated width */}
              <button
                onClick={handlePrev}
                aria-label="Previous article"
                className="absolute left-0 sm:left-1 lg:left-1.5 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-800 transition-colors p-1.5 sm:p-2 cursor-pointer rounded-full hover:bg-gray-100/60"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </button>

              {/* Cards row with horizontal padding so < and > have ample room */}
              <div className="w-full px-7 sm:px-8 lg:px-10">
                <div className={`grid ${
                  visibleCount === 1 
                    ? 'grid-cols-1 max-w-[280px] mx-auto' 
                    : visibleCount === 2 
                    ? 'grid-cols-2 max-w-[560px] mx-auto' 
                    : 'grid-cols-3'
                } gap-3.5 sm:gap-4 lg:gap-5 w-full items-stretch`}>
                  {displayedItems.map((item, idx) => (
                    <div
                      key={item.id + idx}
                      className="w-full bg-white border border-gray-200/80 rounded-none p-3.5 sm:p-4 flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer min-h-[340px] sm:min-h-[380px] lg:min-h-[415px]"
                    >
                      {/* Top Square Product / Model Image */}
                      <div className="aspect-square w-full mb-3.5 overflow-hidden flex items-center justify-center bg-gray-50/50">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      {/* Bottom Title text */}
                      <div className="text-center pt-1 pb-1 flex-1 flex items-center justify-center">
                        <h4 className="text-xs sm:text-sm font-normal text-gray-800 leading-snug group-hover:text-brand-900 transition-colors line-clamp-3">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow Button with dedicated width */}
              <button
                onClick={handleNext}
                aria-label="Next article"
                className="absolute right-0 sm:right-1 lg:right-1.5 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-800 transition-colors p-1.5 sm:p-2 cursor-pointer rounded-full hover:bg-gray-100/60"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </button>

            </div>

            {/* Slider Indicator (Black Dash + Dot below cards, dynamic according to total slides) */}
            <div className="flex items-center justify-center gap-1.5 mt-5">
              {Array.from({ length: maxSlideIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    safeCurrentSlide === i ? 'w-5 bg-black' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

          </div>

          {/* Right: Tall News Feature Banner (Spans full height on desktop, nicely sized on mobile) */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] lg:min-h-0 overflow-hidden shadow-sm group cursor-pointer bg-gray-900 rounded-none flex-1">
              {/* Background Image (HD 600x900) */}
              <img
                src="/images/news/news_tall_card.jpg"
                alt="Nu Skin In The News"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Centered Overlay Text with High Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/30 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg mb-2">
                  News
                </h3>
                <span className="text-xs sm:text-sm font-medium text-white pb-0.5 border-b border-white tracking-wide drop-shadow-md">
                  Nu Skin In The News
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
