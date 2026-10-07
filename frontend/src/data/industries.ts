export interface Industry {
  slug: string;
  title: string;
  short: string;
  image: string;
  imageAlt: string;
  intro: string;
  challenges: string[];
  typical: string[];
  services: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "real-estate",
    title: "Real Estate & Property",
    short: "Buyer and investor enquiries, viewings and follow-ups for developers and brokerages.",
    image: "/media/industry-real-estate.jpg",
    imageAlt: "Call center agent following up on property enquiries with a brochure of new apartments",
    intro: "Property enquiries arrive in waves — launches, portals, events — and every hour of delay costs a buyer. We answer and qualify enquiries fast, book viewings and keep investors warm until they're ready to commit.",
    challenges: [
      "Portal and launch leads that go cold within hours",
      "Brokers chasing unqualified enquiries",
      "Viewings booked but never confirmed",
      "No record of which campaigns sold units",
    ],
    typical: ["Off-plan launch campaigns", "Portal enquiry qualification", "Viewing and site-visit booking", "Investor follow-up and nurture"],
    services: ["lead-generation", "appointment-setting", "outbound-sales", "salesforce-crm"],
  },
  {
    slug: "financial-services",
    title: "Banking, Finance & Insurance",
    short: "Compliant sales, onboarding and renewal calls for financial brands.",
    image: "/media/industry-financial-services.jpg",
    imageAlt: "Agent on a headset helping a customer with an insurance renewal",
    intro: "Financial customers expect accuracy, care and strict compliance. We run scripted, recorded and quality-checked campaigns for card, loan and insurance products — from first call to renewal.",
    challenges: [
      "Strict scripting and disclosure rules",
      "Applications dropped before completion",
      "Policy renewals lapsing unnoticed",
      "Audit trails needed for every conversation",
    ],
    typical: ["Card and loan sales campaigns", "Application completion calls", "Insurance renewals", "Customer onboarding and KYC follow-up"],
    services: ["outbound-sales", "customer-retention", "quality-assurance", "customer-support"],
  },
  {
    slug: "telecom",
    title: "Telecom & Utilities",
    short: "High-volume support, upgrades and retention for connectivity and utility providers.",
    image: "/media/industry-telecom.jpg",
    imageAlt: "Support agents handling telecom customer calls on a busy contact center floor",
    intro: "Telecom and utility providers handle huge contact volumes where every minute of waiting hurts satisfaction. We staff to demand, resolve issues first time and turn service calls into upgrade and retention opportunities.",
    challenges: [
      "Volume spikes during outages and launches",
      "Customers switching at contract end",
      "Repeat calls about the same issue",
      "Upgrade opportunities missed on service calls",
    ],
    typical: ["Inbound service and billing support", "Plan upgrade campaigns", "Contract-end retention calls", "New connection follow-up"],
    services: ["customer-support", "customer-retention", "outbound-sales", "quality-assurance"],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Clinics",
    short: "Patient bookings, reminders and follow-ups handled with care.",
    image: "/media/industry-healthcare.jpg",
    imageAlt: "Friendly agent booking a patient appointment for a clinic",
    intro: "Clinics and healthcare providers lose revenue to missed calls and no-shows. We answer patient calls, book and confirm appointments, send reminders and follow up after visits — with the sensitivity patients expect.",
    challenges: [
      "Missed calls during busy clinic hours",
      "Costly appointment no-shows",
      "Front desks overloaded with admin",
      "Patients not followed up after visits",
    ],
    typical: ["Patient appointment booking", "Reminder and confirmation calls", "Post-visit follow-ups", "Patient satisfaction surveys"],
    services: ["appointment-setting", "customer-support", "customer-retention", "quality-assurance"],
  },
  {
    slug: "ecommerce-retail",
    title: "E-commerce & Retail",
    short: "Order support, abandoned-cart recovery and customer care for online brands.",
    image: "/media/industry-ecommerce-retail.jpg",
    imageAlt: "Customer care agent resolving an online order query",
    intro: "Online shoppers expect instant answers about orders, delivery and returns. We handle customer care across calls, email and chat, and run recovery campaigns for abandoned carts and lapsed buyers.",
    challenges: [
      "Order and delivery queries piling up",
      "High-value carts abandoned at checkout",
      "Seasonal peaks that overwhelm the team",
      "One-time buyers who never return",
    ],
    typical: ["Order, delivery and returns support", "Cash-on-delivery confirmation calls", "Abandoned-cart recovery", "Repeat-purchase campaigns"],
    services: ["customer-support", "customer-retention", "outbound-sales", "salesforce-crm"],
  },
  {
    slug: "technology-saas",
    title: "Technology & SaaS",
    short: "Pipeline building, demo booking and onboarding support for software companies.",
    image: "/media/industry-technology.jpg",
    imageAlt: "Lead generation specialist booking a software demo",
    intro: "Software companies need a steady flow of demos and a smooth start for new customers. We find and qualify decision-makers, book demos for your account executives and support onboarding once they sign.",
    challenges: [
      "Account executives doing their own prospecting",
      "Trial users who never convert",
      "Demo no-shows wasting sales time",
      "New customers stuck during onboarding",
    ],
    typical: ["Outbound B2B lead generation", "Demo and meeting booking", "Trial conversion calls", "Onboarding and renewal support"],
    services: ["lead-generation", "appointment-setting", "customer-retention", "salesforce-crm"],
  },
  {
    slug: "education",
    title: "Education & Training",
    short: "Admissions enquiries, enrolment follow-up and student support.",
    image: "/media/industry-education.jpg",
    imageAlt: "Admissions advisor on a headset speaking with a prospective student",
    intro: "Admissions teams face enquiry peaks around every intake. We respond quickly to prospective students and parents, guide them through applications and keep them engaged until enrolment.",
    challenges: [
      "Enquiry spikes around each intake",
      "Applications started but not finished",
      "Slow responses losing students to competitors",
      "No view of which channels bring enrolments",
    ],
    typical: ["Admissions enquiry handling", "Application completion calls", "Open day and campus visit booking", "Enrolment and re-enrolment campaigns"],
    services: ["lead-generation", "appointment-setting", "customer-support", "salesforce-crm"],
  },
  {
    slug: "travel-hospitality",
    title: "Travel & Hospitality",
    short: "Reservations, guest support and loyalty campaigns for travel brands.",
    image: "/media/industry-travel-hospitality.jpg",
    imageAlt: "Reservations agent assisting a guest with a hotel booking",
    intro: "Travel and hospitality brands win or lose guests on the phone. We handle reservations and guest queries, recover unfinished bookings and run loyalty campaigns that bring guests back.",
    challenges: [
      "Booking enquiries outside office hours",
      "Unfinished online reservations",
      "Seasonal demand swings",
      "Guests who book once and never return",
    ],
    typical: ["Reservations and booking support", "Booking recovery calls", "Guest feedback surveys", "Loyalty and win-back campaigns"],
    services: ["customer-support", "outbound-sales", "customer-retention", "quality-assurance"],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
