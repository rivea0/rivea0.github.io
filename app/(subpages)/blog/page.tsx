import { Suspense } from 'react'
import { PostListRSC } from '@components/posts-list/rsc'
import LoaderIcon from '@components/loader-icon'

export default async function Blog() {
  return (
    <Suspense fallback={<LoaderIcon />}>
      <PostListRSC paginate={false} />
    </Suspense>
  )
}
