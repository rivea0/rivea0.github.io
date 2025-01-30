import { Suspense } from 'react';
import { EntriesList } from '@components/entries-list';
import LoaderIcon from '@components/loader-icon';
import getEntries from '@lib/get-entries';

export default async function Blog() {
  const posts = getEntries('posts');
  return (
    <Suspense fallback={<LoaderIcon />}>
      <EntriesList entries={posts} entryType="post" paginate={false} />
    </Suspense>
  );
}
