
export type LanguageItem = {
  name: string;
  level: string;
};

export type TranslatedEducation = {
  title: string;
  school: string;
  degree: string;
  dates: string;
};

export type TranslatedJob = {
  role: string;
  company: string;
  location: string;
  dates: string;
  points: string[];
};

export type TranslatedProject = {
  name: string;
  description: string;
  href?: string;
  tags: string[];
  status: string;
};