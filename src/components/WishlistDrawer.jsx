import React from 'react';
import { X, Trash2, Heart, ShoppingCart } from 'lucide-react';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveWishlist,
  onAddToCart,
  onSelectProduct,
  onClearWishlist
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-[#511B57] text-white flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2.5">
            <Heart className="w-5 h-5 text-rose-300 fill-rose-300" />
            <h3 className="font-bold text-base sm:text-lg">
              Favorite Products ({wishlistItems.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-purple-200 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
          {wishlistItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 py-16">
              <div className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                <Heart className="w-10 h-10 text-purple-300 stroke-[1.5]" />
              </div>
              <p className="font-bold text-gray-800 text-base">Your wishlist is empty</p>
              <p className="text-xs text-gray-400 mt-1.5 mb-6 max-w-xs leading-relaxed">
                Click the heart icon on any products you love to save them and easily keep track of discounts!
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#511B57] text-white text-xs font-bold rounded-md hover:bg-[#3D1442] transition-colors shadow-sm"
              >
                Explore Products Now
              </button>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-white rounded-xl border border-gray-100 hover:border-purple-200 transition-all shadow-xs group"
              >
                {/* Thumbnail */}
                <div 
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                  className="w-16 h-16 rounded-lg bg-white p-1 border border-gray-200 shrink-0 cursor-pointer overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h4 
                    onClick={() => {
                      onSelectProduct(item);
                      onClose();
                    }}
                    className="text-xs sm:text-sm font-bold text-gray-900 truncate hover:text-[#511B57] cursor-pointer"
                  >
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-bold text-[#D4A373]">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-[10px] text-gray-400 line-through">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-1.5 shrink-0">
                  <button
                    onClick={() => onAddToCart(item)}
                    className="p-2 bg-[#511B57] hover:bg-[#3D1442] text-white rounded-lg transition-colors shadow-xs"
                    title="Add to cart"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onRemoveWishlist(item.id)}
                    className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {wishlistItems.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
            <button
              onClick={onClearWishlist}
              className="text-xs font-semibold text-rose-600 hover:text-rose-700 underline"
            >
              Clear All ({wishlistItems.length})
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold rounded-md transition-colors"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
