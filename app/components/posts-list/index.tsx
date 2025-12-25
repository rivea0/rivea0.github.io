'use client';

import { useState } from 'react';
import type { MouseEvent } from 'react';
import BlockEntry from '@components/block-entry';
import type { PostEntry } from '@lib/types';
import styles from './posts-list.module.css';
import { getEntryTags } from '@lib/get-entry-tags';
import TagsFilter from '@components/tags-filter';
import filterStyles from '@components/tags-filter/tags-filter.module.css';

export default function PostsList(props: {
  posts: PostEntry[];
  paginate?: boolean;
}) {
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
            if (post.isThirdParty) {
              return (
                <BlockEntry
                  key={`post-item-${post.thirdPartyPostHref}`}
                  href={post.thirdPartyPostHref}
                  title={post.title}
                  date={post.date}
                  isThirdParty
                />
              );
            }
            if (post.slug === 'leetcode-meditations-conclusion') {
              return (
                <BlockEntry
                  key="lm"
                  href="leetcode-meditations"
                  title="🌳 LeetCode Meditations"
                  date={
                    posts.find(
                      (p) => p.slug.startsWith('leetcode-meditations') && p.date
                    )?.date
                  }
                  dateInfo="Feb 13 -"
                  isThirdParty={false}
                />
              );
            } else {
              return (
                <BlockEntry
                  key={`post-item-${post.slug}`}
                  href={`/blog/${post.slug}`}
                  title={post.title}
                  date={post.date}
                  isThirdParty={false}
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
