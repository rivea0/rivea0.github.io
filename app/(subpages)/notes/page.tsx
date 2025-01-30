import { Suspense } from 'react';
import LoaderIcon from '@components/loader-icon';
import { EntriesList } from '@components/entries-list';
import getEntries from '@lib/get-entries';

export default async function Notes() {
  const notes = getEntries('notes-to-self');

  return (
    <Suspense fallback={<LoaderIcon />}>
      <EntriesList entries={notes} entryType="note" paginate={false} />
    </Suspense>
  );
}
