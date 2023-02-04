/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": '#081A51',
        "light-white": 'rgba(255, 255, 255, 0.18)' // space matters between numbers
      }
    },
  },
  plugins: [],
}
