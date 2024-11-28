export const pricingTiers = [
  {
    id: 1,
    title: "Free Tier",
    description: "Ideal for exploring and connecting.",
    price: "$0 USD",
    priceInfo: "Explore for free with this plan",
    buttonLabel: "Get Started for Free",

    features: [
      "Basic job listings",
      "Freelancer profile browsing",
      "Direct messaging with freelancers",
      "Streamlined proposal management",
    ],
  },
  {
    id: 2,
    title: "Pro Tier",
    description: "For seamless integrations and premium features",
    price: "$19/month or $199/year",
    priceInfo: "Perfect for businesses looking to scale with premium features.",
    buttonLabel: "Upgrade to Pro",

    features: [
      "Unlimited job postings",
      "AI-driven freelancer matching for precision hiring",
      "Dedicated account manager for personalized support",
      "Comprehensive performance analytics",
      "Salesforce integration*",
      "Shared calendars",
      "Document storage",
      "Task assignment tools",
      "Screening and evaluation support",
      "Access to exclusive talent pools",
    ],
    popular: true,
    imageUrl: "/assets/images/template/money.svg",
    imageAlt: "money",
    darkImageUrl: "/assets/images/template/money-dark.svg",
    darkImageAlt: "money-dark",
  },
  {
    id: 3,
    title: "Agent Tier",
    description:
      "For personal level customisations and continuous premium features",
    price: "$39/month or $399/year",
    priceInfo:
      "Everything from Pro Tier + Team collaboration features, agency profile, priority visibility, unlimited storage, and a dedicated account manager.",
    buttonLabel: "Upgrade to Agency",

    features: [
      "Advanced project management suite",
      "Unlimited collaboration spaces",
      "Dedicated project coordinator for seamless operations",
      "Customizable reporting tailored to your needs",
      "Annual strategy sessions with industry experts",
      "Access to advanced market insights for strategic planning",
      "Client satisfaction guarantee: Freelancer replacement if performance expectations are not met",
      "24/7 proactive support with issue detection and resolution",
    ],
    popular: false,
    premium: true,
    imageUrl: "/assets/images/template/money.svg",
    imageAlt: "money",
    darkImageUrl: "/assets/images/template/money-dark.svg",
    darkImageAlt: "money-dark",
  },
];
export const tiers = [
  {
    id: 1,
    plan: "Basic plan",
    price: "$49",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Up to 10 individual users",
      "Basic reporting and analytics",
      "Project Management",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    icon: "unicon-sub-volume",
    buttonText: "Get started",

    highlight: false,
  },
  {
    id: 2,
    plan: "Business plan",
    price: "$79",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Access to all <b>Basic</b> features",
      "200+ integrations",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    icon: "unicon-course",
    buttonText: "Start a free trial",

    highlight: true,
  },
  {
    id: 3,
    plan: "Enterprise plan",
    price: "$199",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Access to all <b>Business</b> features",
      "Unlimited files uploads",
      "Real-time team collaboration",
      "SSO support and custom user roles",
      "Bulk send & Forms",
    ],
    icon: "unicon-building",
    buttonText: "Book a demo",

    highlight: false,
  },
];

export const pricingPlans = [
  {
    title: "Starter",
    price: "$49",
    description: "For creating impressive tools that generate results.",
    features: [
      "Up to 10 individual users",
      "Basic reporting and analytics",
      "Project Management",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    linkText: "Get started",

    additionalClasses: "",
  },
  {
    title: "Pro",
    price: "$79",
    description: "For seamless integrations and sending tools in bulk.",
    features: [
      "Access to all Starter features",
      "200+ integrations",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    linkText: "Start a free trial",

    additionalClasses:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-top-end-0 lg:rounded-top-start-0 lg:rounded-top-end-1-5",
    badge: "Popular",
  },
];

export const tiers2 = [
  {
    name: "Free",
    price: "$0",
    description: "Build a <b>hobby site</b> with every basic features.",
    details: "Free Forever!",
    buttonClass: "btn-secondary",
    features: [
      "Use on 1 website",
      "Personal License",
      "20 Basic Elements",
      "Basic Dynamic Data",
      "Basic Design Library",
      "Basic support",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    description: "Build <b>one website</b> with every pro feature.",
    details: "Billed annually.",
    buttonClass: "btn-primary",
    features: [
      "Use on 1 website",
      "Personal License",
      "100 Pro Elements",
      "Full Dynamic Data",
      "Full Design Library",
      "Priority support",
    ],
    offer: "Save $25",
  },
  {
    name: "Agency",
    price: "$199",
    description: "Build <b>unlimited websites</b> with every pro feature",
    details: "Billed annually.",
    buttonClass: "btn-secondary",
    features: [
      "Use on unlimited websites",
      "Commercial License",
      "100 Pro Elements",
      "Full Dynamic Data",
      "Full Design Library",
      "Priority support",
    ],
  },
];

export const tiers3 = [
  {
    title: "Essentials",
    description: "For creating impressive tools that generate results.",
    price: "$19 USD",
    yearlyPrice: "$12 USD",
    priceDetails: "Seat per month, 2 seats max",
    linkText: "Start a free trial",
    linkSubtext: "No credit card required",
    features: [
      "Real-time tracking and notifications",
      "Real-time analytics",
      "Drag and drop templates",
      "Project Management",
      "24/7 email and chat support",
    ],
    isPopular: false,
  },
  {
    title: "Business",
    description: "For seamless integrations and sending tools in bulk.",
    price: "$49 USD",
    yearlyPrice: "$32 USD",
    priceDetails: "Seat cost per month",
    linkText: "Start a free trial",
    linkSubtext: "No credit card required",
    features: [
      "CRM and Zapier integrations",
      "Content reporting",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    isPopular: true,
  },
  {
    title: "Enterprise",
    description: "For large companies with complex Tool workflows.",
    price: "Let’s talk",
    yearlyPrice: "Let’s talk",
    priceDetails: "Per‑seat or per‑tool pricing",
    linkText: "Contact sales",
    linkSubtext: "Respond within 24 hrs max",
    features: [
      "Unlimited files uploads",
      "Real-time tracking and notifications",
      "User performance",
      "SSO support and custom user roles",
      "Bulk send & Forms*",
    ],
    isPopular: false,
  },
];
