//element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//pina
import pinia from './store'

//router
import router from './router/index'

//vxe-table
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'


import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const Vue = createApp(App)
Vue.use(pinia)
Vue.use(router)
Vue.use(ElementPlus, {
  locale: zhCn,
})
Vue.use(VXETable)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    Vue.component(key, component)
  }
Vue.mount('#app')
