import Link from 'next/link'
import styles from './page.module.css'

export default async function HomePage() {
  return (
    <>
      <h3>Hi, and welcome!</h3>
      <p>I love learning new things, and <Link href="/blog">writing about them</Link> as I do so.</p>
      <footer className={styles.footer}></footer>
    </>
  )
}
