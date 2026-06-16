import projectsData from '../data/projects.json';

export type ProjectLang = 'en' | 'id' | 'de';

export interface ProjectContent {
  title: string;
  year: string;
  role: string;
  publicationLink: string;
  publicationLabel: string;
  description: string;
}

export interface Project {
  slug: string;
  theme: 'dark' | 'light';
  thumbnail: string;
  heroImage: string;
  i18n: Record<ProjectLang, ProjectContent>;
}

export interface ProfileInfo {
  name: string;
  university: string;
  contact: string;
  footerNote: string;
}

export interface ProjectLabels {
  title: string;
  year: string;
  role: string;
  link: string;
  description: string;
  back: string;
  counter: string;
  footerName: string;
  footerUniversity: string;
  footerContact: string;
}

const data = projectsData as {
  profile: Record<ProjectLang, ProfileInfo>;
  labels: Record<ProjectLang, ProjectLabels>;
  projects: Project[];
};

export function getAllProjects(): Project[] {
  return data.projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return data.projects.find((project) => project.slug === slug);
}

export function getProjectIndex(slug: string): number {
  return data.projects.findIndex((project) => project.slug === slug);
}

export function getProfile(lang: ProjectLang): ProfileInfo {
  return data.profile[lang] ?? data.profile.en;
}

export function getProjectLabels(lang: ProjectLang): ProjectLabels {
  return data.labels[lang] ?? data.labels.en;
}

export function resolveLang(value: string | null): ProjectLang {
  if (value === 'id' || value === 'de' || value === 'en') return value;
  return 'en';
}

export function getProjectContent(project: Project, lang: ProjectLang): ProjectContent {
  return project.i18n[lang] ?? project.i18n.en;
}

export function buildProjectHref(slug: string, lang?: ProjectLang): string {
  const base = `/projects/${slug}`;
  if (!lang || lang === 'en') return base;
  return `${base}?lang=${lang}`;
}

export function getProjectsListHref(lang?: ProjectLang): string {
  if (!lang || lang === 'en') return '/projects';
  return `/projects?lang=${lang}`;
}

export function getCaseI18nPayload(project: Project, pageNumber: number, totalProjects: number) {
  return {
    labels: data.labels,
    profile: data.profile,
    content: project.i18n,
    pageNumber,
    totalProjects,
  };
}
