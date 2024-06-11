import { resolve } from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: { port: 3001 },
  plugins: [svgr(), cssInjectedByJsPlugin()],
  build: {
    target: 'es2022',
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'portfolio-filters',
      fileName: 'portfolio-filters',
    },
    rollupOptions: {
      output: {
        dir: resolve(__dirname, '../../dist'),
        format: 'cjs',
      },
    },
  },
  resolve: {
    alias: {
      '@styles': resolve(__dirname, '../../styles'),
    },
  },
});
