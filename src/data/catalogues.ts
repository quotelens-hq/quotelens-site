// src/data/catalogues.ts

export type CatalogueCategory =
  | "Occasion"
  | "Fashion"
  | "Home Improvement"
  | "Furniture"
  | "Automotive";

export interface CatalogueExperience {
  title: string;
  icon: string;
  color: string;
  steps: string[];
  cta: string;
}

export interface CatalogueImage {
  src: string;
  label: string;
}

export interface Catalogue {
  id: string;

  title: string;

  category: CatalogueCategory;

  image: string;

  images: CatalogueImage[];

  shortDescription: string;

  experience: CatalogueExperience;

  publishUrl: string;

  featured: boolean;

  comingSoon?: boolean;
}

export const catalogues: Catalogue[] = [
  // ==========================================================
  // FOOD
  // ==========================================================

  {
    id: "cakes",

    title: "Cakes",

    category: "Occasion",

    image: "/images/catalogues/cakes/cakes.jpeg",

    images: [
      {
        src: "/images/catalogues/cakes/cakes.jpeg",
        label: "Cakes",
      },
    ],

    shortDescription:
      "Publish an interactive catalogue for birthday, wedding and celebration cakes.",

    experience: {
      title: "Occasion Shopping",

      icon: "🎂",

      color: "#F97316",

      steps: [
        "Choose Occasion",
        "Compare Options",
        "Prepared Enquiry",
      ],

      cta: "Publish This Catalogue",
    },

    // Confirmed against src/solution-templates/cakes in the React
    // project — matches the catalogue id exactly, no fix needed.
    publishUrl: "/join?template=cakes",

    featured: true,
  },

  {
    id: "flowers",

    title: "Flowers",

    category: "Occasion",

    image: "/images/catalogues/flowers/flowers.jpeg",

    images: [
      {
        src: "/images/catalogues/flowers/flowers.jpeg",
        label: "Flowers",
      },
    ],

    shortDescription:
      "Browse bouquets by occasion before sending an enquiry.",

    experience: {
      title: "Occasion Shopping",

      icon: "💐",

      color: "#10B981",

      steps: [
        "Choose Occasion",
        "Choose Bouquet",
        "Prepared Enquiry",
      ],

      cta: "Publish This Catalogue",
    },

    // Confirmed against src/solution-templates/flowers — matches
    // the catalogue id exactly, no fix needed.
    publishUrl: "/join?template=flowers",

    featured: true,
  },

  // ==========================================================
  // HOME IMPROVEMENT
  // ==========================================================

  {
    id: "blinds",

    title: "Blinds",

    category: "Home Improvement",

    image: "/images/catalogues/blinds/blinds.jpeg",

    images: [
      {
        src: "/images/catalogues/blinds/blinds.jpeg",
        label: "Blinds",
      },
    ],

    shortDescription:
      "Interactive shopping for made-to-measure blinds.",

    experience: {
      title: "Measurement Shopping",

      icon: "🎚️",

      color: "#06B6D4",

      steps: [
        "Measure Window",
        "Choose Style",
        "Instant Estimate",
      ],

      cta: "Publish This Catalogue",
    },

    // Confirmed against src/solution-templates/blinds — a real,
    // already-built configurator (folder dates back to 7/11), so
    // this ships live rather than as comingSoon.
    publishUrl: "/join?template=blinds",

    featured: true,
  },

  {
    id: "plantation-shutters",

    title: "Plantation Shutters",

    category: "Home Improvement",

    image: "/images/catalogues/plantation-shutters/plantation-shutters.jpeg",

    images: [
      {
        src: "/images/catalogues/plantation-shutters/plantation-shutters.jpeg",
        label: "Shutters",
      },
    ],

    shortDescription:
      "Measure your windows and compare shutter options instantly.",

    experience: {
      title: "Measurement Shopping",

      icon: "🪟",

      color: "#2563EB",

      steps: [
        "Measure Window",
        "Compare Options",
        "Instant Estimate",
      ],

      cta: "Publish This Catalogue",
    },

    // The catalogue folder/id is hyphenated ("plantation-shutters"),
    // but JoinPage.jsx's signup form (the actual destination of this
    // link) validates template ids against tenant_config's stored
    // convention, which is underscored ("plantation_shutters") — see
    // the ALL_CATEGORIES comment in quotelens-react/src/pages/JoinPage.jsx.
    // Using the hyphenated form here made the "Publish This
    // Catalogue" link silently fail to pre-select anything on /join.
    publishUrl: "/join?template=plantation_shutters",

    featured: true,
  },

  {
    id: "curtains",

    title: "Curtains",

    category: "Home Improvement",

    image: "/images/catalogues/curtains/curtains.jpeg",

    images: [
      {
        src: "/images/catalogues/curtains/curtains.jpeg",
        label: "Curtains",
      },
    ],

    shortDescription:
      "Interactive shopping for made-to-measure curtains.",

    experience: {
      title: "Measurement Shopping",

      icon: "🪟",

      color: "#0EA5E9",

      steps: [
        "Measure Window",
        "Choose Fabric",
        "Instant Estimate",
      ],

      cta: "Publish This Catalogue",
    },

    // Confirmed against src/solution-templates/curtains — matches
    // the catalogue id exactly, no fix needed.
    publishUrl: "/join?template=curtains",

    featured: true,
  },

  {
    id: "wooden-doors",

    title: "Wooden Doors",

    category: "Home Improvement",

    image: "/images/catalogues/wooden-doors/wooden-doors.jpeg",

    images: [
      {
        src: "/images/catalogues/wooden-doors/wooden-doors.jpeg",
        label: "Doors",
      },
    ],

    shortDescription:
      "Compare custom wooden door options using your measurements.",

    experience: {
      title: "Measurement Shopping",

      icon: "🚪",

      color: "#92400E",

      steps: [
        "Measure Opening",
        "Choose Finish",
        "Instant Estimate",
      ],

      cta: "Publish This Catalogue",
    },

    // See the plantation-shutters entry above: JoinPage.jsx expects
    // the underscored id ("wooden_doors"), not the hyphenated folder
    // name, or the signup pre-selection silently fails.
    publishUrl: "/join?template=wooden_doors",

    featured: true,
  },

  {
    id: "steel-doors",

    title: "Steel Doors",

    category: "Home Improvement",

    image: "/images/catalogues/steel-doors/steel-doors.jpeg",

    images: [
      {
        src: "/images/catalogues/steel-doors/steel-doors.jpeg",
        label: "Doors",
      },
    ],

    shortDescription:
      "Browse steel security doors and compare available options.",

    experience: {
      title: "Measurement Shopping",

      icon: "🛡️",

      color: "#475569",

      steps: [
        "Measure Opening",
        "Choose Design",
        "Instant Estimate",
      ],

      cta: "Publish This Catalogue",
    },

    // See the plantation-shutters entry above: JoinPage.jsx expects
    // the underscored id ("steel_doors").
    publishUrl: "/join?template=steel_doors",

    featured: true,
  },

  {
    id: "gates",

    title: "Gates",

    category: "Home Improvement",

    image: "/images/catalogues/gates/gates.jpeg",

    images: [
      {
        src: "/images/catalogues/gates/gates.jpeg",
        label: "Gates",
      },
    ],

    shortDescription:
      "Configure sliding and swing gates before requesting a quotation.",

    experience: {
      title: "Measurement Shopping",

      icon: "🚪",

      color: "#64748B",

      steps: [
        "Measure Opening",
        "Compare Designs",
        "Instant Estimate",
      ],

      cta: "Publish This Catalogue",
    },

    // Confirmed against src/solution-templates/gates — matches the
    // catalogue id exactly, no fix needed.
    publishUrl: "/join?template=gates",

    featured: true,
  },

  {
    id: "garage-doors",

    title: "Garage Doors",

    category: "Home Improvement",

    image: "/images/catalogues/garage-doors/garage-doors.jpeg",

    images: [
      {
        src: "/images/catalogues/garage-doors/garage-doors.jpeg",
        label: "Doors",
      },
    ],

    shortDescription:
      "Explore sectional and roller garage doors interactively.",

    experience: {
      title: "Measurement Shopping",

      icon: "🚗",

      color: "#334155",

      steps: [
        "Measure Opening",
        "Compare Options",
        "Instant Estimate",
      ],

      cta: "Publish This Catalogue",
    },

    // See the plantation-shutters entry above: JoinPage.jsx expects
    // the underscored id ("garage_doors").
    publishUrl: "/join?template=garage_doors",

    featured: true,
  },

  // ==========================================================
  // FASHION
  // ==========================================================

  {
    id: "womens-dresses",

    title: "Women's Dresses",

    category: "Fashion",

    image: "/images/catalogues/womens-dresses/womens-dresses.jpeg",

    images: [
      {
        src: "/images/catalogues/womens-dresses/womens-dresses.jpeg",
        label: "Dresses",
      },
    ],

    shortDescription:
      "Help customers discover their perfect fitting size before ordering.",

    experience: {
      title: "Fit Matching",

      icon: "👗",

      color: "#8B5CF6",

      steps: [
        "Capture Fit",
        "Match Size",
        "Prepared Enquiry",
      ],

      cta: "Publish This Catalogue",
    },

    // JoinPage.jsx expects the underscored id ("womens_dresses").
    // The catalogue's own id was also changed from the old "dresses"
    // to "womens-dresses" to match this template consistently.
    publishUrl: "/join?template=womens_dresses",

    featured: true,
  },

  // ==========================================================
  // AUTOMOTIVE
  // ==========================================================

  {
    id: "vehicle-parts",

    title: "Vehicle & Motorcycle Parts",

    category: "Automotive",

    image: "/images/catalogues/vehicle-parts/vehicle-parts.jpeg",

    images: [
      {
        src: "/images/catalogues/vehicle-parts/vehicle-parts.jpeg",
        label: "Parts",
      },
    ],

    shortDescription:
      "Customers search by photo or description — matched against your real stock.",

    experience: {
      title: "Search Matching",

      icon: "🔧",

      color: "#DC2626",

      steps: [
        "Search or Photograph",
        "Match Stock",
        "Prepared Enquiry",
      ],

      cta: "Publish This Catalogue",
    },

    // See the plantation-shutters entry above: JoinPage.jsx expects
    // the underscored id ("vehicle_parts").
    publishUrl: "/join?template=vehicle_parts",

    featured: true,
  },

  // ==========================================================
  // FURNITURE
  // ==========================================================

  {
    id: "kitchen-island",

    title: "Kitchen Islands",

    category: "Furniture",

       image: "/images/catalogues/kitchen-island/kitchen-island.jpeg",

   images: [{ src: "/images/catalogues/kitchen-island/kitchen-island.jpeg", label: "Kitchen Islands" }],

    shortDescription:
      "Browse layouts and configure your ideal kitchen island.",

    experience: {
      title: "Configuration Shopping",

      icon: "🍽️",

      color: "#EAB308",

      steps: [
        "Choose Layout",
        "Choose Finish",
        "Prepared Enquiry",
      ],

      cta: "Publish This Catalogue",
    },

    // JoinPage.jsx expects the underscored id ("kitchen_island").
    // The catalogue's own id was also changed from the plural
    // "kitchen-islands" to singular "kitchen-island" to match the
    // real template name consistently.
    publishUrl: "/join?template=kitchen_island",

    featured: true,
  },
];


