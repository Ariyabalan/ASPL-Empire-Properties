// businessSquare.js
// ASPL Business Square — Commercial (Office/Retail), Whitefield ORR, Ready to Move

export const businessSquare = {
  id: "proj-003",
  slug: "business-square",
  name: "ASPL Business Square",
  tagline: "Office and retail space on Whitefield's business corridor.",

  propertyCategory: "Commercial",
  propertyType: "Office",
  location: "Whitefield (ORR)",
  neighborhood: "Near Kadugodi Metro Corridor",
  city: "Bengaluru",

  shortDescription: "Ready-to-occupy retail units and column-free office floor plates along Whitefield's ORR stretch.",
  fullOverview:
    "Business Square is a ready-to-occupy commercial development along Whitefield's Outer Ring Road stretch, near the Kadugodi metro corridor. It offers both ground-floor retail units and mid-to-high floor office space — built for businesses that want visibility and an address that's easy to explain to clients and easy for employees to reach.",
  highlights: [
    "Ready to move — no possession wait",
    "Retail units with direct road frontage and footfall visibility",
    "Column-free office floor plates for flexible fit-outs",
    "Dedicated visitor parking separate from tenant parking",
  ],

  status: "Ready to Move",
  possessionDate: "Immediate",
  startingPrice: 9500000,
  priceRange: "₹95 Lakh – ₹6.2 Crore",

  configurations: [
    { type: "Retail Unit (Ground)", carpetArea: 450, builtUpArea: 900, price: 9500000 },
    { type: "Retail Unit (Corner)", carpetArea: 850, builtUpArea: 1100, price: 14000000 },
    { type: "Office Floor Plate (Small)", carpetArea: 1700, builtUpArea: 2200, price: 18000000 },
    { type: "Office Floor Plate (Full)", carpetArea: 6200, builtUpArea: 8000, price: 62000000 },
  ],

  hasInteriors: true,
  hasFloorPlan: true,
  hasLayoutPlan: false,

  amenityIds: [
    "amn-04",
    "amn-17", "amn-20",
    "amn-22",
  ],

  specifications: {
    structure: "RCC framed, column-free floor plates for office levels",
    flooring: "Vitrified tile in retail units, raised access flooring option in office floors",
    kitchen: "Pantry provision on each office floor (not built-in)",
    doorsWindows: "Toughened glass storefronts for retail, aluminium-framed windows for offices",
    electrical: "3-phase power supply, 100% DG backup, dedicated meter per unit",
    safety: "Fire sprinkler system, fire-rated exit staircases, centralized fire alarm",
  },

  connectivity: {
    education: [],
    healthcare: [{ name: "Vydehi Hospital", distance: "4 km" }],
    work: [
      { name: "ITPL", distance: "2.8 km" },
      { name: "EPIP Zone", distance: "3.5 km" },
    ],
    shopping: [{ name: "Phoenix Marketcity", distance: "5 km" }],
    transport: [
      { name: "Kadugodi Metro Corridor", distance: "1.5 km" },
      { name: "Whitefield Railway Station", distance: "4.5 km" },
    ],
    entertainment: [{ name: "Restaurants and cafes along the same stretch", distance: "0.5 km" }],
  },
  nearbyLandmarks: ["ITPL", "Kadugodi Metro Corridor", "Phoenix Marketcity"],

  construction: {
    currentStage: "Handover Complete",
    percentComplete: 100,
    milestones: [
      { stage: "Land Development", status: "Complete" },
      { stage: "Foundation", status: "Complete" },
      { stage: "Structure", status: "Complete" },
      { stage: "Finishing", status: "Complete" },
      { stage: "Handover", status: "Complete" },
    ],
    expectedCompletion: "Already Completed",
    latestUpdate: "Occupancy certificate received; units available for immediate registration and fit-out.",
  },

  faqs: [
    { question: "Can I lease out my unit instead of self-occupying?", answer: "Yes, units can be leased; ASPL can connect you with a leasing advisor." },
    { question: "Is GST applicable since this is ready-to-move?", answer: "Ready-to-move commercial units may have different tax treatment than under-construction — please confirm with your CA/advisor." },
    { question: "Is parking included with each unit?", answer: "Yes, allocated parking is included based on unit size." },
  ],
  filterTags: ["commercial", "office", "retail", "whitefield", "ready-to-move", "investor", "business-buyer"],

  reraInfo: {
    isDemoOnly: true,
    displayText: "Illustrative demo information — not an actual registration.",
  },

  images: {
    hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    card: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    advertisement: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    offer: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    thumbnail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80",
    exteriorGallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    ],
    interiorGallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    ],
    amenitiesGallery: [],
    lifestyleGallery: [],
    floorPlanImages: {
      "Retail Unit": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "Office Floor Plate": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    layoutPlanImage: null,
    locationImage: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
    constructionGallery: [],
  },

  featured: false,
  targetBuyer: "Commercial buyers, business owners, small investors",
};
