// riverstone.js
// ASPL Riverstone — Residential Apartment, Sarjapur Road, Under Construction

export const riverstone = {
  id: "proj-006",
  slug: "riverstone",
  name: "ASPL Riverstone",
  tagline: "More room on Sarjapur Road, without leaving the tech corridor.",

  propertyCategory: "Residential",
  propertyType: "Apartment",
  location: "Sarjapur Road",
  neighborhood: "Near Wipro Corporate Office, Sarjapur–Marathahalli Stretch",
  city: "Bengaluru",

  shortDescription: "3 & 4 BHK-only community with an elevated amenity deck above ground-level parking.",
  fullOverview:
    "Riverstone sits on Sarjapur Road near the Wipro corporate campus, built for families who've decided they need more room but don't want to trade away their commute to get it. Larger 3 and 4 BHK layouts, three towers around a central amenity deck raised above ground-level parking.",
  highlights: [
    "Elevated amenity deck — landscaped and pool area sit above parking, away from vehicle movement",
    "3 & 4 BHK-only community — no smaller units, keeps the resident profile consistent",
    "15 minutes from Wipro Corporate Office and Marathahalli",
    "Dedicated kids' zone separate from the main pool deck",
  ],

  status: "Under Construction",
  possessionDate: "June 2028",
  startingPrice: 13500000,
  priceRange: "₹1.35 Crore – ₹1.95 Crore",

  configurations: [
    { type: "3 BHK", carpetArea: 1380, builtUpArea: 1850, price: 13500000 },
    { type: "3 BHK (Larger)", carpetArea: 1520, builtUpArea: 2050, price: 15200000 },
    { type: "4 BHK", carpetArea: 1920, builtUpArea: 2600, price: 19500000 },
  ],

  hasInteriors: true,
  hasFloorPlan: true,
  hasLayoutPlan: false,

  amenityIds: [
    "amn-01", "amn-02", "amn-03", "amn-04", "amn-06",
    "amn-09", "amn-10", "amn-11",
    "amn-03", "amn-14",
    "amn-17", "amn-19", "amn-20",
    "amn-21", "amn-22",
  ],

  specifications: {
    structure: "RCC framed structure with raised podium design",
    flooring: "Italian marble in living/dining, wooden flooring in master bedroom, vitrified tiles elsewhere",
    kitchen: "Modular kitchen with quartz countertop, provision for built-in appliances",
    doorsWindows: "Veneer-finished main door, UPVC windows with mosquito mesh",
    electrical: "Home automation provision for lighting, 100% power backup, EV charging points",
    safety: "Fire sprinklers, smoke detectors in each unit, dedicated refuge floors",
  },

  connectivity: {
    education: [
      { name: "Greenwood High International School", distance: "3 km" },
      { name: "Indus International School", distance: "6 km" },
    ],
    healthcare: [
      { name: "Cloudnine Hospital Sarjapur", distance: "2.5 km" },
      { name: "Motherhood Hospital", distance: "4 km" },
    ],
    work: [
      { name: "Wipro Corporate Office", distance: "3.2 km" },
      { name: "RGA Tech Park", distance: "4 km" },
      { name: "Ecoworld", distance: "6 km" },
    ],
    shopping: [
      { name: "Forum Value Mall Whitefield", distance: "7 km" },
      { name: "Local Sarjapur Retail Stretch", distance: "1.5 km" },
    ],
    transport: [
      { name: "Sarjapur–Marathahalli Road", distance: "0 km" },
      { name: "Outer Ring Road Access", distance: "5 km" },
    ],
    entertainment: [
      { name: "Cafes and Restaurants along Sarjapur Road", distance: "1 km" },
      { name: "Cubbon Park (Weekend Drive)", distance: "18 km" },
    ],
  },
  nearbyLandmarks: ["Wipro Corporate Office", "Cloudnine Hospital", "Greenwood High School", "Sarjapur–Marathahalli Road"],

  construction: {
    currentStage: "Structure",
    percentComplete: 55,
    milestones: [
      { stage: "Land Development", status: "Complete" },
      { stage: "Foundation", status: "Complete" },
      { stage: "Structure", status: "In Progress" },
      { stage: "Finishing", status: "Pending" },
      { stage: "Handover", status: "Pending" },
    ],
    expectedCompletion: "June 2028",
    latestUpdate: "Amenity deck slab cast completed; podium-level waterproofing in progress.",
  },

  faqs: [
    { question: "Why does this project only offer 3 & 4 BHK?", answer: "Riverstone is designed specifically for larger families; smaller configurations aren't offered in this project." },
    { question: "Is the amenity deck accessible to all towers?", answer: "Yes, all three towers share the same elevated amenity deck." },
    { question: "What is the current payment stage for under-construction pricing?", answer: "Payment is linked to construction milestones — details shared during booking." },
  ],
  filterTags: ["residential", "apartment", "sarjapur-road", "under-construction", "3bhk", "4bhk", "above-1cr", "1cr-2cr", "premium-buyer", "family"],

  reraInfo: {
    isDemoOnly: true,
    displayText: "Illustrative demo information — not an actual registration.",
  },

  images: {
    hero: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
    card: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    advertisement: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=80",
    offer: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80",
    exteriorGallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=80",
    ],
    interiorGallery: [
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=80",
    ],
    amenitiesGallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=80",
    ],
    lifestyleGallery: [],
    floorPlanImages: {
      "3 BHK": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "4 BHK": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    layoutPlanImage: null,
    locationImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    constructionGallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    ],
  },

  featured: true,
  targetBuyer: "Premium buyers, families, senior professionals",
};
