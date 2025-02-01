'use client';

import type { MouseEvent } from 'react';
import clsx from 'clsx';
import styles from '@components/notes-list/notes-list.module.css';

export default function TagsFilter({
  allTags,
  selectedTag,
  handleAllTagSelection,
  handleTagSelection,
}: {
  allTags: string[];
  selectedTag: string;
  handleAllTagSelection: () => void;
  handleTagSelection: (e: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <ul className={styles.tagsPills}>
      <li key="all" className={styles.tagPill}>
        <button
          onClick={handleAllTagSelection}
          type="button"
          className={clsx({ [styles.activeBtn]: selectedTag === '' })}
        >
          All
        </button>
      </li>
      {allTags.map((tag: string) => {
        return (
          <li key={tag} className={styles.tagPill}>
            <button
              onClick={handleTagSelection}
              type="button"
              className={clsx({ [styles.activeBtn]: selectedTag === tag })}
            >
              {tag}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
