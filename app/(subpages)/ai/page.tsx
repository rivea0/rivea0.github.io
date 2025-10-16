import { Suspense } from 'react'
import Link from '@components/link'
import LoaderIcon from '@components/loader-icon'

export const metadata = {
  title: 'AI',
  alternates: {
    canonical: 'https://rivea0.github.io/ai',
  },
}

export default function Page() {
  return (
    <Suspense fallback={<LoaderIcon />}>
      <div>
        <h1>AI Usage Statement</h1>
        <p>None of the content on this website was made using generative AI.</p>
        <p>All of my articles and notes are written by me.</p>
        <br />
        <h2>Why this page?</h2>
        <p>I like the quote, "If you couldn't be bothered to write something, I won't be bothered to read it."</p>
        <p>Originally inspired by <Link href="https://www.damolamorenikeji.com/ai">Damola Morenikeji</Link>.</p>
        <p>Also see <Link href="https://slashai.page">SlashAI.page</Link>, an open database of pages on the web showing how people are using generative AI - made by people who care.</p>
      </div>
   </Suspense>
  )
}
