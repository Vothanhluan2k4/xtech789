import React from 'react';

export default function PromoBannerSection({ onShopNow }) {
  return (
    <section className="pt-2 pb-10 bg-white">
      <div className="container mx-auto">
        {/* Box Container: Warm beige background matching reference image */}
        <div className="bg-[#F3F2EE] border border-stone-200/50 p-6 sm:p-10 md:p-12 lg:p-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-16">
            
            {/* Left: Woman model with ageLOC LumiSpa iO device & Circular Purple Sale Badge */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[450px] lg:max-w-[480px]">
                {/* Sale Badge: Purple Circle overlapping top right corner */}
                <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 md:-top-6 md:-right-6 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#511B57] text-white flex flex-col items-center justify-center shadow-lg select-none z-10 p-1">
                  <span className="text-[10px] sm:text-[11px] md:text-xs font-normal text-purple-200 leading-tight">Sale Of</span>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight mt-0.5">$29.99</span>
                </div>

                {/* Model & Device Photo */}
                <div className="w-full overflow-hidden bg-white shadow-2xs">
                  <img
                    src="/images/hd/lumispa_clean_woman_hd.png"
                    alt="ageLOC LumiSpa iO"
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>
            </div>

            {/* Right: Symmetrical Text Content vertically centered with image */}
            <div className="flex flex-col justify-center items-start text-left md:pl-4 lg:pl-8">
              {/* Red Overline Text */}
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D9383A] mb-2 sm:mb-3 block">
                AGELOC® LUMISPA® IO
              </span>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-bold text-gray-900 tracking-tight leading-tight mb-3 sm:mb-4">
                ageLOC® LumiSpa® iO
              </h2>

              {/* Description Subtext */}
              <p className="text-xs sm:text-sm md:text-base text-gray-700 font-normal mb-6 sm:mb-8 leading-relaxed">
                Elevate your skincare routine
              </p>

              {/* Rectangular Purple Shop Now Button */}
              <button
                onClick={() => onShopNow && onShopNow("ageLOC® LumiSpa® iO System")}
                className="bg-[#511B57] hover:bg-[#3D1442] text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-8 sm:px-10 py-3 sm:py-3.5 rounded-none transition-colors shadow-none select-none"
              >
                SHOP NOW
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
