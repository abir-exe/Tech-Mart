/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Enable dark mode
      darkMode: 'class',
    },
  },
  variants: {
    extend: {
      // Add 'dark' variant to text color, background color, or any other properties you want to customize for dark mode
      backgroundColor: ['dark'],
      textColor: ['dark'],
      // Add other variants as needed
    },
  },
  // ...

  plugins: [require("daisyui")],
}

