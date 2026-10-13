import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % (newsItems.length - 2));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? newsItems.length - 3 : prev - 1));
  };

  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto">
        
        {/* Header Pill Matching Figma (— Nu Skin In The News —) */}
        <div className="flex items-center justify-center my-8">
          <div className="inline-flex items-center justify-center px-8 sm:px-12 py-2.5 sm:py-3 bg-brand-900 text-white font-black text-xl sm:text-2xl rounded-xl shadow-sm">
            <span className="w-5 sm:w-8 h-0.5 bg-white mr-3"></span>
            <span className="tracking-wide">Nu Skin In The News</span>
            <span className="w-5 sm:w-8 h-0.5 bg-white ml-3"></span>
          </div>
        </div>

        {/* View All link above cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-end mb-3">
          <div className="lg:col-span-3 flex justify-end pr-2">
            <a 
              href="#news-all" 
              className="text-xs sm:text-sm font-medium text-gray-700 hover:text-brand-900 underline decoration-1 transition-colors"
            >
              View All &gt;&gt;
            </a>
          </div>
          <div className="hidden lg:block"></div>
        </div>

        {/* Main Content: Left Carousel Cards + Right Tall Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          {/* Left: News Cards Slider (takes 3 columns out of 4) */}
          <div className="lg:col-span-3 relative flex flex-col justify-between">
            
            {/* Slider wrapper with left & right navigation arrows */}
            <div className="relative flex items-center">
              
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous article"
                className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-800 transition-colors p-1"
              >
                <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
              </button>

              {/* Cards row (3 cards on desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 w-full">
                {newsItems.slice(currentSlide, currentSlide + 3).map((item, idx) => (
                  <div
                    key={item.id + idx}
                    className="bg-white border border-gray-200 rounded-none p-4 sm:p-5 flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer min-h-[340px]"
                  >
                    {/* Top Square Product / Model Image */}
                    <div className="aspect-square w-full mb-4 overflow-hidden flex items-center justify-center bg-gray-50/50">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Bottom Title text */}
                    <div className="text-center pt-2">
                      <h4 className="text-xs sm:text-sm font-normal text-gray-800 leading-snug group-hover:text-brand-900 transition-colors line-clamp-3">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                aria-label="Next article"
                className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-800 transition-colors p-1"
              >
                <ChevronRight className="w-6 h-6 stroke-[1.5]" />
              </button>

            </div>

            {/* Slider Indicator (Black Dash + Dot below cards) */}
            <div className="flex items-center justify-center gap-1.5 mt-6">
              <span className={`h-1 rounded-full transition-all ${currentSlide === 0 ? 'w-5 bg-black' : 'w-1.5 bg-gray-300'}`}></span>
              <span className={`h-1 rounded-full transition-all ${currentSlide > 0 ? 'w-5 bg-black' : 'w-1.5 bg-gray-300'}`}></span>
            </div>

          </div>

          {/* Right: Tall News Feature Banner (1 column on desktop) */}
          <div className="lg:col-span-1">
            <div className="relative w-full h-[360px] sm:h-[400px] lg:h-[385px] overflow-hidden shadow-sm group cursor-pointer bg-gray-900 rounded-xs">
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
