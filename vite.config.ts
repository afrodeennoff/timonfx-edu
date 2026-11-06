import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve('.'),
        }
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify(mode),
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true,
        target: 'esnext',
        cssCodeSplit: true,
        chunkSizeWarningLimit: 1200,
        rollupOptions: {
          input: {
            main: path.resolve('.', 'index.html'),
          },
          external: ['@google/genai'],
          output: {
            manualChunks: {
              'vendor-react': ['react', 'react-dom'],
              'vendor-motion': ['framer-motion'],
              'vendor-lenis': ['lenis']
            }
          }
        },
      }
    };
});