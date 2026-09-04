// palmMeadows.js
// ASPL Palm Meadows — Villa Community, Hebbal, New Launch

export const palmMeadows = {
  id: "proj-002",
  slug: "palm-meadows",
  name: "ASPL Palm Meadows",
  tagline: "Low-density villa living, close to Hebbal Lake.",

  propertyCategory: "Residential",
  propertyType: "Villa",
  location: "Hebbal",
  neighborhood: "Off Bellary Road, near Hebbal Lake",
  city: "Bengaluru",

  shortDescription: "42 independent villas across 6 acres, designed for households that have outgrown apartment living.",
  fullOverview:
    "Palm Meadows is a gated community of 42 independent villas off Bellary Road, close enough to Hebbal Lake to catch the morning light over water on a walk. This is for households that have outgrown apartment living — people who want a garden, a driveway, and walls they don't share. Villas are arranged on wide internal roads with no two front doors facing each other directly.",
  highlights: [
    "Only 42 villas across 6 acres — low density by design",
    "Private garden and 2-car covered parking with every villa",
    "15 minutes from Hebbal flyover, 25 minutes from Kempegowda International Airport",
    "Clubhouse designed as a separate architectural centerpiece, not an afterthought",
  ],

  status: "New Launch",
  possessionDate: "March 2029",
  startingPrice: 24000000,
  priceRange: "₹2.4 Crore – ₹3.2 Crore",

  configurations: [
    { type: "4 BHK Villa (Type A)", plotArea: 2400, builtUpArea: 3200, price: 24000000 },
    { type: "4 BHK Villa (Type B, Corner)", plotArea: 2800, builtUpArea: 3650, price: 27500000 },
    { type: "4 BHK Villa (Type C, Premium)", plotArea: 3200, builtUpArea: 4100, price: 32000000 },
  ],

  hasInteriors: true,
  hasFloorPlan: true,
  hasLayoutPlan: false,

  amenityIds: [
    "amn-01", "amn-02", "amn-07",
    "amn-09", "amn-08", "amn-12",
    "amn-13", "amn-16", "amn-15",
    "amn-17", "amn-20",
    "amn-21", "amn-22",
  ],

  specifications: {
    structure: "RCC framed structure with load-bearing walls for individual villa privacy",
    flooring: "Italian marble in living/dining, engineered wood in bedrooms, natural stone in outdoor sit-outs",
    kitchen: "Modular kitchen with quartz countertop, island counter in Type B/C, chimney and hob provision",
    doorsWindows: "Teakwood main door, UPVC double-glazed windows for sound insulation",
    electrical: "Home automation provision (lighting and security), 100% power backup, EV charging in private garage",
    safety: "Fire safety compliant per villa clusters, perimeter boundary wall with access control",
  },

  connectivity: {
    education: [
      { name: "Canadian International School", distance: "4 km" },
      { name: "National Public School Hebbal", distance: "3.2 km" },
    ],
    healthcare: [
      { name: "Baptist Hospital", distance: "6 km" },
      { name: "Aster CMI Hospital", distance: "5.5 km" },
    ],
    work: [
      { name: "Manyata Tech Park", distance: "7 km" },
      { name: "Embassy Manyata", distance: "7.5 km" },
    ],
    shopping: [
      { name: "Elements Mall", distance: "4.5 km" },
      { name: "RMZ Galleria", distance: "8 km" },
    ],
    transport: [
      { name: "Hebbal Flyover", distance: "15 min" },
      { name: "Kempegowda International Airport", distance: "25 min" },
    ],
    entertainment: [
      { name: "Hebbal Lake Walking Trail", distance: "2 km" },
      { name: "Eagleton Golf Course", distance: "12 km" },
    ],
  },
  nearbyLandmarks: ["Hebbal Lake", "Manyata Tech Park", "Kempegowda International Airport", "Elements Mall"],

  construction: {
    currentStage: "Foundation",
    percentComplete: 8,
    milestones: [
      { stage: "Land Development", status: "Complete" },
      { stage: "Foundation", status: "Starting" },
      { stage: "Structure", status: "Pending" },
      { stage: "Finishing", status: "Pending" },
      { stage: "Handover", status: "Pending" },
    ],
    expectedCompletion: "March 2029",
    latestUpdate: "Internal road grading and boundary wall construction underway across the 6-acre site.",
  },

  faqs: [
    { question: "Can villa layouts be customized before construction?", answer: "Limited interior customization is available for early bookings — ask your property advisor." },
    { question: "Is the clubhouse membership included in the price?", answer: "Yes, clubhouse access is included for all villa owners." },
    { question: "What's the maintenance model?", answer: "Managed by a resident welfare association post-handover, with charges disclosed at booking." },
  ],
  filterTags: ["residential", "villa", "hebbal", "new-launch", "4bhk", "above-2cr", "premium-buyer", "family", "low-density"],

  reraInfo: {
    isDemoOnly: true,
    displayText: "Illustrative demo information — not an actual registration.",
  },

  images: {
    hero: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1920&q=80",
    card: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    advertisement: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    offer: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
    exteriorGallery: [
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    interiorGallery: [
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1200&q=80",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&q=80",
    ],
    amenitiesGallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=80",
    ],
    lifestyleGallery: [],
    floorPlanImages: {
      "4 BHK Villa": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    layoutPlanImage: null,
    locationImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    constructionGallery: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"],
  },

  featured: true,
  targetBuyer: "Premium buyers, families upgrading from apartments",
};
