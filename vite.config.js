import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Helper to recursively find all HTML files for Vite Multi-Page Build
function getHtmlEntries(dir = import.meta.dirname, entries = {}) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (['node_modules', 'dist', '.git', 'scratch', 'brain'].includes(file.name)) continue;
    const fullPath = resolve(dir, file.name);
    if (file.isDirectory()) {
      getHtmlEntries(fullPath, entries);
    } else if (file.name.endsWith('.html')) {
      // Entry key relative to root
      const relPath = fullPath.replace(import.meta.dirname + '/', '');
      const key = relPath.replace(/\.html$/, '').replace(/\//g, '_');
      entries[key] = fullPath;
    }
  }
  return entries;
}

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 5180,
    strictPort: true,
    host: true
  },
  preview: {
    port: 4180,
    strictPort: true,
    host: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlEntries()
    }
  }
});
