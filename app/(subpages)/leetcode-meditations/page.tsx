import { getPostEntries } from '@lib/get-entries';
import BlockEntry from '@components/block-entry';

export default function Page() {
  const posts = getPostEntries();
  return (
    <ul>
      {posts
        .filter((p) => {
          return p.slug.startsWith('leetcode-meditations') ? p : undefined;
        })
        .sort((a, b) => {
          return new Date(a.date).toLocaleTimeString() <
            new Date(b.date).toLocaleTimeString()
            ? 1
            : -1;
        })
        .map((post) => {
          const date = new Date(post.date).toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
          });

          return (
            <BlockEntry
              key={`post-item-${post.slug}`}
              href={`/blog/${post.slug}`}
              title={post.title}
              date={new Date(date)}
            />
          );
        })}
    </ul>
  );
}
