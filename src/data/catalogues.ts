// src/data/catalogues.ts

export type CatalogueCategory =
  | "Food"
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

  demoUrl: string;

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

    category: "Food",

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

    demoUrl: "/market?category=cakes",

    featured: true,
  },

  {
    id: "flowers",

    title: "Flowers",

    category: "Food",

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

    demoUrl: "/market?category=flowers",

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

    demoUrl: "/market?category=blinds",

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

    // FIXED: real template folder is "plantation-shutters"
    // (hyphenated, matches the catalogue id exactly) — the old
    // underscore comment/value here was wrong, confirmed against
    // src/solution-templates/plantation-shutters in the React repo.
    publishUrl: "/join?template=plantation-shutters",

    demoUrl: "/market?category=plantation-shutters",

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

    demoUrl: "/market?category=curtains",

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

    // FIXED: real template folder is "wooden-doors" (hyphenated,
    // matches the catalogue id exactly) — confirmed against
    // src/solution-templates/wooden-doors in the React repo.
    publishUrl: "/join?template=wooden-doors",

    demoUrl: "/market?category=wooden-doors",

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

    // FIXED: real template folder is "steel-doors" (hyphenated,
    // matches the catalogue id exactly) — confirmed against
    // src/solution-templates/steel-doors in the React repo.
    publishUrl: "/join?template=steel-doors",

    demoUrl: "/market?category=steel-doors",

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

    demoUrl: "/market?category=gates",

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

    // FIXED: real template folder is "garage-doors" (hyphenated,
    // matches the catalogue id exactly) — confirmed against
    // src/solution-templates/garage-doors in the React repo.
    publishUrl: "/join?template=garage-doors",

    demoUrl: "/market?category=garage-doors",

    featured: true,
  },

  // ==========================================================
  // FASHION
  // ==========================================================

  {
    id: "dresses",

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

    // FIXED: real template folder is "womens-dresses" (hyphenated,
    // NOT the underscore version this used to point at) — confirmed
    // against src/solution-templates/womens-dresses in the React
    // repo. The catalogue's own id ("dresses") intentionally stays
    // as-is; only the template link needed to change. The image
    // folder was also renamed from "dresses" to "womens-dresses" to
    // match — see the rename commands you were given alongside this
    // file.
    publishUrl: "/join?template=womens-dresses",

    demoUrl: "/market?category=womens-dresses",

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

    // FIXED: real template folder is "vehicle-parts" (hyphenated,
    // matches the catalogue id exactly) — confirmed against
    // src/solution-templates/vehicle-parts in the React repo.
    publishUrl: "/join?template=vehicle-parts",

    demoUrl: "/market?category=vehicle-parts",

    featured: true,
  },

  // ==========================================================
  // FURNITURE
  // ==========================================================

  {
    id: "kitchen-islands",

    title: "Kitchen Islands",

    category: "Furniture",

    // No photo on disk yet under public/images/catalogues/kitchen-island/.
    image: "",

    images: [],

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

    // FIXED: real template folder is "kitchen-island" — SINGULAR
    // and HYPHENATED, unlike this catalogue's own id
    // ("kitchen-islands", plural). The earlier underscore version
    // ("kitchen_island") was wrong on the separator even though it
    // had correctly guessed the word should be singular. Confirmed
    // against src/solution-templates/kitchen-island in the React
    // repo.
    publishUrl: "/join?template=kitchen-island",

    demoUrl: "/market?category=kitchen-island",

    featured: true,
  },
];


