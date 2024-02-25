import fs from 'node:fs/promises'
import * as runtime from 'react/jsx-runtime' 
import { compile, run } from '@mdx-js/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import { Code } from 'bright'
import { MDXImage } from '@components/mdx-image'
import { MDXNote } from '@components/mdx-note'
import { MDXTable } from '@components/mdx-table'
import catppuccinLatte from './bright-themes/catppuccinLatte.json'
import { focus } from './bright-extensions/extension'

import '../../../../public/assets/katex/katex.min.css'

export default async function Page({ params }: { 
  params: { slug: string } 
}) {
  const mdxFunctionBody = await compile(await fs.readFile(`./posts/${params.slug}.mdx`), {
    //@ts-ignore
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath],
    outputFormat: 'function-body',
    development: false
  })

  const code = String(mdxFunctionBody)
  const { default: Content } = await run(code, runtime)

  Code.theme = {
    dark: 'dracula',
    light: catppuccinLatte
  }
  Code.style = { overflow: 'scroll' }
  Code.extensions = [focus];

  return <Content components={{ img: MDXImage, pre: Code, Note: MDXNote, Table: MDXTable }} />
}
