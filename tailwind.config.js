/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'custom-width': '300px', // Add your custom width
      },
    },
    options: {
      important: true,
    },
  },
  plugins: [],
}

