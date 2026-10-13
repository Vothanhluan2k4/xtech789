import React from 'react';

export default function PromoBannerSection({ onShopNow }) {
  return (
    <section className="pt-1 pb-10 bg-white">
      <div className="container mx-auto">
        {/* Box Container matching exact width and alignment of Most Popular Products */}
        <div className="bg-[#F3F2EE] relative overflow-hidden flex flex-col md:flex-row items-center md:items-end justify-between border border-stone-200/50">
          
          {/* Left: Woman model with ageLOC LumiSpa iO device & Sale Badge */}
          <div className="w-full md:w-auto relative flex justify-center md:justify-start flex-shrink-0 self-end">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px]">
              {/* Sale Badge: Purple Circle overlapping top right */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#511B57] text-white flex flex-col items-center justify-center shadow-md select-none z-10 p-1">
                <span className="text-[10px] sm:text-[11px] font-normal text-purple-200 leading-tight">Sale Of</span>
                <span className="text-xs sm:text-sm font-bold text-white leading-tight mt-0.5">$29.99</span>
              </div>

              {/* Model & Device Photo */}
              <div className="w-full overflow-hidden">
                <img
                  src="/images/hd/lumispa_clean_woman_hd.png"
                  alt="ageLOC LumiSpa iO"
                  className="w-full h-auto object-cover block"
                />
              </div>
            </div>
          </div>

          {/* Right: Content aligned vertically with upper portion of photo matching Figma */}
          <div className="flex-1 flex flex-col justify-start items-start text-left p-6 sm:p-10 md:p-12 lg:p-16 self-start md:self-center">
            {/* Red Overline Text */}
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#D9383A] mb-2 sm:mb-3 block">
              AGELOC® LUMISPA® IO
            </span>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-snug mb-2 sm:mb-3">
              ageLOC® LumiSpa® iO
            </h2>

            {/* Description Subtext */}
            <p className="text-xs sm:text-sm text-gray-700 font-normal mb-6 sm:mb-8 leading-relaxed">
              Elevate your skincare routine
            </p>

            {/* Square/Rectangular Purple Shop Now Button */}
            <button
              onClick={() => onShopNow && onShopNow("ageLOC® LumiSpa® iO System")}
              className="bg-[#511B57] hover:bg-[#3D1442] text-white text-xs font-bold tracking-widest uppercase px-8 py-3 rounded-none transition-colors shadow-none select-none"
            >
              SHOP NOW
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
