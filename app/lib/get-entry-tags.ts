import { Entry } from './types';

export function getEntryTags(entries: Entry[]): string[] {
  const allTagsSet = new Set<string>();
  entries.map((entry) => entry.tags.forEach((tag) => allTagsSet.add(tag)));

  return Array.from(allTagsSet).sort();
}
