import { Project } from "@/types/project.types";

export const projectsData: Project[] = [
  {
    slug: "chinex",
    title: "ChiNex",
    tagline: "Chinese Vocabulary Learning Web Application",
    description:
      "A modern, intuitive web application designed to help learners organize, study, and retain Chinese vocabulary efficiently through smart flashcards, Web Speech API audio pronunciation, and PWA capabilities.",
    status: "In Development / Beta",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "PWA",
      "Web Speech API",
    ],
    features: [
      "Vocabulary management with Hanzi, Pinyin, and English translations",
      "Accurate Mandarin pronunciation utilizing browser Web Speech API",
      "Multi-dimensional search and HSK level-based filtering (HSK 1 — HSK 6)",
      "Progressive Web App (PWA) support for mobile-like offline experience",
      "Interactive learning flashcards with spaced review progression",
    ],
    thumbnail: "/images/projects/chinex/cover.jpg",
    gallery: ["/images/projects/chinex/cover.jpg"],
    githubUrl: "https://github.com/duycao04",
    featured: true,
    caseStudy: {
      overview:
        "ChiNex is a specialized web application engineered to solve the friction language students face when attempting to organize vocabulary, practice accurate pronunciation, and study seamlessly across both desktop and mobile devices without requiring native app installation.",
      problem:
        "Traditional vocabulary study methods are either static (notebooks, spreadsheets) or locked behind paywalled apps that require large downloads. Language learners frequently struggle with Mandarin four-tone pronunciation and lack a fast, lightweight interface to review vocabulary on the go.",
      solution:
        "ChiNex provides a clean, unified PWA dashboard integrating the browser's native Web Speech API for instant voice pronunciation, an intuitive flashcard review flow, and dynamic HSK filtering that works reliably even with intermittent network connectivity.",
      techStackDetails: [
        {
          tech: "Next.js (App Router)",
          category: "Frontend Framework",
          reason:
            "Provides optimal server-rendered pages for fast initial load times, automatic code splitting, and streamlined routing.",
        },
        {
          tech: "TypeScript",
          category: "Language",
          reason:
            "Enforces strict type safety across vocabulary data schemas, audio events, and API request/response contracts.",
        },
        {
          tech: "Node.js & Express.js",
          category: "Backend API",
          reason:
            "Lightweight, non-blocking asynchronous event loop ideal for serving RESTful vocabulary query endpoints with low latency.",
        },
        {
          tech: "PostgreSQL",
          category: "Database",
          reason:
            "Robust relational storage ensuring data integrity for vocabulary decks, user progress tracking, and complex filtering queries.",
        },
        {
          tech: "Tailwind CSS & Ant Design",
          category: "UI Architecture",
          reason:
            "Tailwind provides rapid layout and dark-mode styling; Ant Design provides rich interactive components (Lightbox Image, Cards, Modals).",
        },
        {
          tech: "Web Speech API",
          category: "Browser Multimedia API",
          reason:
            "Synthesizes natural Mandarin speech on the client without the overhead or latency of streaming remote MP3 audio files.",
        },
        {
          tech: "Progressive Web App (PWA)",
          category: "Mobile Architecture",
          reason:
            "Allows users to install the web application directly onto mobile homescreens and cache flashcards for offline practice.",
        },
      ],
      mainFeatures: [
        {
          title: "Structured Vocabulary Management",
          description:
            "Organize words by Hanzi characters, Pinyin with tone markers, grammatical part of speech, and contextual English translations.",
        },
        {
          title: "Client-Side Speech Synthesis",
          description:
            "Instant audio pronunciation of Chinese words powered by SpeechSynthesisUtterance with Mandarin (zh-CN) locale detection.",
        },
        {
          title: "Multi-Level Filtering & Search",
          description:
            "Instant fuzzy searching across characters and Pinyin, with quick toggle tags for HSK 1 to HSK 6 proficiency levels.",
        },
        {
          title: "Progressive Web App Offline Support",
          description:
            "Configured Service Worker cache storage strategies enabling review sessions while commuting or in airplane mode.",
        },
      ],
      architecture: {
        summary:
          "ChiNex utilizes a decoupled full-stack architecture where the Next.js frontend interfaces with a RESTful backend API and PostgreSQL persistence layer, backed by client-side browser APIs for multimedia synthesis.",
        flow: [
          "Client requests vocabulary list via Next.js App Router with cached hydration.",
          "Vocabulary cards render with client-side audio trigger hooks.",
          "When the pronunciation button is clicked, Web Speech API invokes the native OS Chinese speech synthesizer.",
          "Service Worker intercepts network requests, serving cached vocabulary when offline.",
          "User review progress and custom deck updates sync back to the Node.js/PostgreSQL backend.",
        ],
      },
      challenges: [
        {
          title: "Cross-Browser Speech Synthesis Normalization",
          description:
            "SpeechSynthesis voices load asynchronously and vary drastically between iOS WebKit, Chrome on Android, and desktop browsers.",
          solution:
            "Implemented an asynchronous voice loader with fallback tone heuristics and explicit zh-CN locale voice detection upon browser initialization.",
        },
        {
          title: "Service Worker Cache Synchronization",
          description:
            "Ensuring users receive immediate application updates without having stale vocabulary decks permanently cached in localStorage.",
          solution:
            "Employed a 'Stale-While-Revalidate' caching strategy for vocabulary APIs and a 'Network-First' approach for dynamic application bundles.",
        },
        {
          title: "High-Performance 60fps Flashcard Transitions",
          description:
            "Complex card flip animations and list re-ordering caused minor frame drops on budget mobile devices.",
          solution:
            "Optimized CSS transforms using hardware-accelerated translate3d and will-change properties to maintain fluid 60fps interaction.",
        },
      ],
      lessonsLearned: [
        "Deep understanding of browser-native multimedia synthesis APIs and mobile audio autoplay restrictions.",
        "Hands-on experience architecting progressive web applications from manifest configuration to background service worker lifecycle management.",
        "Appreciation for relational database design when managing language hierarchies, tones, and spaced repetition review schedules.",
      ],
      screenshots: [
        {
          url: "/images/projects/chinex/cover.jpg",
          caption:
            "ChiNex Main Dashboard: Vocabulary flashcards with Hanzi, Pinyin, audio pronunciation trigger, and HSK level tags.",
        },
      ],
    },
  },
];
