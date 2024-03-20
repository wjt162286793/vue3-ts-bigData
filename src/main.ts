import App from './App.vue'
const Vue = createApp(App)
import './style.css'

//element-plus
import 'element-plus/dist/index.css'
import {componentList} from '@/utils/use_element_plus.ts'
componentList.forEach(item=>{
    Vue.component(item.name, item.element)
})

//编辑器
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'

//router
import router from './router/index'

Vue.use(Editor)
Vue.use(Toolbar)
Vue.use(router)
Vue.mount('#app')
