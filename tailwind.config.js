/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Memindai semua file React di folder src
    ],
    theme: {
        extend: {
            colors: {
                /* Brand gold — harus sama dengan $brand-gold di variables.scss (#a1902e) */
                'brand-gold': '#a1902e',
                'bg-dark': '#0a0a0a',
                'card-dark': '#151515',
            },
        },
    },
    plugins: [],
}