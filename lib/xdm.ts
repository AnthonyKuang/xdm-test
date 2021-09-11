import { join } from 'path';
import { readFileSync } from 'fs';
import { compile } from 'xdm';

const root = process.cwd();

export const returnMDXString = async () => {
  const mdxPath = join(root, 'posts', 'post.mdx');
  const compiledMDXString = await compile(readFileSync(mdxPath));
  return compiledMDXString;
};
