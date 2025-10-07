'use client';

import { useState } from 'react';
import type { MouseEvent } from 'react';
import BlockEntry from '@components/block-entry';
import type { Entry } from '@lib/types';
import styles from './posts-list.module.css';
import { getEntryTags } from '@lib/get-entry-tags';
import TagsFilter from '@components/tags-filter';
import filterStyles from '@components/tags-filter/tags-filter.module.css';

type Props = {
  posts: Entry[];
  paginate?: boolean;
};

export default function PostsList(props: Props) {
  // const [showMore, setShowMore] = useState(4)
  const [selectedTag, setSelectedTag] = useState('');

  function handleTagSelection(e: MouseEvent<HTMLButtonElement>) {
    setSelectedTag((e.target as HTMLButtonElement).textContent);
  }

  const { posts, paginate } = props;
  const postsTags = getEntryTags(posts);

  return (
    <>
      <details className={filterStyles.filters}>
        <summary>Apply filter</summary>
        <TagsFilter
          allTags={postsTags}
          selectedTag={selectedTag}
          handleAllTagSelection={() => {
            setSelectedTag('');
          }}
          handleTagSelection={handleTagSelection}
        />
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
            if (selectedTag === '') return p;
            return p.tags.includes(selectedTag) ? p : undefined;
          })
          .map((post) => {
            const date = new Date(post.date).toLocaleDateString('en-US', {
              month: 'numeric',
              day: 'numeric',
              year: 'numeric',
            });

            if (post.isThirdParty) {
              return (
                <BlockEntry
                  key={`post-item-${post.href}`}
                  href={post.href}
                  title={post.title}
                  date={new Date(date)}
                  thirdPartyPost
                />
              )
            }
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
