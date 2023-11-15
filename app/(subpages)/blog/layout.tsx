export const metadata = {
  title: 'Blog',
  description: "rivea0's tech blog",
  alternates: {
    canonical: 'https://rivea0.github.io/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}
