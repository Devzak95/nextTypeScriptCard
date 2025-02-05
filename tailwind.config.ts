import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "whatwedo-bg-blue": "#abcfe6",
        "maintainable-bg-blue": "#bfddef",
        "getintouch-bg-orange": "#ffb472",
        "whatwedo-title-dark-blue": "rgb(21,53,76)",
        "maintainable-title-blue": "rgb(84,128,156)",
        "getintouch-title-orange": "rgb(183,112,55)",
        "black-rgba": "rgba(0, 0, 0, 0.54)",
      },
    },
  },
  plugins: [],
} satisfies Config;
