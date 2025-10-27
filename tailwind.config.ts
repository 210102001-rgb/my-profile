import type { Config } from "tailwindcss";

const config: Config = { content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"], theme: { extend: { colors: { primary: "#4f46e5", accent: "#06b6d4" } } }, plugins: [] };

export default config;
