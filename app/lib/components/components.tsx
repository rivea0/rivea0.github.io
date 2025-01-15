import ExternalLink from '@components/icons/external-link';
import Link from '@components/link';
import styles from '../../components/project/project.module.css';

export function LemonDescription() {
  return (
    <>
      A local progress tracker for 30-day challenges, using a simple SQLite3
      database. Created for personal use (
      <em>
        and to tinker with{' '}
        <Link href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations">
          Server Actions
        </Link>
        !
      </em>
      ).
    </>
  );
}

export function GlowCloudMore() {
  return (
    <>
      The first iteration of Glow Cloud was made with Pure React, using <Link href="https://vitejs.dev/">Vite</Link>:
      <span className={styles.link}>
        <Link
          href="https://glowcloud-vite.netlify.app/"
        >
          Demo site <ExternalLink />
        </Link>
        <Link
          href="https://github.com/rivea0/glow-cloud-vite"
        >
          Source code <ExternalLink />
        </Link>
      </span>
    </>
  );
}

export function PrimeThemeDescription() {
  return (
    <>
      <span>A customizable dark/light theme for <Link href="https://obsidian.md">Obsidian</Link>.</span> 
      <span> Also comes with <Link href="https://github.com/rivea0/obsidian-prime-snippets">CSS snippets</Link>.</span>
    </>
  )
}

export function CompromiseRedactDescription() {
  return (
    <>
      A small script to extend the selections of the <code>redact</code> method from the NPM package 
      <span> <Link href="https://www.npmjs.com/package/compromise">compromise</Link></span>.
    </>
  )
}