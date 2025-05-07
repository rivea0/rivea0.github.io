import { Entry } from '@lib/types';
import Link from '@components/link';
import styles from './navigation.module.css';

function getHref(entryObj: Entry, entryPathStr: 'blog' | 'notes') {
  if (entryObj.isThirdParty) {
    return entryObj.href
  }
  return `/${entryPathStr}/${entryObj.slug}`
}

export default function Navigation({
  previous,
  next,
  entryPath,
}: {
  previous?: Entry;
  next?: Entry;
  entryPath: 'blog' | 'notes';
}) {
  return (
    <div className={styles.navigation}>
      <div className={styles.previous}>
        {previous && (
          <Link
            href={getHref(previous, entryPath)}
            external={previous.isThirdParty}
          >
            <div className={styles.title}>← Older</div>
            {previous.title}
          </Link>
        )}
      </div>
      <div className={styles.next}>
        {next && (
          <Link
            href={getHref(next, entryPath)}
            external={next.isThirdParty}
          >
            <div className={styles.title}>Newer →</div>
            {next.title}
          </Link>
        )}
      </div>
    </div>
  );
}
