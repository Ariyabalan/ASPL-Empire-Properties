// horizonHeights.js
// ASPL Horizon Heights — Residential Apartment, Whitefield, Under Construction

export const horizonHeights = {
  id: "proj-001",
  slug: "horizon-heights",
  name: "ASPL Horizon Heights",
  tagline: "A Whitefield address built around your daily commute.",

  propertyCategory: "Residential",
  propertyType: "Apartment",
  location: "Whitefield",
  neighborhood: "Near ITPL Main Road",
  city: "Bengaluru",

  shortDescription:
    "Two towers around a central courtyard, 8 minutes from Whitefield's tech parks.",
  fullOverview:
    "Horizon Heights sits just off ITPL Main Road, built for people whose mornings start with a commute to Whitefield's tech parks. The project isn't trying to be a destination — it's trying to make the daily back-and-forth shorter, so evenings and weekends actually feel like time off. Two towers, ground-plus-14 floors, set around a central landscaped courtyard rather than facing the road directly.",
  highlights: [
    "8-minute drive to ITPL and Whitefield tech parks",
    "Central courtyard design — no unit directly faces the main road",
    "Dedicated EV charging points in basement parking",
    "Rainwater harvesting and STP-treated water for landscaping",
    "Under-construction pricing available before final phase launch",
  ],

  status: "Under Construction",
  possessionDate: "December 2027",
  startingPrice: 6800000,
  priceRange: "₹68 Lakh – ₹1.08 Crore",

  configurations: [
    { type: "2 BHK", carpetArea: 780, builtUpArea: 1050, price: 6800000 },
    { type: "2 BHK (Larger)", carpetArea: 890, builtUpArea: 1190, price: 7600000 },
    { type: "3 BHK", carpetArea: 1180, builtUpArea: 1580, price: 10200000 },
    { type: "3 BHK (Corner)", carpetArea: 1240, builtUpArea: 1650, price: 10800000 },
  ],

  hasInteriors: true,
  hasFloorPlan: true,
  hasLayoutPlan: false,

  amenityIds: [
    "amn-01", "amn-02", "amn-03", "amn-04", "amn-05",
    "amn-08", "amn-10", "amn-11",
    "amn-13", "amn-14", "amn-15",
    "amn-17", "amn-18", "amn-19",
    "amn-21", "amn-22", "amn-23", "amn-24",
  ],

  specifications: {
    structure: "RCC-framed earthquake-resistant structure",
    flooring: "Vitrified tiles in living/bedrooms, anti-skid ceramic in bathrooms and balconies",
    kitchen: "Granite countertop, stainless steel sink, provision for water purifier and chimney",
    doorsWindows: "Engineered wood main door, laminated flush internal doors, UPVC windows",
    electrical: "Concealed copper wiring, 3-phase power backup for common areas, one power backup point per bedroom",
    safety: "Fire sprinklers on all floors, fire extinguishers per floor, refuge area as per norms",
  },

  connectivity: {
    education: [
      { name: "Vydehi School of Excellence", distance: "2.1 km" },
      { name: "Deens Academy", distance: "3.4 km" },
    ],
    healthcare: [
      { name: "Vydehi Hospital", distance: "2.3 km" },
      { name: "Columbia Asia Whitefield", distance: "5 km" },
    ],
    work: [
      { name: "ITPL", distance: "3.5 km" },
      { name: "EPIP Zone", distance: "4.2 km" },
      { name: "Prestige Tech Park", distance: "6 km" },
    ],
    shopping: [
      { name: "Phoenix Marketcity", distance: "6.5 km" },
      { name: "Forum Shantiniketan Mall", distance: "4 km" },
    ],
    transport: [
      { name: "Whitefield Railway Station", distance: "5 km" },
      { name: "Namma Metro Kadugodi Extension", distance: "3 km" },
    ],
    entertainment: [
      { name: "Cinepolis Forum Shantiniketan", distance: "4 km" },
    ],
  },
  nearbyLandmarks: ["ITPL", "Vydehi Hospital", "Forum Shantiniketan Mall", "Whitefield Railway Station"],

  construction: {
    currentStage: "Structure",
    percentComplete: 48,
    milestones: [
      { stage: "Land Development", status: "Complete" },
      { stage: "Foundation", status: "Complete" },
      { stage: "Structure", status: "In Progress" },
      { stage: "Finishing", status: "Pending" },
      { stage: "Handover", status: "Pending" },
    ],
    expectedCompletion: "December 2027",
    latestUpdate: "Tower A structure crossed the 9th floor this month; brickwork has started on lower floors.",
  },

  faqs: [
    { question: "Is this project RERA registered?", answer: "Yes — see the RERA information section on this page for details." },
    { question: "Can I book with a token amount before final pricing?", answer: "Yes, current under-construction pricing is available for early bookings." },
    { question: "Is EV charging included or extra?", answer: "Basic EV charging infrastructure is included in basement parking." },
  ],
  filterTags: [
    "residential", "apartment", "whitefield", "under-construction",
    "2bhk", "3bhk", "under-1cr", "1cr-1.5cr", "first-time-buyer", "family",
  ],

  reraInfo: {
    isDemoOnly: true,
    displayText: "Illustrative demo information — not an actual registration.",
  },

  images: {
    hero: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80",
    card: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
    advertisement: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=80",
    offer: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    thumbnail: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80",
    exteriorGallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=80",
    ],
    interiorGallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    ],
    amenitiesGallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=80",
    ],
    lifestyleGallery: [],
    floorPlanImages: {
      "2 BHK": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "3 BHK": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    layoutPlanImage: null,
    locationImage: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
    constructionGallery: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"],
  },

  featured: true,
  targetBuyer: "First-time buyers, working professionals, young families",
};
