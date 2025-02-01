import { Fira_Mono } from 'next/font/google';

export const metadata = {
  title: 'Notes',
  description: "rivea0's notes",
  alternates: {
    canonical: 'https://rivea0.github.io/notes',
  },
};
const firaMono = Fira_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  fallback: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
});

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={firaMono.className}>{children}</div>;
}
