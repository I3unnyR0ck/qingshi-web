import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F7F5F1",
          deep: "#EFEBE4",
        },
        mist: {
          DEFAULT: "#D9D4CC",
          soft: "#E8E4DC",
        },
        charcoal: {
          DEFAULT: "#3A3632",
          soft: "#5C5650",
          mute: "#8A847C",
        },
        wood: {
          DEFAULT: "#B8956C",
          deep: "#9A7A52",
          soft: "#D4B896",
        },
        cream: "#FFFEFB",
      },
      fontFamily: {
        sans: [
          '"Noto Sans TC"',
          '"PingFang TC"',
          '"Microsoft JhengHei"',
          "sans-serif",
        ],
      },
      maxWidth: {
        site: "1080px",
      },
      borderRadius: {
        qing: "4px",
      },
      letterSpacing: {
        brand: "0.28em",
        wide: "0.18em",
        wider: "0.22em",
        widest: "0.32em",
        hero: "0.42em",
      },
      transitionTimingFunction: {
        qing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
