// careers.js
// Demo career positions for the Careers page.

export const careers = [
  {
    id: "car-01",
    title: "Property Advisor",
    category: "Sales",
    location: "Bengaluru (AECS Layout Office)",
    type: "Full-time",
    description:
      "You'll be the first real conversation a buyer has after browsing the site — helping them narrow down projects and plan visits.",
  },
  {
    id: "car-02",
    title: "Frontend Developer",
    category: "Technology",
    location: "Bengaluru / Hybrid",
    type: "Full-time",
    description:
      "Working on the property discovery experience itself — search, filters, comparison tools, and everything buyers interact with directly.",
  },
  {
    id: "car-03",
    title: "Content & Communications Associate",
    category: "Marketing",
    location: "Bengaluru",
    type: "Full-time",
    description:
      "Writing the project descriptions, blog articles, and everyday communication that buyers actually read before they call.",
  },
  {
    id: "car-04",
    title: "Site Visit Coordinator",
    category: "Operations",
    location: "Bengaluru (Field-based)",
    type: "Full-time",
    description:
      "Managing the logistics behind every scheduled visit — timing, access, and making sure buyers aren't left waiting.",
  },
  {
    id: "car-05",
    title: "Customer Support Executive",
    category: "Customer Experience",
    location: "Bengaluru",
    type: "Full-time",
    description:
      "Handling enquiries and follow-ups after a buyer submits a form — the first point of contact once someone's shown interest.",
  },
];

// Category list derived from the data itself, for Careers page filters.
export const careerCategories = [...new Set(careers.map((job) => job.category))];
