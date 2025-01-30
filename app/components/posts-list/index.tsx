'use client';

import { useState } from 'react';
import clsx from 'clsx';
import BlockEntry from '@components/block-entry';
import type { Entry } from '@lib/types';
import styles from './posts-list.module.css';
import { getEntryTags } from '@lib/get-entry-tags';

type Props = {
  posts: Entry[];
  paginate?: boolean;
};

export default function PostsList(props: Props) {
  // const [showMore, setShowMore] = useState(4)
  const [filterTopic, setfilterTopic] = useState('');

  const { posts, paginate } = props;
  const allTags = getEntryTags(posts);

  return (
    <>
      <details className={styles.filters}>
        <summary>Apply filter</summary>
        <ul className={styles.filterList}>
          {allTags.map((tag: string) => {
            return (
              <li key={tag}>
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
        <button
          onClick={() => setfilterTopic('')}
          type="button"
          className={clsx(styles.clearFilter, {
            [styles.clearActive]: filterTopic === '',
          })}
        >
          Clear filter
        </button>
      </details>

      <ul className={styles.container}>
        {/* {posts.slice(0, paginate ? showMore : undefined) */}
        {posts
          .filter((p) => {
            if (
              p.slug.startsWith('leetcode-meditations') &&
              p.slug !== 'leetcode-meditations-conclusion'
            ) {
              return undefined;
            }
            if (filterTopic === '') return p;
            return p.tags.includes(filterTopic) ? p : undefined;
          })
          .map((post) => {
            const date = new Date(post.date).toLocaleDateString('en-US', {
              month: 'numeric',
              day: 'numeric',
              year: 'numeric',
            });

            if (post.slug === 'leetcode-meditations-conclusion') {
              return (
                <BlockEntry
                  key="lm"
                  href="leetcode-meditations"
                  title="🌳 LeetCode Meditations"
                  date={
                    new Date(
                      posts.find(
                        (p) =>
                          p.slug.startsWith('leetcode-meditations') && p.date
                      )?.date
                    )
                  }
                  dateInfo="Feb 13 -"
                />
              );
            } else {
              return (
                <BlockEntry
                  key={`post-item-${post.slug}`}
                  href={`/blog/${post.slug}`}
                  title={post.title}
                  date={new Date(date)}
                />
              );
            }
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
