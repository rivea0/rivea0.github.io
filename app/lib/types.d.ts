export type Entry = {
  title: string
  slug: string
  date: string
  tags: string[]
  description: string
  body: string
  lastModified?: number
  postIndex?: number
  isThirdParty?: boolean
  href?: string
}

export type Project = {
  title: string
  description: string
  href: string
}
