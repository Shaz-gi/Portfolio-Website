import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      conainer: {
        center: true,
        padding: "15px"
      },
      colors: {
       accent: "#08EP5E"
      },
    },
  },
  plugins: [],
};
export default config;