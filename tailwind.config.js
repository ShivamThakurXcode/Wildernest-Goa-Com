/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f9f5",
          100: "#ccf3eb",
          200: "#99e8d6",
          300: "#66dcc2",
          400: "#33d1ad",
          500: "#00c599", // primary brand color
          600: "#009e7a",
          700: "#00765c",
          800: "#004f3d",
          900: "#00271f",
        },
        secondary: {
          50: "#e6f1ff",
          100: "#cce3ff",
          200: "#99c8ff",
          300: "#66acff",
          400: "#3391ff",
          500: "#0075ff", // secondary brand color
          600: "#005ecc",
          700: "#004699",
          800: "#002f66",
          900: "#001733",
        },
        accent: {
          50: "#fff3e6",
          100: "#ffe8cc",
          200: "#ffd199",
          300: "#ffba66",
          400: "#ffa333",
          500: "#ff8c00", // accent brand color
          600: "#cc7000",
          700: "#995400",
          800: "#663800",
          900: "#331c00",
        },
        success: {
          50: "#e7f9e7",
          100: "#cff3cf",
          200: "#9fe89f",
          300: "#6fdc6f",
          400: "#3fd13f",
          500: "#10c610",
          600: "#0d9e0d",
          700: "#0a770a",
          800: "#064f06",
          900: "#032803",
        },
        warning: {
          50: "#fff9e6",
          100: "#fff3cc",
          200: "#ffe799",
          300: "#ffdb66",
          400: "#ffcf33",
          500: "#ffc300",
          600: "#cc9c00",
          700: "#997500",
          800: "#664e00",
          900: "#332700",
        },
        error: {
          50: "#fde9e9",
          100: "#fbd3d3",
          200: "#f7a6a6",
          300: "#f37a7a",
          400: "#ef4d4d",
          500: "#eb2121",
          600: "#bc1a1a",
          700: "#8d1414",
          800: "#5e0d0d",
          900: "#2f0707",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ['"Space Grotesk"', "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 197, 153, 0.3)",
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #00c599, #0075ff)",
        "gradient-secondary": "linear-gradient(to right, #0075ff, #ff8c00)",
        "hero-pattern":
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
