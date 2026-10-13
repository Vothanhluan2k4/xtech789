import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full sm:max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-brand-900 text-white flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gold-500" />
            <h3 className="font-bold text-base sm:text-lg">
              Your Shopping Cart ({cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0)})
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

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-3" />
              <p className="font-bold text-gray-700">Your shopping cart is empty</p>
              <p className="text-xs text-gray-400 mt-1 mb-4">
                Choose your favorite products and click "Add to card".
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-brand-900 text-white text-xs font-bold rounded-md hover:bg-brand-950 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover bg-white shrink-0 border border-gray-200"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs font-extrabold text-gold-600 my-0.5">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                      className="w-6 h-6 rounded bg-white border border-gray-200 text-xs font-bold flex items-center justify-center hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold px-1.5">{item.quantity || 1}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                      className="w-6 h-6 rounded bg-white border border-gray-200 text-xs font-bold flex items-center justify-center hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-2 text-gray-400 hover:text-rose-600 transition-colors"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 space-y-3">
            <div className="flex items-center justify-between text-sm sm:text-base">
              <span className="text-gray-600 font-medium">Subtotal:</span>
              <span className="font-black text-xl text-brand-900">
                ${totalAmount.toFixed(2)}
              </span>
            </div>

            <button
              onClick={() => alert(`Thank you! Your order of $${totalAmount.toFixed(2)} has been placed successfully.`)}
              className="w-full py-3 bg-brand-900 hover:bg-brand-950 text-white font-bold text-sm rounded-lg shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-gold-500" />
            </button>

            <button
              onClick={onClearCart}
              className="w-full py-2 text-xs font-semibold text-gray-500 hover:text-rose-600 text-center transition-colors"
            >
              Clear Shopping Cart
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
