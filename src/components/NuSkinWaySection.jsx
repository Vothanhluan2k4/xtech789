import React from 'react';

export default function NuSkinWaySection() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto">
        
        {/* Section Header Pill: — The Nu Skin Way — */}
        <div className="flex items-center justify-center my-8">
          <div className="inline-flex items-center justify-center px-8 sm:px-12 py-2.5 sm:py-3 bg-brand-900 text-white font-black text-xl sm:text-2xl rounded-xl shadow-sm">
            <span className="w-5 sm:w-8 h-0.5 bg-white mr-3"></span>
            <span className="tracking-wide">The Nu Skin Way</span>
            <span className="w-5 sm:w-8 h-0.5 bg-white ml-3"></span>
          </div>
        </div>

        {/* Top Stats Box (Single border card matching screenshot) */}
        <div className="bg-white border border-gray-200 rounded-none p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Left Title */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-800 leading-snug">
              Nu Skin,<br />
              Improving Lives Everyday
            </h3>
          </div>

          {/* Right 3 Stat Columns */}
          <div className="flex flex-wrap items-start gap-8 sm:gap-12 lg:gap-16">
            {/* Stat 1 */}
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                25+
              </span>
              <span className="text-xs text-gray-500 mt-1">
                Years of Giving
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                20+
              </span>
              <a 
                href="#projects" 
                className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-2 mt-1 transition-colors"
              >
                Current Social Projects
              </a>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                850M+
              </span>
              <a 
                href="#nourish" 
                className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-2 mt-1 leading-tight transition-colors"
              >
                Meals Donated through<br />
                Nourish the Children
              </a>
            </div>
          </div>
        </div>

        {/* Story 1: Being a Force for Good (Left image, Right #F7F7F7 block, gap-0 matching screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden mb-6 sm:mb-8 bg-[#F7F7F7] border border-gray-100/60 shadow-xs">
          {/* Left Image */}
          <div className="w-full h-[280px] sm:h-[320px] md:h-auto min-h-[280px] md:min-h-[350px]">
            <img
              src="/images/force_for_good_hd.jpg"
              alt="Being a Force for Good"
              className="w-full h-full object-cover object-center block"
            />
          </div>

          {/* Right Text Block (Background #F7F7F7 exactly matching reference screenshot) */}
          <div className="p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16 flex flex-col justify-center bg-[#F7F7F7]">
            <h3 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Being a Force for Good
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-normal max-w-[540px]">
              Some call it corporate social responsibility. We call it our purpose. Together we're engaged in initiatives worldwide—nourishing thousands of hungry children, funding pediatric health and wellness services, or striving for a more sustainable future. And sometimes, we're simply taking meaningful steps to improve our local communities. Whatever we do, we believe changing the world begins with a single action.
            </p>
            <div>
              <a 
                href="#explore-projects" 
                className="text-xs sm:text-sm font-normal text-gray-800 hover:text-black hover:underline transition-all inline-block"
              >
                Explore our projects
              </a>
            </div>
          </div>
        </div>

        {/* Story 2: Nature + Science (Left #F7F7F7 block, Right image, gap-0 matching screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden bg-[#F7F7F7] border border-gray-100/60 shadow-xs">
          {/* Left Text Block (Background #F7F7F7 exactly matching reference screenshot) */}
          <div className="order-2 md:order-1 p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16 flex flex-col justify-center bg-[#F7F7F7]">
            <h3 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Nature + Science
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-normal max-w-[540px]">
              Capturing the best in nature to bring you the best results is our personal mission. We combine powerful ingredients with innovative science and technology. The result? World-class products that deliver real benefits. And even though we've spent more than 30 years researching aging at the genetic level, Mother Nature continually inspires us to push the boundaries of inquiry and innovation. We bottle what's best and bring it right to your door.
            </p>
            <div>
              <a 
                href="#discover-more" 
                className="text-xs sm:text-sm font-normal text-gray-800 hover:text-black hover:underline transition-all inline-block"
              >
                Discover more
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2 w-full h-[280px] sm:h-[320px] md:h-auto min-h-[280px] md:min-h-[350px]">
            <img
              src="/images/nature_science_hd.jpg"
              alt="Nature + Science"
              className="w-full h-full object-cover object-center block"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
