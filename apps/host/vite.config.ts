/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  cacheDir: '../../node_modules/.vite/host',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
    federation({
      name: 'host-app',
      remotes: {
          remote_app: "http://localhost:8080/assets/remoteEntry.js",
      },
      shared: ['react', 'react-dom']
    })
  ],
});
