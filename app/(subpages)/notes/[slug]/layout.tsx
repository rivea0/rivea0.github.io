import { Metadata } from 'next';
import Navigation from '@components/navigation';
import styles from '../../blog/[slug]/layout.module.css';
import getEntries from '@lib/get-entries';

export async function generateStaticParams() {
  const notes = getEntries('notes-to-self');
  return notes.map((note) => ({ slug: note.slug }));
}

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> => {
  const note = getEntries('notes-to-self').find((n) => n?.slug === params.slug);

  return {
    title: note?.title,
    description: note?.description,
    alternates: {
      canonical: `https://rivea0.github.io/notes/${params.slug}`,
    },
  };
};

function getData({ slug }: { slug: string }) {
  const notes = getEntries('notes-to-self');
  const noteIndex = notes.findIndex((n) => n?.slug === slug);
  const note = notes[noteIndex];
  const { ...rest } = note;

  return {
    previous: notes[noteIndex + 1] || null,
    next: notes[noteIndex - 1] || null,
    ...rest,
  };
}

export default function NoteLayout({
  children,
  params,
}: {
  children: JSX.Element;
  params: {
    slug: string;
  };
}) {
  const { previous, next, title, date, tags } = getData(params);

  return (
    <>
      <article className={styles.article}>
        {date && (
          <span className={styles.date}>
            {new Date(date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        )}
        <ul className={styles.tags}>
          {tags.length > 1 ? (
            tags.map((tag) => <li key={tag}>{tag}</li>)
          ) : (
            <li>{tags}</li>
          )}
        </ul>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </article>
      <Navigation previous={previous} next={next} entryPath="notes" />
    </>
  );
}
