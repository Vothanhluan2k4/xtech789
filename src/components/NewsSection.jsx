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

            {/* Slider wrapper with left & right navigation arrows */}
            <div className="relative flex items-center flex-1">
              
              {/* Left Arrow Button with dedicated width */}
              <button
                onClick={handlePrev}
                aria-label="Previous article"
                className="absolute left-0 sm:left-1 lg:left-1.5 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-800 transition-colors p-1.5 sm:p-2 cursor-pointer rounded-full hover:bg-gray-100/60"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </button>

              {/* Cards row with horizontal padding so < and > have ample room */}
              <div className="w-full px-6 sm:px-8 lg:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 w-full items-stretch">
                  {newsItems.slice(currentSlide, currentSlide + 3).map((item, idx) => (
                    <div
                      key={item.id + idx}
                      className="max-w-[260px] sm:max-w-[270px] mx-auto w-full bg-white border border-gray-200/80 rounded-none p-3.5 sm:p-4 flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer min-h-[360px] sm:min-h-[390px] lg:min-h-[415px]"
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

            {/* Slider Indicator (Black Dash + Dot below cards) */}
            <div className="flex items-center justify-center gap-1.5 mt-5">
              <span className={`h-1 rounded-full transition-all ${currentSlide === 0 ? 'w-5 bg-black' : 'w-1.5 bg-gray-300'}`}></span>
              <span className={`h-1 rounded-full transition-all ${currentSlide > 0 ? 'w-5 bg-black' : 'w-1.5 bg-gray-300'}`}></span>
            </div>

          </div>

          {/* Right: Tall News Feature Banner (Spans full height from View All to Dots) */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="relative w-full h-full min-h-[380px] lg:min-h-0 overflow-hidden shadow-sm group cursor-pointer bg-gray-900 rounded-none flex-1">
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
