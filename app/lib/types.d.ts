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

export type Project = {
  title: string;
  description: string;
  href: string;
};
