// All copy below is sourced from Spray Works' verified Instagram (@sprayworks_irl)
// and Facebook ("Spray works") pages. Anything not verifiable from those sources
// is written as general, non-specific marketing copy or left as a placeholder —
// see PLACEHOLDER items below for what still needs client confirmation.

export const business = {
  name: "Spray Works",
  tagline: "Precision Finish. Lasting Impression.",
  shortPitch: "Transform, don't replace.",
  phone: "+353 85 137 3882",
  phoneHref: "tel:+353851373882",
  whatsappHref: "https://wa.me/353851373882",
  email: "Sprayworksirl@gmail.com",
  instagramHandle: "@sprayworks_irl",
  instagramUrl: "https://www.instagram.com/sprayworks_irl",
  facebookUrl: "https://www.facebook.com/share/18vXvodLCv/",
  area: "Dublin & Nationwide",
  areaTag: "Based in Dublin, Serve Nationwide",
  areaLong: "Dublin & surrounding areas",
  addressLocality: "Dublin, Ireland", // PLACEHOLDER: no street address published — confirm with client
};

export const services = [
  {
    id: "kitchen",
    title: "Kitchen Respraying",
    description:
      "Give your kitchen a stunning new look without the high cost of replacement.",
    detail:
      "Cabinets, doors and islands professionally prepped and sprayed for a smooth, durable, factory-style finish. Kitchen resprays start from €875.",
    icon: "home",
  },
  {
    id: "upvc",
    title: "uPVC & Aluminium Doors and Windows",
    description:
      "Professional spraying for a flawless, factory-finish look that lasts.",
    detail:
      "Tired timber-effect or faded uPVC and aluminium frames refinished on-site in a colour of your choice, including popular shades like RAL 7016 Anthracite Grey.",
    icon: "door",
  },
  {
    id: "furniture",
    title: "Furniture & Interior Spraying",
    description:
      "Breathe new life into furniture, wardrobes, doors, skirting and more.",
    detail:
      "From single statement pieces to full interior joinery, sprayed to a smooth, even, long-lasting finish.",
    icon: "sofa",
  },
  {
    id: "commercial",
    title: "Shop Fronts & Commercial Spraying",
    description:
      "Durable, high-quality finishes that make your business stand out.",
    detail:
      "Commercial and shop front spraying carried out with minimal disruption to your business.",
    icon: "store",
  },
] as const;

export const whyChoose = [
  {
    title: "Factory Quality Finish",
    description: "Smooth, durable and flawless results on every job.",
    icon: "sparkles",
  },
  {
    title: "Save Thousands vs Replacing",
    description: "A high-end new look for a fraction of the cost.",
    icon: "banknote",
  },
  {
    title: "Minimal Disruption",
    description: "We work efficiently with minimal impact on your home or business.",
    icon: "clock",
  },
  {
    title: "Wide Range of Colours",
    description: "Bespoke colours to suit your style, inside and out.",
    icon: "palette",
  },
  {
    title: "Durable Sprayed Finish",
    description: "Tough, long-lasting and easy to maintain.",
    icon: "shield",
  },
  {
    title: "Eco-Friendly Alternative",
    description: "Reduce waste by refinishing instead of replacing.",
    icon: "leaf",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Enquiry",
    description: "Reach out via WhatsApp, phone or the contact form for a free quote.",
  },
  {
    step: "02",
    title: "Consultation",
    description: "Share details or photos of your project so we understand exactly what's needed.",
  },
  {
    step: "03",
    title: "Quotation",
    description: "Receive a free, no-obligation quotation for your spraying project.",
  },
  {
    step: "04",
    title: "Preparation",
    description: "Thorough preparation and precision masking to protect surrounding surfaces.",
  },
  {
    step: "05",
    title: "Spray Application",
    description: "Professional spray application for a smooth, even, factory-style coating.",
  },
  {
    step: "06",
    title: "Final Result",
    description: "A refreshed, factory-quality finish, completed with minimal disruption.",
  },
] as const;

export const faqs = [
  {
    question: "How long does spraying typically take?",
    answer:
      "Timing depends on the size and scope of the project. A single piece of furniture takes less time than a full kitchen or a set of doors and windows. Get in touch with your project details for an accurate timeframe as part of your free quote.",
  },
  {
    question: "Can kitchen cabinets really be sprayed instead of replaced?",
    answer:
      "Yes. Kitchen cabinets, doors and islands can be professionally prepped and sprayed to a factory-style finish, giving your kitchen a completely updated look without the cost and disruption of a full replacement.",
  },
  {
    question: "Do I need to replace my doors or windows, or can they be resprayed?",
    answer:
      "In most cases, uPVC and aluminium doors and windows can be resprayed on-site in a new colour rather than replaced, refreshing their appearance at a fraction of the cost of replacement.",
  },
  {
    question: "How durable is a sprayed finish?",
    answer:
      "A professional spray-applied coating is designed to be tough, long-lasting and easy to maintain, giving a smooth, durable, factory-quality result.",
  },
  {
    question: "Will spraying cause a big mess in my home or business?",
    answer:
      "Thorough preparation and precision masking are carried out before any spraying begins, so work can be completed with minimal disruption to your home or business.",
  },
  {
    question: "What colours can I choose from?",
    answer:
      "A wide range of colours is available so you can choose a bespoke finish to suit your style, from popular shades like Anthracite Grey through to bold statement colours.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Message Spray Works via WhatsApp, phone or the contact form below with your project details for a free, no-obligation quotation.",
  },
] as const;

export type PortfolioItem = {
  id: string;
  title: string;
  category: "Kitchen" | "uPVC & Aluminium" | "Furniture";
  image: string;
  before?: string;
  after?: string;
  description: string;
};

export const portfolio: PortfolioItem[] = [
  {
    id: "door-respray",
    title: "Aluminium Door & Window Respray",
    category: "uPVC & Aluminium",
    image: "/images/portfolio/door-after-1.jpg",
    before: "/images/portfolio/door-before-1.jpg",
    after: "/images/portfolio/door-after-1.jpg",
    description:
      "Timber-effect aluminium door and window system resprayed in RAL 7016 Anthracite Grey, a full on-site transformation with minimal disruption.",
  },
  {
    id: "door-respray-2",
    title: "Aluminium Door & Window Respray",
    category: "uPVC & Aluminium",
    image: "/images/portfolio/door-after-2.jpg",
    before: "/images/portfolio/door-before-2.jpg",
    after: "/images/portfolio/door-after-2.jpg",
    description:
      "The same anthracite grey respray, viewed from the balcony. A completely refreshed look without the cost of replacement.",
  },
  {
    id: "kitchen-island",
    title: "Kitchen Island Transformation",
    category: "Kitchen",
    image: "/images/portfolio/kitchen-island-after.jpg",
    description:
      "A fresh, sleek black respray for this kitchen island, professionally prepped and refinished for a smooth, durable, factory-style finish.",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;
