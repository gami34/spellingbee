module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      colors: {
        green: {
          light: "#41917be6",
          DEFAULT: "#354b46",
          dark: "#1E3D38",
        },
        yellowgreen: "#89bc08",
      },
      minWidth: {
        36: "9rem",
        44: "11rem",
        56: "14rem",
        60: "15rem",
        72: "18rem",
        80: "20rem",
        100: "30rem",
        120: "40rem",
      },
      minHeight: {
        36: "9rem",
        44: "11rem",
        56: "14rem",
        60: "15rem",
        72: "18rem",
        80: "20rem",
        100: "30rem",
        120: "40rem",
      },
      zIndex: {
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
