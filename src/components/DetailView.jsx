import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart, Heart, Share2, Check, ArrowLeft, ShieldCheck, Truck, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

export default function DetailView({
  product = products[0],
  searchTerm = '',
  onAddToCart,
  onBackToHome,
  onSelectProduct,
  onToggleWishlist,
  wishlistIds = []
}) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specifications');
  const [isAdded, setIsAdded] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Reset selected image whenever active product changes
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product.id]);

  const galleryImages = (product.images && product.images.length > 0)
    ? product.images
    : [product.image];

  const currentMainImage = galleryImages[selectedImageIndex] || product.image;

  const isWishlisted = wishlistIds.includes(product.id);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  // Find all matching products if searchTerm exists
  const matchingProducts = searchTerm
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.tag?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.specifications?.some(
            (s) =>
              s.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
              s.key.toLowerCase().includes(searchTerm.toLowerCase())
          )
      )
    : [];

  const displayList = matchingProducts.length > 0 ? matchingProducts : products.slice(0, 8);

  return (
    <div className="py-6 sm:py-10 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        
        {/* Navigation Breadcrumb & Back button */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <button onClick={onBackToHome} className="hover:text-brand-900 font-medium">Home</button>
            <span>/</span>
            <span onClick={onBackToHome} className="hover:text-brand-900 cursor-pointer">Shop</span>
            <span>/</span>
            <span className="text-brand-900 font-bold truncate max-w-xs">{product.name}</span>
          </nav>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#511B57] hover:text-[#3D1442] bg-white px-3.5 py-1.5 rounded-md border border-gray-200 shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Search Result Banner if user searched */}
        {searchTerm && (
          <div className="mb-6 p-4 sm:p-5 bg-purple-50/90 border border-purple-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#511B57] shrink-0"></span>
              <div>
                <p className="text-xs sm:text-sm text-[#511B57] font-semibold">
                  Search results for: <strong className="font-extrabold text-[#3D1442] text-sm sm:text-base">"{searchTerm}"</strong>
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Found <strong className="text-[#511B57] font-bold">{matchingProducts.length}</strong> matching products. Currently viewing: <strong>{product.name}</strong>
                </p>
              </div>
            </div>
            <span className="text-[11px] font-bold text-[#511B57] bg-white px-3 py-1.5 rounded-lg border border-purple-200 shadow-xs shrink-0">
              {matchingProducts.length} results
            </span>
          </div>
        )}

        {/* Main Product Detail Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left: Product Image & Interactive Thumbnails */}
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden bg-white border border-gray-100 aspect-square p-6 flex items-center justify-center group shadow-xs">
                <img
                  src={currentMainImage}
                  alt={`${product.name} view ${selectedImageIndex + 1}`}
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                />

                {/* Previous Image Chevron */}
                {galleryImages.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 hover:text-black p-2 rounded-full shadow-md border border-gray-200 transition-all cursor-pointer opacity-80 hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}

                {/* Next Image Chevron */}
                {galleryImages.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 hover:text-black p-2 rounded-full shadow-md border border-gray-200 transition-all cursor-pointer opacity-80 hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}

                {/* Image counter pill */}
                {galleryImages.length > 1 && (
                  <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full backdrop-blur-xs select-none">
                    {selectedImageIndex + 1} / {galleryImages.length}
                  </span>
                )}

                {product.isSale && (
                  <span className="absolute top-4 left-4 bg-[#7cb342] text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-xs">
                    SALE
                  </span>
                )}
                {product.tag && (
                  <span className="absolute top-4 right-4 bg-purple-100 text-[#511B57] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-xs">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Thumbnails row: interactive clicking to switch main image */}
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.map((imgSrc, idx) => (
                  <button 
                    key={idx} 
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`aspect-square rounded-lg border-2 p-1.5 bg-white overflow-hidden cursor-pointer transition-all flex items-center justify-center ${
                      selectedImageIndex === idx
                        ? 'border-[#511B57] ring-2 ring-purple-300 shadow-sm scale-102'
                        : 'border-gray-200 opacity-70 hover:opacity-100 hover:border-gray-400'
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`${product.name} thumbnail ${idx + 1}`} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Info & Actions */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold text-[#D4A373] uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded">
                  {product.category}
                </span>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mt-2 mb-3 leading-tight">
                  {product.name}
                </h1>

                {/* Rating & Review */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">(128 Customer Reviews)</span>
                  <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    In Stock
                  </span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 my-5 p-4 bg-gray-50 rounded-xl">
                  <span className="text-3xl sm:text-4xl font-black text-[#D4A373]">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base sm:text-lg text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="ml-auto text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Short Description */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Value Propositions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4 border-y border-gray-100 text-xs text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#511B57] shrink-0" />
                    <span>Free Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#511B57] shrink-0" />
                    <span>100% Authentic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-[#511B57] shrink-0" />
                    <span>30-Day Returns</span>
                  </div>
                </div>

                {/* Quantity & Add to Cart & Wishlist */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-gray-700">Quantity:</span>
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="px-3.5 py-2 text-gray-600 hover:bg-gray-100 font-bold transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 font-bold text-sm text-gray-800">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="px-3.5 py-2 text-gray-600 hover:bg-gray-100 font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    {/* Add to Cart button */}
                    <button
                      onClick={handleAddToCart}
                      className={`flex-1 py-3.5 px-6 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#511B57] hover:bg-[#3D1442] text-white active:scale-95'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-5 h-5" />
                          <span>Added to cart!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-5 h-5 text-amber-300" />
                          <span>Add to cart (${(product.price * quantity).toFixed(2)})</span>
                        </>
                      )}
                    </button>

                    {/* Wishlist Toggle Button */}
                    <button 
                      type="button"
                      onClick={() => onToggleWishlist && onToggleWishlist(product)}
                      className={`py-3.5 px-5 border rounded-lg transition-all flex items-center justify-center gap-2 ${
                        isWishlisted
                          ? 'border-rose-500 bg-rose-50 text-rose-600'
                          : 'border-gray-200 hover:border-[#511B57] text-gray-700 hover:text-[#511B57] bg-white'
                      }`}
                      title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                      <span className="text-xs font-bold">
                        {isWishlisted ? 'Saved' : 'Wishlist'}
                      </span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Tabbed Info: Specifications & Description */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex space-x-6 border-b border-gray-200 mb-6">
              <button
                onClick={() => setActiveTab('specifications')}
                className={`pb-3 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${
                  activeTab === 'specifications'
                    ? 'border-[#511B57] text-[#511B57]'
                    : 'border-transparent text-gray-400 hover:text-gray-700'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-3 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${
                  activeTab === 'description'
                    ? 'border-[#511B57] text-[#511B57]'
                    : 'border-transparent text-gray-400 hover:text-gray-700'
                }`}
              >
                Description
              </button>
            </div>

            {activeTab === 'specifications' ? (
              <div className="max-w-xl">
                <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
                  <tbody>
                    {product.specifications?.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-5 py-3 font-semibold text-gray-600 border-b border-gray-100 w-1/3">
                          {spec.key}
                        </td>
                        <td className="px-5 py-3 text-gray-800 border-b border-gray-100">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-sm text-gray-600 leading-relaxed max-w-3xl space-y-3">
                <p>{product.description}</p>
                <p>
                  Researched and clinically tested by a team of over 75 full-time scientists at the Nu Skin Innovation Center (Provo, Utah). The product adheres to the world-leading strict 6S Quality Process.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Results List: Matching Products from Search or Related Products */}
        <div className="my-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {searchTerm
                  ? `All products matching "${searchTerm}" (${matchingProducts.length})`
                  : 'Featured Products Recommended For You'}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {searchTerm
                  ? 'Click any product to switch quickly to its detailed view'
                  : 'Explore more exclusive Nu Skin health & beauty products'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {displayList.map((p) => {
              const isFav = wishlistIds.includes(p.id);
              const isSelected = p.id === product.id;
              return (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectProduct(p);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`bg-white border rounded-xl p-4 transition-all cursor-pointer group flex flex-col justify-between relative ${
                    isSelected
                      ? 'border-[#511B57] ring-2 ring-purple-200 shadow-md'
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-lg'
                  }`}
                >
                  {/* Heart Favorite Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist && onToggleWishlist(p);
                    }}
                    className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/90 hover:bg-white shadow-xs text-gray-400 hover:text-rose-500 transition-colors"
                    title={isFav ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  {/* Tag badge */}
                  {p.tag && (
                    <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-[#511B57]">
                      {p.tag}
                    </span>
                  )}

                  {/* Image */}
                  <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3 p-3 flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-0.5">
                        {p.category}
                      </span>
                      <h4 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-[#511B57] transition-colors mb-1.5">
                        {p.name}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">
                        {p.description}
                      </p>
                    </div>

                    {/* Price & Add to Cart button */}
                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm font-bold text-[#D4A373]">
                        ${p.price.toFixed(2)}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(p);
                        }}
                        className="p-2 bg-[#511B57] hover:bg-[#3D1442] text-white rounded-lg transition-colors shadow-xs"
                        title="Add to cart"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
