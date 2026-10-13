import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PopularProductsSection from './components/PopularProductsSection';
import PromoBannerSection from './components/PromoBannerSection';
import AwardsSection from './components/AwardsSection';
import NuSkinWaySection from './components/NuSkinWaySection';
import NewsSection from './components/NewsSection';
import DetailView from './components/DetailView';
import ShopView from './components/ShopView';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import Toast from './components/Toast';
import { products } from './data/products';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'shop' | 'detail'
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('xtech_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync wishlist to localStorage
  React.useEffect(() => {
    try {
      localStorage.setItem('xtech_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist', e);
    }
  }, [wishlist]);

  // Detect scroll to trigger sticky floating elevation effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Total quantity of items in cart
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // Add to cart handler
  const handleAddToCart = (productToAdd) => {
    const qty = productToAdd.quantity || 1;
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === productToAdd.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: (item.quantity || 1) + qty }
            : item
        );
      }
      return [...prevCart, { ...productToAdd, quantity: qty }];
    });

    const newTotal = cartCount + qty;
    setToast({
      message: `${productToAdd.name} (x${qty}) added to cart. Total items: ${newTotal}.`,
      id: Date.now(),
    });

    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove single item from cart
  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Toggle Wishlist item (Add or Remove)
  const handleToggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      setToast({
        message: `Removed "${product.name}" from your wishlist.`,
        id: Date.now(),
      });
    } else {
      setWishlist((prev) => [...prev, product]);
      setToast({
        message: `Added "${product.name}" to your wishlist!`,
        id: Date.now(),
      });
    }
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  // Remove single item from wishlist
  const handleRemoveWishlist = (productId) => {
    const itemToRemove = wishlist.find((item) => item.id === productId);
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
    if (itemToRemove) {
      setToast({
        message: `Removed "${itemToRemove.name}" from your wishlist.`,
        id: Date.now(),
      });
      setTimeout(() => {
        setToast(null);
      }, 3000);
    }
  };

  // Clear entire wishlist
  const handleClearWishlist = () => {
    setWishlist([]);
    setToast({
      message: 'Cleared all items from your wishlist.',
      id: Date.now(),
    });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  // Search handler:
  // - If exactly 1 matching result: open Detail view directly
  // - If > 1 results (e.g. 2, 3...) or 0: open Home/Shop list view of products
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (!term || !term.trim()) {
      setCurrentView('shop');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const trimmed = term.trim().toLowerCase();
    const matching = products.filter(
      (p) =>
        p.name.toLowerCase().includes(trimmed) ||
        p.tag?.toLowerCase().includes(trimmed) ||
        p.category.toLowerCase().includes(trimmed) ||
        p.description.toLowerCase().includes(trimmed) ||
        p.specifications?.some(
          (s) =>
            s.value.toLowerCase().includes(trimmed) ||
            s.key.toLowerCase().includes(trimmed)
        )
    );

    if (matching.length === 1) {
      // Exactly 1 product found -> Open detail directly
      setSelectedProduct(matching[0]);
      setCurrentView('detail');
    } else {
      // 2 or more products (e.g. Epoch has 3) -> Open Shop product list!
      setCurrentView('shop');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select product to view details
  const handleSelectProduct = (product) => {
    const fullProduct = products.find((p) => p.id === product.id) || product;
    setSelectedProduct(fullProduct);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to Home
  const handleNavigateHome = () => {
    setCurrentView('home');
    setSearchTerm('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to Shop
  const handleNavigateShop = () => {
    setCurrentView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const wishlistIds = wishlist.map((item) => item.id);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      
      {/* Sticky Header Wrapper: TopBar + Header (floats on scroll) */}
      <header 
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          isScrolled 
            ? 'shadow-lg border-b border-gray-200/90' 
            : 'border-b border-gray-100 shadow-none'
        }`}
      >
        {/* 1. Top Bar */}
        <TopBar isScrolled={isScrolled} />

        {/* 2. Header */}
        <Header
          isScrolled={isScrolled}
          cartCount={cartCount}
          wishlistCount={wishlist.length}
          onSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          onNavigateHome={handleNavigateHome}
        />
      </header>

      {/* 3. Navbar with Desktop Dropdown & Mobile Drawer */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onSelectCategory={(cat) => handleSearch(cat)}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* 4. Main Content (Home, Shop or Detail) */}
      <main className="flex-1">
        {currentView === 'detail' ? (
          <DetailView
            product={selectedProduct}
            searchTerm={searchTerm}
            onAddToCart={handleAddToCart}
            onBackToHome={handleNavigateHome}
            onBackToShop={handleNavigateShop}
            onSelectProduct={handleSelectProduct}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
          />
        ) : currentView === 'shop' ? (
          <ShopView
            searchTerm={searchTerm}
            onClearSearch={() => setSearchTerm('')}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onBackToHome={handleNavigateHome}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
          />
        ) : (
          <>
            {/* Hero Carousel & Banners Matching Figma Layout */}
            <HeroSection
              onShopNow={(title) => handleSearch(title)}
              currentView={currentView}
              setCurrentView={setCurrentView}
              onSelectCategory={(cat) => handleSearch(cat)}
            />

            {/* Most Popular Products */}
            <PopularProductsSection
              onAddToCart={handleAddToCart}
              onSelectProduct={handleSelectProduct}
              onViewAll={handleNavigateShop}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
            />

            {/* Promotional Device Banner (LumiSpa) */}
            <PromoBannerSection
              onShopNow={(title) => handleSearch(title)}
            />

            {/* Award And Recognition */}
            <AwardsSection />

            {/* The Nu Skin Way Story */}
            <NuSkinWaySection />

            {/* News Updates */}
            <NewsSection />
          </>
        )}
      </main>

      {/* 5. Footer */}
      <Footer 
        onNavigateHome={handleNavigateHome} 
        onNavigateShop={handleNavigateShop}
      />

      {/* Off-canvas Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Off-canvas Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlist}
        onRemoveWishlist={handleRemoveWishlist}
        onAddToCart={handleAddToCart}
        onSelectProduct={handleSelectProduct}
        onClearWishlist={handleClearWishlist}
      />

      {/* Toast Notification */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
        onOpenCart={() => {
          setToast(null);
          setIsCartOpen(true);
        }}
      />

    </div>
  );
}

