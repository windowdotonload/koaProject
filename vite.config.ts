import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//@ts-ignore
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    port: 8088,
    proxy: {},
  },
  resolve: {
    alias: {
      //@ts-ignore
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [vue()],
});
