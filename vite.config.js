import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables" as *;`, // Load variables globally
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 5173,
  },
  build: {
    outDir: "dist",
  },
  base: "/",
});
