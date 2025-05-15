/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        quantico: ["Quantico", "sans-serif"],
      },
      colors: {
        "custom-gray": "rgba(159, 159, 159, 1)",
        "custom-yellow": "rgba(227, 191, 63, 1)",
        "custom-pink": "rgba(98, 4, 122, 1)",
        "circle-color":"rgba(112,0,140,1)"
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom right, rgba(112, 0, 140, 1) 46%, rgba(112, 0, 140, 0.7) 74%)",
      },
      opacity: {
        10: "0.05",
      },
      keyframes: {
        slideInY: {
          '0%': {
            transform: 'translateY(140px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideButton: {
          '0%': {
            transform: 'translateY(140px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        slideInY: 'slideInY 0.4s ease-out 0.1s forwards',
        slideButton: 'slideButton 0.3s ease-out 0.5s forwards',
      },
    },
  },
  plugins: [],
};
