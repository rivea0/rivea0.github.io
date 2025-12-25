export interface Entry {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
  body: string; // for RSS
}

export interface PostEntry extends Entry {
  isThirdParty: boolean;
  thirdPartyPostHref?: string;
}

export interface PostEntryData extends PostEntry {
  previous: PostEntry;
  next: PostEntry;
}

export interface NoteEntry extends Entry {}

interface BaseProject {
  title: string,
  description: string | ReactNode,
  more?: string | ReactNode,
}

export interface Project extends BaseProject {
  codeHref: string,
  demoHref?: string,
  language: string[],
  framework?: string[],
}

export interface WritingProject extends BaseProject {
  links: { name: string; href: string }[];
}
