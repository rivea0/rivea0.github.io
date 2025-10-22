import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';
import type { Entry } from './types';

const thirdPartyPosts: Entry[] = [
  {
    title: 'Recursive Types in TypeScript: A Brief Exploration',
    description:
      'A short look at recursive types in TypeScript and some use cases.',
    body: '',
    date: '2025-05-07',
    slug: '',
    tags: ['TypeScript'],
    isThirdParty: true,
    href: 'https://www.freecodecamp.org/news/recursive-types-in-typescript-a-brief-exploration',
  },
];

export function getPostEntries() {
  const entries = fs.readdirSync('./posts/');
  const entriesWithMetadata = entries
    .filter(
      (file) => path.extname(file) === '.md' || path.extname(file) === '.mdx'
    )
    .map((file) => {
      const filePath = `./posts/${file}`;
      const entryContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(entryContent);
      if (data.published === false) {
        return null;
      }
      return { ...data, body: content } as Entry;
    });

  return entriesWithMetadata
    .concat(thirdPartyPosts)
    .filter((entry) => entry !== null)
    .sort(
      (a, b) => {
        if (a && b) {
          if (a.date && b.date) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          } else {
            return b.postIndex - a.postIndex;
          }
        } else {
          return 0;
        }
      }
      // a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
    ) as Entry[];
}

export function getNoteCategories() {
  return fs.readdirSync(`./notes-to-self/`);
}

export function getNotesInCategory(category: string) {
  const categories = getNoteCategories();
  if (!categories.includes(category)) {
    console.error('Note category does not exist');
  }

  const entries = fs.readdirSync(`./notes-to-self/${category}/`);
  const entriesWithMetadata = entries
    .filter(
      (file) => path.extname(file) === '.md' || path.extname(file) === '.mdx'
    )
    .map((file) => {
      const filePath = `./notes-to-self/${category}/${file}`;
      const entryContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(entryContent);
      if (data.published === false) {
        return null;
      }
      return { ...data, body: content } as Entry;
    });

  return entriesWithMetadata
    .filter((entry) => entry !== null)
    .sort((a, b) => {
      if (a && b) {
        if (a.date && b.date) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        } else {
          return b.postIndex - a.postIndex;
        }
      } else {
        return 0;
      }
    }) as Entry[];
}

export function capitalizeFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}
