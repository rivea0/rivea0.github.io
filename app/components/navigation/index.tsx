import { PostEntry } from '@lib/types';
import Link from '@components/link';
import styles from './navigation.module.css';

function getHref(entryObj: PostEntry) {
  if (entryObj.isThirdParty) {
    return entryObj.thirdPartyPostHref;
  }
  return `/blog/${entryObj.slug}`;
}

export default function Navigation({
  previous,
  next,
}: {
  previous?: PostEntry;
  next?: PostEntry;
}) {
  return (
    <div className={styles.navigation}>
      <div className={styles.previous}>
        {previous && (
          <Link href={getHref(previous)} external={previous.isThirdParty}>
            <div className={styles.title}>← Older</div>
            {previous.title}
          </Link>
        )}
      </div>
      <div className={styles.next}>
        {next && (
          <Link href={getHref(next)} external={next.isThirdParty}>
            <div className={styles.title}>Newer →</div>
            {next.title}
          </Link>
        )}
      </div>
    </div>
  );
}
