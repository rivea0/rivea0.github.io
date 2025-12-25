import { Suspense } from 'react';
import LoaderIcon from '@components/loader-icon';
import { getPostEntries } from '@lib/get-entries';
import PostsList from '@components/posts-list';

export default async function Blog() {
  const posts = getPostEntries();

  return (
    <Suspense fallback={<LoaderIcon />}>
      <PostsList posts={posts} paginate={false} />
    </Suspense>
  );
}
