// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif', 'Pixelify Sans', 'Figtree', 'Geologica'],
                'serif': ['Merriweather', 'serif'],
                'mono': ['Fira Code', 'monospace'],
            },
        },
    },
    plugins: [],
}
