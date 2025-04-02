/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true, // Centers the container
      screens: {
        xl: "1024px", // Set max-width 1024px for screen size 1280px and above
        "2xl": "1024px", // Ensure 1024px max-width for larger screens too
      },
    },
    extend: {},
  },
  plugins: [],
};
