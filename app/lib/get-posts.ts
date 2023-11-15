import matter from 'gray-matter'
import fs from 'node:fs'
import path from 'node:path'
import type { Post } from './types'

export default function getPosts() {
  const posts = fs.readdirSync('./posts/')
  const postsWithMetadata = posts
    .filter(
      (file) => path.extname(file) === '.md' || path.extname(file) === '.mdx'
    )
    .map((file) => {
      const filePath = `./posts/${file}`
      const postContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(postContent)
      if (data.published === false) { return null }
      return { ...data, body: content } as Post
    })

  const filtered = postsWithMetadata
    .filter((post) => post !== null)
    .sort((a, b) =>
      a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
    ) as Post[]

  return filtered
}

// export function getPost(slug: string) {
//   const posts = getPosts()
//   return posts.find((post) => post.slug === slug)
// }
