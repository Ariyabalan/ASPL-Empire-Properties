// constructionUpdates.js
//
// This file does NOT contain hand-typed construction data. It derives a
// site-wide "Construction Updates" list directly from projectsIndex.js,
// so this page can never drift out of sync with each project's own
// construction section. If a project's progress changes, update it in
// that project's file only — this list updates automatically.

import { projectsIndex } from "../projects/projectsIndex";

export const constructionUpdates = projectsIndex.map((project) => ({
  id: project.id,
  slug: project.slug,
  name: project.name,
  location: project.location,
  propertyType: project.propertyType,
  cardImage: project.images.card,
  constructionImage: project.images.constructionGallery[0] || null,
  ...project.construction,
  // construction spreads to: currentStage, percentComplete, milestones,
  // expectedCompletion, latestUpdate
}));
