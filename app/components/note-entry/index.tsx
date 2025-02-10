import Link from '@components/link';
import styles from './note-entry.module.css';
import { convertMDWithInlineCodeToHTML } from '@lib/utils';

type Props = {
  title: string;
  href: string;
  tags?: string[];
};

export default function NoteEntry(props: Props) {
  const { title, href, tags } = props;

  return (
    <li className={styles.item}>
      <Link href={href} title={title} className={styles.link} underline={false}>
        {tags && (
          <ul className={styles.tags}>
            {tags.map((t: string) => (
              <li key={t} className={styles.tag}>
                {t}
              </li>
            ))}
          </ul>
        )}
        <h4
          className={`${styles.title}`}
          dangerouslySetInnerHTML={{
            __html: convertMDWithInlineCodeToHTML(title),
          }}
        ></h4>
      </Link>
    </li>
  );
}
