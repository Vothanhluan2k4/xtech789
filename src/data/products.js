export const products = [
  {
    id: 1,
    name: "ageLOC® Pure Pineapple",
    category: "AGELOC",
    price: 14.00,
    originalPrice: 35.00,
    isSale: false,
    isLoyalty: true,
    image: "/images/popular_product_1.png",
    rating: 5,
    tag: "Best Seller",
    description: "ageLOC Y-Span dietary supplement infused with refreshing natural pineapple flavor, supporting optimal cellular rejuvenation and full-body vitality.",
    specifications: [
      { key: "Packaging", value: "Bottle of 120 capsules" },
      { key: "Origin", value: "United States (USA)" },
      { key: "Brand", value: "Nu Skin Pharmanex" },
      { key: "Primary Benefit", value: "Cellular protection & comprehensive anti-aging defense" }
    ]
  },
  {
    id: 2,
    name: "AP24® Whitening Fluoride Toothpaste",
    category: "NU SKIN CARE",
    price: 14.00,
    originalPrice: 35.00,
    isSale: true,
    isLoyalty: true,
    image: "/images/popular_product_2.png",
    rating: 5,
    tag: "Best Seller",
    description: "AP-24 whitening fluoride toothpaste gently brightens teeth without harmful peroxides, removes plaque, and provides 24-hour oral protection with refreshing vanilla mint flavor.",
    specifications: [
      { key: "Net Weight", value: "110g (4 oz)" },
      { key: "Origin", value: "USA" },
      { key: "Technology", value: "Patented AP-24 plaque-fighting formula" },
      { key: "Flavor", value: "Fresh Vanilla & Mint" }
    ]
  },
  {
    id: 3,
    name: "ageLOC® Y-Span Youth Preservation",
    category: "AGELOC",
    price: 14.00,
    originalPrice: 35.00,
    isSale: true,
    isLoyalty: true,
    image: "/images/popular_product_3.png",
    rating: 5,
    tag: "Reasonable Price",
    description: "Nu Skin's most advanced anti-aging supplement, scientifically formulated to influence gene expression and help you live your most vibrant, youthful years.",
    specifications: [
      { key: "Packaging", value: "Bottle of 120 softgels" },
      { key: "Origin", value: "USA" },
      { key: "Target Audience", value: "Adults aged 18 and older" },
      { key: "Shelf Life", value: "24 months from manufacture date" }
    ]
  },
  {
    id: 4,
    name: "ageLOC® LumiSpa® iO System",
    category: "DEVICES",
    price: 29.99,
    originalPrice: 199.00,
    isSale: true,
    isLoyalty: false,
    image: "/images/hd/lumispa_clean_woman_hd.png",
    rating: 5,
    tag: "Award Winner",
    description: "Smart facial cleansing & skin treatment device featuring counter-rotating Micropulse oscillation and IoT connectivity via Nu Skin Vera app, delivering deep cleansing in just 2 minutes.",
    specifications: [
      { key: "Connectivity", value: "Bluetooth enabled via Nu Skin Vera App" },
      { key: "Technology", value: "Counter-rotating Micropulse Oscillation" },
      { key: "Battery Life", value: "Single charge lasts over a week" },
      { key: "Water Resistance", value: "IPX7 waterproof rating (shower-safe)" }
    ]
  },
  {
    id: 5,
    name: "ageLOC® Galvanic Spa® Facial System",
    category: "DEVICES",
    price: 299.00,
    originalPrice: 389.00,
    isSale: true,
    isLoyalty: true,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    tag: "Editor's Choice",
    description: "Compact microcurrent spa device using self-adjusting galvanic currents to lift, firm, smooth wrinkles, and drive anti-aging actives deep into the skin.",
    specifications: [
      { key: "Conductors Included", value: "4 conductors: Face, Spot, Body, Scalp" },
      { key: "Current", value: "Self-adjusting Galvanic microcurrents" },
      { key: "Origin", value: "USA" }
    ]
  },
  {
    id: 6,
    name: "ageLOC® Boost™ Microcurrent Device",
    category: "DEVICES",
    price: 249.00,
    originalPrice: 310.00,
    isSale: false,
    isLoyalty: true,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    tag: "New Arrival",
    description: "Breakthrough variable pulse microcurrent device paired with ageLOC Boost Activating Serum, instantly enhancing skin radiance, plumpness, and hydration.",
    specifications: [
      { key: "Technology", value: "Variable Pulse Microcurrent" },
      { key: "Treatment Time", value: "Just 2 minutes per day" },
      { key: "Weight", value: "Ultra-lightweight 85g, pocket-portable" }
    ]
  },
  {
    id: 7,
    name: "Epoch® Baobab Body Butter",
    category: "BODY CARE",
    price: 38.00,
    originalPrice: 48.00,
    isSale: false,
    isLoyalty: false,
    image: "https://images.unsplash.com/photo-1608248597359-052445e99446?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    tag: "Eco Friendly",
    description: "Rich ethnobotanical body butter formulated with African baobab fruit pulp, shea butter, and macadamia nut oil. Delivers 24-hour intense moisture for supple, glowing skin.",
    specifications: [
      { key: "Net Weight", value: "125g (4.4 oz)" },
      { key: "Certification", value: "Ethnobotanical - $0.25 donated per sale to Force for Good" },
      { key: "Fragrance", value: "Subtle natural botanical aroma" }
    ]
  },
  {
    id: 8,
    name: "Epoch® Yin & Yang Detox Mask",
    category: "NU SKIN CARE",
    price: 40.00,
    originalPrice: 52.00,
    isSale: true,
    isLoyalty: false,
    image: "https://images.unsplash.com/photo-1567928815114-1e0339d37fb9?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    tag: "Award Winner",
    description: "Dual detoxifying and soothing mask powered by activated bamboo charcoal and porcelain flower extract. Lifts urban micro-pollutants and instantly balances moisture levels.",
    specifications: [
      { key: "Volume", value: "75ml (2.5 fl oz)" },
      { key: "Recognition", value: "Silver Winner - Global Green Beauty Awards" },
      { key: "Packaging", value: "100% PCR eco-friendly recycled resin" }
    ]
  },
  {
    id: 9,
    name: "Nutricentials® Eye Love Bright Eyes",
    category: "EYE CARE",
    price: 42.00,
    originalPrice: 52.00,
    isSale: true,
    isLoyalty: false,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    tag: "Award Winner",
    description: "Cooling cream-gel eye treatment that visibly reduces puffiness, dark circles, and protects delicate under-eye skin against environmental stress and digital blue light (HEV).",
    specifications: [
      { key: "Volume", value: "15ml (0.5 fl oz)" },
      { key: "Technology", value: "Bioadaptive Botanical Complex" },
      { key: "Protection", value: "Anti-pollution & HEV blue light defense" }
    ]
  },
  {
    id: 10,
    name: "Nutricentials® Celltrex Always Right Recovery Serum",
    category: "NU SKIN CARE",
    price: 54.00,
    originalPrice: 68.00,
    isSale: true,
    isLoyalty: false,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    tag: "Best Seller",
    description: "Smart restorative serum that automatically adapts hydration to your surroundings—drawing moisture in dry air and remaining featherlight in high humidity for continuous radiant glow.",
    specifications: [
      { key: "Volume", value: "30ml (1 fl oz)" },
      { key: "Skin Type", value: "Suitable for all skin types, including sensitive" },
      { key: "Texture", value: "Ultra-lightweight non-greasy fast-absorbing serum" }
    ]
  },
  {
    id: 11,
    name: "Pharmanex® Tegreen 97® Green Tea Extract",
    category: "PHARMANEX",
    price: 45.00,
    originalPrice: 58.00,
    isSale: false,
    isLoyalty: true,
    image: "/images/hd/vitamins_hd.jpg",
    rating: 5,
    tag: "Best Seller",
    description: "Standardized concentrated green tea extract featuring 97% polyphenols and 65% EGCg. Delivers potent antioxidant protection, shields cells from free radicals, and promotes healthy cellular metabolism.",
    specifications: [
      { key: "Packaging", value: "Bottle of 120 capsules" },
      { key: "Potency", value: "1 capsule equivalent to 7 cups of brewed green tea" },
      { key: "Caffeine", value: "99.5% decaffeinated, non-stimulating" }
    ]
  },
  {
    id: 12,
    name: "Pharmanex® Marine Omega-3 Softgels",
    category: "PHARMANEX",
    price: 55.00,
    originalPrice: 70.00,
    isSale: true,
    isLoyalty: true,
    image: "/images/hd/softgels_hd.jpg",
    rating: 4.9,
    tag: "Top Rated",
    description: "Ultra-pure deep-sea fish oil delivering high concentrations of EPA and DHA combined with Antarctic krill oil. Supports cardiovascular health, brain cognition, vision, and joint flexibility.",
    specifications: [
      { key: "Packaging", value: "Bottle of 120 softgels" },
      { key: "Source", value: "Cold-water pristine fisheries & Antarctic krill" },
      { key: "Quality Standard", value: "Strict 6S standard, tested free of mercury & heavy metals" }
    ]
  },
  {
    id: 13,
    name: "ageLOC® Tru Face® Essence Ultra",
    category: "AGELOC",
    price: 188.00,
    originalPrice: 235.00,
    isSale: true,
    isLoyalty: true,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    tag: "VIP Reward",
    description: "Firming pearl essence capsules powered by proprietary Ethocyn to help restore skin elasticity, define jawline contours, and diminish the appearance of fine lines and sagging.",
    specifications: [
      { key: "Packaging", value: "Jar of 60 targeted teardrop capsules" },
      { key: "Key Actives", value: "Ethocyn® & proprietary ageLOC® complex" },
      { key: "Benefit", value: "Restores firmness, elasticity and facial definition" }
    ]
  },
  {
    id: 14,
    name: "Epoch® Glacial Marine Mud Mask",
    category: "NU SKIN CARE",
    price: 36.00,
    originalPrice: 46.00,
    isSale: false,
    isLoyalty: false,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    tag: "Eco Friendly",
    description: "Ancient glacial mud harvested from pristine Pacific Northwest tidal estuaries, enriched with over 50 beneficial skin-nourishing minerals. Draws out impurities and visibly refines pores.",
    specifications: [
      { key: "Net Weight", value: "200g (7 oz)" },
      { key: "Source", value: "Glacial marine sediment from British Columbia" },
      { key: "Usage", value: "Leave on for 15-20 minutes until dry and clay turns light aquamarine" }
    ]
  },
  {
    id: 15,
    name: "ageLOC® Dermatic Effects® Body Contouring",
    category: "BODY CARE",
    price: 52.00,
    originalPrice: 65.00,
    isSale: true,
    isLoyalty: false,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    tag: "Best Seller",
    description: "Scientifically formulated contouring lotion designed to inhibit fat production, visibly smooth the appearance of cellulite, and promote firmer, more hydrated skin texture.",
    specifications: [
      { key: "Volume", value: "150ml (5 fl oz)" },
      { key: "Target Areas", value: "Thighs, abdomen, arms, and buttocks" },
      { key: "Clinical Results", value: "Visible improvement within 8 weeks of daily use" }
    ]
  },
  {
    id: 16,
    name: "Nu Colour® Bioadaptive BB+ Skin Loving Cushion",
    category: "NU SKIN CARE",
    price: 48.00,
    originalPrice: 60.00,
    isSale: true,
    isLoyalty: false,
    image: "/images/hd/cosmetic_jar.jpg",
    rating: 4.7,
    tag: "New Arrival",
    description: "Next-generation skin-caring beauty balm cushion infused with bioadaptive botanicals. Provides luminous buildable coverage, all-day hydration, and broad-spectrum SPF 35 protection.",
    specifications: [
      { key: "Net Weight", value: "15g (includes antimicrobial puff)" },
      { key: "Sun Protection", value: "Broad Spectrum SPF 35 PA++" },
      { key: "Wear Time", value: "Long-lasting radiant finish up to 12 hours" }
    ]
  }
];

export const awards = [
  {
    year: "2024",
    title: "ageLOC® LumiSpa® iO",
    award: "NEWBEAUTY AWARDS 2024",
    desc: "Best Cleansing Device Award Winner",
    image: "/images/awards/award_newbeauty_2024.png"
  },
  {
    year: "2023",
    title: "Epoch Baobab Body Butter",
    award: "BEAUTY BIBLE AWARDS 2023",
    desc: "Body Butter Silver Winner",
    image: "/images/awards/award_beautybible_2023.png"
  },
  {
    year: "2022",
    title: "Nu Skin Enterprises",
    award: "GLOBAL MAKEUP AWARDS 2022",
    desc: "Best USA Beauty Brand Global Makeup Awards",
    image: "/images/awards/award_globalmakeup_2022.png"
  },
  {
    year: "2022",
    title: "Epoch® Yin & Yang Mask",
    award: "SUSTAINABLE PACKAGING 2022",
    desc: "Gold Winner Global Green Beauty Awards",
    image: "/images/awards/award_greenbeauty_2022.png"
  },
  {
    year: "2021",
    title: "ageLOC® Facial Spa",
    award: "INSTYLE READERS' CHOICE",
    desc: "Readers' Choice Beauty Award Winner InStyle",
    image: "/images/awards/award_instyle_2021.png"
  },
  {
    year: "2022",
    title: "Nutricentials® Bright Eyes",
    award: "PURE BEAUTY AWARDS",
    desc: "Finalist Best New Eye Product Global Awards",
    image: "/images/awards/award_purebeauty_2022.png"
  }
];

export const newsArticles = [
  {
    id: 1,
    title: "38 New Beauty Products Our Editors Are Loving This December",
    date: "December 15, 2025",
    author: "Beauty Editorial",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    summary: "Explore our curated list of groundbreaking skincare innovations and top-rated beauty devices of the year."
  },
  {
    id: 2,
    title: "The Secrets of Genetic-Level Anti-Aging with ageLOC Technology",
    date: "December 10, 2025",
    author: "Science & Wellness",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    summary: "Understanding gene expression mechanisms and how natural bioactive nutrients sustain lasting youthfulness."
  },
  {
    id: 3,
    title: "Force for Good Journey: Over 850 Million VitaMeal Meals Donated",
    date: "December 01, 2025",
    author: "Nu Skin CSR",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
    summary: "The Nourish the Children initiative continues to deliver life-saving nutrition to vulnerable children across the globe."
  }
];

export const categories = [
  "Dresses",
  "Shirts",
  "Jeans",
  "Swimwear",
  "Sleepwear",
  "Sportswear",
  "Jumpsuits",
  "Blazers",
  "Jackets",
  "Shoes"
];
