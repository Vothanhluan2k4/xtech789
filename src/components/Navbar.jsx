import React from 'react';
import { X, ChevronRight, Layers } from 'lucide-react';
import { categories } from '../data/products';

export default function Navbar({
  currentView,
  setCurrentView,
  onSelectCategory,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'detail', label: 'Shop Detail' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
  ];

  // Lock body scroll and listen for Escape key when mobile menu is open
  React.useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalStyle;
    };
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  if (!isMobileMenuOpen) return null;

  return (
    /* Mobile Drawer Off-Canvas */
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Drawer content */}
      <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-slideRight overflow-y-auto">
        {/* Header */}
        <div className="p-4 bg-brand-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wide text-sm">CATEGORIES &amp; MENU</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1 rounded text-purple-200 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <div className="py-2 border-b border-gray-100">
          <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
            Main Menu
          </div>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                if (link.id === 'shop') {
                  setCurrentView('shop');
                } else if (link.id === 'detail') {
                  setCurrentView('detail');
                } else if (link.id === 'news') {
                  setCurrentView('news');
                } else {
                  setCurrentView('home');
                }
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-5 py-2.5 text-xs font-medium flex items-center justify-between ${
                currentView === link.id
                  ? 'bg-purple-50 text-brand-900 font-bold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>{link.label}</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </button>
          ))}
        </div>

        {/* Categories */}
        <div className="py-2 flex-1">
          <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-brand-900" />
            Product Categories
          </div>
          <div className="max-h-72 overflow-y-auto">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (onSelectCategory) onSelectCategory(cat);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-5 py-2.5 text-xs text-gray-600 hover:bg-purple-50 hover:text-brand-900 flex items-center justify-between border-b border-gray-50"
              >
                <span>{cat}</span>
                <ChevronRight className="w-3 h-3 text-gray-300" />
              </button>
            ))}
          </div>
        </div>

        {/* Footer auth */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-around text-xs">
          <button className="font-medium text-brand-900 hover:underline">
            Login
          </button>
          <span className="text-gray-300">|</span>
          <button className="font-medium text-brand-900 hover:underline">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
