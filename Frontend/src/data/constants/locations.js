// locations.js
// Single source of truth for Bengaluru locations used in search, filters,
// and form dropdowns. Import this instead of retyping location lists.

export const LOCATIONS = [
  "Whitefield",
  "Hebbal",
  "Electronic City",
  "Devanahalli",
  "Sarjapur Road",
  "Yelahanka",
  "North Bengaluru",
];

// Used for "Explore by Location" homepage tiles and location-based filtering.
// projectCount: approximate number of active/completed projects in each area.
export const FEATURED_LOCATIONS = [
  {
    id: "loc-whitefield",
    name: "Whitefield",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80",
    projectCount: 2,
    tagline: "IT Hub & Connectivity",
  },
  {
    id: "loc-hebbal",
    name: "Hebbal",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    projectCount: 1,
    tagline: "Lake Views & Villa Living",
  },
  {
    id: "loc-electronic-city",
    name: "Electronic City",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    projectCount: 1,
    tagline: "Affordable & Ready to Move",
  },
  {
    id: "loc-sarjapur-road",
    name: "Sarjapur Road",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    projectCount: 1,
    tagline: "Premium Family Homes",
  },
  {
    id: "loc-devanahalli",
    name: "Devanahalli",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    projectCount: 1,
    tagline: "Airport Corridor & Growth Zone",
  },
];
