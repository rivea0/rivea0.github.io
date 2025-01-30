import { Entry } from './types';

export function getEntryTags(entries: Entry[]) {
  const allTagsSet = new Set();
  entries.map((entry) => entry.tags.forEach((tag) => allTagsSet.add(tag)));

  return Array.from(allTagsSet).sort();
}
