import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import svgLoader from "vite-svg-loader";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    svgLoader({
      svgoConfig: {
        plugins: [
          { name: "removeDimensions", active: true }  // Убирает width/height
        ]
      }
    })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@@': path.resolve(__dirname, './'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,   // скрывает warnings внутри node_modules
      }
    }
  },
  build: {
    target: "esnext",
    minify: "esbuild",

    rollupOptions: {
      output: {
        manualChunks: {
          vue: ["vue", "vue-router", "pinia"],    // ядро Vue отдельно
          aos: ["aos"],                            // отдельный чанк AOS
          bootstrap: ["bootstrap"],                // отдельно Bootstrap JS
        },
      },
    },

    // удаляем консоль и дебаг при билде
    sourcemap: false,
  },

  esbuild: {
    drop: ["console", "debugger"],
  },
})
