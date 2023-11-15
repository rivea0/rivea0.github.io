const projects = [
  {
    title: 'WikiAnagrams',
    description: 'A simple website to search for anagrams of a word, taken from its Wiktionary page.',
    demoHref: 'https://wikianagrams.vercel.app/',
    codeHref: 'https://github.com/rivea0/wikianagrams',
    language: ['TypeScript'],
    framework: ['Next.js']
  },
  {
    title: 'Glow Cloud: The Weather',
    description: 'Weather report with a slightly absurd take. Inspired by the podcast Welcome to Night Vale.',
    demoHref: 'https://glow-cloud.vercel.app/',
    codeHref: 'https://github.com/rivea0/glow-cloud',
    language: ['TypeScript'],
    framework: ['Next.js']

  },
  {
    title: 'Vocab-Build',
    description: 'A Python CLI tool to study English vocabulary.',
    demoHref: '',
    codeHref: 'https://github.com/rivea0/vocab-build',
    language: ['Python'],
  },
  {
    title: 'Casual Math',
    description: 'A pure (and my first!) React application to solve simple math operations.',
    demoHref: 'https://casualmath.netlify.app',
    codeHref: 'https://github.com/rivea0/casual-math',
    language: ['JavaScript'],
    framework: ['React']

  },
  {
    title: 'Simple Caesar Cipher',
    description: 'A simple tool for encrypting/decrypting a Caesar cipher.',
    demoHref: 'https://rivea0.github.io/simple-caesar-cipher',
    codeHref: 'https://github.com/rivea0/simple-caesar-cipher',
    language: ['JavaScript'],
  },
  {
    title: 'Heap for Reading Lists',
    description: "A Flask web application to create, analyze, and get recommendations from your reading list. Created as the final project for Harvard's CS50.",
    demoHref: 'https://heap.pythonanywhere.com',
    codeHref: 'https://github.com/rivea0/heap-for-reading-lists',
    language: ['Python'],
    framework: ['Flask']

  },
]

export function getProjects() {
  return projects
}
