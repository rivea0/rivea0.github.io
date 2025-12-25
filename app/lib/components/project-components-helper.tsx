import ExternalLink from '@components/icons/external-link';
import Link from '@components/link';
import styles from '../../components/project/project.module.css';
import type { ReactNode } from 'react';

export const projectDescriptionComponents: Record<string, ReactNode> = {
  lemon: (
    <>
      A local progress tracker for 30-day challenges, using a simple SQLite3
      database. Created for personal use (
      <em>
        and to tinker with{' '}
        <Link
          href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
          external
        >
          Server Actions
        </Link>
        !
      </em>
      ).
    </>
  ),
  'match-syntax': (
    <>
      <span>
        An{' '}
        <Link href="https://obsidian.md" external>
          Obsidian
        </Link>{' '}
        plugin that lets you write "regex-like" syntax to search the contents of
        a note, including part-of-speech tagging and (limited) fuzzy matching.
      </span>
    </>
  ),
  'prime-theme': (
    <>
      <span>
        A customizable dark/light theme for{' '}
        <Link href="https://obsidian.md" external>
          Obsidian
        </Link>
        .
      </span>
      <span>
        {' '}
        Also comes with{' '}
        <Link href="https://github.com/rivea0/obsidian-prime-snippets" external>
          CSS snippets
        </Link>
        .
      </span>
    </>
  ),
  'compromise-redact': (
    <>
      A small script to extend the selections of the <code>redact</code> method
      from the NPM package
      <span>
        {' '}
        <Link href="https://www.npmjs.com/package/compromise" external>
          compromise
        </Link>
      </span>
      .
    </>
  ),
  'unpretty-bytes': (
    <>
      A small package to convert a human-readable string to bytes: <br />{' '}
      <code>'1 GiB'</code> → <code>1073741824</code>.
    </>
  ),
  'bite-sized-math': (
    <>
      A collection of my <i>very</i> short notes on{' '}
      <Link
        href="https://openlearninglibrary.mit.edu/courses/course-v1:OCW+6.042J+2T2019/about"
        external
      >
        MIT's 6.042 Mathematics for Computer Science
      </Link>
      . Half learn-in-public experiment, half short online book. Website written
      in{' '}
      <Link href="https://www.11ty.dev/" external>
        Eleventy
      </Link>
      .
    </>
  ),
  cs50p: (
    <>
      A ten-part series of blog posts that were published each week as the new
      problem sets arrived in{' '}
      <Link href="https://cs50.harvard.edu/python/2022" external>
        CS50's Introduction to Programming with Python
      </Link>{' '}
      to guide learners taking the course.
    </>
  ),
  'leetcode-meditations': (
    <>
      A series of 79 blog posts spanning the year of 2024, tackling LeetCode
      problems (including introductory chapters with hand-made GIFs).
    </>
  ),
};

export const projectMoreDetails: Record<string, ReactNode> = {
  'glow-cloud': (
    <>
      The first iteration of Glow Cloud was made with Pure React, using{' '}
      <Link href="https://vitejs.dev/" external>
        Vite
      </Link>
      :
      <span className={styles.link}>
        <Link href="https://glowcloud-vite.netlify.app/" external>
          Demo site <ExternalLink />
        </Link>
        <Link href="https://github.com/rivea0/glow-cloud-vite" external>
          Source code <ExternalLink />
        </Link>
      </span>
    </>
  ),
  cs50p: (
    <>
      I took the original CS50 the year before, and had been diving a bit deep
      into Python, so when this course was first introduced, I took the
      challenge to take it, do the problem sets, and write about it each week on
      the day they arrived. It indeed proved to{' '}
      <Link
        href="https://web.archive.org/web/20231114183738/https://dev.to/rivea0/solving-the-problem-sets-of-cs50s-introduction-to-programming-with-python-one-at-a-time-problem-set-5-k44#comment-1od25"
        external
      >
        be
      </Link>{' '}
      <Link
        href="https://web.archive.org/web/20231114184027/https://dev.to/rivea0/solving-the-problem-sets-of-cs50s-introduction-to-programming-with-python-one-at-a-time-problem-set-8-5lf#comment-20o22"
        external
      >
        helpful
      </Link>{' '}
      for some folks.
    </>
  ),
};
