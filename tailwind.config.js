/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          '.btn-twitter': {
            'background-color': '#1EA1F1',
            'border-color': '#1EA1F1',
          },
          '.btn-twitter:hover': {
            'background-color': '#1C96E1',
            'border-color': '#1C96E1',
          },
        },
      },
    ],
  },
}

