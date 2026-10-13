import React from 'react';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';

export default function Toast({ toast, onClose, onOpenCart }) {
  if (!toast) return null;

  const isCart = toast.message?.toLowerCase().includes('cart');

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-full bg-white border-2 border-brand-900 rounded-xl shadow-2xl p-4 flex items-start gap-3 animate-slideUp">
      <div className="p-1.5 rounded-full bg-emerald-100 text-emerald-600 shrink-0">
        <CheckCircle2 className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-xs font-bold text-gray-900">
          {isCart ? 'Added to Cart' : 'Wishlist Updated'}
        </h4>
        <p className="text-xs text-gray-600 truncate mt-0.5 font-medium">
          {toast.message}
        </p>

        {isCart && (
          <button
            onClick={onOpenCart}
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-brand-900 hover:text-brand-950 underline decoration-1"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>View Cart Now</span>
          </button>
        )}
      </div>

      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 p-1"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
