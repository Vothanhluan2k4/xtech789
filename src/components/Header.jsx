import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';

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

  // Trigger bounce effect on cartCount change
  React.useEffect(() => {
    if (cartCount > 0) {
      setIsBouncing(true);
      const timer = setTimeout(() => setIsBouncing(false), 600);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
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

          {/* Centered Search Bar */}
          <form 
            onSubmit={handleSubmit}
            className="flex-1 max-w-2xl mx-auto flex items-center relative"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search for products"
                className="w-full pl-4 pr-12 py-2 text-sm bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-900 focus:border-brand-900 transition-all text-gray-700 placeholder-gray-400"
              />
              <button
                type="submit"
                aria-label="Submit Search"
                className="absolute right-0 top-0 bottom-0 px-3.5 bg-transparent hover:text-brand-900 text-gray-600 flex items-center justify-center transition-colors"
              >
                <Search className="w-4 h-4 text-brand-900 font-bold" />
              </button>
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
