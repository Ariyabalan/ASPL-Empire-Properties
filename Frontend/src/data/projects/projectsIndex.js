// projectsIndex.js
//
// Single entry point for all project data. Every other part of the app
// (Property Listing, Filters, Compare, EMI Calculator, forms, etc.)
// should import from THIS file — never from an individual project file
// directly — so the whole app always works off one consistent list.

import { horizonHeights } from "./horizonHeights";
import { palmMeadows } from "./palmMeadows";
import { businessSquare } from "./businessSquare";
import { greenResidency } from "./greenResidency";
import { elevatePlots } from "./elevatePlots";
import { riverstone } from "./riverstone";

export const projectsIndex = [
  horizonHeights,
  palmMeadows,
  businessSquare,
  greenResidency,
  elevatePlots,
  riverstone,
];

// --- Small helper functions used throughout the app ---

// Find a single project by its slug (used on the Project Detail page,
// since routes will look like /projects/horizon-heights)
export function getProjectBySlug(slug) {
  return projectsIndex.find((project) => project.slug === slug);
}

// Find a single project by its id (used when Compare/forms only store an id)
export function getProjectById(id) {
  return projectsIndex.find((project) => project.id === id);
}

// Return only projects marked featured (used on Homepage)
export function getFeaturedProjects() {
  return projectsIndex.filter((project) => project.featured);
}
