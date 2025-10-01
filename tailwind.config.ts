import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/**/*.{js,ts,jsx,tsx,mdx}", // اگر پوشه src استفاده می‌کنی
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navbar: "#F8F9FA",
      },
      fontFamily: {
        iranSans: "--font-iran-sans",
        iranSansnumber: "--font-number-sans",
      },
      screens: {
        'mobile': '0px',
  
        'tablet': '376px',
  
        'laptop': '835px',
      },
    },
  },
  plugins: [],
};
export default config;
