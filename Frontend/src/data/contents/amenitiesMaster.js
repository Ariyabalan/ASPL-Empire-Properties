// amenitiesMaster.js
//
// Master list of all amenities used across every project. Each project
// (in data/projects/) stores only an array of amenity IDs, e.g.
// amenityIds: ["amn-01", "amn-08"], instead of repeating the full
// name/description/category in every project file.
//
// Use the getAmenitiesByIds() helper (added later in utils/) to resolve
// a project's amenityIds into full amenity objects for display.

export const AMENITIES_MASTER = [
  // Lifestyle
  { id: "amn-01", name: "Clubhouse", category: "Lifestyle", description: "A shared space for residents to actually use, not just walk past.", icon: "AMENITY_ICON_CLUBHOUSE" },
  { id: "amn-02", name: "Swimming Pool", category: "Lifestyle", description: "Main community swimming pool.", icon: "AMENITY_ICON_POOL" },
  { id: "amn-03", name: "Kids' Pool", category: "Lifestyle", description: "Separate shallow pool for children.", icon: "AMENITY_ICON_KIDS_POOL" },
  { id: "amn-04", name: "Party Hall / Banquet Space", category: "Lifestyle", description: "Indoor space for community and family gatherings.", icon: "AMENITY_ICON_PARTY_HALL" },
  { id: "amn-05", name: "Co-working Lounge", category: "Lifestyle", description: "Shared workspace for residents working from home.", icon: "AMENITY_ICON_COWORKING" },
  { id: "amn-06", name: "Indoor Games Room", category: "Lifestyle", description: "Table tennis, carrom, and other indoor games.", icon: "AMENITY_ICON_INDOOR_GAMES" },
  { id: "amn-07", name: "Spa / Sauna", category: "Lifestyle", description: "Wellness space within the clubhouse.", icon: "AMENITY_ICON_SPA" },

  // Sports
  { id: "amn-08", name: "Basketball Court", category: "Sports", description: "Half or full basketball court.", icon: "AMENITY_ICON_BASKETBALL" },
  { id: "amn-09", name: "Tennis Court", category: "Sports", description: "Dedicated tennis court.", icon: "AMENITY_ICON_TENNIS" },
  { id: "amn-10", name: "Badminton Court", category: "Sports", description: "Indoor or outdoor badminton court.", icon: "AMENITY_ICON_BADMINTON" },
  { id: "amn-11", name: "Jogging / Walking Track", category: "Sports", description: "Dedicated track around the community.", icon: "AMENITY_ICON_JOGGING_TRACK" },
  { id: "amn-12", name: "Cycling Track", category: "Sports", description: "Track for cycling within the layout.", icon: "AMENITY_ICON_CYCLING_TRACK" },

  // Family
  { id: "amn-13", name: "Children's Play Area", category: "Family", description: "Outdoor play equipment for children.", icon: "AMENITY_ICON_PLAY_AREA" },
  { id: "amn-14", name: "Senior Citizen Sit-out Zone", category: "Family", description: "Quiet seating areas for elderly residents.", icon: "AMENITY_ICON_SENIOR_ZONE" },
  { id: "amn-15", name: "Landscaped Central Garden / Courtyard", category: "Family", description: "Shared green space at the heart of the community.", icon: "AMENITY_ICON_GARDEN" },
  { id: "amn-16", name: "Community Amphitheatre", category: "Family", description: "Open space for community events.", icon: "AMENITY_ICON_AMPHITHEATRE" },

  // Security
  { id: "amn-17", name: "CCTV Surveillance", category: "Security", description: "Coverage at entry points and common areas.", icon: "AMENITY_ICON_CCTV" },
  { id: "amn-18", name: "Access-controlled Vehicle Entry", category: "Security", description: "Boom-barrier or similar controlled entry for vehicles.", icon: "AMENITY_ICON_BOOM_BARRIER" },
  { id: "amn-19", name: "Video Door Phones", category: "Security", description: "In-unit video door phone connected to the main gate.", icon: "AMENITY_ICON_VIDEO_DOOR_PHONE" },
  { id: "amn-20", name: "24x7 Manned Security", category: "Security", description: "Security personnel on site at all times.", icon: "AMENITY_ICON_SECURITY_GUARD" },

  // Convenience
  { id: "amn-21", name: "EV Charging Points", category: "Convenience", description: "Charging points in parking areas.", icon: "AMENITY_ICON_EV_CHARGING" },
  { id: "amn-22", name: "Power Backup", category: "Convenience", description: "Backup power for common areas or full units.", icon: "AMENITY_ICON_POWER_BACKUP" },
  { id: "amn-23", name: "Rainwater Harvesting", category: "Convenience", description: "Rainwater collection system for the community.", icon: "AMENITY_ICON_RAINWATER" },
  { id: "amn-24", name: "STP-treated Water", category: "Convenience", description: "Treated water reused for landscaping.", icon: "AMENITY_ICON_STP" },
];
