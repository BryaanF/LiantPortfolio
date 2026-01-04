/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Memindai semua file React di folder src
    ],
    theme: {
        extend: {
            colors: {
                // Daftarkan warna brand Anda di sini agar bisa dipanggil seperti 'text-brand-gold'
                'brand-gold': '#C5A059',
                'bg-dark': '#0a0a0a',
                'card-dark': '#151515',
            },
        },
    },
    plugins: [],
}