/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:'1320px'
      },
      fontFamily: {
        'heading': ['Song Myung', 'serif'],
        'paragraph': ['Josefin Sans', 'sans-serif']
      },
      backgroundImage: {
        'banner': "url('src/assets/banner.jpg')",
        'banner2': "url('src/assets/oshomoy.webp')",
      }
    },
  },
  plugins: [],
}

