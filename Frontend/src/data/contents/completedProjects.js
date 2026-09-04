// completedProjects.js
//
// Demo "completed projects" portfolio — distinct from the 6 active
// projects in data/projects/. These exist only to show a track record
// on the About / Completed Projects page and don't need the full active
// project schema (no EMI, no site visit booking, no construction tracking).

export const completedProjects = [
  {
    id: "cp-01",
    name: "ASPL Meridian Court",
    propertyType: "Apartment",
    filterCategory: "Residential",
    location: "Marathahalli",
    completedYear: 2022,
    unitsOrArea: "180 units, 2 & 3 BHK",
    highlight: "One of the earlier ASPL communities in the eastern corridor, fully occupied since handover.",
    image: "COMPLETED_PROJECT_01_IMAGE",
  },
  {
    id: "cp-02",
    name: "ASPL Orchid Grove",
    propertyType: "Villa",
    filterCategory: "Villas",
    location: "Yelahanka",
    completedYear: 2021,
    unitsOrArea: "28 villas, 3 & 4 BHK",
    highlight: "A smaller, low-density villa layout that set the template for later projects like Palm Meadows.",
    image: "COMPLETED_PROJECT_02_IMAGE",
  },
  {
    id: "cp-03",
    name: "ASPL Tech Court",
    propertyType: "Office",
    filterCategory: "Commercial",
    location: "Bellandur",
    completedYear: 2023,
    unitsOrArea: "Office floor plates, 1,500–6,000 sq.ft",
    highlight: "Fully leased office development near the ORR IT corridor.",
    image: "COMPLETED_PROJECT_03_IMAGE",
  },
  {
    id: "cp-04",
    name: "ASPL Silver Oaks",
    propertyType: "Apartment",
    filterCategory: "Residential",
    location: "HSR Layout",
    completedYear: 2020,
    unitsOrArea: "240 units, 1, 2 & 3 BHK",
    highlight: "A mixed-configuration community that's remained one of the more requested completed addresses in HSR.",
    image: "COMPLETED_PROJECT_04_IMAGE",
  },
];

// Filter options derived from the data itself (Residential / Commercial / Villas)
export const completedProjectFilters = [...new Set(completedProjects.map((p) => p.filterCategory))];
