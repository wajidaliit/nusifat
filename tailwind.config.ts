import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  basePath: "/home/",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-dual":
          "8px 8px 15px rgba(0, 0, 0, 0.15), -8px -8px 15px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        "ferrari-red": "#E90000",
        "cool-grey": "#A2A3A4",
        platinum: "#E8E8E8",
        gondola: "#171717",
        water: "#F2F3F5",
        elephant: "#102D3D",
        "peach-yellow": "#FFDBA6",
        "papaya-orange": "#F26522",
        "heavy-metal": "#262626",
      },
    },
  },
};
export default config;
