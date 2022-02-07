module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: "#FBFDF7",
        neutral_var: "#E7F2E8",
        primary: "#15B75A",
        primary_light: "rgba(21, 183, 90, 0.2)",
        primary_grad: "#47D47E",
        secondary: "#515151",
      },
    },
  },
  plugins: [],
};
