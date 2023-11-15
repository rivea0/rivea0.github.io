import Link from 'next/link'
import styles from './nav-links.module.css'

export default function NavLinks() {
  return (
    <div className={styles.nav}>
      <Link href='/'>
        Home
      </Link>
      <Link href='/blog'>
        Blog
      </Link>
      <Link href='/projects'>
        Projects, etc.
      </Link>
      <Link href='/about'>
        About
      </Link>
    </div>
  ) 
}
