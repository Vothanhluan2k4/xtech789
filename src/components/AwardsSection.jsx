import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AwardsSection() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const pages = [
    // Page 1: Global Device & Brand Accolades
    [
      {
        id: 1,
        image: '/images/awards/award_newbeauty_2024.png',
        title: 'ageLOC® LumiSpa® iO',
        lines: [
          '2023 Best',
          'Cleansing Device',
          'Award Winner',
          'NewBeauty Awards'
        ]
      },
      {
        id: 2,
        image: '/images/awards/award_beautybible_2023.png',
        title: 'Epoch Baobab Body Butter',
        lines: [
          'Body Butter Silver',
          'Winner',
          '2023 Beauty Bible',
          'Awards'
        ]
      },
      {
        id: 3,
        image: '/images/awards/award_globalmakeup_2022.png',
        title: 'Nu Skin Enterprises',
        lines: [
          '2022 Best USA',
          'Beauty Brand',
          'Global Makeup',
          'Awards'
        ]
      },
      {
        id: 4,
        image: '/images/awards/award_greenbeauty_2022.png',
        title: 'Epoch® Yin & Yang Mask',
        lines: [
          '2022 Most',
          'Sustainable',
          'Packaging: Silver',
          'Winner',
          'Global Green Awards'
        ]
      },
      {
        id: 5,
        image: '/images/awards/award_instyle_2021.png',
        title: 'ageLOC® Facial Spa',
        lines: [
          "2021 Readers'",
          'Choice Beauty',
          'Award Winner',
          'InStyle'
        ]
      },
      {
        id: 6,
        image: '/images/awards/award_purebeauty_2022.png',
        title: 'Nutricentials® Eye Love Bright Eyes',
        lines: [
          '2022 Pure Beauty',
          'Award Finalist',
          'Pure Beauty Global',
          'Awards'
        ]
      }
    ],

    // Page 2: Innovation & Technology Honors
    [
      {
        id: 7,
        image: '/images/awards/award_edison.svg',
        title: 'ageLOC® Boost™ Device',
        lines: [
          '2021 Silver Winner',
          'Personal Technology',
          'Innovation Award',
          'Edison Awards'
        ]
      },
      {
        id: 8,
        image: '/images/awards/award_marieclaire.svg',
        title: 'ageLOC® WellSpa iO™',
        lines: [
          "2024 Prix d'Excellence",
          'de la Beauté Winner',
          'Best Wellness Device',
          'Marie Claire'
        ]
      },
      {
        id: 9,
        image: '/images/awards/award_elle.svg',
        title: 'ageLOC® Tru Face® Essence',
        lines: [
          '2023 International',
          'Beauty Awards Winner',
          'Best Anti-Aging Serum',
          'ELLE Magazine'
        ]
      },
      {
        id: 10,
        image: '/images/awards/award_organics.svg',
        title: 'Epoch® Glacial Marine Mud',
        lines: [
          '2023 Gold Winner',
          'Best Mineral Clay Mask',
          'Global Green Beauty',
          'Organic Awards'
        ]
      },
      {
        id: 11,
        image: '/images/awards/award_stevie.svg',
        title: 'Nu Skin Vera® Mobile App',
        lines: [
          '2023 Bronze Winner',
          'Tech App of the Year',
          'International Business',
          'The Stevie Awards'
        ]
      },
      {
        id: 12,
        image: '/images/awards/award_prevention.svg',
        title: 'AP24® Whitening Toothpaste',
        lines: [
          '2022 Healthy Beauty',
          'Award Winner',
          'Oral Care Innovation',
          'Prevention Magazine'
        ]
      }
    ],

    // Page 3: Clean Beauty & Nutrition Excellence
    [
      {
        id: 13,
        image: '/images/awards/award_glamour.svg',
        title: 'Nutricentials® Celltrex Recovery',
        lines: [
          '2023 Clean Beauty',
          'Product of the Year',
          'Beauty Awards Winner',
          'Glamour'
        ]
      },
      {
        id: 14,
        image: '/images/awards/award_nutra.svg',
        title: 'Pharmanex® Marine Omega',
        lines: [
          '2023 Nutrition Innovation',
          'Omega-3 Finalist',
          'NutraIngredients',
          'USA Awards'
        ]
      },
      {
        id: 15,
        image: '/images/awards/award_harpers.svg',
        title: 'Nu Colour® Bioadaptive BB+',
        lines: [
          '2023 Best of Beauty',
          'Luminous Base Winner',
          'Luxury Makeup Awards',
          "Harper's Bazaar"
        ]
      },
      {
        id: 16,
        image: '/images/awards/award_cosmo.svg',
        title: 'ageLOC® Galvanic Body Spa',
        lines: [
          "2022 Readers' Choice",
          'Beauty Awards Winner',
          'Best Body Shaping Device',
          'Cosmopolitan'
        ]
      },
      {
        id: 17,
        image: '/images/awards/award_seal.svg',
        title: 'Nu Skin Sustainability',
        lines: [
          '2023 Environmental',
          'Initiative Leader',
          'Sustainability Award',
          'SEAL Business Awards'
        ]
      },
      {
        id: 18,
        image: '/images/awards/award_betternutrition.svg',
        title: 'Pharmanex® Tegreen 97®',
        lines: [
          '2022 Best of Supplements',
          'Top Antioxidant Formula',
          'Health & Wellness Award',
          'Better Nutrition'
        ]
      }
    ]
  ];

  const handlePrev = () => {
    setActivePageIndex((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePageIndex((prev) => (prev + 1) % pages.length);
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

  return (
    <section className="pt-4 pb-12 bg-white">
      <div className="container mx-auto">
        
        {/* Header Pill: [— Award And Recognition —] */}
        <div className="flex items-center justify-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center px-8 sm:px-12 py-2 sm:py-2.5 bg-[#511B57] text-white font-bold text-lg sm:text-xl rounded-md shadow-xs select-none">
            <span className="w-5 sm:w-8 h-0.5 bg-white/90 mr-3"></span>
            <span className="tracking-wide">Award And Recognition</span>
            <span className="w-5 sm:w-8 h-0.5 bg-white/90 ml-3"></span>
          </div>
        </div>

        {/* Top Banner: 4 Beauty & Wellness Devices + World's #1 Brand Authority */}
        <div className="w-full mb-10 sm:mb-12 overflow-hidden border border-gray-200/60 shadow-xs">
          <img
            src="/images/awards/award_devices_banner_hd.png"
            alt="WORLD'S #1 COMPANY FOR Beauty & Wellness Device Systems - Source: Euromonitor"
            className="w-full h-auto block"
          />
        </div>

        {/* Sliding Awards Track with Interactive Page Navigation */}
        <div 
          className="relative overflow-hidden px-1"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activePageIndex * 100}%)` }}
          >
            {pages.map((pageAwards, pageIdx) => (
              <div 
                key={pageIdx} 
                className="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 lg:gap-6 items-start text-center py-2"
              >
                {pageAwards.map((item) => (
                  <div key={item.id} className="flex flex-col items-center group cursor-default">
                    
                    {/* Award Image Badge */}
                    <div className="h-20 sm:h-22 flex items-center justify-center mb-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full max-w-[85px] object-contain group-hover:scale-110 transition-transform duration-300 select-none"
                      />
                    </div>

                    {/* Award Title */}
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug mb-2 min-h-[36px] flex items-center justify-center">
                      {item.title}
                    </h4>

                    {/* Description Details */}
                    <div className="text-[11px] sm:text-xs text-gray-600 leading-relaxed space-y-0.5 font-normal">
                      {item.lines.map((line, lIdx) => (
                        <p key={lIdx}>{line}</p>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Left / Right Nav Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous awards"
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 border border-gray-200 shadow-md text-gray-600 hover:text-gray-900 hover:bg-white items-center justify-center transition-all z-10 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleNext}
            aria-label="Next awards"
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 border border-gray-200 shadow-md text-gray-600 hover:text-gray-900 hover:bg-white items-center justify-center transition-all z-10 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Pagination Dots (Nhấn dấu chấm bên dưới để chuyển qua) */}
        <div className="flex items-center justify-center space-x-2 pt-6">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActivePageIndex(i)}
              aria-label={`Go to awards page ${i + 1}`}
              className={`transition-all duration-300 cursor-pointer ${
                activePageIndex === i
                  ? 'w-6 h-2 rounded-full bg-[#0080ff] shadow-xs'
                  : 'w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
