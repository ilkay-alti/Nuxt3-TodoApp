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
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        purple: "#8284FA",
        purpleDark: "#5E60CE",
        blue: "#4EA8DE",
        blueDark: "#1E6F9F",
        gray: {
          700: "#0D0D0D",
          600: "#1A1A1A",
          500: "#262626",
          400: "#333333",
          300: "#808080",
          200: "#D9D9D9",
          100: "#F2F2F2",
        },
        danger: "#E25858",
      },
    },
  },
};
