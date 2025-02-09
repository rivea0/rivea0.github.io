import Image from 'next/image'
import { Suspense } from 'react'
import Link from '@components/link'
import LoaderIcon from '@components/loader-icon'
import styles from './about.module.css'

export const metadata = {
  title: 'About',
  alternates: {
    canonical: 'https://rivea0.github.io/about',
  },
}

export default function Page() {
  return (
    <Suspense fallback={<LoaderIcon />}>
      <div className={styles.container}>
        <div className={styles.paragraphDiv}>
          <p>Hi, I'm Eda.</p>
          <p >I hold a B.A. in English Literature, and am currently in a software developer role.</p>
          <p >I have many kinds of interests, and I try to write helpful guides, usually to my future self to retain information better — as writing is the best learning strategy.</p>
          <p >Here are <em>some</em> of the things that I love the most (at this time of writing):</p>
          <ul className={styles.ul}>
            <li>using TypeScript</li>
            <li>reading Emerson and Thoreau</li>
            <li>(amateur) landscape photography</li>
            <li>epiphanies that lead to nowhere</li>
            <li>epiphanies that lead to somewhere</li>
          </ul>
        </div>
        <div className={styles.profileDiv}>
          <Image src='/about/profile.jpeg' alt='Profile image' width={250} height={250} className={styles.profile} />
        </div>
      </div>
      <div>
        <h5>Other:</h5>
        <p>I'm doing very amateur photography, you can check out my <Link href="https://unsplash.com/@rivea0">Unsplash</Link>.</p>
        <p>I also write down some fleeting thoughts at <Link href="https://thementaltraveller.bearblog.dev">thementaltraveller.bearblog.dev</Link>.</p>
        <hr />
        <p><em>This site is built using <a href="https://nextjs.org">Next.js</a>, licensed under <Link href="">MIT</Link>.</em></p>
        <p><em><Link href="https://www.goatcounter.com">GoatCounter</Link> (which is <Link href="https://github.com/arp242/goatcounter">open source</Link>!) is used for privacy-friendly analytics.</em></p>
        <p><em>Blog content licensed under <Link href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</Link>.</em></p>
      </div>
    </Suspense>
  )
}