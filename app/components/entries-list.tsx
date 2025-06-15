import PostsList from '@components/posts-list';
import NotesList from '@components/notes-list';
import type { Entry } from '@lib/types';

export async function EntriesList({
  entries,
  entryType,
  paginate,
}: {
  entries: Entry[];
  entryType: 'post' | 'note';
  paginate?: boolean;
}) {
  return entryType === 'post' ? (
    <PostsList posts={entries} paginate={paginate} />
  ) : (
    <NotesList notes={entries.filter(entry => !entry.isThirdParty)} paginate={paginate} />
  );
}
