import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: "5000",
    strictPort: true,
    host: true,
    origin: "http:0.0.0.0:5000",
    allowedHosts: true,
  },
});
