import React, { useState, useEffect, useRef } from 'react';
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { products } from '../data/products';

export default function Header({
  cartCount,
  wishlistCount,
  onSearch,
  searchTerm,
  setSearchTerm,
  onOpenCart,
  onOpenWishlist,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  onNavigateHome,
  isScrolled = false
}) {
  const [localSearch, setLocalSearch] = useState(searchTerm || '');
  const [isBouncing, setIsBouncing] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef(null);

  // Sync with external searchTerm changes
  useEffect(() => {
    setLocalSearch(searchTerm || '');
  }, [searchTerm]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter suggestions live
  const suggestions = localSearch.trim().length >= 1
    ? products.filter((p) =>
        p.name.toLowerCase().includes(localSearch.toLowerCase()) ||
        p.category.toLowerCase().includes(localSearch.toLowerCase()) ||
        p.tag?.toLowerCase().includes(localSearch.toLowerCase()) ||
        p.description.toLowerCase().includes(localSearch.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSelectSuggestion = (prod) => {
    setLocalSearch(prod.name);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(prod.name);
    }
  };

  // Trigger bounce effect on cartCount change
  useEffect(() => {
    if (cartCount > 0) {
      setIsBouncing(true);
      const timer = setTimeout(() => setIsBouncing(false), 600);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(localSearch.trim());
    }
  };

  return (
    <div 
      className={`bg-white transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 sm:py-3'
          : 'py-3 sm:py-4'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded text-brand-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Left spacing or Brand on desktop */}
          <div 
            onClick={onNavigateHome}
            className="cursor-pointer select-none hidden lg:block w-64"
          >
            {/* Kept subtle or blank matching the Figma layout */}
          </div>

          {/* Centered Search Bar with Live Suggestions */}
          <form 
            ref={searchContainerRef}
            onSubmit={handleSubmit}
            className="flex-1 max-w-2xl mx-auto flex items-center relative"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={localSearch}
                onChange={(e) => {
                  setLocalSearch(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search for products (e.g. Toothpaste, LumiSpa, Tea, Baobab...)"
                className="w-full pl-4 pr-12 py-2 text-sm bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-900 focus:border-brand-900 transition-all text-gray-700 placeholder-gray-400"
              />
              <button
                type="submit"
                aria-label="Submit Search"
                className="absolute right-0 top-0 bottom-0 px-3.5 bg-transparent hover:text-brand-900 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4 text-brand-900 font-bold" />
              </button>

              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden max-h-80 overflow-y-auto">
                  <div className="p-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                    <span>Quick Search Suggestions</span>
                    <span>{suggestions.length} results</span>
                  </div>
                  {suggestions.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleSelectSuggestion(p)}
                      className="flex items-center gap-3 p-2.5 hover:bg-purple-50/70 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-10 h-10 object-contain p-1 bg-white border border-gray-100 rounded shrink-0"
                      />
                      <div className="flex-1 min-w-0 text-left">
                        <p className="text-xs font-semibold text-gray-900 truncate">{p.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider">{p.category}</span>
                          <span className="text-xs font-bold text-[#E59819]">${p.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </form>

          {/* Right: Wishlist & Cart square border boxes */}
          <div className="flex items-center gap-3">
            {/* Wishlist button */}
            <button 
              type="button"
              onClick={onOpenWishlist}
              className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 text-brand-900 text-sm cursor-pointer hover:bg-purple-50/60 hover:border-purple-300 transition-colors"
              title="Wishlist"
            >
              <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'text-rose-500 fill-rose-500' : 'text-brand-900 fill-brand-900'}`} />
              <span className="font-semibold text-gray-700 text-sm">{wishlistCount}</span>
            </button>

            {/* Cart box */}
            <button
              onClick={onOpenCart}
              className={`flex items-center gap-2 px-3 py-1.5 border border-gray-200 text-brand-900 text-sm hover:bg-gray-50 transition-all ${
                isBouncing ? 'ring-2 ring-brand-900' : ''
              }`}
              title="Shopping Cart"
            >
              <ShoppingCart className="w-4 h-4 text-brand-900 fill-brand-900" />
              <span className="font-semibold text-gray-700 text-sm">{cartCount}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
