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

export const selectedPosts = [
  {
    slug: 'the-curious-case-of-recursive-and-iterative-processes',
    title: 'The curious case of recursive and iterative processes',
    date: '2023-12-23',
  },
  {
    slug: 'a-reminder-to-use-single-quotes-when-writing-commit-messages',
    title: 'A reminder to use single quotes when writing commit messages',
    date: '2023-07-13',
  },
  {
    slug: 'a-quick-behind-the-scenes-of-greedy-and-lazy-matching',
    title: 'A Quick Behind the Scenes of Greedy and Lazy Matching',
    date: '2022-03-31',
  },
  {
    slug: 'custom-endswith-and-startswith-functions',
    title: 'Custom endsWith and startsWith Functions',
    date: '2022-02-22',
  },
];


// export function getPost(slug: string) {
//   const posts = getPosts()
//   return posts.find((post) => post.slug === slug)
// }
