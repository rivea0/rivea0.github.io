import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';
import type { GlossaryEntry, NoteEntry, PostEntry } from './types';

const thirdPartyPosts: PostEntry[] = [
  {
    title: 'Recursive Types in TypeScript: A Brief Exploration',
    description:
      'A short look at recursive types in TypeScript and some use cases.',
    body: '',
    date: '2025-05-07',
    slug: '',
    tags: ['TypeScript'],
    isThirdParty: true,
    thirdPartyPostHref:
      'https://www.freecodecamp.org/news/recursive-types-in-typescript-a-brief-exploration',
  },
];

function getLocalPostEntires(): PostEntry[] {
  const entries = fs.readdirSync('./posts/');
  const entriesWithMetadata = entries
    .filter(
      (file) => path.extname(file) === '.md' || path.extname(file) === '.mdx'
    )
    .map((file) => {
      const filePath = `./posts/${file}`;
      const entryContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(entryContent);

      return { ...data, isThirdParty: false, body: content } as PostEntry;
    });

  return entriesWithMetadata;
}

export function getPostEntries(): PostEntry[] {
  const localPostEntries = getLocalPostEntires();

  return localPostEntries
    .concat(thirdPartyPosts)
    .filter((entry) => entry !== null)
    .sort((a, b) =>
      a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
    ) as PostEntry[];
}

export function getNoteCategories(): string[] {
  return fs
    .readdirSync(`./notes-to-self/`)
    .filter((dir) => !dir.startsWith('.'));
}

export function getNotesInCategory(
  category: string
): NoteEntry[] | GlossaryEntry[] {
  const categories = getNoteCategories();
  if (!categories.includes(category)) {
    console.error('Note category does not exist');
  }

  const entries = fs.readdirSync(`./notes-to-self/${category}/`);
  const notesWithMetadata = entries
    .filter(
      (file) => path.extname(file) === '.md' || path.extname(file) === '.mdx'
    )
    .map((file) => {
      const filePath = `./notes-to-self/${category}/${file}`;
      const entryContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(entryContent);
      return { ...data, body: content } as NoteEntry;
    })
    .filter((entry) => entry !== null);

  // Sort glossary entries alphabetically, other notes by date
  if (category === 'glossary') {
    return notesWithMetadata.sort() as GlossaryEntry[];
  } else {
    return notesWithMetadata.sort((a, b) =>
      a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
    ) as NoteEntry[];
  }
}
