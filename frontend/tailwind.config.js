module.exports = {
  content: [
    "./public/**/*.{html,ico,svg}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.css",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
