/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "var(--primary-1)",
          2: "var(--primary-2)",
          3: "var(--primary-3)",
        },
        secondary: {
          1: "var(--secondary-1)",
          2: "var(--secondary-2)",
          3: "var(--secondary-3)",
        },
      },
    },
  },
  plugins: [],
};
