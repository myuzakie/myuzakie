import projectsData from '../data/projects.json';

export type ProjectLang = 'en' | 'id' | 'de';

export interface ProjectContent {
  title: string;
  publicationLink: string;
  description: string;
}

export interface Project {
  slug: string;
  theme: 'dark' | 'light';
  thumbnail: string;
  i18n: Record<ProjectLang, ProjectContent>;
}

const data = projectsData as { projects: Project[] };

export function getAllProjects(): Project[] {
  return data.projects;
}

export function getProjectContent(project: Project, lang: ProjectLang): ProjectContent {
  return project.i18n[lang] ?? project.i18n.en;
}
