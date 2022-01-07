import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'element-plus/dist/index.css'
import './mock/index'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
