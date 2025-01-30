'use client'

import Link from 'next/link'
import styles from './nav-links.module.css'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <div className={styles.nav}>
      <Link href='/' className={clsx(pathname === '/' && styles.activeLink)}>
        Home
      </Link>
      <Link href='/blog' className={clsx(pathname === '/blog' && styles.activeLink)}>
        Blog
      </Link>
      <Link href='/notes' className={clsx(pathname === '/notes' && styles.activeLink)}>
        Notes
      </Link>
      <Link href='/projects' className={clsx(pathname === '/projects' && styles.activeLink)}>
        Projects
      </Link>
      <Link href='/about' className={clsx(pathname === '/about' && styles.activeLink)}>
        About
      </Link>
    </div>
  ) 
}
