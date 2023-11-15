import NoteIcon from '@components/icons/note'
import styles from './mdx-note.module.css'

export function MDXNote({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <aside {...props} className={styles.note}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span>
            <NoteIcon color='var(--gray)' />
          </span>
          <b>Note</b>
        </div>
        {children}
      </div>
    </aside>
  )
}
