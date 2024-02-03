import Link from '@components/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} &middot;{' '}
        <Link href="https://github.com/rivea0/rivea0.github.io">
          View source
        </Link>
      </p>
    </footer>
  );
}
