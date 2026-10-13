import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export default function PopularProductsSection({ 
  onAddToCart, 
  onSelectProduct, 
  onViewAll,
  onToggleWishlist,
  wishlistIds = []
}) {
  const [activeTab, setActiveTab] = useState('description');
  const [addedIds, setAddedIds] = useState([]);

  const handleAdd = (product, e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedIds((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== product.id));
    }, 1500);
  };

  const popularList = [
    {
      id: 1,
      name: "Pure Pineapple",
      category: "AGELOC",
      price: 14.00,
      originalPrice: 35.00,
      isSale: false,
      image: "/images/popular_product_1.png",
      description: "ageLOC Y-Span dietary supplement infused with refreshing natural pineapple flavor.",
      specifications: [{ key: "Origin", value: "USA" }]
    },
    {
      id: 2,
      name: "Pure Pineapple",
      category: "AGELOC",
      price: 14.00,
      originalPrice: 35.00,
      isSale: true,
      image: "/images/popular_product_2.png",
      description: "Gentle intensive moisturizing and cleansing cream with natural ingredients.",
      specifications: [{ key: "Origin", value: "USA" }]
    },
    {
      id: 3,
      name: "Pure Pineapple",
      category: "AGELOC",
      price: 14.00,
      originalPrice: 35.00,
      isSale: true,
      image: "/images/popular_product_3.png",
      description: "Advanced cellular renewal essence nourishing deeply from within.",
      specifications: [{ key: "Origin", value: "USA" }]
    },
    {
      id: 4,
      name: "Pure Pineapple",
      category: "AGELOC",
      price: 14.00,
      originalPrice: 35.00,
      isSale: true,
      image: "/images/popular_product_3.png",
      description: "Advanced cellular renewal essence nourishing deeply from within.",
      specifications: [{ key: "Origin", value: "USA" }]
    }
  ];

  return (
    <section className="pt-8 pb-4 sm:pb-6 bg-white">
      <div className="container mx-auto">
        
        {/* Section Header matching Figma pill (— Most Popular Products —) */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center px-8 sm:px-12 py-2 sm:py-2.5 bg-[#511B57] text-white font-bold text-lg sm:text-xl rounded-md shadow-xs">
            <span className="w-5 sm:w-8 h-0.5 bg-white/90 mr-3"></span>
            <span className="tracking-wide">Most Popular Products</span>
            <span className="w-5 sm:w-8 h-0.5 bg-white/90 ml-3"></span>
          </div>
        </div>

        {/* Outer light-grayish container matching reference image */}
        <div className="bg-[#F3F7F8] p-4 sm:p-6 lg:p-7 border border-gray-200/50 relative">
          
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 items-stretch">
            
            {/* Left Feature Card: Pure White Card with Teal Brush Strokes */}
            <div className="w-full lg:w-[230px] xl:w-[245px] flex-shrink-0 bg-white p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden border border-gray-100/80 shadow-xs min-h-[320px] lg:min-h-[390px]">
              {/* Teal Brush Strokes matching exact Figma design */}
              <svg className="absolute top-0 right-0 w-full h-full pointer-events-none" viewBox="0 0 200 340" fill="none" preserveAspectRatio="none">
                {/* 4 Strong Teal Rays radiating from right edge */}
                <line x1="95" y1="38" x2="185" y2="52" stroke="#00A887" strokeWidth="6" strokeLinecap="round" />
                <line x1="88" y1="95" x2="180" y2="92" stroke="#00A887" strokeWidth="6" strokeLinecap="round" />
                <line x1="98" y1="150" x2="190" y2="120" stroke="#00A887" strokeWidth="6" strokeLinecap="round" />
                <line x1="130" y1="195" x2="188" y2="150" stroke="#00A887" strokeWidth="6" strokeLinecap="round" />
                {/* Faint Mint Rays at bottom-left */}
                <line x1="0" y1="210" x2="80" y2="185" stroke="rgba(0, 168, 135, 0.12)" strokeWidth="10" strokeLinecap="round" />
                <line x1="0" y1="295" x2="95" y2="275" stroke="rgba(0, 168, 135, 0.12)" strokeWidth="10" strokeLinecap="round" />
              </svg>

              {/* Title */}
              <div className="relative z-10 pt-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug tracking-tight">
                  Find out<br />
                  what<br />
                  everyone's<br />
                  talking<br />
                  about
                </h3>
              </div>

              {/* Link */}
              <div className="relative z-10 pt-6">
                <button 
                  onClick={() => onSelectProduct(popularList[0])}
                  className="text-xs sm:text-sm font-normal text-gray-600 hover:text-black transition-colors"
                >
                  Browse our best
                </button>
              </div>
            </div>

            {/* Right Area: Tabs + Product Cards Carousel */}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              
              {/* Top Bar: Tabs (DESCRIPTION with gold top line & SPECIFICATIONS) + View All >> */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200/50">
                {/* Tabs */}
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all border-t-2 ${
                      activeTab === 'description'
                        ? 'bg-white border-[#D4A373] text-gray-900 shadow-xs'
                        : 'bg-transparent border-transparent text-gray-400 hover:text-gray-700'
                    }`}
                  >
                    DESCRIPTION
                  </button>
                  <button
                    onClick={() => setActiveTab('specifications')}
                    className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all border-t-2 ${
                      activeTab === 'specifications'
                        ? 'bg-white border-[#D4A373] text-gray-900 shadow-xs'
                        : 'bg-transparent border-transparent text-gray-400 hover:text-gray-700'
                    }`}
                  >
                    SPECIFICATIONS
                  </button>
                </div>

                {/* View All >> */}
                <button
                  onClick={() => onViewAll && onViewAll()}
                  className="text-xs font-semibold text-gray-800 hover:text-[#511B57] transition-colors flex items-center gap-1 group"
                >
                  <span className="underline underline-offset-2">View All</span>
                  <span className="font-bold group-hover:translate-x-0.5 transition-transform">&gt;&gt;</span>
                </button>
              </div>

              {/* Product Cards Carousel Track */}
              <div className="relative flex-1 flex flex-col justify-between">
                
                {/* Chevrons */}
                <div className="hidden lg:flex items-center justify-center absolute -left-3 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-700 cursor-pointer p-1">
                  <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="hidden lg:flex items-center justify-center absolute right-1 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-700 cursor-pointer p-1">
                  <ChevronRight className="w-5 h-5 stroke-[1.5]" />
                </div>

                {/* Grid Layout: 3 full product cards + 4th card partially visible */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 items-stretch">
                  {popularList.map((product, idx) => {
                    const isAdded = addedIds.includes(product.id);
                    const isFourthPeek = idx === 3;
                    return (
                      <div
                        key={product.id}
                        onClick={() => onSelectProduct(product)}
                        className={`bg-white border border-gray-100 rounded-none overflow-hidden hover:shadow-md transition-shadow flex flex-col justify-between group cursor-pointer relative ${
                          isFourthPeek ? 'hidden xl:flex opacity-90' : 'flex'
                        }`}
                      >
                        {/* Product Image (contains clean gold badge and green SALE tag) */}
                        <div className="relative h-44 sm:h-48 bg-white flex items-center justify-center p-2 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-102 transition-transform duration-300"
                          />

                          {/* Heart Wishlist Toggle Button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleWishlist && onToggleWishlist(product);
                            }}
                            className="absolute bottom-2 right-2 z-10 p-1.5 rounded-full bg-white/90 hover:bg-white shadow-xs text-gray-400 hover:text-rose-500 transition-colors"
                            title={wishlistIds.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                          >
                            <Heart className={`w-3.5 h-3.5 ${wishlistIds.includes(product.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                          </button>
                        </div>

                        {/* Product Info */}
                        <div className="p-3 text-center border-t border-gray-50 flex-1 flex flex-col justify-between">
                          <div>
                            <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-0.5">
                              {product.category}
                            </p>
                            <h4 className="text-xs sm:text-sm font-normal text-gray-900 mb-1.5 line-clamp-1">
                              {product.name}
                            </h4>

                            {/* Pricing: Gold $14.00, Gray strikethrough $35.00 */}
                            <div className="flex items-center justify-center gap-1.5 mb-2.5">
                              <span className="text-xs sm:text-sm font-bold text-[#D4A373]">
                                ${product.price.toFixed(2)}
                              </span>
                              {product.originalPrice && (
                                <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                                  ${product.originalPrice.toFixed(2)}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Add to card button matching exact spelling and style */}
                          <button
                            onClick={(e) => handleAdd(product, e)}
                            className={`w-full py-2 px-3 font-semibold text-xs transition-colors rounded-none ${
                              isAdded
                                ? 'bg-emerald-600 text-white'
                                : 'bg-[#511B57] hover:bg-[#3D1442] text-white'
                            }`}
                          >
                            {isAdded ? 'Added!' : 'Add to card'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Carousel bottom indicator: small black pill centered */}
                <div className="flex items-center justify-center mt-4">
                  <div className="w-6 h-1 bg-gray-900 rounded-full"></div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
