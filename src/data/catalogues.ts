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

    title: "Birthday Cakes",

    category: "Food",

    image: "/images/catalogues/cakes/hero.jpeg",

    images: [
      {
        src: "/images/catalogues/cakes/hero.jpeg",
        label: "Birthday",
      },
      {
        src: "/images/catalogues/cakes/wedding.jpeg",
        label: "Wedding",
      },
      {
        src: "/images/catalogues/cakes/birthday.jpeg",
        label: "Celebration",
      },
      {
        src: "/images/catalogues/cakes/anniversary.jpg",
        label: "Anniversary",
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

    publishUrl: "/join?template=cakes",

    demoUrl: "/market?category=cakes",

    featured: true,
  },

  {
    id: "flowers",

    title: "Flowers",

    category: "Food",

    image: "/images/catalogues/flowers/hero.jpg",

images: [
  {
    src: "/images/catalogues/flowers/hero.jpg",
    label: "Everyday"
  },
  {
    src: "/images/catalogues/flowers/birthday.jpg",
    label: "Birthday"
  },
  {
    src: "/images/catalogues/flowers/graduation.jpg",
    label: "Graduation"
  },
  {
    src: "/images/catalogues/flowers/romance.jpg",
    label: "Romance"
  },
  {
    src: "/images/catalogues/flowers/sympathy.jpg",
    label: "Sympathy"
  }
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

    publishUrl: "/join?template=flowers",

    demoUrl: "/market?category=flowers",

    featured: true,
  },

  // ==========================================================
  // FASHION
  // ==========================================================

  {
    id: "dresses",

    title: "Women's Dresses",

    category: "Fashion",

    image: "",

    images: [],

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

    // ⚠️ Real templateId is "womens_dresses" — genuine mismatch
    // from this catalogue's own id ("dresses"). This exact
    // mismatch was the root cause of the homepage's broken link,
    // when it was built from raw catalogue.id instead of this
    // field.
    publishUrl: "/join?template=womens_dresses",

    demoUrl: "/market?category=womens_dresses",

    featured: true,
  },

  // ==========================================================
  // AUTOMOTIVE
  // ==========================================================

  {
    id: "vehicle-parts",

    title: "Vehicle & Motorcycle Parts",

    category: "Automotive",

    image: "",

    images: [],

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

    // ⚠️ Real templateId uses underscore: "vehicle_parts".
    publishUrl: "/join?template=vehicle_parts",

    demoUrl: "/market?category=vehicle_parts",

    featured: true,
  },

  // ==========================================================
  // HOME IMPROVEMENT
  // ==========================================================

  {
    id: "plantation-shutters",

    title: "Plantation Shutters",

    category: "Home Improvement",

    image: "",

    images: [],

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

    // ⚠️ Real templateId is "plantation_shutters" (underscore, full
    // word) — mismatch from this catalogue's own id.
    publishUrl: "/join?template=plantation_shutters",

    demoUrl: "/market?category=plantation_shutters",

    featured: true,
  },

  {
    id: "curtains",

    title: "Curtains",

    category: "Home Improvement",

    image: "",

    images: [],

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

    publishUrl: "/join?template=curtains",

    demoUrl: "/market?category=curtains",

    featured: true,
  },

  {
    id: "wooden-doors",

    title: "Wooden Doors",

    category: "Home Improvement",

    image: "",

    images: [],

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

    // ⚠️ Real templateId uses underscore: "wooden_doors".
    publishUrl: "/join?template=wooden_doors",

    demoUrl: "/market?category=wooden_doors",

    featured: true,
  },

  {
    id: "steel-doors",

    title: "Steel Doors",

    category: "Home Improvement",

    image: "",

    images: [],

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

    // ⚠️ Real templateId uses underscore: "steel_doors".
    publishUrl: "/join?template=steel_doors",

    demoUrl: "/market?category=steel_doors",

    featured: true,
  },

  {
    id: "gates",

    title: "Gates",

    category: "Home Improvement",

    image: "",

    images: [],

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

    publishUrl: "/join?template=gates",

    demoUrl: "/market?category=gates",

    featured: true,
  },

  {
    id: "garage-doors",

    title: "Garage Doors",

    category: "Home Improvement",

    image: "",

    images: [],

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

    // ⚠️ Real templateId uses underscore: "garage_doors".
    publishUrl: "/join?template=garage_doors",

    demoUrl: "/market?category=garage_doors",

    featured: true,
  },

  // ==========================================================
  // FURNITURE
  // ==========================================================

  {
    id: "kitchen-islands",

    title: "Kitchen Islands",

    category: "Furniture",

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

    // ⚠️ Real templateId is SINGULAR: "kitchen_island", not
    // "kitchen-islands" — the one mismatch that isn't just a
    // hyphen/underscore swap.
    publishUrl: "/join?template=kitchen_island",

    demoUrl: "/market?category=kitchen_island",

    featured: true,
  },
];
