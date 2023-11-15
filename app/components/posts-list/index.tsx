'use client'

import { useState } from 'react'
import clsx from 'clsx'
import BlockEntry from '@components/block-entry'
import type { Post } from '@lib/types'
import styles from './posts-list.module.css'

type Props =
  | {
      posts: Post[]
      paginate?: boolean
    }
  // | {
  //     skeleton: true
  //   }


export default function PostsList(props: Props) {
  // const [showMore, setShowMore] = useState(4)
  const [filterTopic, setfilterTopic] = useState('')

  // if ('skeleton' in props) {
  //   return (
  //     <ul className={styles.container}>
  //       {[...Array(4)].map((_, i) => (
  //         <BlockEntry key={i} skeleton />
  //       ))}
  //     </ul>
  //   )
  // }
  // const { posts, paginate } = props
  const { posts } = props
  const allTagsSet = new Set()
  posts.map(p => p.tags.forEach(tag => allTagsSet.add(tag)))
  const allTags = Array.from(allTagsSet).sort()

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
                setfilterTopic((e.target as HTMLButtonElement).textContent)
              }}
                type="button"
                className={clsx({[styles.activeBtn]: filterTopic === tag})}
              >
                {tag}
              </button>
            </li>
          )})}
      </ul>
      <button 
        onClick={() => setfilterTopic('')} type="button"
        className={clsx(styles.clearFilter, {[styles.clearActive]: filterTopic === ''})}
      >
        Clear filter
      </button>

      </details>

      <ul className={styles.container}>
        {/* {posts.slice(0, paginate ? showMore : undefined) */}
        {posts
          .filter(p => {
          if (filterTopic === '') return p
          return p.tags.includes(filterTopic) ? p : undefined
        }).map((post) => {
          const date = new Date(post.date).toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
          })

          return (
            <BlockEntry
              key={`post-item-${post.slug}`}
              href={`/blog/${post.slug}`}
              title={post.title}
              date={new Date(date)}
            />
          )
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

  )
}
