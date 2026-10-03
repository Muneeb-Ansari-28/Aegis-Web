/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html', './src/**/*.{ts,tsx}'], theme: { extend: { colors: { aegis: { bg: '#070b12', raised: '#0c1220', surface: '#101828', border: '#1f2c47', accent: '#00e13a' } }, fontFamily: { display: ['Space Grotesk', 'sans-serif'], body: ['Inter', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] } } }, plugins: [] }
