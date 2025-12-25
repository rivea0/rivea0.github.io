import {
  projectDescriptionComponents,
  projectMoreDetails,
} from './components/project-components-helper';
import { PostEntry, Project, WritingProject } from './types';

export const selectedPosts: Pick<
  PostEntry,
  'title' | 'slug' | 'date' | 'isThirdParty' | 'thirdPartyPostHref'
>[] = [
  {
    slug: 'notes-on-a-first-encounter-with-rust-ownership',
    title: "Notes on a first encounter with Rust's ownership",
    date: '2025-03-28',
    isThirdParty: false,
  },
  {
    slug: 'the-curious-case-of-recursive-and-iterative-processes',
    title: 'The curious case of recursive and iterative processes',
    date: '2023-12-23',
    isThirdParty: false,
  },
  {
    slug: 'a-reminder-to-use-single-quotes-when-writing-commit-messages',
    title: 'A reminder to use single quotes when writing commit messages',
    date: '2023-07-13',
    isThirdParty: false,
  },
  {
    slug: 'a-quick-behind-the-scenes-of-greedy-and-lazy-matching',
    title: 'A Quick Behind the Scenes of Greedy and Lazy Matching',
    date: '2022-03-31',
    isThirdParty: false,
  },
  {
    slug: 'custom-endswith-and-startswith-functions',
    title: 'Custom endsWith and startsWith Functions',
    date: '2022-02-22',
    isThirdParty: false,
  },
];

export const writingProjects: WritingProject[] = [
  {
    title: 'Bite-Sized Mathematics for Computer Science',
    description: projectDescriptionComponents['bite-sized-math'],
    links: [
      {
        name: 'Website',
        href: 'https://rivea0.github.io/bite-sized-math-for-cs',
      },
      {
        name: 'Source',
        href: 'https://github.com/rivea0/bite-sized-math-for-cs',
      },
    ],
  },
  {
    title: 'LeetCode Meditations',
    description: projectDescriptionComponents['leetcode-meditations'],
    links: [
      {
        name: 'Series',
        href: 'https://rivea0.github.io/leetcode-meditations',
      },
      {
        name: 'dev.to',
        href: 'https://dev.to/rivea0/series/26418',
      },
    ],
  },
  {
    title:
      "Solving the Problem Sets of CS50's Introduction to Programming with Python — One at a Time",
    description: projectDescriptionComponents['cs50p'],
    links: [
      {
        name: 'dev.to',
        href: 'https://dev.to/rivea0/solving-the-problem-sets-of-cs50s-introduction-to-programming-with-python-one-at-a-time-problem-set-0-27d5',
      },
    ],
    more: projectDescriptionComponents['cs50p'],
  },
];

export const projects: Project[] = [
  {
    title: 'MatchSyntax',
    description: projectDescriptionComponents['match-syntax'],
    codeHref: 'https://github.com/rivea0/obsidian-match-syntax',
    language: ['TypeScript'],
  },
  {
    title: 'Obsidian Prime',
    description: projectDescriptionComponents['prime-theme'],
    codeHref: 'https://github.com/rivea0/obsidian-prime',
    language: ['CSS'],
  },
  {
    title: 'Ambient Sounds Web Components',
    description: 'Custom audio players, built with web components.',
    demoHref:
      'https://rivea0.github.io/ambient-sounds-web-components/index.html',
    codeHref: 'https://github.com/rivea0/ambient-sounds-web-components',
    language: ['JavaScript'],
  },
  {
    title: 'unpretty-bytes',
    description: projectDescriptionComponents['unpretty-bytes'],
    codeHref: 'https://github.com/rivea0/unpretty-bytes',
    language: ['TypeScript', 'Node.js'],
  },
  {
    title: 'Glow Cloud: The Weather',
    description:
      'Weather report with a slightly absurd take. Inspired by the podcast Welcome to Night Vale.',
    demoHref: 'https://glow-cloud.vercel.app',
    codeHref: 'https://github.com/rivea0/glow-cloud',
    language: ['TypeScript'],
    framework: ['Next.js'],
    more: projectMoreDetails['glow-cloud'],
  },
  {
    title: 'QuestionMark',
    description:
      ' A question-answering application using a lightweight pretrained machine learning model that runs in the browser, with Transformers.js.',
    demoHref: 'https://thequestionmark.netlify.app',
    codeHref: 'https://github.com/rivea0/questionmark',
    language: ['TypeScript'],
    framework: ['React'],
  },
  {
    title: 'discrete-math-ref',
    description:
      'A Vue application to display basic discrete math formulas, and copy their TeX source to clipboard.',
    codeHref: 'https://github.com/rivea0/discrete-math-ref',
    language: ['TypeScript'],
    framework: ['Vue'],
  },
  {
    title: 'Lemon: 30-Day Challenge Tracker',
    description: projectDescriptionComponents['lemon'],
    codeHref: 'https://github.com/rivea0/lemon',
    language: ['TypeScript'],
    framework: ['Next.js'],
  },
  {
    title: 'Vocab-Build',
    description: 'A Python CLI tool to study English vocabulary.',
    codeHref: 'https://github.com/rivea0/vocab-build',
    language: ['Python'],
  },
  {
    title: 'compromise-redact-selections',
    description: projectDescriptionComponents['compromise-redact'],
    codeHref: 'https://github.com/rivea0/compromise-redact-selections',
    language: ['JavaScript', 'Shell'],
  },
  {
    title: 'WikiAnagrams',
    description:
      'A simple website to search for anagrams of a word, taken from its Wiktionary page.',
    demoHref: 'https://wikianagrams.vercel.app/',
    codeHref: 'https://github.com/rivea0/wikianagrams',
    language: ['TypeScript'],
    framework: ['Next.js'],
  },
  {
    title: 'Casual Math',
    description:
      'A pure (and my first!) React application to solve simple math operations.',
    demoHref: 'https://casualmath.netlify.app',
    codeHref: 'https://github.com/rivea0/casual-math',
    language: ['JavaScript'],
    framework: ['React'],
  },
  {
    title: 'Heap for Reading Lists',
    description:
      "A Flask web application to create, analyze, and get recommendations from your reading list. Created as the final project for Harvard's CS50.",
    demoHref: 'https://heap.pythonanywhere.com',
    codeHref: 'https://github.com/rivea0/heap-for-reading-lists',
    language: ['Python'],
    framework: ['Flask'],
  },
  {
    title: 'Simple Caesar Cipher',
    description: 'A simple tool for encrypting/decrypting a Caesar cipher.',
    demoHref: 'https://rivea0.github.io/simple-caesar-cipher',
    codeHref: 'https://github.com/rivea0/simple-caesar-cipher',
    language: ['JavaScript'],
  },
];
