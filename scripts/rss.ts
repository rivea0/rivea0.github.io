import fs from 'node:fs'
import RSS from 'rss'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'

const posts = fs
  .readdirSync(path.resolve(__dirname, '../posts/'))
  .filter(
    (file) => path.extname(file) === '.md' || path.extname(file) === '.mdx'
  )
  .map((file) => {
    const postContent = fs.readFileSync(`./posts/${file}`, 'utf8')
    const { data, content }: { data: any; content: string } =
      matter(postContent)
    return { ...data, body: content }
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

const renderer = new marked.Renderer()

renderer.link = (href, _, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`

marked.setOptions({
  gfm: true,
  breaks: true,
  // headerIds: true,
  renderer,
})

const renderPost = (md: string) => marked.parse(md)

const main = () => {
  const feed = new RSS({
    title: 'rivea0',
    site_url: 'https://rivea0.github.io',
    feed_url: 'https://rivea0.github.io/feed.xml',
    language: 'en',
    description: "My blog, projects, etc.",
  })

  posts.forEach((post) => {
    const url = `https://rivea0.github.io/blog/${post.slug}`

    feed.item({
      title: post.title,
      description: renderPost(post.body),
      date: new Date(post?.date),
      author: 'Eda Eren',
      url,
      guid: url,
    })
  })

  const rss = feed.xml({ indent: true })
  fs.writeFileSync(path.join(__dirname, '../public/feed.xml'), rss)
}

main()