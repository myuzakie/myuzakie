import resumeData from '../data/resume.json';

export type ResumeLang = 'en' | 'id' | 'de';

export interface ResumeProfile {
  name: string;
  headline: string;
  location: string;
  email: string;
  linkedin: { label: string; url: string };
  website: { label: string; url: string };
  summary: string;
}

export interface ResumeExperience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface ResumeProject {
  title: string;
  meta: string;
  highlights: string[];
}

export interface ResumeEducation {
  institution: string;
  period: string;
  degree: string;
  highlights: string[];
}

export interface ResumeSkillGroup {
  group: string;
  items: string[];
}

export interface ResumeContent {
  profile: ResumeProfile;
  experience: ResumeExperience[];
  projects: ResumeProject[];
  education: ResumeEducation[];
  skills: ResumeSkillGroup[];
}

export interface ResumeLabels {
  experience: string;
  projects: string;
  education: string;
  skills: string;
  downloadCv: string;
}

const data = resumeData as {
  labels: Record<ResumeLang, ResumeLabels>;
  content: Record<ResumeLang, ResumeContent>;
};

export function resolveLang(value: string | null): ResumeLang {
  if (value === 'id' || value === 'de' || value === 'en') return value;
  return 'en';
}

export function getResumeLabels(lang: ResumeLang): ResumeLabels {
  return data.labels[lang] ?? data.labels.en;
}

export function getResumeContent(lang: ResumeLang): ResumeContent {
  return data.content[lang] ?? data.content.en;
}

export function getResumeHref(lang?: ResumeLang): string {
  if (!lang || lang === 'en') return '/resume';
  return `/resume?lang=${lang}`;
}
