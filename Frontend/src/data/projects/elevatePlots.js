// elevatePlots.js
// ASPL Elevate Plots — Plotted Development, Devanahalli, Pre-Launch
//
// IMPORTANT: This project is plotted LAND, not a built structure.
// hasInteriors, hasFloorPlan are false and hasLayoutPlan is true —
// the Project Detail page should use these flags to conditionally hide
// the Interiors/Floor Plan sections and show a Layout Plan section instead.
// specifications is null (not an object with empty strings) to make the
// "not applicable" state explicit rather than implied.

export const elevatePlots = {
  id: "proj-005",
  slug: "elevate-plots",
  name: "ASPL Elevate Plots",
  tagline: "Plotted land along Devanahalli's growth corridor.",

  propertyCategory: "Plot",
  propertyType: "Plot",
  location: "Devanahalli",
  neighborhood: "Near Bengaluru International Airport Corridor",
  city: "Bengaluru",

  shortDescription: "DC-converted, layout-approved plots along Devanahalli's airport growth corridor.",
  fullOverview:
    "Elevate Plots is a plotted development along Devanahalli's airport growth corridor — for buyers thinking less about moving in tomorrow and more about where Bengaluru is headed over the next decade. This is raw plotted land within a gated, road-laid layout, not a built structure.",
  highlights: [
    "Positioned along a well-documented growth corridor (airport-linked development zone)",
    "DC-converted, layout-approved land parcels",
    "Wide internal roads, underground electrical and water lines pre-laid",
    "Flexible plot sizes to build now or later",
  ],

  status: "Pre-Launch",
  possessionDate: "Registration expected Q4 2027",
  startingPrice: 3500000,
  priceRange: "₹35 Lakh – ₹68 Lakh",

  configurations: [
    { type: "Plot (Standard)", plotArea: 1200, price: 3500000 },
    { type: "Plot (Mid)", plotArea: 1800, price: 5000000 },
    { type: "Plot (Large, Corner)", plotArea: 2400, price: 6800000 },
  ],

  hasInteriors: false,
  hasFloorPlan: false,
  hasLayoutPlan: true,

  amenityIds: [
    "amn-15",
    "amn-17", "amn-20",
  ],

  specifications: null, // Not applicable — plotted land has no built structure/flooring/kitchen/etc.

  connectivity: {
    education: [{ name: "Presidency School Devanahalli", distance: "4 km" }],
    healthcare: [{ name: "Motherhood Hospital Devanahalli", distance: "5 km" }],
    work: [
      { name: "Aerospace SEZ", distance: "6 km" },
      { name: "Devanahalli Business Park (Upcoming)", distance: "8 km" },
    ],
    shopping: [{ name: "Devanahalli Town Centre", distance: "3 km" }],
    transport: [
      { name: "Kempegowda International Airport", distance: "12 km" },
      { name: "NH44", distance: "2 km" },
    ],
    entertainment: [], // Not applicable — early-stage growth corridor, limited entertainment infrastructure currently
  },
  nearbyLandmarks: ["Kempegowda International Airport", "NH44", "Aerospace SEZ"],

  construction: {
    currentStage: "Land Development",
    percentComplete: 15,
    milestones: [
      { stage: "Land Development", status: "In Progress" },
      { stage: "Road & Infrastructure Laying", status: "In Progress" },
      { stage: "Registration Ready", status: "Pending" },
    ],
    expectedCompletion: "Registration expected Q4 2027",
    latestUpdate: "Internal road grading complete across Phase 1; underground utility work in progress.",
  },

  faqs: [
    { question: "Can I start construction immediately after buying a plot?", answer: "Construction can begin once registration and layout handover are complete — timelines shared at booking." },
    { question: "Is this layout BMRDA/DC-converted approved?", answer: "Yes, approval documentation will be shared during the booking process." },
    { question: "Can I book now and pay at registration?", answer: "Pre-launch booking terms and payment schedule are available on request." },
  ],
  filterTags: ["plot", "residential-plot", "devanahalli", "pre-launch", "investor", "land-investment", "under-1cr"],

  reraInfo: {
    isDemoOnly: true,
    displayText: "Illustrative demo information — not an actual registration.",
  },

  images: {
    hero: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80",
    card: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    advertisement: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    offer: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80",
    exteriorGallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
      "https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&q=80",
    ],
    interiorGallery: [], // Not applicable — no built interiors
    amenitiesGallery: [],
    lifestyleGallery: [],
    floorPlanImages: {}, // Not applicable — see layoutPlanImage instead
    layoutPlanImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    locationImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    constructionGallery: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"],
  },

  featured: false,
  targetBuyer: "Investors, long-term land buyers",
};
