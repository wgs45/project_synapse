import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // This is a shortcut for 0.0.0.0 in Vite
    port: 3000,
    strictPort: true, // Keeps the port consistent for Docker
    watch: {
      usePolling: true, // Essential for some Docker setups on Windows/Mac to detect file changes
    },
  },
});
