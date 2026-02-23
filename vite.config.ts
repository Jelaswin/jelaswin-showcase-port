import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
const repoBase = "/jelaswin-showcase-port/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? repoBase : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
