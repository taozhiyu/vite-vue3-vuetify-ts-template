import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import vuetify from "vite-plugin-vuetify";

import { visualizer } from "rollup-plugin-visualizer";
import cp from "vite-plugin-cp";

// https://vitejs.dev/config/
export default defineConfig({
  root: fileURLToPath(new URL("../", import.meta.url)),
  publicDir: fileURLToPath(new URL("../public", import.meta.url)),
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
      styles: { configFile: "./assets/vuetify.scss" },
    }),
    visualizer({
      open: true, //注意这里要设置为true，否则无效
      gzipSize: true,
      brotliSize: true,
      exclude: { file: "**\\/node_modules\\/**" },
      projectRoot: fileURLToPath(new URL("../../", import.meta.url)),
      sourcemap: false,
    }),
    cp({
      targets: [
        {
          src: "../../dist/src/index.html",
          dest: "../../dist/",
          rename: "index.html",
        },
      ],
      hook: "writeBundle",
      globbyOptions: {},
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("../", import.meta.url)),
    },
  },
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL("../index.html", import.meta.url)),
      },
    },
    outDir: fileURLToPath(new URL("../../dist/", import.meta.url)),
    emptyOutDir: true,
  },
});
