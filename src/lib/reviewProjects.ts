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
  "sportan",
  "q-rush",
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
        body: "I joined BlockDevId's offline Web3 bootcamp to understand how blockchain products are designed, built, deployed, and pitched in a real builder environment.",
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
  sportan: {
    techStack: [
      "Product Direction",
      "Editorial Systems",
      "Web Development",
      "Sports Media",
      "Audience Strategy",
    ],
    features: [
      "Sports storytelling platform",
      "Structured editorial delivery",
      "Analysis-focused content experience",
      "Web-based media interface",
      "Long-term audience-building strategy",
    ],
    reviewNotes: [
      {
        title: "Product Context",
        body: "Sportan is a personal digital product exploring sports storytelling, analysis, and structured content delivery through a web-based media platform.",
      },
      {
        title: "Role & Execution",
        body: "As founder and full-stack developer, I connected product direction, editorial structure, web development, and audience-building strategy into one media product direction.",
      },
      {
        title: "Review Material",
        body: "The full case study, visuals, and supporting materials are available through the publication link shown in the project metadata.",
      },
    ],
  },
  "q-rush": {
    techStack: [
      "UI/UX Design",
      "Product Design",
      "QR Ordering",
      "Payment Flow",
      "Restaurant UX",
    ],
    features: [
      "QR-based dine-in ordering",
      "One Bill shared payment flow",
      "Split Bill separate payment flow",
      "Menu browsing and order confirmation",
      "QR transaction proof and final invoice",
    ],
    reviewNotes: [
      {
        title: "Problem Context",
        body: "Q Rush is designed to make the dine-in ordering process faster, clearer, and more flexible for customers using a QR-based restaurant ordering flow.",
      },
      {
        title: "Ordering Scenarios",
        body: "The product supports One Bill for a single shared payment flow and Split Bill for customers who want to separate their orders and payments while dining together.",
      },
      {
        title: "Journey Focus",
        body: "The design simplifies the restaurant journey from table entry, menu browsing, order confirmation, payment, QR transaction proof, and final invoice.",
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