import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
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
