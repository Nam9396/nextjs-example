/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        "text": "#292929",
        "a": "#2C74B3",
        "a_hover": "#FF597B",
        "shadow": "#B2B2B2",
        "light_purple": "#EEF1FF",
        "bold_purple": "#916BBF",
        "light_blue": "#f2fafc",
        "medium_blue": "#5484ab",
        "bold_blue": "#005691",
      },
      boxShadow: {
        "nav": "0px 15px 10px -15px #B2B2B2",
        "card": "rgba(0, 0, 0, 0.24) 0px 3px 8px", 
        "footer": "",
      }
    },
  },
  plugins: [],
}
