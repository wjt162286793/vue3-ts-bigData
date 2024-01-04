import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
     //自动引入
    AutoImport({
      imports:['vue','vue-router'],
      dts:'src/auto-import.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})



