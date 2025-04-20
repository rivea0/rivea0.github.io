import { ReactNode } from 'react';
import {
  CompromiseRedactDescription,
  GlowCloudMore,
  LemonDescription,
  PrimeThemeDescription,
  UnprettyBytesDescription,
} from './components/components';

type ProjectProps = {
  title: string;
  description: string | ReactNode;
  demoHref?: string;
  codeHref?: string;
  thirdPartyHref?: string;
  isWriting?: boolean;
  more?: string | ReactNode;
  thirdPartyName?: string;
  demoName?: string;
  language?: string[];
  framework?: string[];
  imageSrc?: string;
};

const projects: ProjectProps[] = [
  {
    title: 'Obsidian Prime',
    description: PrimeThemeDescription(),
    demoHref: '',
    codeHref: 'https://github.com/rivea0/obsidian-prime',
    language: ['CSS'],
  },
  {
    title: 'unpretty-bytes',
    description: UnprettyBytesDescription(),
    demoHref: '',
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
    more: GlowCloudMore(),
  },
  {
    title: 'QuestionMark',
    description: ' A question-answering application using a lightweight pretrained machine learning model that runs in the browser, with Transformers.js.',
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
    description: LemonDescription(),
    demoHref: '',
    codeHref: 'https://github.com/rivea0/lemon',
    language: ['TypeScript'],
    framework: ['Next.js'],
  },
  {
    title: 'Vocab-Build',
    description: 'A Python CLI tool to study English vocabulary.',
    demoHref: '',
    codeHref: 'https://github.com/rivea0/vocab-build',
    language: ['Python'],
  },
  {
    title: 'compromise-redact-selections',
    description: CompromiseRedactDescription(),
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

export function getProjects() {
  return projects;
}
