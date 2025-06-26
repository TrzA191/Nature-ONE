import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B8E23',     // azul, por ejemplo
        secondary: '#64748b',
        foreground: '#111827',  // color principal de texto
      },
    },
  },
  plugins: [],
};

export default config;
