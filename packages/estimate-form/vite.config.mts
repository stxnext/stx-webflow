import { resolve } from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import svgr from 'vite-plugin-svgr';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: { port: 3001 },
  plugins: [svgr(), cssInjectedByJsPlugin()],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'estimate-form',
      fileName: 'estimate-form',
    },
    rollupOptions: {
      output: {
        dir: resolve(__dirname, '../../dist'),
        format: 'iife',
      },
    },
  },
});
