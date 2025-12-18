import { defineConfig } from 'vite';
import htmlInject from 'vite-plugin-html-inject';
import { resolve } from 'path';

export default defineConfig({
    plugins: [htmlInject()],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                notfound: resolve(__dirname, '404.html'),
                modo: resolve(__dirname, 'websites/modo.html'),
                lacadena: resolve(__dirname, 'websites/la-cadena.html'),
            },
        },
    },
    server: {
        open: true,
    },
});
