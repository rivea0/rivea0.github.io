// // import getPosts from '@lib/get-posts'
// import PostsList from '.'
// import { Entry } from '@lib/types'
// import NotesList from '@components/notes-list'

// // export async function PostListRSC({ paginate }: { paginate?: boolean }) {
// //   const posts = getPosts()
// //   return <PostsList posts={posts} paginate={paginate} />
// // }

// export async function EntriesList({
//   entries,
//   entryType,
//   paginate,
// }: {
//   entries: Entry[]
//   entryType: 'post' | 'note'
//   paginate?: boolean
// }) {
//   return entryType === 'post' ? (
//     <PostsList posts={entries} paginate={paginate} />
//   ) : (
//     <NotesList notes={entries} paginate={paginate} />
//   )
// }
