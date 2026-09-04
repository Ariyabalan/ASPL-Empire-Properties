// testimonials.js
//
// Demo testimonials for the interview project. linkedProjectId references
// a project id from projectsIndex.js, so a testimonial card can optionally
// pull that project's name/slug for a "Read about {Project}" link without
// retyping project details here.
//
// isDemoContent: true is an internal flag (not necessarily shown in the UI)
// to keep this data honestly labeled as fictional/demo content.

export const testimonials = [
  {
    id: "test-01",
    name: "Kavya R.",
    persona: "First-time Buyer",
    linkedProjectId: "proj-004", // Green Residency
    quote:
      "I'd been putting off buying a place because every site felt like it was hiding something — unclear pricing, no real photos. Here I could actually see what I was getting into before I called anyone.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    isDemoContent: true,
  },
  {
    id: "test-02",
    name: "Suresh & Anitha M.",
    persona: "Family Buyer",
    linkedProjectId: "proj-001", // Horizon Heights
    quote:
      "We compared two projects side by side before deciding, which made it a lot easier to explain to each other why we picked one over the other.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    isDemoContent: true,
  },
  {
    id: "test-03",
    name: "Rohan Kapoor",
    persona: "Premium Buyer",
    linkedProjectId: "proj-002", // Palm Meadows
    quote:
      "The gallery gave us a real sense of the villa before we visited — not just a few glossy shots, but enough to actually picture living there.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    isDemoContent: true,
  },
  {
    id: "test-04",
    name: "Deepak Shenoy",
    persona: "Investor",
    linkedProjectId: "proj-005", // Elevate Plots
    quote:
      "What I needed was the connectivity and location details, not marketing language. That's what made the decision easier.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    isDemoContent: true,
  },
  {
    id: "test-05",
    name: "Farida Sheikh",
    persona: "Commercial Buyer",
    linkedProjectId: "proj-003", // Business Square
    quote:
      "I needed clear specs — floor plate size, power backup, parking — before I could even think about signing anything. It was all there.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    isDemoContent: true,
  },
  {
    id: "test-06",
    name: "Arjun Nair",
    persona: "NRI / Remote Buyer",
    linkedProjectId: "proj-006", // Riverstone
    quote:
      "Booking a site visit and requesting the brochure online meant my parents could handle the first visit while I reviewed everything remotely.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
    isDemoContent: true,
  },
];
