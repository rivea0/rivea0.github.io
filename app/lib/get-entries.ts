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
]

export default function getEntries(dirName: 'posts' | 'notes-to-self') {
  const entries = fs.readdirSync(`./${dirName}/`);
  const entriesWithMetadata = entries
    .filter(
      (file) => path.extname(file) === '.md' || path.extname(file) === '.mdx'
    )
    .map((file) => {
      const filePath = `./${dirName}/${file}`;
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
    }
      // a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
    ) as Entry[];
}
