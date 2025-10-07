'use client';

import { useState } from 'react';
import type { MouseEvent } from 'react';
import type { Entry } from '@lib/types';
import { getEntryTags } from '@lib/get-entry-tags';
import NoteEntry from '@components/note-entry';
import styles from '@components/posts-list/posts-list.module.css';
import TagsFilter from '@components/tags-filter';
import filterStyles from '@components/tags-filter/tags-filter.module.css';

type Props = {
  notes: Entry[];
  paginate?: boolean;
};

export default function NotesList(props: Props) {
  // const [showMore, setShowMore] = useState(4)
  const [selectedTag, setSelectedTag] = useState('');

  function handleTagSelection(e: MouseEvent<HTMLButtonElement>) {
    setSelectedTag((e.target as HTMLButtonElement).textContent);
  }

  const { notes, paginate } = props;
  const notesTags = getEntryTags(notes);

  return (
    <>
      <details className={filterStyles.filters}>
        <summary>Apply filter</summary>
        <TagsFilter
          allTags={notesTags}
          selectedTag={selectedTag}
          handleAllTagSelection={() => {
            setSelectedTag('');
          }}
          handleTagSelection={handleTagSelection}
        />
      </details>
      <ul className={styles.container}>
        {/* {notes.slice(0, paginate ? showMore : undefined) */}
        {notes
          .filter((note) => {
            if (selectedTag === '') return note;
            return note.tags.includes(selectedTag) ? note : undefined;
          })
          .map((note) => {
            return (
              <NoteEntry
                key={`note-item-${note.slug}`}
                href={`/notes/${note.slug}`}
                title={note.title}
                tags={note.tags}
              />
            );
          })}
        {/* {paginate && showMore < posts.length && (
          <button
            onClick={() => {
              setShowMore(showMore + 4)
            }}
            className={styles.button}
          >
            Show More
          </button>
        )} */}
      </ul>
    </>
  );
}
