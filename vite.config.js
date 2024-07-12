import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MariamKhoKh.github.io/", // Add this line
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
