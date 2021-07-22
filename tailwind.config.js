module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Halifax-Regular", "sans-serif"],
        serif: ["Bastia-Bold", "serif"],
        outline: ["Bastia-BoldOutline", "serif"],
      },
      colors: {
        brown: {
          50: "#fbfaf9",
          100: "#f6f4f2",
          200: "#e9e4e0",
          300: "#dcd4cd",
          400: "#c1b3a7",
          500: "#A79381",
          600: "#968474",
          700: "#7d6e61",
          800: "#64584d",
          900: "#52483f",
        },
        cloud: {
          50: "#fdfcfc",
          100: "#fafafa",
          200: "#f4f2f2",
          300: "#edeae9",
          400: "#dfdad9",
          500: "#D1CAC9",
          600: "#bcb6b5",
          700: "#9d9897",
          800: "#7d7979",
          900: "#666362",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
