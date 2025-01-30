export type Entry = {
  title: string
  slug: string
  date: string
  tags: string[]
  description: string
  body: string
  lastModified?: number
  postIndex?: number
}

export type Project = {
  title: string
  description: string
  href: string
}
