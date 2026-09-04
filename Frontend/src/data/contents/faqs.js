// faqs.js
//
// General, site-wide FAQs (shown on the FAQ page, categorized and
// rendered in an accordion). Project-specific FAQs live inside each
// project's own file instead, since those are naturally scoped to
// one project.

export const faqs = [
  // Buying
  { id: "faq-01", category: "Buying", question: "How do I know which project is right for my budget?", answer: "Use the property listing filters to narrow by budget, BHK, and location, or try the EMI calculator to see what fits comfortably." },
  { id: "faq-02", category: "Buying", question: "Can I book a property online?", answer: "This site lets you request pricing, book a site visit, and submit an enquiry — final booking is completed with a property advisor." },
  { id: "faq-03", category: "Buying", question: "What documents will I need when I'm ready to proceed?", answer: "Typically identity proof, address proof, income documents, and PAN details — your advisor will confirm the exact list per project." },

  // Pricing
  { id: "faq-04", category: "Pricing", question: "Do listed prices include registration and other charges?", answer: "Starting prices shown are base prices; registration, GST, and other charges are communicated separately during the enquiry process." },
  { id: "faq-05", category: "Pricing", question: "Is the price negotiable?", answer: "Pricing structure varies by project and construction stage — request pricing on a specific project for current details." },
  { id: "faq-06", category: "Pricing", question: "Are there any ongoing offers?", answer: "Check the project page or homepage banner for current offers on select projects." },

  // Projects
  { id: "faq-07", category: "Projects", question: "What's the difference between 'New Launch' and 'Pre-Launch'?", answer: "Pre-Launch means the project is being planned and isn't open for full booking yet; New Launch means booking is open but construction has just started." },
  { id: "faq-08", category: "Projects", question: "Can I customize my unit's interiors?", answer: "This depends on the project and construction stage — some early-stage bookings allow limited customization." },
  { id: "faq-09", category: "Projects", question: "How do I compare two projects properly?", answer: "Use the Compare feature to view up to 3 projects side by side on price, configuration, amenities, and possession." },

  // Loans
  { id: "faq-10", category: "Loans", question: "Does ASPL Empire Properties help with home loans?", answer: "We can connect you with lending partners, though the loan approval itself is handled by the bank or NBFC." },
  { id: "faq-11", category: "Loans", question: "How accurate is the EMI calculator?", answer: "It gives a close estimate based on the inputs you provide — your bank will confirm exact figures based on your credit profile." },
  { id: "faq-12", category: "Loans", question: "What down payment is typically expected?", answer: "This varies by project and lender, generally between 10–20% of the property value." },

  // Construction
  { id: "faq-13", category: "Construction", question: "How do I track construction progress on my chosen project?", answer: "Each project page has a Construction Progress section with current stage, percentage complete, and recent updates." },
  { id: "faq-14", category: "Construction", question: "What happens if a project's timeline changes?", answer: "Updates are reflected on the Construction Progress section as they're available." },

  // Site Visits
  { id: "faq-15", category: "Site Visits", question: "How do I schedule a site visit?", answer: "Use the \"Plan Your Visit\" option on any project page — you'll select a date, time, and share your contact details." },
  { id: "faq-16", category: "Site Visits", question: "Can I reschedule a site visit?", answer: "Yes, contact your property advisor using the details shared in your booking confirmation." },
  { id: "faq-17", category: "Site Visits", question: "Is someone available to guide me during the visit?", answer: "Yes, a property advisor accompanies every scheduled site visit." },

  // Documentation
  { id: "faq-18", category: "Documentation", question: "What is RERA and why does it matter?", answer: "RERA (Real Estate Regulation and Development Act) is a regulatory framework meant to bring transparency to real estate transactions. RERA numbers shown on this demo site are illustrative placeholders, not verified registrations." },
];

// Category list derived from the data itself, so the FAQ page tabs never
// go out of sync with what's actually in this file.
export const faqCategories = [...new Set(faqs.map((faq) => faq.category))];
