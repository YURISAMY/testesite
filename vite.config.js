import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/testesite/",
  server: {
    watch: {
      usePolling: true,
    },
    cors: false, // Habilita CORS
  },
  resolve: {
    alias: {
      styles: './src/theme/styles.js',
    },
  },
});