import { Suspense } from 'react';
import { EntriesList } from '@components/entries-list';
import LoaderIcon from '@components/loader-icon';
import { getPostEntries } from '@lib/get-entries';

export default async function Blog() {
  const posts = getPostEntries();

  return (
    <Suspense fallback={<LoaderIcon />}>
      <EntriesList entries={posts} entryType="post" paginate={false} />
    </Suspense>
  );
}
