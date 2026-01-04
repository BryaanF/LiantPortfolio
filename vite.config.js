import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
    // Plugin svgr memungkinkan kamu import SVG sebagai komponen
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    define: {
        // Menipu library lama yang mencari variabel global Node.js
        'process.env': {},
        'global': 'window',
    },
    css: {
        preprocessorOptions: {
            scss: {
                // Cukup panggil file variables saja, modul sass:color 
                // sudah ditangani di dalam file tersebut.
                additionalData: `@use "@/variables.scss" as *;`
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});