import styles from './notes.module.css';

export const metadata = {
  title: 'Notes',
  description: "rivea0's notes",
  alternates: {
    canonical: 'https://rivea0.github.io/notes',
  },
};

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
