'use client';

import { useState } from 'react';
import clsx from 'clsx';
import type { Entry } from '@lib/types';
import { getEntryTags } from '@lib/get-entry-tags';
import NoteEntry from '@components/note-entry';
import styles from './notes-list.module.css';

type Props = {
  notes: Entry[];
  paginate?: boolean;
};

export default function NotesList(props: Props) {
  // const [showMore, setShowMore] = useState(4)
  const [filterTopic, setfilterTopic] = useState('');

  const { notes, paginate } = props;
  const allTags = getEntryTags(notes);

  return (
    <>
      <ul className={styles.tagsPills}>
        <li key="all" className={styles.tagPill}>
          <button
            onClick={() => {
              setfilterTopic('');
            }}
            type="button"
            className={clsx({ [styles.activeBtn]: filterTopic === '' })}
          >
            All
          </button>
        </li>
        {allTags.map((tag: string) => {
          return (
            <li key={tag} className={styles.tagPill}>
              <button
                onClick={(e) => {
                  setfilterTopic((e.target as HTMLButtonElement).textContent);
                }}
                type="button"
                className={clsx({ [styles.activeBtn]: filterTopic === tag })}
              >
                {tag}
              </button>
            </li>
          );
        })}
      </ul>
      <ul className={styles.container}>
        {/* {notes.slice(0, paginate ? showMore : undefined) */}
        {notes
          .filter((note) => {
            if (filterTopic === '') return note;
            return note.tags.includes(filterTopic) ? note : undefined;
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
