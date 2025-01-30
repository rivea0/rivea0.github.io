import { Fira_Code } from 'next/font/google';

export const metadata = {
  title: 'Notes',
  description: "rivea0's notes",
  alternates: {
    canonical: 'https://rivea0.github.io/notes',
  },
};
const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '500', '600', '700'],
});

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={firaCode.className}>
      {children}
    </div>
  );
}
