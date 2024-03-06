export const metadata = {
  title: 'LeetCode Meditations',
  description: "LeetCode Meditations blog series",
  alternates: {
    canonical: 'https://rivea0.github.io/leetcode-meditations',
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}
