import type { Config } from "tailwindcss";

// Tailwind CSS v4 uses CSS-based configuration via @theme in globals.css
// This config file is kept for compatibility but theme is defined in globals.css
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
