import React from 'react';
import { ChevronRight } from 'lucide-react';

// Exact FontAwesome Solid Icons from template
const MapMarkerIcon = () => (
  <svg 
    className="w-3.5 h-4 fill-white shrink-0" 
    viewBox="0 0 384 512"
  >
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
  </svg>
);

const EnvelopeIcon = () => (
  <svg 
    className="w-4 h-3.5 fill-white shrink-0" 
    viewBox="0 0 512 512"
  >
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
  </svg>
);

const PhoneAltIcon = () => (
  <svg 
    className="w-3.5 h-3.5 fill-white shrink-0" 
    viewBox="0 0 512 512"
  >
    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.3l60.6-49.6a24 24 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
  </svg>
);

export default function Footer({ onNavigateHome, onNavigateShop }) {
  const quickLinks1 = [
    { label: 'Home', href: '#home' },
    { label: 'Our Shop', href: '#shop' },
    { label: 'Shop Detail', href: '#detail' },
    { label: 'Shopping Cart', href: '#cart' },
    { label: 'Checkout', href: '#checkout' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const quickLinks2 = [
    { label: 'Home', href: '#home' },
    { label: 'Our Shop', href: '#shop' },
    { label: 'Shop Detail', href: '#detail' },
    { label: 'Shopping Cart', href: '#cart' },
    { label: 'Checkout', href: '#checkout' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const paymentLogos = [
    { name: 'Visa', src: '/images/payments/card_visa.png', alt: 'Visa' },
    { name: 'MasterCard', src: '/images/payments/card_mastercard.png', alt: 'MasterCard' },
    { name: 'American Express', src: '/images/payments/amex.svg', alt: 'American Express' },
    { name: 'Visa Electron', src: '/images/payments/card_visa_electron.png', alt: 'Visa Electron' },
    { name: 'Maestro', src: '/images/payments/card_maestro.png', alt: 'Maestro' },
  ];

  const handleLinkClick = (e, label) => {
    if (label === 'Home') {
      e.preventDefault();
      onNavigateHome && onNavigateHome();
    } else if (label === 'Our Shop') {
      e.preventDefault();
      onNavigateShop && onNavigateShop();
    }
  };

  return (
    <footer className="bg-brand-900 text-white">
      {/* Main Footer Information */}
      <div className="container mx-auto py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-start">
          
          {/* Column 1: Company Description & Contacts (Exact icons matching user screenshot) */}
          <div className="space-y-6">
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-sm">
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm text-white">
              <p className="flex items-center gap-2.5">
                <MapMarkerIcon />
                <span>123 Street, New York, USA</span>
              </p>
              <p className="flex items-center gap-2.5">
                <EnvelopeIcon />
                <span>info@example.com</span>
              </p>
              <p className="flex items-center gap-2.5">
                <PhoneAltIcon />
                <span>+012 345 67890</span>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-base sm:text-lg font-bold mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks1.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.label)}
                    className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors py-0.5 group cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-white stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white text-base sm:text-lg font-bold mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks2.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.label)}
                    className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors py-0.5 group cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-white stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Divider line separating Top and Bottom Footer */}
      <div className="container mx-auto">
        <div className="border-t border-white/20"></div>
      </div>

      {/* Footer Bottom Bar (Copyright & Payments) */}
      <div className="container mx-auto py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white">
          
          {/* Copyright text */}
          <div className="text-center sm:text-left leading-relaxed text-white/90">
            <p>
              &copy; <strong className="text-white font-bold">Your Site Name</strong>. All Rights Reserved. Designed by <strong className="text-white font-bold">HTML Codex</strong>
            </p>
            <p className="mt-0.5 text-white/90">
              Distributed By <span className="text-white font-medium">ThemeWagon</span>
            </p>
          </div>

          {/* Individual Payment Badges from requested URLs */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {paymentLogos.map((item, idx) => (
              <div
                key={idx}
                className="h-6 w-9 sm:h-7 sm:w-11 bg-white rounded-xs sm:rounded-sm flex items-center justify-center p-0.5 shadow-sm overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                title={item.name}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
