import { defineConfig } from 'vite';
import htmlInject from 'vite-plugin-html-inject';
import { resolve } from 'path';
import markdownBlogPlugin from './src/js/md.js';

export default defineConfig({
    plugins: [
        htmlInject(),
        markdownBlogPlugin()
    ],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                notfound: resolve(__dirname, '404.html'),
                blog: resolve(__dirname, 'words/index.html'),
            },
        },
    },
    server: {
        open: true,
    },
});
