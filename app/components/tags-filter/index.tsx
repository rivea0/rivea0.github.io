'use client';

import type { MouseEvent } from 'react';
import clsx from 'clsx';
import filterStyles from '@components/tags-filter/tags-filter.module.css';

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
    <ul className={filterStyles.tagsPills}>
      <li key="all" className={filterStyles.tagPill}>
        <button
          onClick={handleAllTagSelection}
          type="button"
          className={clsx({ [filterStyles.activeBtn]: selectedTag === '' })}
        >
          All
        </button>
      </li>
      {allTags.map((tag: string) => {
        return (
          <li key={tag} className={filterStyles.tagPill}>
            <button
              onClick={handleTagSelection}
              type="button"
              className={clsx({ [filterStyles.activeBtn]: selectedTag === tag })}
            >
              {tag}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
