/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'
import { peerDependencies } from './package.json'

export default defineConfig({
  build: {
    minify: false,
    commonjsOptions: {
      esmExternals: true,
    },
    lib: {
      entry: path.resolve(__dirname, './src/entry.js'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
      ],
      output: {
        exports: 'named',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    dts({
      cleanVueFileName: true,
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'test.config.js',
    coverage: {
      enabled: true,
      reporter: ['lcovonly', 'text-summary']
    },
    reporters: ['default'],
  },
})
