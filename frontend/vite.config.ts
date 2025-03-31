import { defineConfig } from "vite";
import vuetify from "vite-plugin-vuetify";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',  
    port: 5173,       
    strictPort: true, 
    hmr: {
      host: 'localhost',  
      port: 5173,
    },
  },
});
