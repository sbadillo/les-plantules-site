/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    colors: {
      "plantule-light": "#FBFCF5",
      "plantule-green": "#83E1B6",
      "plantule-blue": "#CCE8F0",
      "plantule-red": "#FFB39B",
    },
  },
  plugins: [require("flowbite/plugin")],
};
