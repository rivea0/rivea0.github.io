import Link from '@components/link';
import { ExternalLink } from '@components/icons';
import styles from './project-link.module.css';

export function ProjectLink({ name, href }: { name: string; href: string }) {
  return (
    <Link href={href} className={styles.link} external>
      <p>{name}</p>
      <ExternalLink />
    </Link>
  );
}
