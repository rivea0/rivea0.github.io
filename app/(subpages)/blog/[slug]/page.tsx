import fs from 'node:fs/promises';
import { compile } from '@mdx-js/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import EntryContent from '@components/entry-content';

import '../../../../public/assets/katex/katex.min.css';

export default async function Page({ params }: { params: { slug: string } }) {
  const mdxFunctionBody = await compile(
    await fs.readFile(`./posts/${params.slug}.mdx`),
    {
      //@ts-ignore
      rehypePlugins: [rehypeKatex],
      remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath],
      outputFormat: 'function-body',
      development: false,
    }
  );

  return <EntryContent mdxFunctionBody={mdxFunctionBody} />;
}
