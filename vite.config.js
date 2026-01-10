import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath } from 'url';
import path from 'path';

// Fix untuk __dirname di ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [
        react(),
        svgr()
    ],
    base: '/',
    resolve: {
        alias: {
            // Menggunakan resolve agar path lebih absolut dan aman
            '@': path.resolve(__dirname, './src'),
        },
    },
    define: {
        // Tetap dipertahankan untuk kompatibilitas library legacy
        'process.env': {},
        'global': 'window',
    },
    css: {
        preprocessorOptions: {
            scss: {
                // 1. Tambahkan ini untuk menghilangkan Sass Deprecation Warning
                api: 'modern-compiler',
                // 2. Gunakan semicolon di akhir string additionalData
                additionalData: `@use "@/variables.scss" as *;`
            },
        },
    },
    server: {
        port: 3000,
        open: true,
        // Penting: Agar bisa diakses dari device lain (mobile testing)
        host: true,
    },
    build: {
        // Optimasi output build
        outDir: 'build',
        sourcemap: false,
        // Memecah chunk agar file vendor tidak terlalu besar
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'framer-motion'],
                },
            },
        },
    },
});