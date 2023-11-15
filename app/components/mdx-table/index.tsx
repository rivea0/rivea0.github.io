import styles from './mdx-table.module.css'

export function MDXTable({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={styles.tableWrapper}>
      {children}
    </div>
  )
}
