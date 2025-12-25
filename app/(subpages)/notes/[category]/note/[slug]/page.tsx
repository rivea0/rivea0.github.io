import fs from 'node:fs/promises';
import { compile } from '@mdx-js/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import EntryContent from '@components/entry-content';
import { getNoteCategories, getNotesInCategory } from '@lib/get-entries';
import { Fira_Code } from 'next/font/google';
import styles from './note.module.css';
import { convertMDWithInlineCodeToHTML } from '@lib/utils';

import '../../../../../../public/assets/katex/katex.min.css';
import { NoteEntry } from '@lib/types';

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
  fallback: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
});

export async function generateStaticParams() {
  const categories = getNoteCategories();
  const allNotes = [];
  categories.forEach((category) => {
    let notes = getNotesInCategory(category);
    notes.forEach((note) => {
      allNotes.push({
        category: category,
        slug: note.slug,
        date: note.date,
      });
    });
  });

  return allNotes.sort((a, b) => {
    return new Date(a.date).toLocaleTimeString() <
      new Date(b.date).toLocaleTimeString()
      ? 1
      : -1;
  });
}

export default async function Page({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const mdxFunctionBody = await compile(
    await fs.readFile(`./notes-to-self/${params.category}/${params.slug}.mdx`),
    {
      //@ts-ignore
      rehypePlugins: [rehypeKatex],
      remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath],
      outputFormat: 'function-body',
      development: false,
    }
  );

  function getData({
    category,
    slug,
  }: {
    category: string;
    slug: string;
  }): NoteEntry {
    const notes = getNotesInCategory(category);
    const noteIndex = notes.findIndex((n) => n?.slug === slug);
    const note = notes[noteIndex];

    return note;
  }

  const { title, tags } = getData({
    category: params.category,
    slug: params.slug,
  });

  return (
    <>
      <ul className={styles.tags}>
        {tags.length > 1 ? (
          tags.map((tag) => <li key={tag}>{tag}</li>)
        ) : (
          <li>{tags}</li>
        )}
      </ul>
      <div className={`${firaCode.className} ${styles.note}`}>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{
            __html: convertMDWithInlineCodeToHTML(title),
          }}
        ></h1>
        <EntryContent mdxFunctionBody={mdxFunctionBody} />
      </div>
    </>
  );
}
