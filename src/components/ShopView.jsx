import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Heart, 
  ShoppingCart, 
  Star, 
  Check, 
  SlidersHorizontal, 
  X,
  ChevronDown
} from 'lucide-react';
import { products, categories } from '../data/products';

export default function ShopView({
  searchTerm = '',
  onClearSearch,
  onSelectProduct,
  onAddToCart,
  onBackToHome,
  onToggleWishlist,
  wishlistIds = []
}) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState('default'); // 'default' | 'price-asc' | 'price-desc' | 'name'
  const [addedIds, setAddedIds] = useState([]);

  // Extract all unique categories present in the products
  const categoryList = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ['ALL', ...Array.from(set)];
  }, []);

  // Filter products based on searchTerm and selectedCategory
  const filteredProducts = useMemo(() => {
    let result = products;

    // Apply search filter if present
    if (searchTerm && searchTerm.trim()) {
      const term = searchTerm.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.tag?.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term) ||
          p.specifications?.some(
            (s) =>
              s.value.toLowerCase().includes(term) ||
              s.key.toLowerCase().includes(term)
          )
      );
    }

    // Apply category tab filter
    if (selectedCategory !== 'ALL') {
      result = result.filter((p) => p.category.toUpperCase() === selectedCategory.toUpperCase());
    }

    // Apply sorting
    const sorted = [...result];
    if (sortBy === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sorted;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedIds((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== product.id));
    }, 1500);
  };

  return (
    <div className="py-6 sm:py-10 bg-gray-50/70 min-h-screen">
      <div className="container mx-auto">
        
        {/* Navigation Breadcrumb & Back to Home */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <nav className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-gray-500">
            <button 
              onClick={onBackToHome} 
              className="hover:text-brand-900 font-medium cursor-pointer transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button 
              onClick={() => {
                setSelectedCategory('ALL');
                if (onClearSearch) onClearSearch();
              }}
              className={`cursor-pointer transition-colors ${
                !searchTerm ? 'text-brand-900 font-bold' : 'hover:text-brand-900 font-medium'
              }`}
            >
              Shop
            </button>
            {searchTerm && (
              <>
                <span>/</span>
                <span className="text-brand-900 font-bold truncate max-w-[200px] sm:max-w-xs">
                  Search: "{searchTerm}"
                </span>
              </>
            )}
          </nav>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#511B57] hover:text-[#3D1442] bg-white px-3.5 py-1.5 rounded-md border border-gray-200 shadow-xs transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Header Banner: Search Context or Shop Title */}
        {searchTerm ? (
          <div className="mb-6 p-4 sm:p-5 bg-purple-50/90 border border-purple-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#511B57] shrink-0"></span>
              <div>
                <h1 className="text-sm sm:text-base text-[#511B57] font-semibold">
                  Search results for: <strong className="font-extrabold text-[#3D1442] text-base sm:text-lg">"{searchTerm}"</strong>
                </h1>
                <p className="text-xs text-gray-600 mt-0.5">
                  Found <strong className="text-[#511B57] font-bold">{filteredProducts.length}</strong> matching products in store
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClearSearch}
                className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 hover:text-red-600 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-xs transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Clear filter</span>
              </button>
              <span className="text-xs font-bold text-[#511B57] bg-white px-3 py-1.5 rounded-lg border border-purple-200 shadow-xs">
                {filteredProducts.length} results
              </span>
            </div>
          </div>
        ) : (
          <div className="mb-8 pb-4 border-b border-gray-200 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Our Products
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Explore world-class anti-aging devices, clinical skincare, and premier wellness nutrition
              </p>
            </div>
            <span className="text-xs font-bold text-gray-500 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-xs self-start md:self-auto">
              Total {filteredProducts.length} products
            </span>
          </div>
        )}

        {/* Filter Bar: Category Tabs & Sorting */}
        <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 mb-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categoryList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#511B57] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-2.5 shrink-0 self-end md:self-auto">
            <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Sort:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-bold text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#511B57] cursor-pointer"
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center my-6">
            <div className="w-16 h-16 bg-purple-50 text-brand-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-[#511B57]" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              No products found
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto mb-6">
              {searchTerm 
                ? `We couldn't find any products matching "${searchTerm}". Try checking your spelling or search for another term.`
                : 'No products available in this category at this moment.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                if (onClearSearch) onClearSearch();
              }}
              className="px-6 py-2.5 bg-[#511B57] hover:bg-[#3D1442] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm transition-all cursor-pointer"
            >
              View All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
            {filteredProducts.map((p) => {
              const isFav = wishlistIds.includes(p.id);
              const isAdded = addedIds.includes(p.id);

              return (
                <div
                  key={p.id}
                  onClick={() => onSelectProduct(p)}
                  className="bg-white border border-gray-200/90 rounded-xl p-3 sm:p-4 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between relative"
                >
                  {/* Top Badges & Wishlist Button */}
                  <div className="flex items-center justify-between w-full mb-2">
                    {p.tag ? (
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-[#511B57]">
                        {p.tag}
                      </span>
                    ) : p.isSale ? (
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                        SALE
                      </span>
                    ) : (
                      <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {p.category}
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist && onToggleWishlist(p);
                      }}
                      className="p-1.5 rounded-full bg-white/90 hover:bg-gray-100 shadow-2xs text-gray-400 hover:text-rose-500 transition-colors cursor-pointer"
                      title={isFav ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>
                  </div>

                  {/* Product Image Area */}
                  <div className="aspect-square bg-gray-50/60 rounded-lg overflow-hidden mb-3 p-3 flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-106 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-0.5">
                        {p.category}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#511B57] transition-colors mb-1.5 line-clamp-2 leading-snug">
                        {p.name}
                      </h3>

                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium">(4.9)</span>
                      </div>

                      <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed hidden sm:block">
                        {p.description}
                      </p>
                    </div>

                    {/* Pricing & Add To Cart Button */}
                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between mt-auto">
                      <div className="flex flex-col">
                        <span className="text-sm sm:text-base font-extrabold text-[#D4A373] leading-tight">
                          ${p.price.toFixed(2)}
                        </span>
                        {p.originalPrice && (
                          <span className="text-[10px] text-gray-400 line-through leading-tight">
                            ${p.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => handleAddToCart(p, e)}
                        className={`p-2 rounded-lg transition-all flex items-center gap-1 cursor-pointer shadow-xs ${
                          isAdded 
                            ? 'bg-emerald-600 text-white' 
                            : 'bg-[#511B57] hover:bg-[#3D1442] text-white active:scale-95'
                        }`}
                        title="Add to cart"
                      >
                        {isAdded ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <ShoppingCart className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
