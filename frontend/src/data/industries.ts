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
    imageAlt: "Property consultant showing a couple a new apartment overlooking Dubai Marina",
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
    imageAlt: "Bank relationship manager reviewing a financial plan with a client",
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
    imageAlt: "Network engineer monitoring a telecom operations center with a cell tower outside",
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
    imageAlt: "Nurse helping a patient check in at a modern clinic reception",
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
    imageAlt: "Fulfilment worker scanning a parcel in an e-commerce warehouse",
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
    imageAlt: "Software engineer working on a SaaS dashboard in a tech office",
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
    imageAlt: "Lecturer presenting to university students in a modern classroom",
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
    slug: "travel-tourism",
    title: "Travel & Tourism",
    short: "Hotel bookings, itinerary support, flight reservations and travel assistance.",
    image: "/media/industry-travel-tourism.jpg",
    imageAlt: "Traveler in an airport terminal watching a plane take off at sunset",
    intro: "Travellers want quick, reliable help before and during their trip. We handle hotel and flight reservation enquiries, itinerary changes and travel assistance for agencies, tour operators and travel brands — and follow up on unfinished bookings.",
    challenges: [
      "Booking enquiries arriving outside office hours",
      "Unfinished online reservations",
      "Seasonal peaks in demand",
      "Itinerary changes that need fast answers",
    ],
    typical: ["Hotel and flight reservation support", "Itinerary and booking changes", "Booking recovery calls", "Traveller feedback and loyalty campaigns"],
    services: ["customer-support", "outbound-sales", "customer-retention", "quality-assurance"],
  },
  {
    slug: "immigration",
    title: "Immigration",
    short: "Visa guidance, document support and application assistance.",
    image: "/media/industry-immigration.jpg",
    imageAlt: "Immigration consultant reviewing passport and visa documents with a client",
    intro: "Immigration and visa consultancies handle large volumes of enquiries from applicants who need clear, careful guidance. We respond to enquiries, qualify applicants, explain document requirements, book consultations and keep applicants updated through every stage.",
    challenges: [
      "High enquiry volumes from unqualified applicants",
      "Applicants unsure which documents they need",
      "Consultations booked but not attended",
      "Applicants chasing updates on their case",
    ],
    typical: ["Visa enquiry handling and qualification", "Document checklist follow-up", "Consultation booking and reminders", "Application status updates"],
    services: ["lead-generation", "appointment-setting", "customer-support", "salesforce-crm"],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
