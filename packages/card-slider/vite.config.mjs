import { resolve } from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: { port: 3001 },
  plugins: [svgr(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'card-slider',
      fileName: 'card-slider',
    },
    rollupOptions: {
      output: {
        dir: resolve(__dirname, '../../dist'),
        format: 'cjs',
      },
    },
  },
});
