import App from './App.vue'
import './style.css'

import router from './router/index'

const Vue = createApp(App)
Vue.use(router)
Vue.mount('#app')
