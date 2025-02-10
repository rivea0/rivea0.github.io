import Link from '@components/link';
import styles from './block-entry.module.css';
import { convertMDWithInlineCodeToHTML } from '@lib/utils';

type Props = {
  title: string;
  href: string;
  date?: Date;
  dateInfo?: string;
};

export default function BlockEntry(props: Props) {
  const { title, href, date, dateInfo } = props;

  return (
    <li className={styles.item}>
      <Link
        href={href}
        title={title}
        className={styles.link}
        underline={false}
      >
        {/* {type && <div className={styles.type}>{type}</div>} */}
        {date && (
          <div className={styles.wrapper}>
            {date && (
              <span className={styles.date}>
                {dateInfo && dateInfo} {' '}
                {date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            )}
          </div>
        )}
        <h4
          className={`${styles.title}`}
          dangerouslySetInnerHTML={{
            __html: convertMDWithInlineCodeToHTML(title),
          }}
        ></h4>
        {/* {description && <p className={styles.description}>{description}</p>} */}
      </Link>
    </li>
  );
}
