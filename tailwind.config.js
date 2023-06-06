/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

   // daisyUI config (optional - here are the default values)
   daisyui: {
    themes: ["light"],
  },
}

