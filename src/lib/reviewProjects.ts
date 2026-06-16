import {
  getProjectBySlug,
  getProjectContent,
  type ProjectLang,
} from "./projects";

export interface ReviewNote {
  title: string;
  body: string;
}

export interface ReviewProjectEnrichment {
  techStack: string[];
  features: string[];
  reviewNotes: ReviewNote[];
}

export interface ReviewProjectView {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  year: string;
  role: string;
  techStack: string[];
  features: string[];
  reviewNotes: ReviewNote[];
}

/** Slugs included in the Apple Academy reviewer landing page. */
export const REVIEW_PROJECT_SLUGS = [
  "web3-builder-journey",
  "fintech-app",
] as const;

const enrichments: Record<string, ReviewProjectEnrichment> = {
  "web3-builder-journey": {
    techStack: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Web3 Integration",
      "Product Prototyping",
      "Hackathon Workflow",
    ],
    features: [
      "Structured Web3 learning path",
      "Team-based hackathon execution",
      "Animated product storytelling",
      "LiquidArena battle flow explanation",
      "Wallet-to-result interaction journey",
      "Secondary Relynk product case",
      "Reviewer-friendly guided narration",
    ],
    reviewNotes: [
      {
        title: "Learning Context",
        body: "I joined BlockDevId’s offline Web3 bootcamp to understand how blockchain products are designed, built, deployed, and pitched in a real builder environment.",
      },
      {
        title: "Product Execution",
        body: "In LiquidArena, I helped turn a DeFi idea into a clear product journey: connect wallet, select LP position, create or join battle, approve transfer, monitor the battle, and resolve the winner.",
      },
      {
        title: "Reflection",
        body: "This experience trained me to learn quickly, collaborate under hackathon constraints, communicate technical ideas, and turn an abstract concept into a working prototype.",
      },
    ],
  },
  "fintech-app": {
    techStack: ["SwiftUI", "iOS", "Product Design"],
    features: [
      "Savings tracking",
      "Portfolio overview",
      "Goal-based planning",
      "Calm finance-first UI",
      "Progressive data disclosure",
    ],
    reviewNotes: [
      {
        title: "Problem Context",
        body: "This project addresses daily financial check-ins by combining savings and stock portfolio visibility in one mobile experience.",
      },
      {
        title: "Design Direction",
        body: "Legibility of numbers, trust-building motion, and progressive disclosure guide users through complex financial data calmly.",
      },
      {
        title: "Technical Approach",
        body: "Native iOS patterns and component-driven UI keep interactions consistent while supporting iterative product exploration.",
      },
    ],
  },
};

const defaultEnrichment: ReviewProjectEnrichment = {
  techStack: ["Astro", "TypeScript", "Tailwind CSS"],
  features: [
    "Responsive interface",
    "Accessible design",
    "Structured project presentation",
  ],
  reviewNotes: [
    {
      title: "Problem Context",
      body: "This project demonstrates a focused solution with clear user goals and contextual presentation.",
    },
    {
      title: "Design Direction",
      body: "Visual hierarchy and spacing support quick understanding of the interface and its primary flows.",
    },
    {
      title: "Technical Approach",
      body: "The implementation uses maintainable structure with reusable components and clear separation of content.",
    },
  ],
};

function buildReviewProjectView(
  project: NonNullable<ReturnType<typeof getProjectBySlug>>,
  lang: ProjectLang,
): ReviewProjectView {
  const content = getProjectContent(project, lang);
  const enrichment = enrichments[project.slug] ?? defaultEnrichment;
  const paragraphs = content.description.split("\n\n").filter(Boolean);

  return {
    slug: project.slug,
    title: content.title,
    description: paragraphs[0] ?? content.description,
    fullDescription: content.description,
    image: project.heroImage,
    year: content.year,
    role: content.role,
    techStack: enrichment.techStack,
    features: enrichment.features,
    reviewNotes: enrichment.reviewNotes,
  };
}

export function getReviewProjectBySlug(
  slug: string,
  lang: ProjectLang = "en",
): ReviewProjectView | undefined {
  const project = getProjectBySlug(slug);
  if (!project) return undefined;

  return buildReviewProjectView(project, lang);
}

export function getReviewProjects(
  lang: ProjectLang = "en",
): ReviewProjectView[] {
  return REVIEW_PROJECT_SLUGS.map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> =>
      Boolean(project),
    )
    .map((project) => buildReviewProjectView(project, lang));
}

export function getReviewStaticPaths() {
  return REVIEW_PROJECT_SLUGS.map((slug) => ({ params: { slug } }));
}
