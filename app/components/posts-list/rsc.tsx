import getPosts from '@lib/get-posts'
import PostsList from '.'

export async function PostListRSC({ 
  paginate 
}: { 
  paginate?: boolean 
}) {
  const posts = getPosts()
  return <PostsList posts={posts} paginate={paginate} />
}
