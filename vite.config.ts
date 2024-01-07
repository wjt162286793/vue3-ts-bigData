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
  server:{
    // cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    proxy:{
      '/api':{
        target:'http://localhost:3030/api',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')
      },
      '/newApi':{
        target:'http://localhost:3030/newApi',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/newApi/,'')
      }
    }
  }
})



