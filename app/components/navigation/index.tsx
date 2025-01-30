import { Entry } from '@lib/types';
import Link from '@components/link';
import styles from './navigation.module.css';

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
          <Link href={`/${entryPath}/${previous.slug}`}>
            <div className={styles.title}>← Older</div>
            {previous.title}
          </Link>
        )}
      </div>
      <div className={styles.next}>
        {next && (
          <Link href={`/${entryPath}/${next.slug}`}>
            <div className={styles.title}>Newer →</div>
            {next.title}
          </Link>
        )}
      </div>
    </div>
  );
}
