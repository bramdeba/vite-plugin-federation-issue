/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  cacheDir: '../../node_modules/.vite/remote',

  server: {
    port: 8000,
    host: 'localhost',
  },

  preview: {
    port: 8080,
    host: 'localhost',
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
          './Button': path.join(__dirname, '/src/Button.tsx')
      },
      shared: ['react', 'react-dom']
    })
  ],
});
