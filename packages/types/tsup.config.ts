import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm", "iife"],
  outDir: "dist",

  clean: true,
  sourcemap: true,
  splitting: true,
  treeshake: true,

  minify: true,
  minifyIdentifiers: true,
  minifySyntax: true,
  minifyWhitespace: true,

  metafile: !!process.env.ANALYZE,
});
