// filterOptions.js
// Single source of truth for all filter/search dropdown values.
// FilterPanel, SearchBar, and lead-gen forms should all import from here
// instead of hardcoding their own copies of these lists.

export const PROPERTY_CATEGORIES = ["Residential", "Commercial", "Plot"];

export const PROPERTY_TYPES = ["Apartment", "Villa", "Office", "Retail", "Plot"];

export const BHK_OPTIONS = ["1 BHK", "2 BHK", "3 BHK", "4 BHK"];

export const PROJECT_STATUS_OPTIONS = [
  "Ready to Move",
  "Under Construction",
  "New Launch",
  "Pre-Launch",
];

// Budget ranges used by the listing page filter and quick-search on homepage.
// `max: null` means "no upper limit".
export const BUDGET_RANGES = [
  { id: "under-50l", label: "Under ₹50 Lakh", min: 0, max: 5000000 },
  { id: "50l-1cr", label: "₹50 Lakh – ₹1 Crore", min: 5000000, max: 10000000 },
  { id: "1cr-1.5cr", label: "₹1 Crore – ₹1.5 Crore", min: 10000000, max: 15000000 },
  { id: "1.5cr-2cr", label: "₹1.5 Crore – ₹2 Crore", min: 15000000, max: 20000000 },
  { id: "above-2cr", label: "Above ₹2 Crore", min: 20000000, max: null },
];

// Used for sort dropdown on the Property Listing page.
export const SORT_OPTIONS = [
  { id: "relevance", label: "Relevance" },
  { id: "price-low-high", label: "Price: Low to High" },
  { id: "price-high-low", label: "Price: High to Low" },
  { id: "newest", label: "Newest Launch" },
];

// Amenity category labels — used to group amenitiesMaster.js entries
// consistently across the Amenities page and Project Detail tabs.
export const AMENITY_CATEGORIES = [
  "Lifestyle",
  "Sports",
  "Family",
  "Security",
  "Convenience",
];
