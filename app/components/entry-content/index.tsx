import * as runtime from 'react/jsx-runtime';
import { run } from '@mdx-js/mdx';
import { Code } from 'bright';
import { MDXImage } from '@components/mdx-image';
import { MDXNote } from '@components/mdx-note';
import { MDXTable } from '@components/mdx-table';
import catppuccinLatte from './bright-themes/catppuccinLatte.json';
import draculaUpdated from './bright-themes/draculaUpdated.json';
import { copyCode, focus, titleBar } from './bright-extensions/extension';
import type { VFile } from '@mdx-js/mdx/lib/compile';
import MDXExercise from '@components/mdx-exercise';

export default async function EntryContent({
  mdxFunctionBody,
}: {
  mdxFunctionBody: VFile;
}) {
  const code = String(mdxFunctionBody);
  const { default: Content } = await run(code, runtime);

  Code.theme = {
    dark: draculaUpdated,
    light: catppuccinLatte,
  };
  Code.style = { overflow: 'scroll' };
  Code.extensions = [focus, copyCode, titleBar];

  return (
    <Content
      components={{
        img: MDXImage,
        pre: Code,
        Note: MDXNote,
        Table: MDXTable,
        Exercise: MDXExercise,
        Code: Code,
      }}
    />
  );
}
