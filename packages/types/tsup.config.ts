import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  outDir: 'dist',

  // clean: true,
  sourcemap: true,
  // splitting: true,
  // treeshake: true,
  // minify: true,
  // minifyIdentifiers: true,
  // minifySyntax: true,
  // minifyWhitespace: true,

  metafile: !!process.env.ANALYZE,
});
