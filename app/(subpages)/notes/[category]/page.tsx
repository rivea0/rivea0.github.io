import { getNoteCategories, getNotesInCategory } from '@lib/get-entries';
import { capitalizeFirstLetter } from '@lib/utils';
import styles from './category.module.css';
import NoteBlock from '@components/note-block';

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
      <div className={styles.noteList}>
        {notes.map((note) => (
          <NoteBlock key={note.title} note={note} category={category} />
        ))}
      </div>
    </div>
  );
}
