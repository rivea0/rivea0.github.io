import Link from 'next/link';
import styles from './page.module.css';
import BlockEntry from '@components/block-entry';
import { selectedPosts } from '@lib/constants';

export default async function HomePage() {
  return (
    <>
      <h3 className={styles.heading2}>Hi, and welcome!</h3>
      <p>
        I love learning new things, and{' '}
        <Link href="/blog">writing about them</Link> as I do so.
      </p>
      <div>
        <h3 className={styles.heading3}>Selected Posts</h3>
        <ul className={styles.ul}>
          {selectedPosts.map((post) => {
            return (
              <BlockEntry
                key={`post-item-${post.slug}`}
                title={post.title}
                date={post.date}
                isThirdParty={post.isThirdParty}
                href={
                  !post.isThirdParty
                    ? `/blog/${post.slug}`
                    : post.thirdPartyPostHref
                }
              />
            );
          })}
        </ul>
      </div>
      <footer className={styles.footer}></footer>
    </>
  );
}
