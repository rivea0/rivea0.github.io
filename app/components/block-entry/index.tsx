import Link from '@components/link'
import styles from './block-entry.module.css'

type Props =
  | {
      title: string
      href: string
      date?: Date,
      dateInfo?: string
    }
  // | {
  //     skeleton: true
  //   }

export default function BlockEntry(props: Props) {
  // if ('skeleton' in props) {
  //   return <li className={styles.skeleton} />
  // }

  const { title, href, date, dateInfo } = props

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
        <h4 className={`${styles.title}`}>{title}</h4>
        {/* {description && <p className={styles.description}>{description}</p>} */}
      </Link>
    </li>
  )
}
