import { getNoteCategories, getNotesInCategory } from '@lib/get-entries';
import { capitalizeFirstLetter } from '@lib/utils';
import styles from './category.module.css';
import NoteBlock from '@components/note-block';
import { GlossaryEntry, NoteEntry } from '@lib/types';

export async function generateStaticParams() {
  const categories = getNoteCategories();

  return categories.map((category) => {
    if (category) {
      return { category };
    }
  });
}

export default function Page({ params }: { params: { category: string } }) {
  const category = params.category;
  const notes = getNotesInCategory(category);

  return (
    <div className={styles.noteListContainer}>
      <h1 className={styles.noteListTitle}>
        {capitalizeFirstLetter(
          category.replace(/-/g, ' ').replace(/script/, 'Script')
        )}
      </h1>
      {category === 'glossary' && (
        <div className={styles.glossaryDesc}>
          <p>Very simple definitions of terms, idioms, etc.</p>
        </div>
      )}
      <div
        className={
          category === 'glossary' ? styles.glossaryList : styles.noteList
        }
      >
        {notes.map((note: NoteEntry | GlossaryEntry) => (
          <NoteBlock key={note.title} note={note} category={category} />
        ))}
      </div>
    </div>
  );
}
