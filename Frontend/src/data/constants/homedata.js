// homeData.js
// Homepage-specific static content. All homepage sections import from here
// so that Home.jsx stays clean and data stays reusable.

// Company statistics displayed in the Stats Strip section
export const COMPANY_STATS = [
  { id: "stat-01", value: "15+", label: "Years of Excellence", icon: "trophy" },
  { id: "stat-02", value: "10,000+", label: "Families Housed", icon: "home" },
  { id: "stat-03", value: "50+", label: "Projects Delivered", icon: "building" },
  { id: "stat-04", value: "7", label: "Bengaluru Locations", icon: "map" },
];

// Property categories for the homepage search/category bar
export const HOME_CATEGORIES = [
  { id: "cat-all", label: "All Properties", value: "" },
  { id: "cat-residential", label: "Residential", value: "Residential" },
  { id: "cat-commercial", label: "Commercial", value: "Commercial" },
  { id: "cat-plot", label: "Plots", value: "Plot" },
];

// Why Choose ASPL section � 6 trust signals
export const WHY_ASPL = [
  {
    id: "why-01",
    icon: "CheckCircleOutlined",
    heading: "Transparent Pricing",
    description:
      "No hidden costs. Every project lists clear pricing, configuration breakdowns and RERA information upfront.",
  },
  {
    id: "why-02",
    icon: "SafetyOutlined",
    heading: "RERA Compliant",
    description:
      "All ASPL projects are registered under RERA, giving you full legal protection and accountability at every stage.",
  },
  {
    id: "why-03",
    icon: "BankOutlined",
    heading: "Bank-Approved Projects",
    description:
      "Our projects are pre-approved by leading banks � faster home loan processing and peace of mind for buyers.",
  },
  {
    id: "why-04",
    icon: "StarOutlined",
    heading: "Premium Construction Quality",
    description:
      "Earthquake-resistant RCC structures, premium specifications, and third-party quality checks at every milestone.",
  },
  {
    id: "why-05",
    icon: "TeamOutlined",
    heading: "Dedicated Support",
    description:
      "A property advisor is assigned to you from enquiry through possession � no handoffs, no runaround.",
  },
  {
    id: "why-06",
    icon: "EnvironmentOutlined",
    heading: "Prime Bengaluru Locations",
    description:
      "Every project is chosen for connectivity to tech parks, schools, hospitals and public transport.",
  },
];

// Property buying journey � 4 steps shown as a horizontal flow
export const BUYING_JOURNEY = [
  {
    step: 1,
    heading: "Explore & Shortlist",
    description:
      "Browse projects, compare configurations, check amenities and narrow down to your top choices � all online.",
  },
  {
    step: 2,
    heading: "Plan Your Site Visit",
    description:
      "Book a guided site visit at your convenience. Our advisors walk you through the project and answer every question.",
  },
  {
    step: 3,
    heading: "Secure Your Unit",
    description:
      "Choose your preferred unit, lock in pricing with a token amount and receive the formal booking agreement.",
  },
  {
    step: 4,
    heading: "Move In",
    description:
      "From loan assistance to registration guidance, we stay with you through possession and beyond.",
  },
];
