import { Suspense } from 'react'
import Link from '@components/link'
import LoaderIcon from '@components/loader-icon'
import styles from './work-with-me.module.css'

export const metadata = {
  title: 'Work with Me',
  alternates: {
    canonical: 'https://rivea0.github.io/work-with-me',
  },
  openGraph: {
    title: 'Work with Me',
    description: 'Contact information & more.',
    url: 'https://rivea0.github.io/work-with-me',
    siteName: 'Eda Eren',
    locale: 'en_US',
  },
}

export default function Page() {
  return (
    <Suspense fallback={<LoaderIcon />}>
      <div>
        <div>
          <h2>Work with me</h2>
          <p>Thanks for your interest in working with me!</p>
          <p>Feel free to <Link href="mailto:e.e.ereneda@gmail.com">send me an email</Link> or say hi <Link href="https://mastodon.social/@rivea0">on the fediverse</Link>.</p>
        </div>
        <hr className={styles.hr} />
        <div>
          <p className={styles.primaryP}>I want to work on / enjoy working on...</p>
          <ul className={styles.ul}>
            <li>Software that makes you happy (<i>you</i> as the developer and also as the person using it), preferably open-source</li>
            <li>Tools that make the web better, help it get closer to its idealized version</li>
            <p className={styles.noteP}>...where there are no dark patterns, no addiction-forming design patterns...</p>
            <li>Exciting frontend projects</li>
            <p className={styles.noteP}>The small hobby projects and the other things I worked on mostly have a frontend focus, and I love it.</p>
            <p className={styles.noteP}>JavaScript is both a blessing and a curse (okay, mostly a curse), but the web is *inherently* good, and I would like to see it one day as a better place that respects human dignity.</p>
            <li>Technical writing/documentation</li>
            <p className={styles.noteP}>The more helpful the docs are, the more you want to learn and use something, the more it excites you...</p>
          </ul>
          <p className={styles.primaryP}>I don't want to work on / am not interested in...</p>
          <ul className={styles.ul}>
            <li>Software that makes the person using it the product</li>
            <li>web3, crypto, etc.</li>
            <li>Careless use of technology</li>
            <p className={styles.noteP}>One example could be the sloppy injection of generative AI into every product, robbing what is otherwise an amazing and exciting field of its brilliance.</p>
          </ul>
        </div>
      </div>
    </Suspense>
  )
}