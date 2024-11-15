/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorA: "#0d6dff",
      },
      fontFamily: {
        head1: ["Grey Qo"],
      },
    },
  },
  plugins: [],
};
