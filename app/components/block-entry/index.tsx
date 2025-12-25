import Link from '@components/link';
import styles from './block-entry.module.css';
import { convertMDWithInlineCodeToHTML } from '@lib/utils';
import { ExternalLink } from '@components/icons';
import { PostEntry } from '@lib/types';

type BlockEntryProps = Pick<PostEntry, 'title' | 'date' | 'isThirdParty'> & {
  dateInfo?: string;
  href: string;
};

export default function BlockEntry(props: BlockEntryProps) {
  const { title, date, dateInfo, isThirdParty, href } = props;

  return (
    <li className={styles.item}>
      <Link
        href={href}
        title={title}
        className={styles.link}
        underline={false}
        external={isThirdParty}
      >
        {date && (
          <div className={styles.wrapper}>
            {date && (
              <span className={styles.date}>
                {dateInfo && dateInfo}{' '}
                {new Date(date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            )}
          </div>
        )}
        <div className={styles.wrapTitle}>
          <h4
            className={`${styles.title}`}
            dangerouslySetInnerHTML={{
              __html: convertMDWithInlineCodeToHTML(title),
            }}
          ></h4>
          {isThirdParty && <ExternalLink />}
        </div>
        {/* {description && <p className={styles.description}>{description}</p>} */}
      </Link>
    </li>
  );
}
