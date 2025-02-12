import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@scss/app.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@scss': '/src/assets/scss',
    }
  }
})
