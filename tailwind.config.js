/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins"],
      Nunito: ["Nunito"],
    },
    extend: {
      colors: {
        "medus-white-100": "#FDFFFF",
        "medus-grey-100": "#E8E8E8",
        "medus-aqua-100": "#00D6C1",
        "medus-lemon-100": "#C9FB02",
        "medus-blue-100": "#005999",
        "medus-darkblue-100": "#002858",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
