import { Suspense } from 'react';
import LoaderIcon from '@components/loader-icon';
import Link from '@components/link';
import { capitalizeFirstLetter, getNoteCategories, getNotesInCategory } from '@lib/get-entries';
import styles from './notes.module.css';

export default async function Notes() {
  const categories = getNoteCategories();

  let noteCount = 0;
  categories.forEach((category) => {
    let notes = getNotesInCategory(category);
    notes.forEach((note) => {
      noteCount += 1;
    });
  });

  return (
    <Suspense fallback={<LoaderIcon />}>
      <p><em>Total of {noteCount} notes</em></p>
      {categories
        .sort((a: string, b: string) => b.charCodeAt(0) - a.charCodeAt(0))
        .map((category) => {
          return (
            <Link
              key={category}
              className={styles.noteBlock}
              href={`/notes/${category}`}
            >
              <span>
                {capitalizeFirstLetter(category.replace(/-/g, ' ').replace(/script/, 'Script'))}
              </span>
            </Link>
          );
        })}
    </Suspense>
  );
}
