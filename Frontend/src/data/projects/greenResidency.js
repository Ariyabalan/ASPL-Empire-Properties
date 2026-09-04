// greenResidency.js
// ASPL Green Residency — Residential Apartment, Electronic City, Ready to Move

export const greenResidency = {
  id: "proj-004",
  slug: "green-residency",
  name: "ASPL Green Residency",
  tagline: "An accessible entry point in Electronic City, ready today.",

  propertyCategory: "Residential",
  propertyType: "Apartment",
  location: "Electronic City",
  neighborhood: "Phase 1, near Hosur Road",
  city: "Bengaluru",

  shortDescription: "Ready-to-move apartments starting under ₹45 Lakh, built for buyers ready to stop renting.",
  fullOverview:
    "Green Residency, in Electronic City Phase 1, is built for people who are ready to stop renting. It's not trying to be aspirational — it's trying to be honest and immediately livable, with straightforward layouts and no possession wait. Five mid-rise blocks around a shared central lawn.",
  highlights: [
    "Ready to move — immediate registration possible",
    "Starting price under ₹45 Lakh, the most accessible entry point across all ASPL projects",
    "Walking distance to Hosur Road bus connectivity",
    "Compact, efficient layouts with minimal wasted space",
  ],

  status: "Ready to Move",
  possessionDate: "Immediate",
  startingPrice: 4200000,
  priceRange: "₹42 Lakh – ₹82 Lakh",

  configurations: [
    { type: "1 BHK", carpetArea: 460, builtUpArea: 620, price: 4200000 },
    { type: "2 BHK", carpetArea: 720, builtUpArea: 980, price: 5800000 },
    { type: "3 BHK", carpetArea: 1060, builtUpArea: 1450, price: 8200000 },
  ],

  hasInteriors: true,
  hasFloorPlan: true,
  hasLayoutPlan: false,

  amenityIds: [
    "amn-04", "amn-06",
    "amn-11",
    "amn-13", "amn-15",
    "amn-17", "amn-20",
  ],

  specifications: {
    structure: "RCC framed structure",
    flooring: "Vitrified tiles throughout, anti-skid tiles in bathrooms",
    kitchen: "Granite countertop, single-bowl steel sink, tiled dado above counter",
    doorsWindows: "Flush doors, powder-coated aluminium windows",
    electrical: "Copper wiring, MCB distribution board, one power backup point in living room",
    safety: "Fire extinguishers on each floor, emergency staircase access",
  },

  connectivity: {
    education: [
      { name: "Delhi Public School Electronic City", distance: "2 km" },
      { name: "Indus International School", distance: "5 km" },
    ],
    healthcare: [
      { name: "Narayana Health City", distance: "3.5 km" },
      { name: "Sparsh Hospital", distance: "4 km" },
    ],
    work: [
      { name: "Infosys Electronic City Campus", distance: "2.5 km" },
      { name: "Wipro Electronic City", distance: "3 km" },
    ],
    shopping: [{ name: "Neo Mall", distance: "2.8 km" }],
    transport: [
      { name: "Hosur Road", distance: "0.5 km" },
      { name: "Electronic City Metro Extension (Upcoming)", distance: "1.5 km" },
    ],
    entertainment: [{ name: "Neo Mall Multiplex", distance: "2.8 km" }],
  },
  nearbyLandmarks: ["Infosys Campus", "Narayana Health City", "Neo Mall", "Hosur Road"],

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
    latestUpdate: "Fully occupied blocks available alongside a limited number of ready units for immediate sale.",
  },

  faqs: [
    { question: "Since it's ready to move, can I get a home loan disbursed immediately?", answer: "Yes, since the project has an occupancy certificate, loan disbursement timelines are typically faster." },
    { question: "Is the community fully occupied already?", answer: "Most units are occupied; a limited number of ready units remain available." },
    { question: "What's included in the maintenance charge?", answer: "Security, common area upkeep, and basic amenities — full breakdown shared at booking." },
  ],
  filterTags: ["residential", "apartment", "electronic-city", "ready-to-move", "1bhk", "2bhk", "3bhk", "under-1cr", "first-time-buyer", "budget-friendly"],

  reraInfo: {
    isDemoOnly: true,
    displayText: "Illustrative demo information — not an actual registration.",
  },

  images: {
    hero: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80",
    card: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    advertisement: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
    offer: "https://images.unsplash.com/photo-1560449752-3fd4bdbe3309?w=800&q=80",
    thumbnail: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=80",
    exteriorGallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
    ],
    interiorGallery: [
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
    ],
    amenitiesGallery: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80"],
    lifestyleGallery: [],
    floorPlanImages: {
      "1 BHK": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "2 BHK": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "3 BHK": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    layoutPlanImage: null,
    locationImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    constructionGallery: [],
  },

  featured: true,
  targetBuyer: "First-time buyers, young families, budget-conscious professionals",
};
