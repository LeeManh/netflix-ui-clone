/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nav: "#0a0a0a",
        text: "#fff",
        body: "#141414",
        red: "#e40814",
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
